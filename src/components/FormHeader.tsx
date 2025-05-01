
import React from "react";

const FormHeader = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-6 sm:p-8 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-6 w-6 bg-white rounded-sm flex items-center justify-center">
            <div className="h-3 w-3 bg-indigo-600 rounded-sm"></div>
          </div>
          <h2 className="text-2xl font-bold">Information Form</h2>
        </div>
        <p className="text-indigo-100 mt-2">
          Please complete the form below with your details
        </p>
      </div>
      
      <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default FormHeader;
