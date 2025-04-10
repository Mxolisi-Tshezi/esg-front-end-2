// import React, { useState, useEffect } from "react";
// import { CheckCircle, Info, X } from "lucide-react";

// const ESGReportingApp = () => {
//   // State for the current step
//   const [currentStep, setCurrentStep] = useState(1);
//   const [activeTab, setActiveTab] = useState("board-composition");
//   const [formData, setFormData] = useState({
//     totalBoardMembers: 10,
//     blackMembers: 5,
//     whiteMembers: 3,
//     indianMembers: 1,
//     asianMembers: 0,
//     colouredMembers: 1,
//     below30Members: 2,
//     between30And50Members: 4,
//     above50Members: 4,
//     femaleMembers: 3,
//     maleMembers: 7,
//     blackPercentage: 50,
//     whitePercentage: 30,
//     indianPercentage: 10,
//     asianPercentage: 0,
//     colouredPercentage: 10,
//     below30Percentage: 20,
//     between30And50Percentage: 40,
//     above50Percentage: 40,
//     femalePercentage: 30,
//     malePercentage: 70,
//     boardProfile: "",
//     companyValues: "",
//     visionStatement: "",
//     industry: "",
//   });

//   const [reportGenerated, setReportGenerated] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const [generating, setGenerating] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   // Update form data
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle step navigation
//   const nextStep = () => {
//     if (currentStep < 4) {
//       setCurrentStep(currentStep + 1);
//     } else if (currentStep === 4) {
//       generateReport();
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   // Generate the report
//   const generateReport = () => {
//     setGenerating(true);
//     // Simulate report generation
//     setTimeout(() => {
//       setGenerating(false);
//       setReportGenerated(true);
//       setShowSuccessMessage(true);
//     }, 2000);
//   };

//   // Handle saving
//   const handleSave = () => {
//     setSaving(true);
//     // Simulate saving
//     setTimeout(() => {
//       setSaving(false);
//       setSaved(true);
//     }, 2000);
//   };

//   // Clear the form
//   const handleClear = () => {
//     setFormData({
//       totalBoardMembers: 0,
//       blackMembers: 0,
//       whiteMembers: 0,
//       indianMembers: 0,
//       asianMembers: 0,
//       colouredMembers: 0,
//       below30Members: 0,
//       between30And50Members: 0,
//       above50Members: 0,
//       femaleMembers: 0,
//       maleMembers: 0,
//       blackPercentage: 0,
//       whitePercentage: 0,
//       indianPercentage: 0,
//       asianPercentage: 0,
//       colouredPercentage: 0,
//       below30Percentage: 0,
//       between30And50Percentage: 0,
//       above50Percentage: 0,
//       femalePercentage: 0,
//       malePercentage: 0,
//       boardProfile: "",
//       companyValues: "",
//       visionStatement: "",
//       industry: "",
//     });
//     setReportGenerated(false);
//     setShowSuccessMessage(false);
//   };

//   // Steps component
//   const Steps = () => {
//     return (
//       <div className="flex justify-center items-center mb-8 mt-8">
//         <div className="flex items-center">
//           {[1, 2, 3, 4].map((step, index) => (
//             <React.Fragment key={step}>
//               <div
//                 className={`rounded-full w-8 h-8 flex items-center justify-center ${
//                   currentStep > step
//                     ? "bg-green-500 text-white"
//                     : currentStep === step
//                     ? "bg-green-500 text-white"
//                     : "bg-gray-300 text-gray-600"
//                 }`}
//               >
//                 {currentStep > step ? <CheckCircle size={16} /> : step}
//               </div>

//               {step < 4 && (
//                 <div
//                   className={`h-1 w-24 ${
//                     currentStep > step ? "bg-green-500" : "bg-gray-300"
//                   }`}
//                 ></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   // Step labels
//   const StepLabels = () => {
//     return (
//       <div className="flex justify-center text-center mb-8">
//         <div className="w-8 mx-12">
//           <div className="text-sm">Governance</div>
//         </div>
//         <div className="w-8 mx-12">
//           <div className="text-sm">Social</div>
//         </div>
//         <div className="w-8 mx-12">
//           <div className="text-sm">Environmental</div>
//         </div>
//         <div className="w-8 mx-12">
//           <div className="text-sm">Generate Report</div>
//         </div>
//       </div>
//     );
//   };

//   // Governance tabs
//   const GovernanceTabs = () => {
//     return (
//       <div className="flex border-b mb-6">
//         <div
//           className={`pb-2 px-4 cursor-pointer ${
//             activeTab === "board-composition"
//               ? "border-b-2 border-green-500 text-green-500"
//               : ""
//           }`}
//           onClick={() => setActiveTab("board-composition")}
//         >
//           Board composition
//           <span className="ml-1 text-green-500">✓</span>
//         </div>
//         <div
//           className={`pb-2 px-4 cursor-pointer ${
//             activeTab === "ethical-behaviour"
//               ? "border-b-2 border-green-500 text-green-500"
//               : ""
//           }`}
//           onClick={() => setActiveTab("ethical-behaviour")}
//         >
//           Ethical behaviour
//           <span className="ml-1 text-green-500">✓</span>
//         </div>
//         <div
//           className={`pb-2 px-4 cursor-pointer ${
//             activeTab === "compliance"
//               ? "border-b-2 border-green-500 text-green-500"
//               : ""
//           }`}
//           onClick={() => setActiveTab("compliance")}
//         >
//           Compliance and risk management
//           <span className="ml-1 text-green-500">✓</span>
//         </div>
//         <div
//           className={`pb-2 px-4 cursor-pointer ${
//             activeTab === "tax"
//               ? "border-b-2 border-green-500 text-green-500"
//               : ""
//           }`}
//           onClick={() => setActiveTab("tax")}
//         >
//           Tax transparency
//           <span className="ml-1 text-green-500">✓</span>
//         </div>
//       </div>
//     );
//   };

