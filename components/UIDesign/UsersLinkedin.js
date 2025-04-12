import React from "react";

const UsersLinkedin = ({ UsersLinkedinData, UserLinkedinDatabase }) => {
  
  const hasData =
    (UsersLinkedinData && Object.keys(UsersLinkedinData).length > 0) ||
    (UserLinkedinDatabase &&
      Object.keys(UserLinkedinDatabase).length > 0);

  const combinedData = hasData
    ? {
      ...(UsersLinkedinData || {}),
      ...(UserLinkedinDatabase || {}),
    }
    : null;

  return (
    <>
      {/* For desktop view */}

      {combinedData ? (
        <div>
          <div>
            <div className="md:flex hidden justify-center gap-3 items-center relative bg-black rounded-sm shadow-2xl shadow-sky-500">
              <div className="m-3 h-40 w-40 rounded-full flex justify-center items-center">
                <img
                  className="rounded-full"
                  src={
                    combinedData.profilePicture ||
                    combinedData.linkedinProfilePicture
                  }
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col gap-2 m-2">
                <p className="text-xl text-left text-white font-semibold">
                  {combinedData.name || combinedData.linkedinName}
                </p>
                <p className="text-gray-400 text-left text-md">
                  {combinedData.headlineAbout || combinedData.linkedinHeadline}
                </p>
                <p className=" text-gray-500 text-sm text-left">
                  {combinedData.company || combinedData.linkedinCompany}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white text-lg md:flex hidden justify-center h-52 items-center relative bg-black rounded-sm shadow-2xl shadow-sky-500">
          <div className="container1">
            <div className="loader1"></div>
            <div className="loader1"></div>
            <div className="loader1"></div>
          </div>
        </div>
      )}

      {/* For Mobile View */}

      {combinedData ? (
        <div>
          <div>
            <div className="flex flex-col md:hidden justify-center items-start relative bg-black rounded-sm shadow-2xl shadow-sky-500">
              <div className="m-3 rounded-full flex justify-center gap-2 md:gap-3 items-center">
                <img
                  className="rounded-full h-20 w-20"
                  src={combinedData.profilePicture || combinedData.linkedinProfilePicture}
                  alt="Profile"
                />
                <p className="md:text-xl text-sm text-left text-white font-semibold">
                  {combinedData.name || combinedData.linkedinName}
                </p>
              </div>
              <div className="flex flex-col gap-2 md:m-3 m-2">
                <p className="text-gray-200 text-left text-xs md:text-md">
                  {combinedData.headlineAbout || combinedData.linkedinHeadline}
                </p>
                <p className=" text-gray-300 md:text-sm text-[10px] text-left">
                  {combinedData.company || combinedData.linkedinCompany}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white text-lg flex md:hidden justify-center h-52 items-center relative bg-black rounded-sm shadow-2xl shadow-sky-500">
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

export default UsersLinkedin;
