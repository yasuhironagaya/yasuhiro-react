import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">Yasuhiro</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#skills" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
            <a href="#blog" className="hover:text-blue-400 duration-300">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center ">
          <div className="md:w-1/2 flex-grow mb-16 md:mb-0 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              彦根城
            </h1>
            <p className="mb-8 leading-relaxed">
              彦根城、琵琶湖を見下ろす山の頂から彦根を見守っています。
            </p>
            <button className="bg-green-500 text-white py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              詳細
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/hikoneCastle.jpg" alt="彦根城の紅葉" className="rounded"/>
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              necessitatibus dolorem laborum perspiciatis veniam est error minus
              atque asperiores enim.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident odit dolore tempore laudantium natus dolorem eum ea
              nihil, molestiae placeat aspernatur suscipit culpa eius nobis? Ab
              doloremque praesentium modi id fugit tenetur numquam quod,
              veritatis, et hic obcaecati. Eius expedita explicabo dolor
              voluptas neque. Modi dicta molestiae corrupti repellendus est
              culpa, laboriosam voluptate perspiciatis, sapiente minus
              dignissimos voluptatem cumque labore aperiam atque dolor aut
              aliquid voluptates eum nam..
            </p>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, tenetur reiciendis? Odit incidunt alias
                    necessitatibus voluptate assumenda eos atque officiis.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, tenetur reiciendis? Odit incidunt alias
                    necessitatibus voluptate assumenda eos atque officiis.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, tenetur reiciendis? Odit incidunt alias
                    necessitatibus voluptate assumenda eos atque officiis.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* left side */}
          <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
            <img src="./img/pc.jpg" alt="" className="rounded" />
          </div>
          {/* right side */}
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">My skills</h1>
            <div className="w-full">
              <h2>Html</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"85%"}}>85%</div>
              </div>
              <h2>CSS</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"90%"}}>90%</div>
              </div>
              <h2>Javascript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"50%"}}>50%</div>
              </div>
              <h2>TailwindCSS</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"20%"}}>20%</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
