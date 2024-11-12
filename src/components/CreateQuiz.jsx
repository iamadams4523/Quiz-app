import React from 'react';

const CreateQuiz = () => {
  return (
    <>
      <div className="bg-softPink w-[25rem] h-[25rem] mx-auto mt-[3rem]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-manrope font-bold text-[20px] mt-2 text-purple-500">
            Create a Quiz
          </h1>
          <p className="font-manrope font-semibold text-[14px] text-blue-400">
            Engage your audience and test their knowledge
          </p>
        </div>
        <form className="flex flex-col justify-center items-center gap-4 mt-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium text-purple-500 mb-2">
              Question File:
            </label>
            <input
              type="file"
              className="file:border-2 file:border-gray-300 file:rounded-md file:p-2 file:bg-blue-50 file:text-blue-700 file:hover:bg-blue-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium text-purple-500 mb-2">
              Answer File:
            </label>
            <input
              type="file"
              className="file:border-2 file:border-gray-300 file:rounded-md file:p-2 file:bg-green-50 file:text-green-700 file:hover:bg-green-100"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transition-colors"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default CreateQuiz;
