import { TeamCard } from "./TeamCard";
import { teamDetails } from "./teamDetails";

export const Teams = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-blue-50">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block text-2xl px-3 py-px mb-4 font-extrabold tracking-wider text-black rounded-full uppercase border-black border-solid border ">
          Team Members
        </p>
        <p className="text-base text-black font-bold md:text-lg">
          Our team members bring a wealth of expertise, enthusiasm, and
          creativity to the Hackaut Coding Club.
        </p>
      </div>

      <div className="text-center">
        <p className="inline-block text-xs px-3 py-px font-semibold text-white uppercase rounded-full bg-blue-400 mb-8">
          Founders
        </p>
        <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name="Joy Sarkar" role="President" images={teamDetails.joySarkar.image} github={teamDetails.joySarkar.github} linkedIn={teamDetails.joySarkar.linkedin}/>
          <TeamCard name="Dilip Sarkar" role="Hackaut Co-Lead" images={teamDetails.dilipSarkar.image} github={teamDetails.dilipSarkar.github} linkedIn={teamDetails.dilipSarkar.linkedin}/>
        </div>
        <p className="inline-block text-xs px-3 py-px font-semibold text-white uppercase rounded-full bg-blue-400 mb-8">
          Sub Ordinates
        </p>
        <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name={teamDetails.shreyoPaul.name} role="subordinate" images={teamDetails.shreyoPaul.image} github={teamDetails.shreyoPaul.github} linkedIn={teamDetails.shreyoPaul.linkedin}/>
          <TeamCard name={teamDetails.AyanPatra.name} role="subordinate" images={teamDetails.AyanPatra.image} github={teamDetails.AyanPatra.github} linkedIn={teamDetails.AyanPatra.linkedin}/>
          <TeamCard name={teamDetails.joyjit.name} role="subordinate" images={teamDetails.joyjit.image} github={teamDetails.joyjit.github} linkedIn={teamDetails.joyjit.linkedin}/>
          
        </div>
        <div className="flex flex-wrap gap-16 justify-center mb-10">
        <TeamCard name={teamDetails.mohitRaj.name} role="subordinate" images={teamDetails.mohitRaj.image} github={teamDetails.mohitRaj.github} linkedIn={teamDetails.mohitRaj.linkedin}/>
        <TeamCard name={teamDetails.snehasis.name} role="subordinate" images={teamDetails.snehasis.image} github={teamDetails.snehasis.github} linkedIn={teamDetails.snehasis.linkedin}/>
        <TeamCard name={teamDetails.subhadip.name} role="subordinate" images={teamDetails.subhadip.image} github={teamDetails.subhadip.github} linkedIn={teamDetails.subhadip.linkedin}/>
        </div>
      </div>
    </div>
  );
};
