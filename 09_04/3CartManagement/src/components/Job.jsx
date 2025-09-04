import { useEffect, useState } from "react";
import Employee from "./Employee";

function Job() {
    const [jobList, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState("");

    useEffect(() => {
        setJobs(["Software Engineer", "Data Scientist", "Product Manager", "UX Designer", "All Employees"]);
    }, []);
    
    return(
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Job Details Portal</h1>
            
            <div className="mb-4">
                <label htmlFor="jobSelect" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Job:
                </label>
                
                <select 
                    id="jobSelect"
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="" disabled>-- Select a job role --</option>
                    {jobList.map((job, index) => (
                        <option key={index} value={job}>
                            {job}
                        </option>
                    ))}
                </select>
            </div>
            
            {selectedJob && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                    <p className="font-medium text-blue-800">
                        Selected Job: {selectedJob}
                    </p>
                    <Employee job={selectedJob} />
                </div>
            )}
        </div>
    );
}
export default Job;