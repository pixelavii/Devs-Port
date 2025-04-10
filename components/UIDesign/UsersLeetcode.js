import React from "react";

const UsersLeetcode = ({ LeetcodeData, UsersLeetcodeDatabase }) => {
  const combinedData =
    (LeetcodeData && Object.keys(LeetcodeData).length > 0) ||
    (UsersLeetcodeDatabase && Object.keys(UsersLeetcodeDatabase).length > 0)
      ? { ...UsersLeetcodeDatabase, ...LeetcodeData }
      : null;

  const level = ["Easy", "Medium", "Hard"];
  return (
    <>
      {combinedData ? (
        <div>
          <div className="flex md:justify-start gap-1 md:gap-5 items-center relative bg-black rounded-sm shadow-2xl shadow-sky-500">
            <div className="m-3">
              <div>
                <div className="flex justify-start items-center gap-3">
                  <div>
                    <div className="flex flex-col md:gap-1">
                      <p className="md:text-xl text-xs text-left text-white font-semibold">
                        {combinedData.fullName || combinedData.leetCodeName}
                      </p>
                      <p
                        style={{ whiteSpace: "pre-line" }}
                        className="text-gray-400 text-left text-[10px] md:text-xs"
                      >
                        {combinedData.username || combinedData.leetCodeUsername}
                      </p>
                    </div>
                    <div className="md:mt-5 mt-3">
                      <div className="text-left">
                        <p className="text-gray-400 text-md">Rank</p>
                        <p className="text-white font-semibold text-xs md:text-xl">
                          {combinedData.ranking || combinedData.leetCodeRanking}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="md:m-3 m-2 border-2 md:hidden border-white rounded-full h-24 w-24 md:h-40 md:w-40 flex justify-center items-center">
                      <div className="flex flex-col justify-center items-center">
                        <p className="text-white text-xs md:text-2xl">
                          {combinedData.submission ||
                            combinedData.leetCodeSubmission}{" "}
                          / 3496
                        </p>
                        <p className="text-green-400 text-sm md:text-md">
                          Problems Solved
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-2 flex md:hidden justify-center items-center">
                  {combinedData.solvedProblems ||
                  combinedData.leetCodeSolvedProblems ? (
                    <div className="flex justify-center items-center gap-2">
                      {(
                        combinedData.solvedProblems ||
                        combinedData.leetCodeSolvedProblems
                      ).map((follow, index) => (
                        <p
                          key={index}
                          className="text-gray-300 bg-gray-700 rounded-2xl text-left p-2 text-xs md:text-[16px]"
                        >
                          {follow.text || follow}
                          <br />
                          {level[index]}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className="text-sky-500">Nothing to show</div>
                  )}
                </div>
                <div className="md:m-3 m-2 md:gap-3 gap-2 md:hidden flex flex-col justify-start">
                  <div>
                    <p
                      style={{ whiteSpace: "pre-line" }}
                      className="text-gray-200 text-xs font-semibold md:text-xl text-left"
                    >
                      {combinedData.badge || combinedData.leetCodeBadge}
                    </p>
                  </div>
                  <hr className="border border-gray-500" />
                  <div>
                    <p className="text-gray-400 text-[10px] md:text-sm text-left">
                      Most Recent Badge
                    </p>
                    <p className="text-gray-100 md:text-xl text-xs text-left">
                      {combinedData.recentBadge ||
                        combinedData.leetCodeRecentBadge}
                    </p>
                  </div>
                  <hr className="border border-gray-500" />
                  <div className="flex items-center gap-1">
                    <p className="text-gray-100 text-xl text-left">
                      {combinedData.recentSubmission ||
                        combinedData.leetCodeRecentSubmission}
                    </p>
                    <p className="text-gray-300 md:text-sm text-xs text-left">
                      submissions in the past one year
                    </p>
                  </div>
                  <hr className="border border-gray-500" />
                </div>
              </div>
            </div>
            <div className="border-2 border-white rounded-full h-40 w-40 hidden md:flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <p className="text-white text-2xl">
                  {combinedData.submission || combinedData.leetCodeSubmission} /
                  3496
                </p>
                <p className="text-green-400 text-md">Problems Solved</p>
              </div>
            </div>
            <div className="m-3 hidden md:flex justify-center items-center">
              {combinedData.solvedProblems ||
              combinedData.leetCodeSolvedProblems ? (
                <div className="grid grid-cols-1 gap-2">
                  {(
                    combinedData.solvedProblems ||
                    combinedData.leetCodeSolvedProblems
                  ).map((follow, index) => (
                    <p
                      key={index}
                      className="text-gray-300 bg-gray-700 rounded-2xl text-left p-2 text-[16px]"
                    >
                      {follow.text || follow}
                      <br />
                      {level[index]}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="text-sky-500">Nothing to show</div>
              )}
            </div>
            <div className="md:m-3 m-2 md:gap-3 gap-2 hidden md:flex flex-col justify-start">
              <div>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="text-gray-200 text-xs font-semibold md:text-xl text-left"
                >
                  {combinedData.badge || combinedData.leetCodeBadge}
                </p>
              </div>
              <hr className="border border-gray-500" />
              <div>
                <p className="text-gray-400 text-[10px] md:text-sm text-left">
                  Most Recent Badge
                </p>
                <p className="text-gray-100 md:text-xl text-xs text-left">
                  {combinedData.recentBadge || combinedData.leetCodeRecentBadge}
                </p>
              </div>
              <hr className="border border-gray-500" />
              <div className="flex items-center gap-1">
                <p className="text-gray-100 text-xl text-left">
                  {combinedData.recentSubmission ||
                    combinedData.leetCodeRecentSubmission}
                </p>
                <p className="text-gray-300 md:text-sm text-xs text-left">
                  submissions in the past one year
                </p>
              </div>
              <hr className="border border-gray-500" />
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

export default UsersLeetcode;
