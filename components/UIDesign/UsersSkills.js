import React from "react";

const UsersSkills = ({ userskill, UsersLinkedinSkillsDatabase }) => {

  const hasData =
    (userskill && Object.keys(userskill).length > 0) ||
    (UsersLinkedinSkillsDatabase &&
      Object.keys(UsersLinkedinSkillsDatabase).length > 0);

  const combinedData = hasData
    ? {
      ...(userskill || {}),
      ...(UsersLinkedinSkillsDatabase || {}),
    }
    : null;

  return (
    <>
      {combinedData ? (
        <div>
          <div className="">
            <div className="flex justify-center items-center bg-black rounded-sm shadow-2xl shadow-sky-500">
              {combinedData.skills || combinedData.linkedinSkills ? (
                <div className="md:m-5 m-3 flex flex-wrap justify-center items-center gap-1 md:gap-2">
                  {(combinedData.skills || combinedData.linkedinSkills).map(
                    (skill, index) => (
                      <p
                        key={index}
                        className="text-gray-100 text-center p-1 rounded-lg bg-gray-700 text-[10px] md:text-xs"
                      >
                        {skill.text || skill}
                      </p>
                    )
                  )}
                </div>
              ) : (
                <div className="text-sky-500 text-lg flex justify-center h-52 items-center">
                  Nothing to show
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white text-lg flex justify-center h-52 items-center relative bg-black rounded-sm shadow-2xl shadow-sky-500">
          <div className="container1">
            <div className="loader1"></div>
            <div className="loader1"></div>
            <div className="loader1"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersSkills;
