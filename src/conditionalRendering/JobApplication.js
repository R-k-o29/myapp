import React from "react";
 
 
export function JobApplication() {
    return (
        <div className="job-app-container">
            <h2>Job Application Form</h2>
            <form className="job-app-form">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" />
                </div>
 
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
 
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter your phone number" />
                </div>
 
                <div className="form-group">
                    <label>Position Applied For</label>
                    <select>
                        <option>Select Position</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>Full Stack Developer</option>
                    </select>
                </div>
 
                <div className="form-group">
                    <label>Upload Resume</label>
                    <input type="file" />
                </div>
 
                <div className="form-group">
                    <label>Cover Letter</label>
                    <textarea placeholder="Write your cover letter"></textarea>
                </div>
 
                <button type="button">Submit</button>
        </form>
    </div >
  );
};