import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import './about.css';
function About() {
  return (
    <div>
    <NavBar/>
    <div className="container mx-auto p-8">
    
      <h1 className="k"> EVENT MANAGEMENT SYSTEM</h1>
      <p className="s">
      A EVM, or Event management system, is a cloud-based software platform that solves a common problem for many global enterprises – how to find, engage, and manage its external workforce – both contract or contingent labor and services providers.
      </p>

      <div className="s">
        <h2 className="k">Key Features of EVM :</h2>
        <ul className="list-disc pl-6">
        <li>Finding and managing the right mix of labor, however, can be challenging. There are financial, legal, compliance, security, and cost implications to consider, particularly when it comes to employing a flexible, geographically distributed workforce. Companies that self-administer their extended workforce internally without a VMS can find themselves with administrative and managerial challenges. Workers and labor contractors may be spread across countries or continents with varying compliance and labor laws or spread across company departments with varying internal processes and technologies. With many parties and geographies involved in the talent sourcing, hiring, and on-boarding/off-boarding process, there is vast potential for miscommunication, inefficiency, untracked processes, and little visibility.</li>
         <li>Organizations can leverage a VMS to implement procedures that are consistent across the entire organization, including different departments, geographic locations, brands, or divisions – even if the programs are managed independently of one another. This not only helps with organizational efficiencies, but also with ensuring compliance with local governmental and internal policies.</li>
        </ul>
      </div>

      <p className="s">
      The data-analytics capabilities of vendor management software can enable better enterprise-wide decision-making. A VMS provides direct access to an organization’s full contingent workforce program to gauge successes, make necessary adjustments, and continuously produce positive results.      </p>
    </div>
    </div>
  );
}

export default About;
