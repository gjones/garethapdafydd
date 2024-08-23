import Head from 'next/head'

type Props = {
  title: string
  description: string
  socialImage?: string
  canonicalUrl: string
}

function HeadSEO(props: Props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='description' content={props.description}></meta>
      <link rel='me' href='https://mastodon.social/@garethdjones' />
      <link rel='me' href='https://twitter.com/GarethapDafydd' />
      <link rel='canonical' href={props.canonicalUrl} />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/assets/images/favicon/apple-touch-icon.png'
      />

      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/assets/images/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/assets/images/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/assets/images/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/assets/images/favicon/safari-pinned-tab.svg'
        color='#5bbad5'
      />

      {/* Open Graph */}
      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.description} />
      <meta
        property='og:image'
        content={
          props.socialImage
            ? 'https://garethdjones.com' + props.socialImage
            : 'https://garethdjones.com/assets/images/social-base.png'
        }
      />

      {/* Twitter  */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@GarethapDafydd' />
      <meta name='twitter:title' content={props.title} />
      <meta name='twitter:description' content={props.description} />
      <meta
        name='twitter:image'
        content={
          props.socialImage
            ? 'https://garethdjones.com' + props.socialImage
            : 'https://garethdjones.com/assets/images/social-base.png'
        }
      />

      <meta name='theme-color' content='#ffffff'></meta>
      <script
        async
        defer
        data-domain='garethdjones.com'
        src='https://plausible.io/js/plausible.js'
      ></script>
    </Head>
  )
}

export default HeadSEO
