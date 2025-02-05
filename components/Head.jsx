import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Dongobada Antony is an experienced full-stack developer building apps that you'd like to use."
      />
      <meta
        name="keywords"
        content="Dongobada Antony, full-stack developer, mobile developer, react developer, nextjs developer, nodejs developer, javascript developer"
      />
      <meta property="og:title" content="Dongobada Antony's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Dongobada Antony',
};
