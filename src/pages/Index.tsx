
import { useState } from "react";
import { Card } from "@/components/ui/card";
import FormHeader from "@/components/FormHeader";
import FormField from "@/components/FormField";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    address: "",
    companyName: "",
    emailAddress: "",
    department: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Form Submitted",
      description: "Thank you for your submission!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 flex justify-center">
      <div className="w-full max-w-2xl">
        <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
          <FormHeader />
          
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <FormField
              label="Full Name"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
            
            <FormField
              label="Contact Number"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              placeholder="Enter your contact number"
              pattern="[0-9+\s\-()]+"
            />
            
            <FormField
              label="Address"
              name="address"
              type="textarea"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your address"
              rows={3}
            />
            
            <FormField
              label="Company Name"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              required
              placeholder="Enter your company name"
            />
            
            <FormField
              label="Email Address"
              name="emailAddress"
              type="email"
              value={formData.emailAddress}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
            
            <FormField
              label="Department"
              name="department"
              type="select"
              value={formData.department}
              onChange={handleChange}
              required
              options={[
                { value: "", label: "Select Department", disabled: true },
                { value: "HR", label: "HR" },
                { value: "Sales", label: "Sales" },
                { value: "Development", label: "Development" },
                { value: "Marketing", label: "Marketing" },
                { value: "Others", label: "Others" },
              ]}
            />
            
            <FormField
              label="Gender"
              name="gender"
              type="radio"
              value={formData.gender}
              onChange={handleChange}
              required
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
                { value: "Prefer not to say", label: "Prefer not to say" },
              ]}
            />
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 hover:bg-indigo-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Index;
