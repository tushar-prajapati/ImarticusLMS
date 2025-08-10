import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOutlineCircle, MdCheckCircle } from "react-icons/md";
import { PiPlayCircleThin } from "react-icons/pi";
import { LiaTrophySolid } from "react-icons/lia";



const CourseDetails = ({ course }) => {
  const [openModules, setOpenModules] = useState({});

  const toggleSection = (index) => {
    setOpenModules((prev) => ({
      ...prev,
      [index]: !prev[index], 
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm space-y-2">
      <div className="border-b h-full justify-between flex flex-col md:flex-row border-gray-100 pb-2">
        <div className="p-6 flex items-center justify-center flex-col md:flex-row">
          <img
            className="md:h-32 h-auto w-full md:w-64"
            src="https://static-asset.inc42.com/social/Imarticus_Learning_datalabs-inc42.jpg"
            alt="Course"
          />
          <div className="md:px-6 flex-row h-full items-start">
            <h1 className="md:text-xl text-lg font-medium mb-2 mt-2 md:mt-0">
              {course.title}
            </h1>
            <span className="bg-[#F9F6F6] rounded text-xs truncate block md:w-96 w-80 text-gray-700 p-2">
              Batch: {course.batch}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-end">
          <button className="cursor-pointer hover:bg-[#035642] transition-all duration-200 hover:text-white md:px-4 w-full mx-2 py-2 border border-[#035642] text-[#035642] rounded font-medium">
            Resume
          </button>
        </div>
      </div>

      {course.sections.map((section, index) => (
        <div key={index} className="border-b border-gray-200 pb-2">
          <div
            className="flex items-center justify-between cursor-pointer py-2 px-4"
            onClick={() => toggleSection(index)}
          >
            <div className="flex items-center space-x-3">
              {section.completed ? (
                <MdCheckCircle className="text-green-700" />
              ) : (
                <MdOutlineCircle className="text-gray-400" />
              )}
              <div className="flex-col flex">
                <span className="font-medium">
                  {index + 1}. {section.title}
                </span>
                <span className="ml-2 text-xs text-gray-400">
                  {section.lectures.length} Lectures, {section.quiz.length} Quiz
                </span>
              </div>
            </div>
            {openModules[index] ? (
              <FiMinus className="text-gray-500" />
            ) : (
              <FiPlus className="text-gray-500" />
            )}
          </div>

          <div
            className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
              openModules[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="pl-9 space-y-6 ">
              {section.lectures.map((lecture, i) => (
                <li
                  key={i}
                  className="cursor-pointer flex justify-between hover:text-gray-500  text-gray-400 text-sm"
                >
                  <div className="flex items-center space-x-2">
                  <PiPlayCircleThin className="text-gray-400 text-xl " />
                  <span>{i+1}. {lecture.title}</span>
                  </div>
                  <div className="flex h-full items-center px-4">
                    <MdOutlineCircle className="text-gray-400 text-lg"/>
                  </div>
                </li>
              ))}
              {section.quiz.map((quiz)=>(
                <li className="cursor-pointer hover:text-gray-500 flex items-center space-x-2 text-gray-400 text-sm">
                  <LiaTrophySolid className="text-gray-400 text-xl "/> <span>{quiz.title}</span>
                </li>
              )) }
            </ul>
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default CourseDetails;
