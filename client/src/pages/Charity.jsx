import React from "react";

export default function Charity() {
  return (
    <>
      <div className=" charityHeader flex bg-slate-400 h-44 items-center ">
        <div>
          <img
            className="h-44 ml-40 hidden lg:block"
            src="charityhearthand.png"
          />
        </div>

        <div className="text-4xl p-2 m-2 ml-24">Charity</div>
        <div className="text-4xl hidden lg:block">|</div>
        <div className="text-4xl m-2 p-2 hidden lg:block">LisaWorks</div>
      </div>
      <div className="flex flex-col items-center">
        <p className="quoteContainer flex w-2/3 m-2 p-2 pt-6 text-lg">
          "We make a living by what we get. We make a life by what we give." -
          Winston Churchill
          <br />
          <br /> Here at Lisa Works It has been a common practice to request for
          the cost of workmanship to be donated to a charity organisation of the
          clients' choice. *Proof of donation required
        </p>
        <div className="quoteContainer flex w-2/3 m-2 p-2 pt-6 text-3xl bold">
          Previous Beneficiaries
        </div>
        <p className="quoteContainer flex w-2/3 m-2 p-2 pb-6 mb-6 text-lg">
          Here are some of the groups/organisations that previous clients have
          donated to, in lieu of paying for workmanship.
        </p>
        <div className="charityLogoContainer flex flex-wrap h-32 justify-center space-x-10">
          <img className="h-full p-3" src="/Picsbyhooman.png" />
          <img className="h-full p-3" src="/ProjectLuni.png" />
          <img className="h-full p-3 bg-slate-600" src="SOSDlogo.png" />
          <img className="h-full p-8" src="touchlogo.png" />
          <img className="h-full p-2" src="ACRES.png" />
        </div>
      </div>
    </>
  );
}
