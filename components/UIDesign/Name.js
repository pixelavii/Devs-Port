import React from "react";

const Name = ({ data, AboutFromDatabase, UsersLinkedinNameDatabase }) => {

  const combinedData =
    (data && AboutFromDatabase || Object.keys(data || AboutFromDatabase).length > 0) ||
    (UsersLinkedinNameDatabase && Object.keys(UsersLinkedinNameDatabase).length > 0)
      ? { ...UsersLinkedinNameDatabase, ...data, ...AboutFromDatabase }
      : null;

  return (
    <>
      {combinedData ? (
        <div>
          <div className="flex justify-start md:gap-3 gap-2 items-center relative bg-black rounded-sm shadow-2xl shadow-sky-500">
            <div className="md:m-5 m-2 border-2 md:h-36 md:w-36 h-24 w-24 rounded-full flex justify-center items-center">
              <img
                className="rounded-full"
                src={combinedData.profilePicture || combinedData.linkedinProfilePicture}
                alt="Profile"
              />
            </div>
            <div className="flex m-2 justify-start items-start flex-col gap-2">
              <p className="md:text-xl text-sm text-white font-semibold">
                {combinedData.name || combinedData.linkedinName}
              </p>
              <p className="text-gray-300 md:text-2xl text-xs">
                {combinedData.about || combinedData.UserAbout}
              </p>
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

export default Name;