//   // Board diversity form
//   const BoardDiversityForm = () => {
//     return (
//       <div>
//         <div className="mb-6">
//           <h2 className="text-lg font-medium mb-4">
//             1. Board diversity
//             <span className="text-green-500 ml-1">
//               <Info size={16} className="inline" />
//             </span>
//           </h2>

//           <div className="grid grid-cols-2 gap-8">
//             <div>
//               <label className="block mb-2">
//                 Total number of Board members (#){" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="totalBoardMembers"
//                 value={formData.totalBoardMembers}
//                 onChange={handleInputChange}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Number of Board members who are Black (#){" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="blackMembers"
//                 value={formData.blackMembers}
//                 onChange={handleInputChange}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Percentage of Board members who are Black (%){" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="blackPercentage"
//                 value={formData.blackPercentage}
//                 onChange={handleInputChange}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Number of Board members who are White (#){" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="whiteMembers"
//                 value={formData.whiteMembers}
//                 onChange={handleInputChange}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Percentage of Board members who are White (%){" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="whitePercentage"
//                 value={formData.whitePercentage}
//                 onChange={handleInputChange}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Number of Board members who are Indian (#){" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="indianMembers"
//                 value={formData.indianMembers}
//                 onChange={handleInputChange}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Percentage of Board members who are Indian (%){" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="indianPercentage"
//                 value={formData.indianPercentage}
//                 onChange={handleInputChange}
//                 className="border p-2 w-full rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">
//                 Number of Board members who are Asian (#){" "}
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 name="asianMembers"
//                 value={formData.asianMembers}
//                 onChange={handleInputChange}
//                 className="border p-2 w-full rounded"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mb-6">
//           <h2 className="text-lg font-medium mb-4">
//             2. Board independence
//             <span className="text-green-500 ml-1">
//               <Info size={16} className="inline" />
//             </span>
//           </h2>
//         </div>

//         <div className="mb-6">
//           <label className="block mb-2">
//             Board Profile <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             name="boardProfile"
//             value={formData.boardProfile}
//             onChange={handleInputChange}
//             className="border p-2 w-full rounded h-32"
//           ></textarea>
//         </div>
//       </div>
//     );
//   };

//   // Company information form
//   const CompanyInfoForm = () => {
//     return (
//       <div>
//         <div className="mb-8">
//           <h2 className="text-lg font-medium mb-4">
//             2. What are your company's core values?
//             <span className="text-red-500">*</span>
//           </h2>
//           <input
//             type="text"
//             name="companyValues"
//             value={formData.companyValues}
//             onChange={handleInputChange}
//             className="border p-2 w-full rounded"
//           />
//         </div>

//         <div className="mb-8">
//           <h2 className="text-lg font-medium mb-4">
//             5. What is your company's vision statement?
//             <span className="text-red-500">*</span>
//           </h2>
//           <input
//             type="text"
//             name="visionStatement"
//             value={formData.visionStatement}
//             onChange={handleInputChange}
//             className="border p-2 w-full rounded"
//           />
//         </div>

//         <div className="mb-8">
//           <h2 className="text-lg font-medium mb-4">
//             6. What industry does your company operate in?
//             <span className="text-red-500">*</span>
//           </h2>
//           <input
//             type="text"
//             name="industry"
//             value={formData.industry}
//             onChange={handleInputChange}
//             className="border p-2 w-full rounded"
//           />
//         </div>
//       </div>
//     );
//   };

//   // Success message banner
//   const SuccessMessage = () => {
//     return (
//       <div className="bg-green-500 text-white p-3 flex justify-between items-center">
//         <p>
//           Your report has been successfully generated. Download your ESG report.
//         </p>
//         <button
//           onClick={() => setShowSuccessMessage(false)}
//           className="text-white"
//         >
//           <X size={20} />
//         </button>
//       </div>
//     );
//   };

//   // Render the appropriate step content
//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <div>
//             <GovernanceTabs />
//             <BoardDiversityForm />
//           </div>
//         );
//       case 2:
//         return <CompanyInfoForm />;
//       case 3:
//         return (
//           <div className="text-center py-12">
//             Environmental step content would go here
//           </div>
//         );
//       case 4:
//         return (
//           <div className="text-center py-12">
//             {generating ? (
//               <div>Generating...</div>
//             ) : reportGenerated ? (
//               <div>
//                 <div className="flex justify-center gap-4 mt-8">
//                   <button
//                     onClick={handleClear}
//                     className="px-6 py-2 border border-gray-300 rounded text-gray-700"
//                   >
//                     Clear
//                   </button>
//                   <button
//                     onClick={() => {}}
//                     className="px-6 py-2 bg-green-500 text-white rounded"
//                   >
//                     Download
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 Click Generate to create your ESG report.
//                 <div className="flex justify-center gap-4 mt-8">
//                   <button
//                     onClick={handleClear}
//                     className="px-6 py-2 border border-gray-300 rounded text-gray-700"
//                   >
//                     Clear
//                   </button>
//                   <button
//                     onClick={generateReport}
//                     className="px-6 py-2 bg-green-500 text-white rounded"
//                   >
//                     Generate
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         );
//       default:
//         return <div>Unknown step</div>;
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {showSuccessMessage && <SuccessMessage />}
//       <header className="bg-white p-4 border-b">
//         <div className="max-w-6xl mx-auto flex items-center">
//           <div className="text-green-500 font-bold text-lg flex items-start">
//             <div className="flex items-start">
//               BESPOKE
//               <span className="text-xs align-top">TM</span>
//             </div>
//             <div>INSIGHT</div>
//           </div>
//           <div className="ml-8 text-gray-700">
//             JSE Sustainability Disclosure Guidance based reporting
//           </div>

