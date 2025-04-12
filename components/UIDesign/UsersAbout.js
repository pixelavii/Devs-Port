import React from "react";

const UsersAbout = ({ aboutData, UsersLinkedinAboutDatabase }) => {

  const hasData =
    (aboutData && Object.keys(aboutData).length > 0) ||
    (UsersLinkedinAboutDatabase &&
      Object.keys(UsersLinkedinAboutDatabase).length > 0);

  const combinedData = hasData
    ? {
      ...(aboutData || {}),
      ...(UsersLinkedinAboutDatabase || {}),
    }
    : null;

  return (
    <>
      {combinedData ? (
        <div>
          <div>
            <div className="flex justify-center items-center bg-black rounded-sm shadow-2xl shadow-sky-500">
              <p
                style={{ whiteSpace: "pre-line" }}
                className="md:text-sm text-xs p-3 md:p-5 text-gray-300 text-justify"
              >
                {combinedData.userLinkedinabout || combinedData.linkedinAbout}
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

export default UsersAbout;
