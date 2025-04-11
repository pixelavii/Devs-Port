import React from "react";

const UsersInstagram = ({ instaData, UsersInstagramDatabase }) => {
  // const combinedData =
  //   (instaData && Object.keys(instaData).length > 0) ||
  //   (UsersInstagramDatabase && Object.keys(UsersInstagramDatabase).length > 0)
  //     ? { ...UsersInstagramDatabase, ...instaData }
  //     : null;

  const hasData =
    (instaData && Object.keys(instaData).length > 0) ||
    (UsersInstagramDatabase &&
      Object.keys(UsersInstagramDatabase).length > 0);

  const combinedData = hasData
    ? {
      ...(instaData || {}),
      ...(UsersInstagramDatabase || {}),
    }
    : null;

  return (
    <>
      {combinedData ? (
        <div>
          <div className="flex justify-start gap-2 md:gap-3 items-center relative bg-black rounded-sm shadow-2xl shadow-sky-500">
            <div className="flex flex-col gap-2 m-3 md:m-5">
              <p className="md:text-xl text-sm text-left text-white font-semibold">
                {combinedData.Name || combinedData.instagramName}
              </p>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="text-gray-400 text-left text-[10px] md:text-md"
              >
                {combinedData.About || combinedData.instagramAbout}
              </p>
              {combinedData.Followers || combinedData.instagramFollowers ? (
                <div className="grid grid-cols-2 gap-1 mt-2">
                  {(
                    combinedData.Followers || combinedData.instagramFollowers
                  ).map((follow, index) => (
                    <p
                      key={index}
                      className="text-gray-200 text-left text-xs md:text-sm"
                    >
                      {follow.text || follow}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="text-sky-500">Nothing to show</div>
              )}
            </div>
            <div className="md:m-5 m-3 border-2 border-white md:h-36 md:w-36 h-24 w-24 rounded-full flex justify-center items-center">
              <img
                className="rounded-full md:h-36 md:w-36 h-24 w-24"
                src={combinedData.ImgLink || combinedData.instagramImgLink}
                alt="Profile"
              />
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

export default UsersInstagram;
