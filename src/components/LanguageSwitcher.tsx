import { type JSX } from 'react'
import type { Language } from '../i18n/translations'

interface Props {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
}

const LanguageSwitcher = ({ currentLang, onLanguageChange }: Props): JSX.Element => {
  return (
    <div className="lang-switcher" aria-label="Language / Langue / اللغة">
      <button
        className={currentLang === 'fr' ? 'active' : ''}
        onClick={() => onLanguageChange('fr')}
        aria-pressed={currentLang === 'fr'}
        type="button"
      >
        FR
      </button>
      <button
        className={currentLang === 'en' ? 'active' : ''}
        onClick={() => onLanguageChange('en')}
        aria-pressed={currentLang === 'en'}
        type="button"
      >
        EN
      </button>
      <button
        className={currentLang === 'ar' ? 'active' : ''}
        onClick={() => onLanguageChange('ar')}
        aria-pressed={currentLang === 'ar'}
        type="button"
      >
        العربية
      </button>
    </div>
  )
}

export default LanguageSwitcher
