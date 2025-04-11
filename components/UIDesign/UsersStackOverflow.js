import React from "react";

const UsersStackOverflow = ({ StackData, UsersStackOverflowDatabase }) => {
  const StackBadges = ["Gold", "Silver", "Bronze"];

  // const combinedData =
  //   Object.keys(StackData).length > 0
  //     ? StackData
  //     : Object.keys(UsersStackOverflowDatabase).length > 0
  //       ? UsersStackOverflowDatabase
  //       : null;

  const hasData =
    (StackData && Object.keys(StackData).length > 0) ||
    (UsersStackOverflowDatabase &&
      Object.keys(UsersStackOverflowDatabase).length > 0);

  const combinedData = hasData
    ? {
      ...(StackData || {}),
      ...(UsersStackOverflowDatabase || {}),
    }
    : null;

  return (
    <>
      {combinedData ? (
        <div>
          <div className="flex justify-start gap-5 items-center relative bg-black rounded-sm shadow-2xl shadow-sky-500">
            <div className="flex flex-col gap-2 m-3">
              <p className="text-xl text-left text-white font-semibold">
                {combinedData.fullName || combinedData.stackOverflowName}
              </p>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="text-gray-400 text-left text-md"
              >
                {combinedData.reputation || combinedData.stackOverflowReputation}
              </p>
              {combinedData.badge1 || combinedData.stackOverflowBadge1 ? (
                <div className="grid grid-cols-3 gap-1">
                  {(combinedData.badge1 || combinedData.stackOverflowBadge1).map(
                    (badge, index) => (
                      <p key={index} className="text-sky-400 text-left text-md">
                        {badge.text || badge} {StackBadges[index]}
                      </p>
                    )
                  )}
                </div>
              ) : (
                <div className="text-sky-500">No Badges</div>
              )}
            </div>
            <div className="m-3">
              <p
                style={{ whiteSpace: "pre-line" }}
                className="text-gray-200 text-sm text-left"
              >
                {combinedData.stackAbout || combinedData.stackOverflowAbout}
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

export default UsersStackOverflow;
