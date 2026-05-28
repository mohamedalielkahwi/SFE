import { useState, useRef, useEffect, type JSX } from 'react'
import translations from '../i18n/translations'
import type { Language } from '../i18n/translations'
import LanguageSwitcher from './LanguageSwitcher'

const OrnamentDivider = (): JSX.Element => (
  <div className="divider" aria-hidden="true">
    <svg
      width="240"
      height="20"
      viewBox="0 0 240 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="10" x2="113" y2="10" stroke="#c9a84c" strokeWidth="0.75" />
      <polygon
        points="120,5 127,10 120,15 113,10"
        fill="none"
        stroke="#c9a84c"
        strokeWidth="0.75"
      />
      <line x1="127" y1="10" x2="240" y2="10" stroke="#c9a84c" strokeWidth="0.75" />
    </svg>
  </div>
)

const InvitationPage = (): JSX.Element => {
  const [lang, setLang] = useState<Language>('fr')
  const [transitioning, setTransitioning] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleLanguageChange = (newLang: Language): void => {
    if (newLang === lang) return
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current)
    setTransitioning(true)
    timeoutRef.current = setTimeout(() => {
      setLang(newLang)
      setTransitioning(false)
    }, 150)
  }

  const t = translations[lang]

  return (
    <div className="invitation-root" dir={lang === 'ar' ? 'rtl' : 'ltr'}>

      {/* Top bar sits outside page-content so it stays visible during language transition */}
      <div className="top-bar">
        <LanguageSwitcher currentLang={lang} onLanguageChange={handleLanguageChange} />
      </div>

      <div className={`page-content${transitioning ? ' transitioning' : ''}`}>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero">
          <p className="hero-label">{t.sectionLabel}</p>

          <div className="photo-frame">
            <img src="/MohamedAliElKahwi.png" alt={t.fullName} className="photo-img" />
            {/* <div className="photo-placeholder" aria-hidden="true">
              <span className="camera-icon">📷</span>
              <span className="photo-text">Photo</span>
            </div> */}
          </div>

          <h1 className="hero-name">{t.fullName}</h1>
          <p className="hero-tagline">{t.tagline}</p>
        </section>

        <OrnamentDivider />

        {/* ── EVENT DETAILS ────────────────────────────────────────────── */}
        <section className="section">
          <h2 className="section-title">{t.detailsTitle}</h2>

          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <span className="detail-label">{t.detailDateLabel}</span>
              {/* TODO: replace placeholder with actual date, e.g. "15 Juin 2025" */}
              <span className="detail-value">
                <span className="placeholder">9 juin 2026</span>
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-icon">🕐</span>
              <span className="detail-label">{t.detailTimeLabel}</span>
              {/* TODO: replace placeholder with actual time, e.g. "10:00" */}
              <span className="detail-value">
                <span className="placeholder">10:00</span>
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <span className="detail-label">{t.detailLocationLabel}</span>
              <span className="detail-value">ISSAT Sousse</span>
            </div>

            <div className="detail-item">
              <span className="detail-icon">🏫</span>
              <span className="detail-label">{t.detailRoomLabel}</span>
              {/* TODO: replace placeholder with actual room, e.g. "Salle A1" */}
              <span className="detail-value">
                <span className="placeholder">Salle amphithéâtre</span>
              </span>
            </div>
          </div>

          <div className="map-wrapper">
            <iframe
              title="ISSAT Sousse — Emplacement sur la carte"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d779!2d10.6383081!3d35.8124921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302756a7452317b%3A0xfe8bdcb107b21c72!2sInstitut%20Sup%C3%A9rieur%20des%20Sciences%20Appliqu%C3%A9es%20et%20de%20Technologie%20de%20Sousse!5e0!3m2!1sfr!2stn!4v1700000000000"
              width="100%"
              height="340"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, display: 'block' }}
            />
            {/* Transparent overlay — clicking anywhere on the map opens Google Maps navigation */}
            <a
              className="map-overlay"
              href="https://maps.app.goo.gl/5whFPnouE2QtVJSLA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.openInMaps}
            >
              <span className="map-overlay-label">{t.openInMaps} ↗</span>
            </a>
          </div>

          <p className="map-address">{t.address}</p>
        </section>

        <OrnamentDivider />

        {/* ── INVITATION MESSAGE ───────────────────────────────────────── */}
        <section className="section">
          <h2 className="section-title">{t.messageTitle}</h2>
          <div className="message-body">
            <span className="quote-mark" aria-hidden="true">&#8220;</span>
            <p className="message-text">{t.invitationMessage}</p>
            <span className="quote-mark" aria-hidden="true">&#8221;</span>
          </div>
        </section>

        <OrnamentDivider />

        {/* ── NAVIGATION VIDEO ─────────────────────────────────────────── */}
        <section className="section">
          <h2 className="section-title">{t.howToFindTitle}</h2>
          <p className="video-subtitle">{t.videoSubtitle}</p>

          {/* <video
              src="/guide.mp4"
              controls
              style={{ width: '100%', borderRadius: '16px' }}
            >
              <track
                kind="captions"
                src="/guide-captions.vtt"
                srcLang="en"
                label="English captions"
                default
              />
            </video> */}
          <div className="video-placeholder" aria-label={t.videoPlaceholderText}>
            <span className="video-play-icon" aria-hidden="true">&#9654;</span>
            <span className="video-placeholder-text">{t.videoPlaceholderText}</span>
          </div>
        </section>

        <OrnamentDivider />

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <footer className="footer">
          <p className="footer-quote">{t.footerLine}</p>
        </footer>

      </div>
    </div>
  )
}

export default InvitationPage
