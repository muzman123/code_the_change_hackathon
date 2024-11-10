"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const FormPage: React.FC = () => {
    const router = useRouter();
    const [showSecondQuestion, setShowSecondQuestion] = useState(false);
    const [firstAnswer, setFirstAnswer] = useState("");
    const [secondAnswer, setSecondAnswer] = useState("");
    
    const [formData, setFormData] = useState({
        insideCanada: "",
        hasAppliedForAsylum: ""
    });

    // Update the formData with the first question answer
    const handleFirstQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstAnswer(event.target.value);
        setShowSecondQuestion(true);
    }

    // Update the formData with the second question answer
    const handleSecondQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSecondAnswer(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission

        // Update formData with the latest answers
        const updatedFormData = {
            insideCanada: firstAnswer,
            hasAppliedForAsylum: secondAnswer,
        };

        setFormData(updatedFormData); // This sets the final form data

        // Convert formData to a query param
        const jsonString = JSON.stringify(updatedFormData);
        const encodedData = encodeURIComponent(jsonString);

        // Navigate to the next page with the form data in the query params
        router.push(`/nextsteps?data=${encodedData}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Are you seeking asylum from inside Canada?</h1>
            <div className="mb-4">
                <label className="mr-4">
                    <input
                        type="radio"
                        name="firstQuestion"
                        value="yes"
                        onChange={handleFirstQuestionChange}
                        className="mr-2"
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        name="firstQuestion"
                        value="no"
                        onChange={handleFirstQuestionChange}
                        className="mr-2"
                    />
                    No
                </label>
            </div>

            {showSecondQuestion && (
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Have you applied for Asylum already?</h1>
                    <div className="mb-4">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="secondQuestion"
                                value="yes"
                                onChange={handleSecondQuestionChange}
                                className="mr-2"
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="secondQuestion"
                                value="no"
                                onChange={handleSecondQuestionChange}
                                className="mr-2"
                            />
                            No
                        </label>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default FormPage;
