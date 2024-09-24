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
          Faculty
        </p>
        <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name={teamDetails.SaikatBasu.name} role="Principal Advisor (HOD of CSE)" stack="ML, IOT, Cryptography" images={teamDetails.SaikatBasu.image}/>
          <TeamCard name={teamDetails.JoySamadder.name} role="Chairman" stack="IOT, Web Technology" images={teamDetails.JoySamadder.image}/>
        </div>
        <p className="inline-block text-xs px-3 py-px font-semibold text-white uppercase rounded-full bg-blue-400 mb-8">
          Leaders
        </p>
        <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name={teamDetails.Sougata.name} role="President" stack="Golang, Python, ML" images={teamDetails.Sougata.image}/>
          <TeamCard name={teamDetails.Ishita.name} role="Vice President" stack="AI, Python, JavaScript" images={teamDetails.Ishita.image}/>
          <TeamCard name={teamDetails.Achintya.name} role="General Secretary" stack="Java, Kotlin, Flutter" images={teamDetails.Achintya.image}/>
          <TeamCard name={teamDetails.Taha.name} role="Secretary" stack="JavaScript, Design" images={teamDetails.Taha.image}/>
        </div>
        <p className="inline-block text-xs px-3 py-px font-semibold text-white uppercase rounded-full bg-blue-400 mb-8">
          Core Team
        </p>
        <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name={teamDetails.Anish.name} role="Director of Management" stack="C++, AI, CS Fundamentals" images={teamDetails.Anish.image}/>
          <TeamCard name={teamDetails.Debashis.name} role="Treasurer" stack="C++, Python, CS Fundamentals" images={teamDetails.Debashis.image}/>
          <TeamCard name={teamDetails.Supriya.name} role="Accountant" stack="JavaScript, CS Fundamentals" images={teamDetails.Supriya.image}/>
          <TeamCard name={teamDetails.Mayank.name} role="Technical Director (CP)" stack="AI/ML(Representative), C++" images={teamDetails.Mayank.image}/>
        </div>
        <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name={teamDetails.Parthib.name} role="Technical Director (Dev)" stack="OCaml, Golang, React" images={teamDetails.Parthib.image}/>
          <TeamCard name={teamDetails.Antika.name} role="Spokesperson" stack="JavaScript, Python, C" images={teamDetails.Antika.image}/>
          <TeamCard name={teamDetails.Arnab.name} role="Web Dev Representative" stack="Java, SpringBoot, Next.js" images={teamDetails.Arnab.image}/>
          <TeamCard name={teamDetails.Tanmoy.name} role="App Dev Representative" stack="Flutter, Java, React" images={teamDetails.Tanmoy.image}/>
        </div>
        <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name={teamDetails.Dipayan.name} role="Language Coordinator" stack="Java, Python, C++" images={teamDetails.Dipayan.image}/>
          <TeamCard name={teamDetails.Sandip.name} role="Design Representative" stack="Figma, Canva, Python" images={teamDetails.Sandip.image}/>
          <TeamCard name={teamDetails.Rit.name} role="Event Manager" stack="Python, C++, Data Science" images={teamDetails.Rit.image}/>
          <TeamCard name={teamDetails.Srijon.name} role="Associate Event Manager" stack="JavaScript, Flutter, C++" images={teamDetails.Srijon.image}/>
        </div>
        <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name={teamDetails.Shovan.name} role="Full Stack Developer" stack="MERN, Java, React" images={teamDetails.Shovan.image}/>
          <TeamCard name={teamDetails.Rudra.name} role="Language Expert" stack="SpringBoot, Java, AI" images={teamDetails.Rudra.image}/>
          <TeamCard name={teamDetails.Anurag.name} role="Flutter Developer" stack="Flutter, Java, C" images={teamDetails.Anurag.image}/>
          <TeamCard name={teamDetails.Pinki.name} role="Assistant Event Manager" stack="C, C++, CS Fundamentals" images={teamDetails.Pinki.image}/>
        </div>
        <div className="flex flex-wrap gap-16 justify-center mb-10">
          <TeamCard name={teamDetails.Monotosh.name} role="Social Media Manager" stack="Figma, CS Fundamentals" images={teamDetails.Monotosh.image}/>
          <TeamCard name={teamDetails.Roni.name} role="Social Media Associate" stack="CS Fundamentals" images={teamDetails.Roni.image}/>
          <TeamCard name={teamDetails.Labani.name} role="Social Media Associate" stack="Python, AI" images={teamDetails.Labani.image}/>
          <TeamCard name={teamDetails.Koushik.name} role="Associate Designer" stack="Canva, Adobe Photoshop" images={teamDetails.Koushik.image}/>
        </div>


      </div>
    </div>
  );
};
