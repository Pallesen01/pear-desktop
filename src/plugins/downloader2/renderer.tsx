import { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';

import { t } from '@/i18n';

import './styles.css';

export const onRender = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    ipcRenderer.on('peard:video-src-changed', (event, data) => {
      setUrl(data.microformat.microformatDataRenderer.urlCanonical);
    });
  }, []);

  return (
    <div className="peard-downloader">
      <div className="peard-downloader__header">
        <h1>{t('plugins.downloader.renderer.title')}</h1>
      </div>

      <div className="peard-downloader__content">
        <div className="peard-downloader__input-group">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={t('plugins.downloader.renderer.input.placeholder')}
          />
          <button
            onClick={() => {
              ipcRenderer.send('download-song', url);
            }}
          >
            {t('plugins.downloader.renderer.button.download-song')}
          </button>
        </div>

        <div className="peard-downloader__input-group">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={t('plugins.downloader.renderer.input.placeholder')}
          />
          <button
            onClick={() => {
              ipcRenderer.send('download-playlist-request', url);
            }}
          >
            {t('plugins.downloader.renderer.button.download-playlist')}
          </button>
        </div>

        <div className="peard-downloader__input-group">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={t('plugins.downloader.renderer.input.placeholder')}
          />
          <button
            onClick={() => {
              ipcRenderer.send('download-artist-request', url);
            }}
          >
            {t('plugins.downloader.renderer.button.download-artist')}
          </button>
        </div>
      </div>
    </div>
  );
};
