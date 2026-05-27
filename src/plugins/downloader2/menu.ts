import { dialog } from 'electron';
import prompt from 'custom-electron-prompt';
import { deepmerge } from 'deepmerge-ts';

import { downloadPlaylist } from './main';
import { getFolder } from './main/utils';
import { DefaultPresetList } from './types';

import { t } from '@/i18n';

import promptOptions from '@/providers/prompt-options';

import { type DownloaderPluginConfig, defaultConfig } from './index';

import type { MenuContext } from '@/types/contexts';
import type { MenuTemplate } from '@/menu';

export const onMenu = async ({
  getConfig,
  setConfig,
}: MenuContext<DownloaderPluginConfig>): Promise<MenuTemplate> => {
  const config = await getConfig();

  return [
    {
      label: t('plugins.downloader2.menu.download-finish-settings.label'),
      type: 'submenu',
      submenu: [
        {
          label: t(
            'plugins.downloader2.menu.download-finish-settings.submenu.enabled',
          ),
          type: 'checkbox',
          checked: config.downloadOnFinish?.enabled ?? false,
          click(item) {
            setConfig({
              downloadOnFinish: {
                ...deepmerge(
                  defaultConfig.downloadOnFinish,
                  config.downloadOnFinish,
                ),
                enabled: item.checked,
              },
            });
          },
        },
        {
          type: 'separator',
        },
        {
          label: t('plugins.downloader2.menu.choose-download-folder'),
          click() {
            const result = dialog.showOpenDialogSync({
              properties: ['openDirectory', 'createDirectory'],
              defaultPath: getFolder(
                config.downloadOnFinish?.folder ?? config.downloadFolder,
              ),
            });
            if (result) {
              setConfig({
                downloadOnFinish: {
                  ...deepmerge(
                    defaultConfig.downloadOnFinish,
                    config.downloadOnFinish,
                  ),
                  folder: result[0],
                },
              });
            }
          },
        },
        {
          label: t(
            'plugins.downloader2.menu.download-finish-settings.submenu.mode',
          ),
          type: 'submenu',
          submenu: [
            {
              label: t(
                'plugins.downloader2.menu.download-finish-settings.submenu.seconds',
              ),
              type: 'radio',
              checked: config.downloadOnFinish?.mode === 'seconds',
              click() {
                setConfig({
                  downloadOnFinish: {
                    ...deepmerge(
                      defaultConfig.downloadOnFinish,
                      config.downloadOnFinish,
                    ),
                    mode: 'seconds',
                  },
                });
              },
            },
            {
              label: t(
                'plugins.downloader2.menu.download-finish-settings.submenu.percent',
              ),
              type: 'radio',
              checked: config.downloadOnFinish?.mode === 'percent',
              click() {
                setConfig({
                  downloadOnFinish: {
                    ...deepmerge(
                      defaultConfig.downloadOnFinish,
                      config.downloadOnFinish,
                    ),
                    mode: 'percent',
                  },
                });
              },
            },
          ],
        },
        {
          label: t(
            'plugins.downloader2.menu.download-finish-settings.submenu.advanced',
          ),
          async click() {
            const res = await prompt({
              title: t(
                'plugins.downloader2.menu.download-finish-settings.prompt.title',
              ),
              type: 'multiInput',
              multiInputOptions: [
                {
                  label: t(
                    'plugins.downloader2.menu.download-finish-settings.prompt.last-seconds',
                  ),
                  inputAttrs: {
                    type: 'number',
                    required: true,
                    min: '0',
                    step: '1',
                  },
                  value:
                    config.downloadOnFinish?.seconds ??
                    defaultConfig.downloadOnFinish!.seconds,
                },
                {
                  label: t(
                    'plugins.downloader2.menu.download-finish-settings.prompt.last-percent',
                  ),
                  inputAttrs: {
                    type: 'number',
                    required: true,
                    min: '1',
                    max: '100',
                    step: '1',
                  },
                  value:
                    config.downloadOnFinish?.percent ??
                    defaultConfig.downloadOnFinish!.percent,
                },
              ],
              ...promptOptions(),
              height: 240,
              resizable: true,
            }).catch(console.error);

            if (!res) {
              return undefined;
            }

            setConfig({
              downloadOnFinish: {
                ...deepmerge(
                  defaultConfig.downloadOnFinish,
                  config.downloadOnFinish,
                ),
                seconds: Number(res[0]),
                percent: Number(res[1]),
              },
            });
            return;
          },
        },
      ],
    },

    {
      label: t('plugins.downloader2.menu.download-playlist'),
      click: () => downloadPlaylist(),
    },
    {
      label: t('plugins.downloader2.menu.download-artist'),
      click: () => downloadArtist(),
    },
    {
      label: t('plugins.downloader2.menu.choose-download-folder'),
      click() {
        const result = dialog.showOpenDialogSync({
          properties: ['openDirectory', 'createDirectory'],
          defaultPath: getFolder(config.downloadFolder ?? ''),
        });
        if (result) {
          setConfig({ downloadFolder: result[0] });
        } // Else = user pressed cancel
      },
    },
    {
      label: t('plugins.downloader2.menu.presets'),
      submenu: Object.keys(DefaultPresetList).map((preset) => ({
        label: preset,
        type: 'radio',
        checked: config.selectedPreset === preset,
        click() {
          setConfig({ selectedPreset: preset });
        },
      })),
    },
    {
      label: t('plugins.downloader2.menu.skip-existing'),
      type: 'checkbox',
      checked: config.skipExisting,
      click(item) {
        setConfig({ skipExisting: item.checked });
      },
    },
  ];
};

async function downloadArtist() {
  const win = BrowserWindow.getFocusedWindow();
  if (!win) return;

  const url = win.webContents.getURL();
  
  try {
    // Extract artist ID from URL
    const artistIdMatch = url.match(/\/artist\/([^\/]+)/);
    if (!artistIdMatch) {
      // Try to get from page content
      const ytMusicApp = document.querySelector('ytmusic-app');
      if (ytMusicApp) {
        const artistInfo = await ytMusicApp.getOption('artist', 'info');
        if (artistInfo) {
          const artistId = artistInfo.id;
          const artistName = artistInfo.name;
          
          // Get all tracks from artist
          const tracks = await ytMusicApp.getOption('artist', 'tracks');
          
          if (tracks && tracks.length > 0) {
            const folder = getFolder(config.downloadFolder ?? '');
            const artistFolder = `${folder}/${artistName}`;
            
            if (!config.skipExisting && require('fs').existsSync(artistFolder)) {
              dialog.showMessageBox(win, {
                type: 'question',
                buttons: [
                  t('plugins.downloader2.menu.download-artist.buttons.overwrite'),
                  t('plugins.downloader2.menu.download-artist.buttons.cancel'),
                ],
                title: t('plugins.downloader2.menu.download-artist.title'),
                message: t('plugins.downloader2.menu.download-artist.message', {
                  artistName,
                  trackCount: tracks.length,
                }),
                defaultId: 0,
                cancelId: 1,
              });
              return;
            }
            
            // Download all tracks
            for (const track of tracks) {
              await downloadSongFromId(track.id, artistFolder, track.index);
            }
            
            dialog.showMessageBox(win, {
              type: 'info',
              buttons: [t('plugins.downloader2.menu.download-artist.buttons.done')],
              title: t('plugins.downloader2.menu.download-artist.title'),
              message: t('plugins.downloader2.menu.download-artist.success', {
                artistName,
                trackCount: tracks.length,
              }),
            });
          }
        }
      }
    }
  } catch (error) {
    console.error('Error downloading artist tracks:', error);
  }
}
