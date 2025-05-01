
import React from "react";

const FormHeader = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-6 sm:p-8">
      <div className="flex items-center space-x-2 mb-2">
        <div className="h-6 w-6 bg-white rounded-sm"></div>
        <h2 className="text-2xl font-bold">Information Form</h2>
      </div>
      <p className="text-indigo-100 mt-2">
        Please complete the form below with your details
      </p>
    </div>
  );
};

export default FormHeader;
