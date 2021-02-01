import Layout from 'components/modules/Layout/Layout'
import Head from 'next/head'
import { ReactElement } from 'react'

type HomeTemplateProps = {
  preview: boolean
}

export default function HomeTemplate({
  preview,
}: HomeTemplateProps): ReactElement {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Muhamad Riyan</title>
        </Head>

        <main className="profile-page">
          <section className="relative block" style={{ height: '500px' }}>
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              />
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: '70px', transform: 'translateZ(0)' }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-gray-300">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center my-20">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="riyan"
                          src="depan.png"
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                          style={{ maxWidth: '150px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                      Muhamad Riyan
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500" />
                      Pekalongan, Jawa Tengah, Indonesia
                    </div>
                    <div className="mb-2 text-gray-700 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-gray-500" />
                      Javascript Fullstack Developer
                    </div>
                    <div className="mb-2 text-gray-700">
                      <i className="fas fa-university mr-2 text-lg text-gray-500" />
                      Stmik Widya Pratama
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          Halo Perkenalkan Nama Saya Muhamad Riyan berasal dari
                          kota Pekalongan, Indonesia. Saya Menjadi Developer
                          Aplikasi sudah 5 tahun dan sudah mencoba beberapa
                          bahasa pemrograman seperti PHP, Java, Python, Ruby,
                          Javascript. Tetapi yang paling saya sukai adalah
                          menggunakan javascript karena menggunakan 1 bahasa
                          untuk Backend dan juga Frontend.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}
