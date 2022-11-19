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
          <a href="#home" className="mr-5 hover:text-blue-400 duration-300">Home</a>
          <a href="#about" className="mr-5 hover:text-blue-400 duration-300">About</a>
          <a href="#skills" className="mr-5 hover:text-blue-400 duration-300">Skills</a>
          <a href="#blog" className="hover:text-blue-400 duration-300">Blog</a>
        </nav>
      </div>
    </header>

    <section className="text-gray-700" id="home">
      <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center ">
        <div className="md:w-1/2 flex-grow mb-16 md:mb-0 lg:pr-24 md:pr-16 text-center md:text-left" >
          <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">日本のお城</h1>
          <p className="mb-8 leading-relaxed">彦根城、琵琶湖を見下ろす山の頂から彦根を見守っています。</p>
          <button className="bg-green-500 text-white py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">詳細</button>
        </div>
        <div className="md:w-1/2 lg:max-w-lg w-5/6">
          <img src="../public/img/hikoneCastle.jpg" alt="彦根城の紅葉" />
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
