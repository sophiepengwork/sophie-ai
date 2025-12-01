import imgImage20 from "figma:asset/223ba36d3b6708d7df496389d00411edff9f0468.png";
import img20251126946091 from "figma:asset/15d3fe12c176ae893a5bab34a4a8e4c932be2416.png";
import img20251126946221 from "figma:asset/30e184546c3f9a3c2647db9d2f95f1eccb74b1f7.png";
import { imgImage19 } from "./svg-3oqd9";

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.88px] mt-0 place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[75.563px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.875px] mask-size-[78px_78px] ml-0 mt-0 relative w-[64.583px]" data-name="image 19" style={{ maskImage: `url('${imgImage19}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-5.73%] max-w-none top-[0.15%] w-[111.3%]" src={imgImage20} />
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.4] not-italic relative shrink-0 text-black w-[180px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[16px] w-full">Sophie Peng</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] w-full">sophieee0306@gmail.com</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Favicon1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[283px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[18px] text-black w-full">About Me</p>
      <Frame3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-full">
        {`I'm a product manager specializing in UX strategy, semantic retrieval, and vector-powered personalization.`}
        <br aria-hidden="true" />
        By combining user empathy, behavioral insights, and AI-driven methods, I build products that balance usability and intelligence.
      </p>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.4] not-italic relative shrink-0 text-[#b7c277] text-[16px] w-full">Check my LinkedIn</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[2px_3px_9px_1px_rgba(0,0,0,0.07)] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[30px] py-[20px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[34px] top-[42px] w-[357px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-black w-[min-content]">🤖 Sophie.AI</p>
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#6d6d6d] text-[16px] w-[334px]">
        <p className="mb-0 whitespace-pre-wrap">{`Discover Sophie.AI, your digital companion for exploring my professional journey. This RAG-powered AI assistant provides seamless insights into my background, projects,  and my product experiences.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Whether you're a recruiter, hiring manager, collaborator, or simply curious, feel free to explore my work, thinking process, and impact through Sophie.AI.🌟`}</p>
      </div>
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.4] min-w-full not-italic relative shrink-0 text-[#b7c277] text-[16px] w-[min-content]">👉 Frequently Asked Questions</p>
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white h-[832px] left-0 overflow-clip shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)] top-0 w-[437px]">
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-white h-[70px] left-[21px] overflow-clip rounded-[8px] shadow-[0px_1px_4px_2px_rgba(0,0,0,0.07)] top-[677px] w-[750px]">
      <div className="absolute h-[33px] left-[703px] top-[18px] w-[32px]" data-name="截圖 2025-11-26 上午9.46.09 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img20251126946091} />
      </div>
      <div className="absolute h-[37px] left-[18px] top-[16px] w-[281px]" data-name="截圖 2025-11-26 上午9.46.22 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img20251126946221} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-white h-[769px] left-[456px] overflow-clip rounded-[12px] shadow-[4px_5px_6px_2px_rgba(0,0,0,0.03)] top-[31px] w-[796px]">
      <Frame8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#d8e493] h-[62px] left-[456px] overflow-clip rounded-tl-[12px] rounded-tr-[12px] top-[31px] w-[796px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[49px] not-italic text-[20px] text-black text-nowrap top-[19px] whitespace-pre">Sophie.AI</p>
    </div>
  );
}

export default function MacBookAir() {
  return (
    <div className="bg-[#fdfff0] relative size-full" data-name="MacBook Air - 1">
      <Frame />
      <Frame6 />
      <Frame7 />
    </div>
  );
}