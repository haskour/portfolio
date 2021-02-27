import Head from 'next/head'

// import { fetchEntries } from '@utils/contentfulPosts'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'
export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Hicham Askour &#124; Front End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-md mx-auto">
        <Header />
        <div className="pl-24">
          <p className="text-gray-600 text-lg font-light">
            Hi there my name is <a href="https://twitter.com/askour_hicham" className="font-bold text-black underline" target="_blank">@hichmaskour</a>, i'm a passionate front-end developer, i create awesome web pages.
            <br />
            <br />
            I live in Marrakech / Morocco 🇲🇦. I can turn your designs into a dynamic web pages and applications . For more information, do not hesitate to contact me through my email: <a href="mailto:hishamaskour@gmail.com" className="font-bold text-black underline" target="_blank">hishamaskour@gmail.com</a> or <a href="https://www.linkedin.com/in/hichamaskour" className="font-bold text-black underline" target="_blank">my linkedin profile</a>
          </p>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-left: auto;
          margin-right: auto;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  // const res = await fetchEntries()
  // const posts = await res.map((p) => {
  //   return p.fields
  // })
  const posts = [];
  return {
    props: {
      posts,
    },
  }
}
