import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-gray-100">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-10">
        <div className="lg:max-w-lg lg:ml-auto">
          <img className="h-10" src="img/logo.svg" alt="workcation" />
          <img
            className="mt-6 rounded-xl shadow-xl lg:hidden sm:mt-8 sm:h-80 sm:w-full sm:object-cover sm:object-center"
            src="img/beach-work.jpg"
            alt="woman working beach"
          />
          <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            You can work from anywhere.
            <br />
            <span className="text-indigo-500">Take full advatage of it.</span>
          </h1>
          <p className="mt-2 text-gray-500 sm:mt-4 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div className="mt-4 sm:mt-6">
            <a
              href="#"
              className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:outline active:bg-indigo-600 text-white uppercase tracking-wide font-semibold text-sm"
            >
              Book your escape
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 lg:relative">
        <img
          className="lg:absolute inset-0 h-full w-full object-cover object-center"
          src="img/beach-work.jpg"
          alt="woman working beach"
        />
      </div>
    </div>
  );
}
