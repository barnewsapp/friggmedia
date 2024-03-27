export function Hero() {
  return (
    <div className=" md:max-w-screen-md mx-auto my-12">
      <h1 className="text-4xl lg:text-6xl  light:text-title-color dark:text-red-500 font-lora font-medium ">
        Vi leverer teknologi for digitale leseopplevelser
      </h1>
      <p className="light:text-subtitle-color text-lg md:text-2xl my-4 ">
        Med vår teknologi kan leserne alltid få tilgang til siste nytt, uansett hvor de er og på
        hvilken enhet de bruker.
      </p>
      <div className="mt-6 flex justify-center ">
        <a
          href="#"
          className="text-white text-md md:text-xl font-light bg-blue-700  hover:bg-blue-800  py-2 px-4 rounded inline-block"
        >
          Kontakt oss
        </a>
      </div>
    </div>
  );
}
