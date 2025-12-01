import imgImage20 from "figma:asset/223ba36d3b6708d7df496389d00411edff9f0468.png";
import img20251126946221 from "figma:asset/30e184546c3f9a3c2647db9d2f95f1eccb74b1f7.png";
import { imgImage19 } from "../imports/svg-3oqd9";
import { useState } from 'react';

interface InfoPanelProps {
  onFAQClick: (question: string) => void;
}

const FAQ_QUESTIONS = [
  "What projects have you led?",
  "Tell me about your AI work",
  "What is your background?",
  "What are your core skills?",
  "How can I contact you?"
];

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.88px] mt-0 place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[75.563px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.875px] mask-size-[78px_78px] ml-0 mt-0 relative w-[64.583px]" data-name="image 19" style={{ maskImage: `url('${imgImage19}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Sophie Peng profile" className="absolute h-full left-[-5.73%] max-w-none top-[0.15%] w-[111.3%]" src={imgImage20} />
        </div>
      </div>
    </div>
  );
}

function Favicon() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="favicon">
      <MaskGroup />
    </div>
  );
}

function Favicon1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="favicon">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[78px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(231, 231, 231, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
            <circle cx="39" cy="39" fill="var(--fill-0, #E7E7E7)" id="Ellipse 91" r="39" />
          </svg>
        </div>
      </div>
      <Favicon />
    </div>
  );
}

export function InfoPanel({ onFAQClick }: InfoPanelProps) {
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <div className="bg-white h-full overflow-y-auto shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)]">
      <div className="px-8 py-10 flex flex-col gap-7">
        {/* Title */}
        <h1 className="font-['Inter:Bold',sans-serif] text-[32px] leading-normal not-italic text-black">
          🤖 Sophie.AI
        </h1>

        {/* Description */}
        <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[1.4] not-italic text-[#6d6d6d]">
          <p className="mb-0 whitespace-pre-wrap">
            {`Discover Sophie.AI, your digital companion for exploring my professional journey. This RAG-powered AI assistant provides seamless insights into my background, projects,  and my product experiences.`}
          </p>
          <p className="mb-0">&nbsp;</p>
          <p>
            {`Whether you're a recruiter, hiring manager, collaborator, or simply curious, feel free to explore my work, thinking process, and impact through Sophie.AI.🌟`}
          </p>
        </div>

        {/* FAQ Button */}
        <button
          onClick={() => setShowFAQ(!showFAQ)}
          className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.4] not-italic text-[#b7c277] text-left hover:text-[#a8b367] transition-colors"
        >
          👉 Frequently Asked Questions
        </button>

        {/* FAQ List */}
        {showFAQ && (
          <div className="flex flex-col gap-2">
            {FAQ_QUESTIONS.map((question, index) => (
              <button
                key={index}
                onClick={() => {
                  onFAQClick(question);
                  setShowFAQ(false);
                }}
                className="text-left px-4 py-3 bg-[#f7f8f3] hover:bg-[#e6edc6] rounded-lg transition-colors font-['Inter:Medium',sans-serif] font-medium text-[#333333]"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        {/* About Me Card */}
        <div className="bg-white rounded-[12px] shadow-[2px_3px_9px_1px_rgba(0,0,0,0.07)] w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border flex flex-col gap-[18px] px-[30px] py-[20px] w-full">
              <p className="font-['Inter:Bold',sans-serif] text-[18px] leading-[1.4] not-italic text-black">
                About Me
              </p>

              {/* Profile Section */}
              <div className="flex gap-6 items-center w-full">
                <Favicon1 />
                <div className="flex flex-col gap-[4px] leading-[1.4] not-italic text-black flex-1">
                  <p className="font-['Inter:Bold',sans-serif] text-[16px]">Sophie Peng</p>
                  <a
                    href="mailto:sophieee0306@gmail.com"
                    className="font-['Inter:Medium',sans-serif] font-medium text-[#333333] hover:text-[#b7c277] transition-colors"
                  >
                    sophieee0306@gmail.com
                  </a>
                </div>
              </div>

              {/* Bio */}
              <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.4] not-italic text-black">
                {`I'm a product manager specializing in UX strategy, semantic retrieval, and vector-powered personalization.`}
                <br aria-hidden="true" />
                By combining user empathy, behavioral insights, and AI-driven methods, I build products that balance usability and intelligence.
              </p>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/sophie-peng"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.4] not-italic text-[#b7c277] hover:text-[#a8b367] transition-colors"
              >
                Check my LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}