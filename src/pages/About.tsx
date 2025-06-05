import { useI18n } from '../utils/i18n'

export function About() {
  const { t } = useI18n()
  
  return (
    <div class="about">
      <section class="hero-section section">
        <div class="container">
          <div class="text-center">
            <h1 class="fade-in">{t('about.hero.title')}</h1>
            <p class="text-large fade-in">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section class="story-section section section-alt">
        <div class="container">
          <div class="story-content">
            <div class="story-text fade-in">
              <h2>{t('about.story.title')}</h2>
              <p>
                {t('about.story.paragraph1')}
              </p>
              <p>
                {t('about.story.paragraph2')}
              </p>
              <p>
                {t('about.story.paragraph3')}
              </p>
            </div>
            <div class="story-image fade-in">
              <div class="image-placeholder">
                Kautivo Founders in Modern Office
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mission-section section">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('about.mission.title')}</h2>
            <p class="text-large fade-in">
              {t('about.mission.subtitle')}
            </p>
          </div>
          
          <div class="grid grid-3 fade-in">
            <div class="value-card card">
              <h3>{t('about.mission.purposeBuilt.title')}</h3>
              <p>{t('about.mission.purposeBuilt.description')}</p>
            </div>
            
            <div class="value-card card">
              <h3>{t('about.mission.partnership.title')}</h3>
              <p>{t('about.mission.partnership.description')}</p>
            </div>
            
            <div class="value-card card">
              <h3>{t('about.mission.growth.title')}</h3>
              <p>{t('about.mission.growth.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="team-section section section-alt">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('about.team.title')}</h2>
            <p class="fade-in">{t('about.team.subtitle')}</p>
          </div>
          
          <div class="grid grid-3 fade-in">
            <div class="team-member card">
              <div class="member-image">
                <div class="image-placeholder">{t('about.team.sarah.name')}</div>
              </div>
              <h3>{t('about.team.sarah.name')}</h3>
              <p class="member-title">{t('about.team.sarah.title')}</p>
              <p>{t('about.team.sarah.description')}</p>
            </div>
            
            <div class="team-member card">
              <div class="member-image">
                <div class="image-placeholder">{t('about.team.michael.name')}</div>
              </div>
              <h3>{t('about.team.michael.name')}</h3>
              <p class="member-title">{t('about.team.michael.title')}</p>
              <p>{t('about.team.michael.description')}</p>
            </div>
            
            <div class="team-member card">
              <div class="member-image">
                <div class="image-placeholder">{t('about.team.lisa.name')}</div>
              </div>
              <h3>{t('about.team.lisa.name')}</h3>
              <p class="member-title">{t('about.team.lisa.title')}</p>
              <p>{t('about.team.lisa.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="certifications-section section">
        <div class="container">
          <div class="text-center">
            <h2 class="fade-in">{t('about.certifications.title')}</h2>
            <div class="certifications fade-in">
              <div class="cert-item">
                <h4>{t('about.certifications.fda.title')}</h4>
                <p>{t('about.certifications.fda.description')}</p>
              </div>
              <div class="cert-item">
                <h4>{t('about.certifications.energyStar.title')}</h4>
                <p>{t('about.certifications.energyStar.description')}</p>
              </div>
              <div class="cert-item">
                <h4>{t('about.certifications.pci.title')}</h4>
                <p>{t('about.certifications.pci.description')}</p>
              </div>
              <div class="cert-item">
                <h4>{t('about.certifications.ada.title')}</h4>
                <p>{t('about.certifications.ada.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .story-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xxl);
          align-items: center;
        }
        
        .story-image .image-placeholder {
          background: var(--color-blue);
          color: var(--color-white);
          padding: var(--spacing-xxl);
          border-radius: var(--border-radius-large);
          text-align: center;
          font-weight: 500;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .value-card {
          text-align: center;
        }
        
        .value-card h3 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-sm);
        }
        
        .team-member {
          text-align: center;
        }
        
        .member-image {
          margin-bottom: var(--spacing-md);
        }
        
        .member-image .image-placeholder {
          background: var(--color-sage);
          color: var(--color-white);
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          font-weight: 500;
        }
        
        .member-title {
          color: var(--color-sage);
          font-weight: 600;
          margin-bottom: var(--spacing-xs);
        }
        
        .certifications {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }
        
        .cert-item {
          text-align: center;
          padding: var(--spacing-lg);
          border: 2px solid var(--color-sage);
          border-radius: var(--border-radius-large);
        }
        
        .cert-item h4 {
          color: var(--color-sage);
          margin-bottom: var(--spacing-xs);
        }
        
        @media (max-width: 768px) {
          .story-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }
          
          .certifications {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}