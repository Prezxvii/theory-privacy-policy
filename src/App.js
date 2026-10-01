import './App.css';

const LAST_UPDATED = 'October 3, 2026';
const SUPPORT_EMAIL = 'theorysportsapp@outlook.com';

const sections = [
  {
    number: '1',
    title: 'Information we collect',
    paragraphs: [
      'We collect information you provide directly to us, information generated through your use of Theory, and technical metadata required to operate the service.',
    ],
    bullets: [
      'Account and profile information: Email address, username, display name, authentication method, date of birth for age eligibility, acceptance of legal documents, avatar URL, bio, favorite sports, leagues, teams, notification preferences, and comment permissions. For email/password accounts, we store a password hash (Theory never stores plain-text passwords).',
      'Community activity: Debates, comments, replies, votes, reactions, likes, polls, battles, predictions, follows, blocks, badges, XP, rankings, and activity records.',
      'Device and technical information: Push notification tokens (when enabled), device type, app version, connection info, IP address, diagnostic data, rate-limiting, and logs used to secure and troubleshoot the service.',
      'External content metadata: Article and video titles, sources, URLs, images, publication dates, and external IDs used to organize discussions around sports news, podcasts, and videos.',
    ],
  },
  {
    number: '2',
    title: 'How we use information',
    paragraphs: [
      'We use information to create and authenticate accounts, verify age eligibility (13+ requirement), provide sports community features, deliver push/email notifications, personalize content, moderate content, prevent fraud/spam/abuse, and improve the service.',
      'We may also use information to enforce our Terms of Use, investigate security incidents, comply with legal obligations, and protect the rights and safety of Theory and its users.',
    ],
  },
  {
    number: '3',
    title: 'Public content',
    paragraphs: [
      'Theory is a public community platform. Your username, display name, avatar, debates, comments, replies, reactions, votes, and other public activity may be visible to other users.',
      'Do not post private, confidential, financial, medical, location, or other sensitive information in public areas.',
    ],
  },
  {
    number: '4',
    title: 'External news and video',
    paragraphs: [
      'Theory may show or link to content from third-party sports publishers, video platforms, and leagues. We store limited metadata about these items to enable community discussions.',
      'Theory does not import third-party comments into the app. All comments, takes, likes, and reactions under news items or videos are created and hosted by Theory.',
      'If you click a third-party link, that third party’s privacy policy and terms apply to your use of their service.',
    ],
  },
  {
    number: '5',
    title: 'How we share information',
    paragraphs: [
      'We may share information with other Theory users (for public community features), service providers (hosting, databases, authentication, notifications, security, and analytics), or when required by law or to protect legal rights.',
      'We may also share information in connection with a merger, acquisition, financing, or business restructuring, or otherwise with your consent.',
      'Theory does not sell your personal information for money.',
    ],
  },
  {
    number: '6',
    title: 'Your controls',
    paragraphs: [
      'You can edit your profile, manage notification preferences, set comment permissions, block accounts, edit/delete content, convert guest accounts, change email/password, or delete your account directly through the app.',
    ],
  },
  {
    number: '7',
    title: 'Data retention and deletion',
    paragraphs: [
      'We retain information as long as needed to provide the service, maintain security, prevent abuse, and comply with legal obligations.',
      'When you delete your account, we take reasonable steps to delete or de-identify personal information, maintaining only limited records where required for security, legal compliance, or moderation backups.',
    ],
  },
  {
    number: '8',
    title: 'Security',
    paragraphs: [
      'We use administrative, technical, and organizational safeguards including password hashing, authenticated requests, session controls, database access controls, rate limiting, and moderation tools. No internet transmission is 100% secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    number: '9',
    title: 'Children’s privacy',
    paragraphs: [
      'Theory is not directed to children under 13, and we do not knowingly allow users under 13 to create accounts. If you believe a child under 13 has provided personal information to Theory, contact us so we can take immediate action.',
    ],
  },
  {
    number: '10',
    title: 'International users',
    paragraphs: [
      'If you use Theory from outside the United States, your information may be transferred to, stored, and processed in the United States or other locations where Theory or its service providers operate.',
    ],
  },
  {
    number: '11',
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. If changes are material, we will provide notice through the application or by email when appropriate.',
    ],
  },
  {
    number: '12',
    title: 'Contact us',
    paragraphs: [
      <>
        For privacy questions or requests, contact Theory at{' '}
        <a className="email-link" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        or write to us at Mount Vernon, NY 10550, United States.
      </>,
    ],
  },
];

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="header-content">
          <a className="brand" href="/" aria-label="Theory Privacy Policy">
            THEORY
          </a>
        </div>
      </header>

      <main className="content">
        <section className="hero">
          <p className="eyebrow">THEORY LEGAL</p>
          <h1>Privacy Policy</h1>
          <p className="hero-description">
            This Privacy Policy explains what information Theory collects, how we use it, when we share it, and the choices available to you.
          </p>
          <p className="last-updated">Last updated: {LAST_UPDATED}</p>
        </section>

        <article className="legal-document">
          {sections.map((section) => (
            <section key={section.number} className="legal-section">
              <h2>
                <span>{section.number}.</span>
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {section.bullets?.length ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Theory. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://theory-terms-of-service.vercel.app">Terms of Use</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
