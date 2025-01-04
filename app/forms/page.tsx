"use client";

import { useState } from "react";

// Define the type for form fields
interface FormField {
  label: string;
  type: string;
  value: string;
}

export default function DynamicForms() {
  // Initialize the state with the proper type
  const [formFields, setFormFields] = useState<FormField[]>([
    { label: "", type: "text", value: "" }
  ]);

  const handleAddField = () => {
    setFormFields([...formFields, { label: "", type: "text", value: "" }]);
  };

  // Update the handleChange function to work with FormField type
  const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedFields = [...formFields];
    updatedFields[index][event.target.name as keyof FormField] = event.target.value;
    setFormFields(updatedFields);
  };

  const handleSubmit = () => {
    console.log("Form Submitted", formFields);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Dynamic Forms</h1>
      </header>

      <section className="container mx-auto mt-12 p-6">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Create Custom Form</h2>
        <div className="space-y-4">
          {formFields.map((field, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <input
                type="text"
                name="label"
                placeholder="Field Label"
                value={field.label}
                onChange={(event) => handleChange(index, event)}
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="type"
                placeholder="Field Type (e.g., text, number)"
                value={field.type}
                onChange={(event) => handleChange(index, event)}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleAddField}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Add Field
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
          >
            Submit Form
          </button>
        </div>
      </section>
    </main>
  );
}
