import React from 'react'

const About=()=> {
    return (
        <>
            <div className="section-a-1">
                <div className="container">
                    <h1 className="text-center py-5">About Me</h1>
                </div>
                <div className="section-a-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Name: <span className="lead">Md Bappy Mia</span></h3>
                                <h3>Father Name: <span className="lead">Lal Mahammad</span></h3>
                                <h3>Mother Name: <span className="lead">Mst Morjina Khatun</span></h3>
                                <h3>Village: <span className="lead">Mollikpur</span></h3>
                                <h3>Post: <span className="lead">Kursha</span></h3>
                                <h3>Upzilla: <span className="lead">Mirpur</span></h3>
                                <h3>Distric: <span className="lead">Kushtia</span></h3>
                                <h3>Country: <span className="lead">Bangladesh</span></h3>
                                <h3>Nationality: <span className="lead">Bangladeshi</span></h3>
                                <h3>Date of Birth: <span className="lead">12 jun 1996</span></h3>
                            </div>
                            <div className="col-md-6"><img src="assets/bappy.png" alt=""/></div>
                        </div>
                    </div>
                </div>
                <div className="section-a-3 py-5">
                    <div className="container">
                        <h1 className="text-center py-5">Educational ststus</h1>
                         <table className="w-75 mx-auto">
                             <tr className="p-1 border-1">
                                 <th className="p-1 border-1">No.</th>
                                 <th className="p-1 border-1">Degree</th>
                                 <th className="p-1 border-1">Institution</th>
                                 <th className="p-1 border-1">Board</th>
                                 <th className="p-1 border-1">Group</th>
                                 <th className="p-1 border-1">Year</th>
                                 <th className="p-1 border-1">Result</th>
                             </tr>
                             <tr className="p-1 border-1">
                                 <td className="p-1 border-1">1</td>
                                 <td className="p-1 border-1">SSC</td>
                                 <td className="p-1 border-1">Kursha K,N High School</td>
                                 <td className="p-1 border-1">Jessore</td>
                                 <td className="p-1 border-1">Science</td>
                                 <td className="p-1 border-1">2012</td>
                                 <td className="p-1 border-1">GPA-5.00</td>
                             </tr>
                             <tr className="p-1 border-1">
                                 <td className="p-1 border-1">2</td>
                                 <td className="p-1 border-1">HSC</td>
                                 <td className="p-1 border-1">Kushtia Islamia College</td>
                                 <td className="p-1 border-1">Jessore</td>
                                 <td className="p-1 border-1">Science</td>
                                 <td className="p-1 border-1">2014</td>
                                 <td className="p-1 border-1">GPA-3.60</td>
                             </tr>
                             <tr className="p-1 border-1">
                                 <td className="p-1 border-1">3</td>
                                 <td className="p-1 border-1">BSc Engineering in ECE</td>
                                 <td className="p-1 border-1">Hajee Mohammad Danesh Science & Technology University</td>
                                 <td className="p-1 border-1">Dinajpur</td>
                                 <td className="p-1 border-1">Science</td>
                                 <td className="p-1 border-1">2019</td>
                                 <td className="p-1 border-1">N/A</td>
                             </tr>
                         </table>

                    </div>
                </div>
            </div>
            <div className="section-a-3 py-5">
                    <div className="container">
                        <h1 className="text-center py-5">Favourite</h1>
                        <h4>Favourite People: <span className="lead">Hazrat Mohammad(sm)</span></h4>
                        <h4>Favourite Game: <span className="lead">Cricket</span></h4>
                        <h4>Favourite Color: <span className="lead">Black</span></h4>
                    </div>
                </div>
        </>
    )
}
export default About