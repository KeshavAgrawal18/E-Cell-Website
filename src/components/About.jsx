
import ECellAbout from "../assets/grp.jpg";

export default function About() {
  return (

    <section id="About" className="font-Poppins bg-yellow-600 z-40 opacity-100">
      <div className=" flex items-center justify-center h-screen ">
      
        <div className="AboutUsText">
          <p className="font-Montserrat font-bold text-lg text-white  -rotate-90 p-0.5 mx-8 " >About&nbsp;Us</p>

        </div>
        <div>
          <img src={ECellAbout} className="bg-black/25 rounded-md p-5  transform-gpu " alt="bg" />
        </div>
        <div>
          <p className="font-Montserrat font-bold text-white text-lg text-justify p-10 pl-20 py-3">
          The Entrepreneurship Cell is a non-profit organization run by the students of National Institute of Technology Agartala that aims at manifesting the latent entrepreneurial spirit of the young students. E-Cell aims at promoting the startup culture in Agartala as well as North-East India. With various undergoing projects, few successful startups, a lot of failures, and the flagship 'Carpediem E-Summit', E-Cell has transformed itself from a small community established by budding entrepreneurs in 2017 to a full-fledged organization with multi-talented like-minded people striving to solve the various problem with an entrepreneurial minsdset.
          </p>
          {/* <button className="meetbutton bg-black hover:text-black hover:bg-white text-white font-bold py-2 px-4 rounded-full drop-shadow-xl ">
            <a href="/">Meet the team</a>
          </button> */}
        </div>
      </div>
    </section>
  );
}
