import { createSignal } from 'solid-js';

import { render } from 'solid-js/web';

import { defaultConfig } from '@/config/defaults';
import { getSongMenu } from '@/providers/dom-elements';
import { getSongInfo } from '@/providers/song-info-front';
import { t } from '@/i18n';
import {
  isAlbumOrPlaylist,
  isMusicOrVideoTrack,
} from '@/plugins/utils/renderer/check';

import { DownloadButton } from './templates/download';

import type { RendererContext } from '@/types/contexts';
import type { DownloaderPluginConfig } from './index';

let download: () => void;

const [downloadButtonText, setDownloadButtonText] = createSignal<string>('');

let buttonContainer: HTMLDivElement | null = null;

export const onRendererLoad = async ({
  getConfig,
  setConfig,
}: RendererContext<DownloaderPluginConfig>) => {
  const config = await getConfig();

  download = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    const { url } = songInfo;

    if (isMusicOrVideoTrack(songInfo)) {
      downloadSong(url);
    } else if (isAlbumOrPlaylist(songInfo)) {
      downloadPlaylist(url);
    }
  };

  const downloadSong = async (url: string) => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    const { url } = songInfo;

    try {
      const response = await fetch(
        `peard:download-song-request?${encodeURIComponent(url)}`,
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error downloading song:', error);
    }
  };

  const downloadPlaylist = async (url: string) => {
    try {
      const response = await fetch(
        `peard:download-playlist-request?${encodeURIComponent(url)}`,
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error downloading playlist:', error);
    }
  };

  const downloadArtist = async (url: string) => {
    try {
      const response = await fetch(
        `peard:download-artist-request?${encodeURIComponent(url)}`,
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error downloading artist:', error);
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const isArtist = (songInfo: any) => {
    return songInfo?.type === 'artist';
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-artist'));
    }
  };

  const updateDownloadButtonText = () => {
    const songInfo = getSongInfo();
    if (!songInfo) return;

    if (isMusicOrVideoTrack(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-song'));
    } else if (isAlbumOrPlaylist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-playlist'));
    } else if (isArtist(songInfo)) {
      setDownloadButtonText(t('plugins.downloader2.menu.download-