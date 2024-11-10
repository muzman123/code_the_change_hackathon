"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const FormPage: React.FC = () => {
    const [showSecondQuestion, setShowSecondQuestion] = useState(false);
    const [firstAnswer, setFirstAnswer] = useState("");
    const [secondAnswer, setSecondAnswer] = useState("");
    
    const [formData, setFormData] = useState({
        insideCanada: "",
        hasAppliedForAsylum: ""
    });

    const handleFirstQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstAnswer(event.target.value);
        setShowSecondQuestion(true);
    }

    const handleSecondQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSecondAnswer(event.target.value);
        
        //if (event.target.value === 'yes') {
        //    setShowSecondQuestion(true);
        //} else {
        //    setShowSecondQuestion(false);
        //}
    };

    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            ...formData,
            insideCanada: firstAnswer
        });
        setFormData({
            ...formData,
            hasAppliedForAsylum: secondAnswer
        });
        
    };

    return (
        <div>
            <h1>Are you seeking asylum from inside Canada?</h1>
            <div>
                <label>
                    <input
                        type="radio"
                        name="firstQuestion"
                        value="yes"
                        onChange={handleFirstQuestionChange}
                    />
                    Yes
                </label>
                <label>
                    <input
                        type="radio"
                        name="firstQuestion"
                        value="no"
                        onChange={handleFirstQuestionChange}
                    />
                    No
                </label>
            </div>

            {showSecondQuestion && (
                <div>
                    <h1>Have you applied for Asylum already?</h1>
                    <div>
                        <label>
                            <input type="radio" name="secondQuestion" value="yes" onChange={handleSecondQuestionChange}/>
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="secondQuestion" value="no" onChange={handleSecondQuestionChange}/>
                            No
                        </label>
                    </div>
                    <div>
                        <Link href="/nextpage">
                            <button type="submit" onSubmit={handleSubmit} >Submit</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormPage;