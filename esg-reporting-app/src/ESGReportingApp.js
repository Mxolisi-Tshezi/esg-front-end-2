import React, { useState, useEffect } from 'react';
import { CheckCircle, Info, X } from 'lucide-react';

const ESGReportingApp = () => {
  // State for the current step
  const [currentStep, setCurrentStep] = useState(1);
  const [activeTab, setActiveTab] = useState('board-composition');
  const [formData, setFormData] = useState({
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
    boardProfile: '',
    companyValues: '',
    visionStatement: '',
    industry: ''
  });
  
  const [reportGenerated, setReportGenerated] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle step navigation
  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 4) {
      generateReport();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
    }, 2000);
  };

  // Clear the form
  const handleClear = () => {
    setFormData({
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
      boardProfile: '',
      companyValues: '',
      visionStatement: '',
      industry: ''
    });
    setReportGenerated(false);
    setShowSuccessMessage(false);
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
                    ? 'bg-green-500 text-white' 
                    : currentStep === step 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-300 text-gray-600'
                }`}
              >
                {currentStep > step ? <CheckCircle size={16} /> : step}
              </div>
              
              {step < 4 && (
                <div 
                  className={`h-1 w-24 ${
                    currentStep > step ? 'bg-green-500' : 'bg-gray-300'
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
      <div className="flex border-b mb-6">
        <div 
          className={`pb-2 px-4 cursor-pointer ${activeTab === 'board-composition' ? 'border-b-2 border-green-500 text-green-500' : ''}`}
          onClick={() => setActiveTab('board-composition')}
        >
          Board composition
          <span className="ml-1 text-green-500">✓</span>
        </div>
        <div 
          className={`pb-2 px-4 cursor-pointer ${activeTab === 'ethical-behaviour' ? 'border-b-2 border-green-500 text-green-500' : ''}`}
          onClick={() => setActiveTab('ethical-behaviour')}
        >
          Ethical behaviour
          <span className="ml-1 text-green-500">✓</span>
        </div>
        <div 
          className={`pb-2 px-4 cursor-pointer ${activeTab === 'compliance' ? 'border-b-2 border-green-500 text-green-500' : ''}`}
          onClick={() => setActiveTab('compliance')}
        >
          Compliance and risk management
          <span className="ml-1 text-green-500">✓</span>
        </div>
        <div 
          className={`pb-2 px-4 cursor-pointer ${activeTab === 'tax' ? 'border-b-2 border-green-500 text-green-500' : ''}`}
          onClick={() => setActiveTab('tax')}
        >
          Tax transparency
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
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">
                Total number of Board members (#) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="totalBoardMembers"
                value={formData.totalBoardMembers}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>
            
            <div>
              <label className="block mb-2">
                Number of Board members who are Black (#) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="blackMembers"
                value={formData.blackMembers}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>
            
            <div>
              <label className="block mb-2">
                Percentage of Board members who are Black (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="blackPercentage"
                value={formData.blackPercentage}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>
            
            <div>
              <label className="block mb-2">
                Number of Board members who are White (#) <span className="text-red-500">*</span>
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
                Percentage of Board members who are White (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="whitePercentage"
                value={formData.whitePercentage}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>
            
            <div>
              <label className="block mb-2">
                Number of Board members who are Indian (#) <span className="text-red-500">*</span>
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
                Percentage of Board members who are Indian (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="indianPercentage"
                value={formData.indianPercentage}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>
            
            <div>
              <label className="block mb-2">
                Number of Board members who are Asian (#) <span className="text-red-500">*</span>
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
                Percentage of Board members who are Asian (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="asianPercentage"
                value={formData.asianPercentage}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>
            
            <div>
              <label className="block mb-2">
                Number of Board members who are Coloured (#) <span className="text-red-500">*</span>
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
                Percentage of Board members who are Coloured (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="colouredPercentage"
                value={formData.colouredPercentage}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>
            
            <div>
              <label className="block mb-2">
                Number of Board members who are below 30 (#) <span className="text-red-500">*</span>
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
                Percentage of Board members who are below 30 (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="below30Percentage"
                value={formData.below30Percentage}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>
            
            <div>
              <label className="block mb-2">
                Number of Board members who are between 30 and 50 (#) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="between30And50Members"
                value={formData.between30And50Members}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">
            2. Board independence 
            <span className="text-green-500 ml-1">
              <Info size={16} className="inline" />
            </span>
          </h2>
        </div>
        
        <div className="mb-6">
          <label className="block mb-2">
            Board Profile <span className="text-red-500">*</span>
          </label>
          <textarea
            name="boardProfile"
            value={formData.boardProfile}
            onChange={handleInputChange}
            className="border p-2 w-full rounded h-32"
          ></textarea>
        </div>
      </div>
    );
  };

  // Company information form
  const CompanyInfoForm = () => {
    return (
      <div>
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">
            2. What are your company's core values?
            <span className="text-red-500">*</span>
          </h2>
          <input
            type="text"
            name="companyValues"
            value={formData.companyValues}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
          />
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">
            5. What is your company's vision statement?
            <span className="text-red-500">*</span>
          </h2>
          <input
            type="text"
            name="visionStatement"
            value={formData.visionStatement}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
          />
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">
            6. What industry does your company operate in?
            <span className="text-red-500">*</span>
          </h2>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
          />
        </div>
      </div>
    );
  };

  // Success message banner
  const SuccessMessage = () => {
    return (
      <div className="bg-green-500 text-white p-3 flex justify-between items-center">
        <p>Your report has been successfully generated. Download your ESG report.</p>
        <button onClick={() => setShowSuccessMessage(false)} className="text-white">
          <X size={20} />
        </button>
      </div>
    );
  };

  // Render the appropriate step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <GovernanceTabs />
            <BoardDiversityForm />
          </div>
        );
      case 2:
        return <CompanyInfoForm />;
      case 3:
        return <div className="text-center py-12">Environmental step content would go here</div>;
      case 4:
        return (
          <div className="text-center py-12">
            {generating ? (
              <div>Generating...</div>
            ) : reportGenerated ? (
              <div>
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
              <div>
                Click Generate to create your ESG report.
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
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="text-green-500 font-bold text-lg flex items-start">
            <div className="flex items-start">
              BESPOKE
              <span className="text-xs align-top">TM</span>
            </div>
            <div>INSIGHT</div>
          </div>
          <div className="ml-8 text-gray-700">
            JSE Sustainability Disclosure Guidance based reporting
          </div>
          
          {saving && (
            <div className="ml-auto text-gray-500">
              Saving ...
            </div>
          )}
          
          {saved && (
            <div className="ml-auto text-gray-500">
              Saved
            </div>
          )}
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto p-4">
        <div className="bg-white p-8 rounded shadow">
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