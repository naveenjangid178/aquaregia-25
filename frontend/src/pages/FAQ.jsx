import React, { useState } from 'react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleAnswer = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className='bg-amber-100'>      
      <main className="p-4 pt-24">
        <div className="heading text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900">FAQs</h1>
        </div>

        <div className="main-content-container">
          <div className="all-faqs-container">
            {/* Question 1 */}
            <div className="faqs-question cursor-pointer mb-4 p-4 bg-transparent rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-300" onClick={() => toggleAnswer(0)}>
              <div className="flex justify-between items-center">
                <h3 className="question text-xl font-semibold">1. Where Can I register for Aquaregia?</h3>
                <span className={`transition-all transform ${openFaq === 0 ? 'rotate-45 text-green-500' : 'rotate-0'}`}>&#43;</span>
              </div>
            </div>
            {openFaq === 0 && (
              <div className="faqs-answer mt-4 pl-4">
                <p>
                  Registration can be done at - <a href="/register" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">register</a>
                </p>
              </div>
            )}

            {/* Question 2 */}
            <div className="faqs-question cursor-pointer mb-4 p-4 bg-transparent rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-300" onClick={() => toggleAnswer(1)}>
              <div className="flex justify-between items-center">
                <h3 className="question text-xl font-semibold">2. How do I get the details/rulebook for any particular event?</h3>
                <span className={`transition-all transform ${openFaq === 1 ? 'rotate-45 text-green-500' : 'rotate-0'}`}>&#43;</span>
              </div>
            </div>
            {openFaq === 1 && (
              <div className="faqs-answer mt-4 pl-4">
                <p>
                  Details can be found at - <a href="/events" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Events Page</a>
                </p>
              </div>
            )}

            {/* Question 3 */}
            <div className="faqs-question cursor-pointer mb-4 p-4 bg-transparent rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-300" onClick={() => toggleAnswer(2)}>
              <div className="flex justify-between items-center">
                <h3 className="question text-xl font-semibold">3. Can I register for multiple events?</h3>
                <span className={`transition-all transform ${openFaq === 2 ? 'rotate-45 text-green-500' : 'rotate-0'}`}>&#43;</span>
              </div>
            </div>
            {openFaq === 2 && (
              <div className="faqs-answer mt-4 pl-4">
                <p>Yes, you can.</p>
              </div>
            )}

            {/* Question 4 */}
            <div className="faqs-question cursor-pointer mb-4 p-4 bg-transparent rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-300" onClick={() => toggleAnswer(3)}>
              <div className="flex justify-between items-center">
                <h3 className="question text-xl font-semibold">4. How do I confirm my participation in the fest?</h3>
                <span className={`transition-all transform ${openFaq === 3 ? 'rotate-45 text-green-500' : 'rotate-0'}`}>&#43;</span>
              </div>
            </div>
            {openFaq === 3 && (
              <div className="faqs-answer mt-4 pl-4">
                <p>
                  Go to - <a href="/register" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Register</a> to register. Choose the event you want to register in and click on register.
                </p>
              </div>
            )}

            {/* Question 5 */}
            <div className="faqs-question cursor-pointer mb-4 p-4 bg-transparent rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-300" onClick={() => toggleAnswer(4)}>
              <div className="flex justify-between items-center">
                <h3 className="question text-xl font-semibold">5. Do all members require separate registration for group events?</h3>
                <span className={`transition-all transform ${openFaq === 4 ? 'rotate-45 text-green-500' : 'rotate-0'}`}>&#43;</span>
              </div>
            </div>
            {openFaq === 4 && (
              <div className="faqs-answer mt-4 pl-4">
                <p>No, the group leader will have to register on behalf of all team members.</p>
              </div>
            )}

            {/* Question 6 */}
            <div className="faqs-question cursor-pointer mb-4 p-4 bg-transparent rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-300" onClick={() => toggleAnswer(5)}>
              <div className="flex justify-between items-center">
                <h3 className="question text-xl font-semibold">6. Will Aquaregia provide the instruments?</h3>
                <span className={`transition-all transform ${openFaq === 5 ? 'rotate-45 text-green-500' : 'rotate-0'}`}>&#43;</span>
              </div>
            </div>
            {openFaq === 5 && (
              <div className="faqs-answer mt-4 pl-4">
                <p>Participants will have to bring their own props and instruments.</p>
              </div>
            )}

            {/* Question 7 */}
            <div className="faqs-question cursor-pointer mb-4 p-4 bg-transparent rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-300" onClick={() => toggleAnswer(6)}>
              <div className="flex justify-between items-center">
                <h3 className="question text-xl font-semibold">7. How do I submit my entries for online competitions?</h3>
                <span className={`transition-all transform ${openFaq === 6 ? 'rotate-45 text-green-500' : 'rotate-0'}`}>&#43;</span>
              </div>
            </div>
            {openFaq === 6 && (
              <div className="faqs-answer mt-4 pl-4">
                <p>Contact individual Event Coordinators for details.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
