const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>
        I am a software engineer with a passion for web development. I have been working in the tech industry for over 2 years and have experience in a variety of roles. I have worked as a software engineer, a technical writer, and a project manager. I have a strong background in web development, with experience in both front-end and back-end technologies. I am always looking for new challenges and opportunities to learn and grow as a developer.
        </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
