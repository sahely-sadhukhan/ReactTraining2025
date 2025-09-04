function Employee({job}) {
    const jobDetails = {
        "Software Engineer": ["Scott", "Alice", "Bob", "Trent"],
        "Data Scientist": ["Eve", "Charlie", "David", "Zara", "Yvonne"],
        "Product Manager": ["Frank", "Heidi"],
        "UX Designer": ["Ivan", "Judy", "Mallory"]
    }
    let empList = "All Employees" === job ? 
        Object.values(jobDetails).flat() : jobDetails[job] || [];

    return(
        <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Employees for {job}:</h2>
            {empList.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-md">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="py-2 px-4 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {empList.map((emp, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 text-sm text-gray-500 text-left">{index + 1}</td>
                                    <td className="py-2 px-4 text-sm font-medium text-gray-700 text-left">{emp}</td>
                                    <td className="py-2 px-4 text-sm text-gray-500 text-left">{job}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-500">No employees found for this job role.</p>
            )}
        </div>
    );
}
export default Employee;