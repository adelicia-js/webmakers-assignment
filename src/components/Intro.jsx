import "../App.css";

export default function Introduction() {
  return (
    <section className="p-8 bg-transparent m-8 min-h-[80vh] flex flex-col place-content-center">
      <section className="flex flex-col gap-6 justify-center items-center min-h-[40vh]">
        <h1 className="md:text-7xl text-center font-bold">Elevate Your Presence with <span className="whitespace-pre">Seamless Design and Innovation.</span></h1>
        <h2 className="font-heading md:text-xl">
          From strategic planning to digital presence, we{`'`}re your dedicated
          partner in achieving solo success.
        </h2>
        <a className="font-general md:text-lg bg-black hover:shadow-lg hover:shadow-pink-200 text-white px-10 py-2 rounded-md md:text-md" href="#pricing">View Pricing</a>
      </section>
      <section className="font-general text-gray-400 mt-8 flex flex-col justify-end items-center gap-6 min-h-[15vh]">
        <p>Trusted by 250+ Companies</p>
        <ul className="flex flex-row gap-20 justify-end items-center">
            <li>Zapier_Img</li>
            <li>Spotify_Img</li>
            <li>Zoom_Img</li>
            <li>Slack_Img</li>
            <li>Amazon_Img</li>
            <li>Adobe_Img</li>
        </ul>
      </section>
    </section>
  );
}
