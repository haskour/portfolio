import Head from 'next/head'
import Footer from '@components/Footer'

import Header from "../components/Header";
export default function Projects({params}) {
    return (
    <div className="container">
        <Head>
            <title>Hicham Askour &#124; Projects</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="max-w-screen-md mx-auto">
            <Header />
            <div className="max-w-screen-xl mx-auto w-full pl-24">
                <h1 className="text-4xl font-semibold">Projects</h1>
            </div>

            <div className="max-w-screen-xl mx-auto w-full mt-6 pl-24">
                <div className="-ml-2 -mr-2 flex flex-wrap">
                    {/* item */}
                    <div className="w-full px-2 py-2">
                        <div className="bg-gray-200 h-60">
                            {/* text text text */}
                        </div>
                    </div>
                   
                </div>
                
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
    </div>
    )
}