import React from "react";

const UsersGithub = ({ UserGithubData, UsersGithubDatabase }) => {
  // Combine the two sources into a single object.
  // Data from UserGithubData will override properties in UsersGithubDatabase.
  const combinedData =
    (UserGithubData && Object.keys(UserGithubData).length > 0) ||
    (UsersGithubDatabase && Object.keys(UsersGithubDatabase).length > 0)
      ? { ...UsersGithubDatabase, ...UserGithubData }
      : null;

  return (
    <>
      {combinedData ? (
        <div className="bg-black rounded-sm shadow-2xl shadow-sky-500">
          <div className="flex justify-start items-center relative p-2">
            <div className="flex flex-col m-2 justify-start gap-3">
              <div className="shadow-2xl shadow-sky-400 border-2 md:h-24 md:w-24 h-16 w-16 rounded-full flex justify-center items-center">
                <img
                  className="rounded-full h-16 w-16 md:h-24 md:w-24 object-cover"
                  src={
                    combinedData.profilePicture ||
                    combinedData.githubProfilePicture
                  }
                  alt="Profile"
                />
              </div>
              <span className="md:text-lg text-xs font-semibold text-sky-400 text-left">
                {combinedData.username || combinedData.githubUsername}
              </span>
            </div>

            <div className="flex flex-col w-full md:m-2 m-1 gap-2 justify-start md:pl-2">
              <div className="flex justify-center items-center">
                <p className="md:text-xl text-xs font-semibold text-gray-300">
                  {combinedData.gitContribution ||
                    combinedData.githubContribution}
                </p>
              </div>
              <div className="">
                <p className="text-center text-sm md:text-lg md:m-2 m-1 font-semibold text-gray-500">
                  {combinedData.fullName || combinedData.githubName}'s Repos
                </p>
                {combinedData.gitrepo || combinedData.githubRepos ? (
                  <div className="md:grid md:grid-cols-5 flex flex-wrap gap-2 md:gap-1">
                    {(combinedData.gitrepo || combinedData.githubRepos).map(
                      (repo, index) => (
                        <p
                          key={index}
                          className="text-sky-400 text-[10px] md:text-xs"
                        >
                          {repo.text || repo}
                        </p>
                      )
                    )}
                  </div>
                ) : (
                  <div>There might be some error in your details.</div>
                )}
              </div>
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

export default UsersGithub;