//           {saving && <div className="ml-auto text-gray-500">Saving ...</div>}

//           {saved && <div className="ml-auto text-gray-500">Saved</div>}
//         </div>
//       </header>

//       <main className="max-w-6xl mx-auto p-4">
//         <div className="bg-white p-8 rounded shadow">
//           <Steps />
//           <StepLabels />

//           {renderStepContent()}

//           <div className="flex justify-center gap-4 mt-8">
//             {currentStep > 1 && !reportGenerated && (
//               <button
//                 onClick={prevStep}
//                 className="px-6 py-2 border border-gray-300 rounded text-gray-700"
//               >
//                 Previous
//               </button>
//             )}
//             {currentStep < 4 && (
//               <button
//                 onClick={nextStep}
//                 className="px-6 py-2 bg-green-500 text-white rounded"
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ESGReportingApp;



import React, { useState, useEffect } from "react";
import { CheckCircle, Info, X, AlertTriangle } from "lucide-react";

const ESGReportingApp = () => {
  // State for the current step
  const [currentStep, setCurrentStep] = useState(1);
  const [activeTab, setActiveTab] = useState("board-composition");
  const [activeSocialTab, setActiveSocialTab] = useState("employee-metrics");
  const [activeEnvironmentalTab, setActiveEnvironmentalTab] = useState("carbon-emissions");
  const [formData, setFormData] = useState({
    // Governance - Board Composition
    totalBoardMembers: 10,
    blackMembers: 5,
    whiteMembers: 3,
    indianMembers: 1,
    asianMembers: 0,
    colouredMembers: 1,
    below30Members: 2,
    between30And50Members: 4,
    above50Members: 4,
    femaleMembers: 3,
    maleMembers: 7,
    blackPercentage: 50,
    whitePercentage: 30,
    indianPercentage: 10,
    asianPercentage: 0,
    colouredPercentage: 10,
    below30Percentage: 20,
    between30And50Percentage: 40,
    above50Percentage: 40,
    femalePercentage: 30,
    malePercentage: 70,
    boardProfile: "",

    // Governance - Ethical Behavior
    codeOfEthicsExists: "yes",
    codeOfEthicsDescription: "Our code of ethics is based on transparency, integrity, and accountability across all operations.",
    
    // Governance - Compliance & Risk
    riskManagementFramework: "We utilize the COSO framework for enterprise risk management, integrated with ISO 31000 principles.",
    complianceMechanisms: "Our compliance is monitored through quarterly assessments and annual third-party audits.",
    
    // Governance - Tax Transparency
    taxPolicy: "We maintain full transparency in our tax affairs, with a commitment to paying the correct amount of tax in all jurisdictions where we operate.",
    taxDisclosures: "We publish a comprehensive tax report annually, detailing our contributions by country.",
    
    // Social - Company Info
    companyValues: "Integrity, Innovation, Inclusion, and Environmental Stewardship",
    visionStatement: "To lead our industry in sustainable practices while delivering exceptional value to all stakeholders",
    industry: "Manufacturing",
    
    // Social - Employee Metrics
    totalEmployees: 1240,
    employeeTurnover: 7.5,
    diversityPrograms: "We have implemented targeted recruitment, mentoring, and development programs to increase diversity at all levels.",
    
    // Social - Human Rights
    humanRightsPolicyExists: "yes",
    humanRightsPolicyDescription: "Our Human Rights Policy aligns with the UN Guiding Principles on Business and Human Rights, covering all operations and supply chain partners.",
    
    // Environmental - Carbon Emissions
    totalCarbonEmissions: 25000,
    emissionsUnit: "tonnes CO2e",
    reductionTarget: 30,
    targetYear: 2030,
    emissionsBreakdown: "Scope 1: 35%, Scope 2: 45%, Scope 3: 20%",
    
    // Environmental - Water Usage
    totalWaterConsumption: 150000,
    waterUnit: "kiloliters",
    waterReductionTarget: 25,
    waterTargetYear: 2028,
    waterReusePercentage: 15,
    waterStressedAreas: "12% of our operations are in water-stressed areas, with enhanced conservation measures in place.",
  });

  const [reportGenerated, setReportGenerated] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // Calculate percentages automatically when numbers change
  useEffect(() => {
    if (formData.totalBoardMembers > 0) {
      setFormData({
        ...formData,
        blackPercentage: Math.round((formData.blackMembers / formData.totalBoardMembers) * 100),
        whitePercentage: Math.round((formData.whiteMembers / formData.totalBoardMembers) * 100),
        indianPercentage: Math.round((formData.indianMembers / formData.totalBoardMembers) * 100),
        asianPercentage: Math.round((formData.asianMembers / formData.totalBoardMembers) * 100),
        colouredPercentage: Math.round((formData.colouredMembers / formData.totalBoardMembers) * 100),
        below30Percentage: Math.round((formData.below30Members / formData.totalBoardMembers) * 100),
        between30And50Percentage: Math.round((formData.between30And50Members / formData.totalBoardMembers) * 100),
        above50Percentage: Math.round((formData.above50Members / formData.totalBoardMembers) * 100),
        femalePercentage: Math.round((formData.femaleMembers / formData.totalBoardMembers) * 100),
        malePercentage: Math.round((formData.maleMembers / formData.totalBoardMembers) * 100),
      });
    }
  }, [
    formData.totalBoardMembers, 
    formData.blackMembers, 
    formData.whiteMembers, 
    formData.indianMembers, 
    formData.asianMembers, 
    formData.colouredMembers,
    formData.below30Members,
    formData.between30And50Members,
    formData.above50Members,
    formData.femaleMembers,
    formData.maleMembers
  ]);

  // Update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate current step
  const validateCurrentStep = () => {
    const errors = {};
    
    switch(currentStep) {
      case 1: // Governance
        if (activeTab === "board-composition") {
          if (!formData.totalBoardMembers) errors.totalBoardMembers = "Required";
          // Add more validation as needed
        } else if (activeTab === "ethical-behaviour") {
          if (!formData.codeOfEthicsDescription) errors.codeOfEthicsDescription = "Required";
        } else if (activeTab === "compliance") {
          if (!formData.riskManagementFramework) errors.riskManagementFramework = "Required";
        } else if (activeTab === "tax") {
          if (!formData.taxPolicy) errors.taxPolicy = "Required";
        }
        break;
      case 2: // Social
        if (activeSocialTab === "employee-metrics") {
          if (!formData.totalEmployees) errors.totalEmployees = "Required";
        } else if (activeSocialTab === "human-rights") {
          if (formData.humanRightsPolicyExists === "yes" && !formData.humanRightsPolicyDescription) {
            errors.humanRightsPolicyDescription = "Required if policy exists";
          }
        }
        break;
      case 3: // Environmental
        if (activeEnvironmentalTab === "carbon-emissions") {
          if (!formData.totalCarbonEmissions) errors.totalCarbonEmissions = "Required";
        } else if (activeEnvironmentalTab === "water-usage") {
          if (!formData.totalWaterConsumption) errors.totalWaterConsumption = "Required";
        }
        break;
      default:
        break;
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle step navigation
  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
        setValidationErrors({});
      } else if (currentStep === 4) {
        generateReport();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setValidationErrors({});
    }
  };

  // Generate the report
  const generateReport = () => {
    setGenerating(true);
    // Simulate report generation
    setTimeout(() => {
      setGenerating(false);
      setReportGenerated(true);
      setShowSuccessMessage(true);
    }, 2000);
  };

  // Handle saving
  const handleSave = () => {
    setSaving(true);
    // Simulate saving
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      
      // Reset saved indicator after 3 seconds
      setTimeout(() => {
        setSaved(false);
      }, 3000);
    }, 2000);
  };

  // Clear the form
  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all form data? This action cannot be undone.")) {
      setFormData({
        // Reset all form fields to default/empty values
        totalBoardMembers: 0,
        blackMembers: 0,
        whiteMembers: 0,
        indianMembers: 0,
        asianMembers: 0,
        colouredMembers: 0,
        below30Members: 0,
        between30And50Members: 0,
        above50Members: 0,
        femaleMembers: 0,
        maleMembers: 0,
        blackPercentage: 0,
        whitePercentage: 0,
        indianPercentage: 0,
        asianPercentage: 0,
        colouredPercentage: 0,
        below30Percentage: 0,
        between30And50Percentage: 0,
        above50Percentage: 0,
        femalePercentage: 0,
        malePercentage: 0,
        boardProfile: "",
        codeOfEthicsExists: "",
        codeOfEthicsDescription: "",
        riskManagementFramework: "",
        complianceMechanisms: "",
        taxPolicy: "",
        taxDisclosures: "",
        companyValues: "",
        visionStatement: "",
        industry: "",
        totalEmployees: 0,
        employeeTurnover: 0,
        diversityPrograms: "",
        humanRightsPolicyExists: "",
        humanRightsPolicyDescription: "",
        totalCarbonEmissions: 0,
        emissionsUnit: "tonnes CO2e",
        reductionTarget: 0,
        targetYear: 2030,
        emissionsBreakdown: "",
        totalWaterConsumption: 0,
        waterUnit: "kiloliters",
        waterReductionTarget: 0,
        waterTargetYear: 2030,
        waterReusePercentage: 0,
        waterStressedAreas: "",
      });
      setReportGenerated(false);
      setShowSuccessMessage(false);
    }
  };

  // Steps component
  const Steps = () => {
    return (
      <div className="flex justify-center items-center mb-8 mt-8">
        <div className="flex items-center">
          {[1, 2, 3, 4].map((step, index) => (
            <React.Fragment key={step}>
              <div
                className={`rounded-full w-8 h-8 flex items-center justify-center ${
                  currentStep > step
                    ? "bg-green-500 text-white"
                    : currentStep === step
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {currentStep > step ? <CheckCircle size={16} /> : step}
              </div>

              {step < 4 && (
                <div
                  className={`h-1 w-24 ${
                    currentStep > step ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  // Step labels
  const StepLabels = () => {
    return (
      <div className="flex justify-center text-center mb-8">
        <div className="w-8 mx-12">
          <div className="text-sm">Governance</div>
        </div>
        <div className="w-8 mx-12">
          <div className="text-sm">Social</div>
        </div>
        <div className="w-8 mx-12">
          <div className="text-sm">Environmental</div>
        </div>
        <div className="w-8 mx-12">
          <div className="text-sm">Generate Report</div>
        </div>
      </div>
    );
  };

  // Governance tabs
  const GovernanceTabs = () => {
    return (
      <div className="flex border-b mb-6 overflow-x-auto">
        <div
          className={`pb-2 px-4 cursor-pointer whitespace-nowrap ${
            activeTab === "board-composition"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setActiveTab("board-composition")}
        >
          Board composition
          <span className="ml-1 text-green-500">✓</span>
        </div>
        <div
          className={`pb-2 px-4 cursor-pointer whitespace-nowrap ${
            activeTab === "ethical-behaviour"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setActiveTab("ethical-behaviour")}
        >
          Ethical behaviour
          <span className="ml-1 text-green-500">✓</span>
        </div>
        <div
          className={`pb-2 px-4 cursor-pointer whitespace-nowrap ${
            activeTab === "compliance"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setActiveTab("compliance")}
        >
          Compliance and risk management
          <span className="ml-1 text-green-500">✓</span>
        </div>
        <div
          className={`pb-2 px-4 cursor-pointer whitespace-nowrap ${
            activeTab === "tax"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setActiveTab("tax")}
        >
          Tax transparency
          <span className="ml-1 text-green-500">✓</span>
        </div>
      </div>
    );
  };

  // Social tabs
  const SocialTabs = () => {
    return (
      <div className="flex border-b mb-6 overflow-x-auto">
        <div
          className={`pb-2 px-4 cursor-pointer whitespace-nowrap ${
            activeSocialTab === "employee-metrics"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setActiveSocialTab("employee-metrics")}
        >
          Employee Metrics
          <span className="ml-1 text-green-500">✓</span>
        </div>
        <div
          className={`pb-2 px-4 cursor-pointer whitespace-nowrap ${
            activeSocialTab === "human-rights"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setActiveSocialTab("human-rights")}
        >
          Human Rights Policy
          <span className="ml-1 text-green-500">✓</span>
        </div>
        <div
          className={`pb-2 px-4 cursor-pointer whitespace-nowrap ${
            activeSocialTab === "company-info"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setActiveSocialTab("company-info")}
        >
          Company Information
          <span className="ml-1 text-green-500">✓</span>
        </div>
      </div>
    );
  };

  // Environmental tabs
  const EnvironmentalTabs = () => {
    return (
      <div className="flex border-b mb-6 overflow-x-auto">
        <div
          className={`pb-2 px-4 cursor-pointer whitespace-nowrap ${
            activeEnvironmentalTab === "carbon-emissions"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setActiveEnvironmentalTab("carbon-emissions")}
        >
          Carbon Emissions
          <span className="ml-1 text-green-500">✓</span>
        </div>
        <div
          className={`pb-2 px-4 cursor-pointer whitespace-nowrap ${
            activeEnvironmentalTab === "water-usage"
              ? "border-b-2 border-green-500 text-green-500"
              : ""
          }`}
          onClick={() => setActiveEnvironmentalTab("water-usage")}
        >
          Water Usage
          <span className="ml-1 text-green-500">✓</span>
        </div>
      </div>
    );
  };

  // Board diversity form
  const BoardDiversityForm = () => {
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">
            1. Board diversity
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">
                Total number of Board members (#){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="totalBoardMembers"
                value={formData.totalBoardMembers}
                onChange={handleInputChange}
                className={`border p-2 w-full rounded ${
                  validationErrors.totalBoardMembers ? "border-red-500" : ""
                }`}
              />
              {validationErrors.totalBoardMembers && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.totalBoardMembers}</p>
              )}
            </div>

            <div>
              <label className="block mb-2">
                Number of Board members who are Black (#){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="blackMembers"
                value={formData.blackMembers}
                onChange={handleInputChange}
                className={`border p-2 w-full rounded ${
                  validationErrors.blackMembers ? "border-red-500" : ""
                }`}
              />
              {validationErrors.blackMembers && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.blackMembers}</p>
              )}
            </div>

            <div>
              <label className="block mb-2">
                Percentage of Board members who are Black (%){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="blackPercentage"
                value={formData.blackPercentage}
                readOnly
                className="border p-2 w-full rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-2">
                Number of Board members who are White (#){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="whiteMembers"
                value={formData.whiteMembers}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Percentage of Board members who are White (%){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="whitePercentage"
                value={formData.whitePercentage}
                readOnly
                className="border p-2 w-full rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-2">
                Number of Board members who are Indian (#){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="indianMembers"
                value={formData.indianMembers}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Percentage of Board members who are Indian (%){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="indianPercentage"
                value={formData.indianPercentage}
                readOnly
                className="border p-2 w-full rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-2">
                Number of Board members who are Asian (#){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="asianMembers"
                value={formData.asianMembers}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Percentage of Board members who are Asian (%){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="asianPercentage"
                value={formData.asianPercentage}
                readOnly
                className="border p-2 w-full rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-2">
                Number of Board members who are Coloured (#){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="colouredMembers"
                value={formData.colouredMembers}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Percentage of Board members who are Coloured (%){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="colouredPercentage"
                value={formData.colouredPercentage}
                readOnly
                className="border p-2 w-full rounded bg-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">
            2. Gender Diversity
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">
                Number of Female Board members (#){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="femaleMembers"
                value={formData.femaleMembers}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Percentage of Female Board members (%){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="femalePercentage"
                value={formData.femalePercentage}
                readOnly
                className="border p-2 w-full rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-2">
                Number of Male Board members (#){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="maleMembers"
                value={formData.maleMembers}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Percentage of Male Board members (%){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="malePercentage"
                value={formData.malePercentage}
                readOnly
                className="border p-2 w-full rounded bg-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">
            3. Age Diversity
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">
                Number of Board members below 30 years (#){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="below30Members"
                value={formData.below30Members}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Percentage of Board members below 30 years (%){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="below30Percentage"
                value={formData.below30Percentage}
                readOnly
                className="border p-2 w-full rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-2">
                Number of Board members between 30-50 years (#){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="between30And50Members"
                value={formData.between30And50Members}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Percentage of Board members between 30-50 years (%){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="between30And50Percentage"
                value={formData.between30And50Percentage}
                readOnly
                className="border p-2 w-full rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-2">
                Number of Board members above 50 years (#){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="above50Members"
                value={formData.above50Members}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Percentage of Board members above 50 years (%){" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="above50Percentage"
                value={formData.above50Percentage}
                readOnly
                className="border p-2 w-full rounded bg-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Board Profile <span className="text-red-500">*</span>
          </label>
          <textarea
            name="boardProfile"
            value={formData.boardProfile}
            onChange={handleInputChange}
            placeholder="Provide a brief description of your board's expertise, experience and qualifications..."
            className="border p-2 w-full rounded h-32"
          ></textarea>
        </div>
      </div>
    );
  };

  // Ethical Behavior Form
  const EthicalBehaviorForm = () => {
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">
            Code of Ethics
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>

          <div className="mb-6">
            <label className="block mb-2">
              Does your company have a Code of Ethics? <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="codeOfEthicsExists"
                  value="yes"
                  checked={formData.codeOfEthicsExists === "yes"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="codeOfEthicsExists"
                  value="no"
                  checked={formData.codeOfEthicsExists === "no"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          {formData.codeOfEthicsExists === "yes" && (
            <div className="mb-6">
              <label className="block mb-2">
                Describe your Code of Ethics <span className="text-red-500">*</span>
              </label>
              <textarea
                name="codeOfEthicsDescription"
                value={formData.codeOfEthicsDescription}
                onChange={handleInputChange}
                placeholder="Describe the key elements and principles of your code of ethics..."
                className={`border p-2 w-full rounded h-32 ${
                  validationErrors.codeOfEthicsDescription ? "border-red-500" : ""
                }`}
              ></textarea>
              {validationErrors.codeOfEthicsDescription && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.codeOfEthicsDescription}</p>
              )}
            </div>
          )}

          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-4">
              <AlertTriangle size={16} className="inline mr-1" /> 
              The Code of Ethics is a foundational document that guides ethical decision-making across your organization. 
              It should address conflicts of interest, anti-corruption, whistleblower protection, and fair business practices.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Compliance and Risk Management Form
  const ComplianceForm = () => {
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">
            Risk Management Framework
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>

          <div className="mb-6">
            <label className="block mb-2">
              Describe your risk management framework <span className="text-red-500">*</span>
            </label>
            <textarea
              name="riskManagementFramework"
              value={formData.riskManagementFramework}
              onChange={handleInputChange}
              placeholder="Describe the framework used to identify, assess, and manage risks..."
              className={`border p-2 w-full rounded h-32 ${
                validationErrors.riskManagementFramework ? "border-red-500" : ""
              }`}
            ></textarea>
            {validationErrors.riskManagementFramework && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.riskManagementFramework}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Compliance monitoring mechanisms <span className="text-red-500">*</span>
            </label>
            <textarea
              name="complianceMechanisms"
              value={formData.complianceMechanisms}
              onChange={handleInputChange}
              placeholder="Describe how compliance is monitored and enforced..."
              className="border p-2 w-full rounded h-32"
            ></textarea>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-4">
              <AlertTriangle size={16} className="inline mr-1" /> 
              Effective risk management and compliance are critical components of good governance. 
              Your framework should address environmental, social, and governance risks relevant to your industry.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Tax Transparency Form
  const TaxForm = () => {
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">
            Tax Policy and Disclosures
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>

          <div className="mb-6">
            <label className="block mb-2">
              Describe your tax policy <span className="text-red-500">*</span>
            </label>
            <textarea
              name="taxPolicy"
              value={formData.taxPolicy}
              onChange={handleInputChange}
              placeholder="Outline your company's approach to taxation and tax planning..."
              className={`border p-2 w-full rounded h-32 ${
                validationErrors.taxPolicy ? "border-red-500" : ""
              }`}
            ></textarea>
            {validationErrors.taxPolicy && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.taxPolicy}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Tax transparency disclosures <span className="text-red-500">*</span>
            </label>
            <textarea
              name="taxDisclosures"
              value={formData.taxDisclosures}
              onChange={handleInputChange}
              placeholder="Describe the tax information you publicly disclose..."
              className="border p-2 w-full rounded h-32"
            ></textarea>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-4">
              <AlertTriangle size={16} className="inline mr-1" /> 
              Tax transparency is increasingly viewed as an important component of corporate responsibility. 
              Best practice includes country-by-country reporting of tax contributions.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Employee Metrics Form
  const EmployeeMetricsForm = () => {
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">
            Workforce Metrics
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">
                Total number of employees (#) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="totalEmployees"
                value={formData.totalEmployees}
                onChange={handleInputChange}
                className={`border p-2 w-full rounded ${
                  validationErrors.totalEmployees ? "border-red-500" : ""
                }`}
              />
              {validationErrors.totalEmployees && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.totalEmployees}</p>
              )}
            </div>

            <div>
              <label className="block mb-2">
                Employee turnover rate (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                step="0.1"
                name="employeeTurnover"
                value={formData.employeeTurnover}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>
          </div>

          <div className="mb-6 mt-6">
            <label className="block mb-2">
              Diversity and inclusion programs <span className="text-red-500">*</span>
            </label>
            <textarea
              name="diversityPrograms"
              value={formData.diversityPrograms}
              onChange={handleInputChange}
              placeholder="Describe your key diversity and inclusion initiatives..."
              className="border p-2 w-full rounded h-32"
            ></textarea>
          </div>
        </div>
      </div>
    );
  };

  // Human Rights Policy Form
  const HumanRightsPolicyForm = () => {
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">
            Human Rights Policy
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>

          <div className="mb-6">
            <label className="block mb-2">
              Does your company have a Human Rights Policy? <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="humanRightsPolicyExists"
                  value="yes"
                  checked={formData.humanRightsPolicyExists === "yes"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="humanRightsPolicyExists"
                  value="no"
                  checked={formData.humanRightsPolicyExists === "no"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          {formData.humanRightsPolicyExists === "yes" && (
            <div className="mb-6">
              <label className="block mb-2">
                Describe your Human Rights Policy <span className="text-red-500">*</span>
              </label>
              <textarea
                name="humanRightsPolicyDescription"
                value={formData.humanRightsPolicyDescription}
                onChange={handleInputChange}
                placeholder="Describe the scope and implementation of your human rights policy..."
                className={`border p-2 w-full rounded h-32 ${
                  validationErrors.humanRightsPolicyDescription ? "border-red-500" : ""
                }`}
              ></textarea>
              {validationErrors.humanRightsPolicyDescription && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.humanRightsPolicyDescription}</p>
              )}
            </div>
          )}

          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-4">
              <AlertTriangle size={16} className="inline mr-1" /> 
              A robust Human Rights Policy should align with international standards such as the UN Guiding Principles 
              on Business and Human Rights and cover both direct operations and supply chain relationships.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Company Information Form
  const CompanyInfoForm = () => {
    return (
      <div>
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">
            Company Values and Industry
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>

          <div className="mb-6">
            <label className="block mb-2">
              What are your company's core values? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyValues"
              value={formData.companyValues}
              onChange={handleInputChange}
              placeholder="e.g., Integrity, Innovation, Sustainability, Excellence"
              className="border p-2 w-full rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              What is your company's vision statement? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="visionStatement"
              value={formData.visionStatement}
              onChange={handleInputChange}
              placeholder="Enter your company's vision statement..."
              className="border p-2 w-full rounded h-24"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              What industry does your company operate in? <span className="text-red-500">*</span>
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
            >
              <option value="">Select an industry</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Financial Services">Financial Services</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Technology">Technology</option>
              <option value="Consumer Goods">Consumer Goods</option>
              <option value="Energy">Energy</option>
              <option value="Mining">Mining</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Retail">Retail</option>
              <option value="Construction">Construction</option>
              <option value="Transportation">Transportation</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>
    );
  };

  // Carbon Emissions Form
  const CarbonEmissionsForm = () => {
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">
            Carbon Emissions
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">
                Total carbon emissions <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="totalCarbonEmissions"
                value={formData.totalCarbonEmissions}
                onChange={handleInputChange}
                className={`border p-2 w-full rounded ${
                  validationErrors.totalCarbonEmissions ? "border-red-500" : ""
                }`}
              />
              {validationErrors.totalCarbonEmissions && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.totalCarbonEmissions}</p>
              )}
            </div>

            <div>
              <label className="block mb-2">
                Unit of measurement <span className="text-red-500">*</span>
              </label>
              <select
                name="emissionsUnit"
                value={formData.emissionsUnit}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              >
                <option value="tonnes CO2e">tonnes CO2e</option>
                <option value="kg CO2e">kg CO2e</option>
                <option value="million tonnes CO2e">million tonnes CO2e</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <label className="block mb-2">
                Emissions reduction target (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="reductionTarget"
                value={formData.reductionTarget}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Target year <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="targetYear"
                value={formData.targetYear}
                onChange={handleInputChange}
                min="2023"
                max="2050"
                className="border p-2 w-full rounded"
              />
            </div>
          </div>

          <div className="mb-6 mt-6">
            <label className="block mb-2">
              Emissions breakdown (Scope 1, 2, 3) <span className="text-red-500">*</span>
            </label>
            <textarea
              name="emissionsBreakdown"
              value={formData.emissionsBreakdown}
              onChange={handleInputChange}
              placeholder="Provide a breakdown of emissions by scope..."
              className="border p-2 w-full rounded h-32"
            ></textarea>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-4">
              <AlertTriangle size={16} className="inline mr-1" /> 
              Scope 1 refers to direct emissions from owned or controlled sources.
              Scope 2 refers to indirect emissions from purchased electricity, steam, heating, and cooling.
              Scope 3 includes all other indirect emissions in a company's value chain.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Water Usage Form
  const WaterUsageForm = () => {
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">
            Water Consumption
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">
                Total water consumption <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="totalWaterConsumption"
                value={formData.totalWaterConsumption}
                onChange={handleInputChange}
                className={`border p-2 w-full rounded ${
                  validationErrors.totalWaterConsumption ? "border-red-500" : ""
                }`}
              />
              {validationErrors.totalWaterConsumption && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.totalWaterConsumption}</p>
              )}
            </div>

            <div>
              <label className="block mb-2">
                Unit of measurement <span className="text-red-500">*</span>
              </label>
              <select
                name="waterUnit"
                value={formData.waterUnit}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              >
                <option value="kiloliters">kiloliters</option>
                <option value="megalitres">megalitres</option>
                <option value="cubic meters">cubic meters</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <label className="block mb-2">
                Water reduction target (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="waterReductionTarget"
                value={formData.waterReductionTarget}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>

            <div>
              <label className="block mb-2">
                Target year <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="waterTargetYear"
                value={formData.waterTargetYear}
                onChange={handleInputChange}
                min="2023"
                max="2050"
                className="border p-2 w-full rounded"
              />
            </div>
          </div>

          <div className="mb-6 mt-6">
            <label className="block mb-2">
              Water reuse percentage (%) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="waterReusePercentage"
              value={formData.waterReusePercentage}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Operations in water-stressed areas <span className="text-red-500">*</span>
            </label>
            <textarea
              name="waterStressedAreas"
              value={formData.waterStressedAreas}
              onChange={handleInputChange}
              placeholder="Describe your operations in water-stressed areas and any special measures taken..."
              className="border p-2 w-full rounded h-32"
            ></textarea>
          </div>
        </div>
      </div>
    );
  };

  // Report Preview
  const ReportPreview = () => {
    return (
      <div>
        <h2 className="text-lg font-medium mb-6 text-center">ESG Report Preview</h2>
        
        <div className="border p-4 rounded bg-gray-50 mb-6">
          <h3 className="font-medium mb-2">Company Profile</h3>
          <p><strong>Industry:</strong> {formData.industry}</p>
          <p><strong>Core Values:</strong> {formData.companyValues}</p>
          <p><strong>Vision:</strong> {formData.visionStatement}</p>
        </div>
        
        <div className="border p-4 rounded bg-gray-50 mb-6">
          <h3 className="font-medium mb-2">Governance Highlights</h3>
          <p><strong>Board Diversity:</strong> {formData.blackPercentage}% Black, {formData.femalePercentage}% Female</p>
          <p><strong>Code of Ethics:</strong> {formData.codeOfEthicsExists === "yes" ? "Yes" : "No"}</p>
          <p><strong>Risk Management:</strong> In place</p>
        </div>
        
        <div className="border p-4 rounded bg-gray-50 mb-6">
          <h3 className="font-medium mb-2">Social Highlights</h3>
          <p><strong>Total Employees:</strong> {formData.totalEmployees}</p>
          <p><strong>Employee Turnover:</strong> {formData.employeeTurnover}%</p>
          <p><strong>Human Rights Policy:</strong> {formData.humanRightsPolicyExists === "yes" ? "Yes" : "No"}</p>
        </div>
        
        <div className="border p-4 rounded bg-gray-50 mb-6">
          <h3 className="font-medium mb-2">Environmental Highlights</h3>
          <p><strong>Carbon Emissions:</strong> {formData.totalCarbonEmissions} {formData.emissionsUnit}</p>
          <p><strong>Reduction Target:</strong> {formData.reductionTarget}% by {formData.targetYear}</p>
          <p><strong>Water Consumption:</strong> {formData.totalWaterConsumption} {formData.waterUnit}</p>
        </div>
      </div>
    );
  };

  // Success message banner
  const SuccessMessage = () => {
    return (
      <div className="bg-green-500 text-white p-3 flex justify-between items-center">
        <p>
          Your report has been successfully generated. Download your ESG report.
        </p>
        <button
          onClick={() => setShowSuccessMessage(false)}
          className="text-white"
        >
          <X size={20} />
        </button>
      </div>
    );
  };

  // Render the appropriate step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1: // Governance
        return (
          <div>
            <GovernanceTabs />
            {activeTab === "board-composition" && <BoardDiversityForm />}
            {activeTab === "ethical-behaviour" && <EthicalBehaviorForm />}
            {activeTab === "compliance" && <ComplianceForm />}
            {activeTab === "tax" && <TaxForm />}
          </div>
        );
      case 2: // Social
        return (
          <div>
            <SocialTabs />
            {activeSocialTab === "employee-metrics" && <EmployeeMetricsForm />}
            {activeSocialTab === "human-rights" && <HumanRightsPolicyForm />}
            {activeSocialTab === "company-info" && <CompanyInfoForm />}
          </div>
        );
      case 3: // Environmental
        return (
          <div>
            <EnvironmentalTabs />
            {activeEnvironmentalTab === "carbon-emissions" && <CarbonEmissionsForm />}
            {activeEnvironmentalTab === "water-usage" && <WaterUsageForm />}
          </div>
        );
      case 4: // Generate Report
        return (
          <div className="py-8">
            {generating ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
                <p>Generating your ESG report...</p>
              </div>
            ) : reportGenerated ? (
              <div>
                <ReportPreview />
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={handleClear}
                    className="px-6 py-2 border border-gray-300 rounded text-gray-700"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => {}}
                    className="px-6 py-2 bg-green-500 text-white rounded"
                  >
                    Download
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-lg font-medium mb-4">Generate Your ESG Report</h2>
                <p className="mb-8">Click Generate to create your comprehensive ESG report based on the data you've provided.</p>
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={handleClear}
                    className="px-6 py-2 border border-gray-300 rounded text-gray-700"
                  >
                    Clear
                  </button>
                  <button
                    onClick={generateReport}
                    className="px-6 py-2 bg-green-500 text-white rounded"
                  >
                    Generate
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {showSuccessMessage && <SuccessMessage />}
      <header className="bg-white p-4 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-green-500 font-bold text-lg flex items-start">
              <div className="flex items-start">
                BESPOKE
                <span className="text-xs align-top">TM</span>
              </div>
              <div>INSIGHT</div>
            </div>
            <div className="ml-8 text-gray-700 hidden md:block">
              JSE Sustainability Disclosure Guidance based reporting
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={handleSave}
              className="px-4 py-1 border border-green-500 text-green-500 rounded text-sm hover:bg-green-50"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Progress"}
            </button>
            
            {saved && <div className="text-green-500 flex items-center"><CheckCircle size={16} className="mr-1" /> Saved</div>}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <div className="bg-white p-4 md:p-8 rounded shadow">
          <Steps />
          <StepLabels />

          {renderStepContent()}

          <div className="flex justify-center gap-4 mt-8">
            {currentStep > 1 && !reportGenerated && (
              <button
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded text-gray-700"
              >
                Previous
              </button>
            )}
            {currentStep < 4 && (
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-green-500 text-white rounded"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ESGReportingApp;