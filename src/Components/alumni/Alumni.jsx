import { AlumniCard } from "./AlumniCard";
import { alumniDetails } from "./alumniDetails";

const Alumni = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-blue-50">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block text-2xl px-3 py-px mb-4 font-extrabold tracking-wider text-black rounded-full uppercase border-black border-solid border ">
          Alumni
        </p>
        <p className="text-base text-black font-bold md:text-lg">
          Our team members bring a wealth of expertise, enthusiasm, and
          creativity to the Hackaut Coding Club.
        </p>
      </div>

      <div className="text-center">
        <p className="inline-block text-xs px-3 py-px mb-4 font-semibold text-white uppercase rounded-full bg-blue-400 mb-8">
          Founders
        </p>
        <div className="flex flex-wrap gap-16 justify-center mb-10">
          
          <AlumniCard
            name={alumniDetails.adityaDutta.name}
            role="Alumni"
            images={alumniDetails.adityaDutta.image}
            github={alumniDetails.adityaDutta.github}
            linkedIn={alumniDetails.adityaDutta.linkedin}
          />
          <AlumniCard
            name={alumniDetails.KoustavSarkar.name}
            role="Alumni"
            images={alumniDetails.KoustavSarkar.image}
            github={alumniDetails.KoustavSarkar.github}
            linkedIn={alumniDetails.KoustavSarkar.linkedin}
          />
          <AlumniCard
            name={alumniDetails.arghadeepMallick.name}
            role="Alumni"
            images={alumniDetails.arghadeepMallick.image}
            github={alumniDetails.arghadeepMallick.github}
            linkedIn={alumniDetails.arghadeepMallick.linkedin}
          />
          <AlumniCard
            name={alumniDetails.sumanOjha.name}
            role="Alumni"
            images={alumniDetails.sumanOjha.image}
            github={alumniDetails.sumanOjha.github}
            linkedIn={alumniDetails.sumanOjha.linkedin}
          />
          <AlumniCard
            name={alumniDetails.amanSharma.name}
            role="Alumni"
            images={alumniDetails.amanSharma.image}
            github={alumniDetails.amanSharma.github}
            linkedIn={alumniDetails.amanSharma.linkedin}
          />
          <AlumniCard
            name={alumniDetails.shuvajitMaity.name}
            role="Alumni"
            images={alumniDetails.shuvajitMaity.image}
            github={alumniDetails.shuvajitMaity.github}
            linkedIn={alumniDetails.shuvajitMaity.linkedin}
          />
          <AlumniCard
            name={alumniDetails.rupamDey.name}
            role="Alumni"
            images={alumniDetails.rupamDey.image}
            github={alumniDetails.rupamDey.github}
            linkedIn={alumniDetails.rupamDey.linkedin}
          />
          <AlumniCard
            name={alumniDetails.aritraDam.name}
            role="Alumni"
            images={alumniDetails.aritraDam.image}
            github={alumniDetails.aritraDam.github}
            linkedIn={alumniDetails.aritraDam.linkedin}
          />
          <AlumniCard
            name={alumniDetails.rupamDas.name}
            role="Alumni"
            images={alumniDetails.rupamDas.image}
            github={alumniDetails.rupamDas.github}
            linkedIn={alumniDetails.rupamDas.linkedin}
          />
        </div>
      </div>
    </div>
  );
};

export default Alumni;
