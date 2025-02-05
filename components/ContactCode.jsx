import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'antony.dongobada.com',
    href: 'https://antony.dongobada.com',
  },
  {
    social: 'email',
    link: 'antony@dongobada.com',
    href: 'mailto:nitinranganath@gmail.com',
  },
  {
    social: 'github',
    link: 'tonydgbd',
    href: 'https://github.com/tonydgbd',
  },
  {
    social: 'linkedin',
    link: 'antony-dongobada-90844a208',
    href: 'https://www.linkedin.com/in/antony-dongobada-90844a208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
