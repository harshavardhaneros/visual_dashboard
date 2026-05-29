import React, { useState } from "react";
import {
  FileText,
  PlayCircle,
  Quote,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import horrorStraight from "../themes/horror/underwater_resultt.png";
import horrorIsometric from "../themes/cinematic/isometric horror.png";
import underwaterStraight from "../themes/underwater/underwater_resultt.png";
import underwaterIsometric from "../themes/cinematic/isometric underwater.png";
import s1Thumb from "../themes/ads/chotabheem.png";
import s1Images from "../themes/ads/chotahouse.png";
import s2Thumb from "../themes/ads/indian sample.png";
import s2Images from "../themes/ads/indian_house.png";
import actor1Culture1Img from "../themes/cultural_shots/image (8).png";
import actor2Img from "../themes/cultural_shots/image (2).png";
import culture2Img from "../themes/cultural_shots/image (5).png";
import actor2Culture2Result from "../themes/cultural_shots/image (7).png";
import actor3Img from "../themes/cultural_shots/image (3).png";
import culture3Img from "../themes/cultural_shots/image (4).png";
import actor3Culture3Result from "../themes/cultural_shots/image (6).png";

const cinematicCardBase =
  "w-36 h-12 flex items-center justify-center text-center shrink-0 bg-white rounded-xl text-sm font-bold";

const selectCardClass = (isSelected) =>
  `
    ${cinematicCardBase}
    uppercase tracking-wide
    shadow-[0_2px_10px_rgba(0,0,0,0.08)]
    border-2 transition-all duration-200 cursor-pointer
    ${
      isSelected
        ? "border-black"
        : "border-transparent hover:border-gray-300"
    }
  `;

const labelCardClass = `${cinematicCardBase} border-2 border-black capitalize`;

const culturalThumbClass =
  "w-24 h-36 rounded-xl overflow-hidden bg-black flex items-center justify-center";

const panelClass = "bg-white rounded-2xl shadow-md";

const contentPanelWidthClass = "w-4/5 max-w-3xl mx-auto";

const culturalImgClass = "w-full h-full object-contain";

const culturalCultureImgClass =
  "w-full h-full object-cover object-[center_75%]";

export default function ResultsGallery() {

  /* ================= ADS ================= */

  const samples = [
    {
      id: "S1",
      prompt:
        "Luxury cinematic perfume advertisement with elegant lighting and premium visual storytelling.",
      thumb: s1Thumb,
      outputs: {
        images: s1Images,
      },
    },

    {
      id: "S2",
      prompt:
        "Urban fashion commercial with editorial composition and cinematic contrast.",
      thumb: s2Thumb,
      outputs: {
        images: s2Images,
      },
    },

    {
      id: "S3",
      prompt:
        "Minimal beverage advertisement with soft gradients and product-centric framing.",
      thumb: "https://picsum.photos/400?19",
      outputs: {
        images: "https://picsum.photos/900/600?27",
      },
    },
  ];

  const [selectedSample, setSelectedSample] =
    useState(samples[0]);

  /* ================= CINEMATIC ================= */

  const cinematicThemes = ["Horror", "Underwater"];
  const cinematicViews = ["Straight", "Isometric"];

  const [selectedTheme, setSelectedTheme] = useState("Horror");
  const [selectedView, setSelectedView] = useState("Straight");

  const cinematicOutputs = {
    Horror: {
      Straight: horrorStraight,
      Isometric: horrorIsometric,
    },
    Underwater: {
      Straight: underwaterStraight,
      Isometric: underwaterIsometric,
    },
  };

  const cinematicPrompts = {
    Horror:
      "Photorealistic dark fantasy photography with oppressive atmosphere, volumetric moonlight, and sinister cinematic horror lighting.",
    Underwater:
      "Photorealistic underwater photography with crystal-clear turquoise water, volumetric god rays, and cinematic marine lighting.",
  };

  const culturalPairs = [
    {
      actor: {
        name: "Actor 1",
        img: actor1Culture1Img,
      },
      culture: {
        name: "Culture 1",
        img: actor1Culture1Img,
      },
    },
    {
      actor: {
        name: "Actor 2",
        img: actor2Img,
      },
      culture: {
        name: "Culture 2",
        img: culture2Img,
      },
    },
    {
      actor: {
        name: "Actor 3",
        img: actor3Img,
      },
      culture: {
        name: "Culture 3",
        img: culture3Img,
      },
    },
  ];

  const culturalOutputs = [
    actor1Culture1Img,
    actor2Culture2Result,
    actor3Culture3Result,
  ];

  /* ================= CULTURAL ================= */

  const [selectedPairIndex, setSelectedPairIndex] = useState(0);

  const selectedPair = culturalPairs[selectedPairIndex];
  const culturalOutputSrc = culturalOutputs[selectedPairIndex];

  const selectCulturalPair = (index) => {
    setSelectedPairIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[#222]">

      {/* ================= HERO ================= */}

      <section className="pt-20 pb-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          {/* TITLE */}
          <h1
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              tracking-tight
              leading-tight
              mb-10
            "
          >
            RefCompose: Multi-Reference Image
            <br />
            Generation via LoRA-Conditioned Diffusion
          </h1>

          {/* AUTHORS */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-x-8
              gap-y-3
              text-[#4f6cff]
              text-xl
              mb-6
            "
          >

            <a
              href="https://example.com/teja"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:underline
                transition-all
              "
            >
              Kuppa Sai Sri Teja¹
            </a>

            <a
              href="https://example.com/priyadarsan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:underline
                transition-all
              "
            >
              Priyadarsan B¹²
            </a>

            <a
              href="https://example.com/parth"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:underline
                transition-all
              "
            >
              Parth Shinde¹²
            </a>

            <a
              href="https://example.com/harsha"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:underline
                transition-all
              "
            >
              Jinka Harshavardhan¹³
            </a>

          </div>

          {/* INSTITUTIONS */}
          <div
            className="
              text-2xl
              text-gray-700
              leading-relaxed
              mb-5
            "
          >
            <span className="mr-6">¹ EROS NOW</span>
            <span className="mr-6">² IIT Madras</span>
            <span>³ SRMIST</span>
          </div>

          <div className="text-3xl font-semibold mb-14">
            BMVC 2026
          </div>

          {/* TOP BUTTONS */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
              md:gap-6
            "
          >

            <a
              href="https://example.com/paper"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white rounded-full
                px-6 md:px-8
                py-3 md:py-4
                shadow-md
                flex items-center gap-2 md:gap-3
                text-base md:text-xl
                font-medium
                hover:scale-105
                hover:shadow-lg
                transition-all duration-300
              "
            >
              <FileText size={20} />
              Paper
            </a>

            <a
              href="https://arxiv.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white rounded-full
                px-6 md:px-8
                py-3 md:py-4
                shadow-md
                flex items-center gap-2 md:gap-3
                text-base md:text-xl
                font-medium
                hover:scale-105
                hover:shadow-lg
                transition-all duration-300
              "
            >
              <BookOpen size={20} />
              arXiv
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white rounded-full
                px-6 md:px-8
                py-3 md:py-4
                shadow-md
                flex items-center gap-2 md:gap-3
                text-base md:text-xl
                font-medium
                hover:scale-105
                hover:shadow-lg
                transition-all duration-300
              "
            >
              <PlayCircle size={20} />
              Video
            </a>

            <a
              href="https://scholar.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white rounded-full
                px-6 md:px-8
                py-3 md:py-4
                shadow-md
                flex items-center gap-2 md:gap-3
                text-base md:text-xl
                font-medium
                hover:scale-105
                hover:shadow-lg
                transition-all duration-300
              "
            >
              <Quote size={20} />
              BibTeX
            </a>

          </div>

        </div>

      </section>

      {/* ================= NAVIGATION ================= */}

      <section className="px-6 mb-28">

        <div className="max-w-7xl mx-auto">

          <p
            className="
              text-2xl md:text-3xl
              leading-relaxed mb-10
            "
          >
            RefCompose enables controllable multi-reference image generation
            through LoRA-conditioned diffusion models.
          </p>

          <div
            className="
              bg-white rounded-full shadow-md
              px-6 py-5
              flex flex-wrap justify-center gap-10
            "
          >

            <a
              href="#ads"
              className="
                text-xl font-semibold
                hover:text-blue-600
                transition-all
              "
            >
              Ads Generation
            </a>

            <a
              href="#cinematic"
              className="
                text-xl font-semibold
                hover:text-blue-600
                transition-all
              "
            >
              Cinematic Shots
            </a>

            <a
              href="#cultural"
              className="
                text-xl font-semibold
                hover:text-blue-600
                transition-all
              "
            >
              Cultural Composition
            </a>

          </div>

        </div>

      </section>

      {/* ================= ADS SECTION ================= */}

      <section
        id="ads"
        className="max-w-7xl mx-auto px-6 mb-40"
      >

        <h2 className="text-3xl font-semibold text-center mb-10">
          Ads Generation
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {samples.map((sample) => (
            <div
              key={sample.id}
              onClick={() => setSelectedSample(sample)}
              className={`
                ${panelClass} px-3 pt-3 pb-2
                h-[220px] flex flex-col
                cursor-pointer transition-all duration-300
                hover:scale-[1.02] hover:shadow-lg

                ${
                  selectedSample.id === sample.id
                    ? "ring-2 ring-black"
                    : ""
                }
              `}
            >

              <h3 className="text-xl font-bold text-center mb-2 shrink-0">
                {sample.id}
              </h3>

              <div className="flex-1 min-h-0 flex items-center justify-center rounded-xl bg-gray-100 overflow-hidden">
                <img
                  src={sample.thumb}
                  alt={sample.id}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

            </div>
          ))}

        </div>

        {/* PROMPT */}
        <div className={`${panelClass} p-5 mb-10`}>

          <h3 className="text-lg font-bold mb-3">
            Prompt
          </h3>

          <p className="text-base text-gray-700 leading-relaxed">
            {selectedSample.prompt}
          </p>

        </div>

        {/* OUTPUTS */}
        <div className="flex justify-center">

          <div
            className={`${panelClass} ${contentPanelWidthClass} p-4 hover:shadow-lg transition-all duration-300`}
          >

            <h3 className="text-lg font-bold text-center mb-4">
              Images
            </h3>

            <div
              className="
                bg-gray-100 rounded-xl
                min-h-[220px]
                flex items-center justify-center
              "
            >

              <img
                src={selectedSample.outputs.images}
                alt={`${selectedSample.id} output`}
                className="
                  max-w-full max-h-[280px]
                  object-contain rounded-xl
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= CINEMATIC ================= */}

      <section
        id="cinematic"
        className="max-w-7xl mx-auto px-6 mb-40"
      >

        <h2 className="text-3xl font-semibold text-center mb-10">
          Cinematic Shots
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 mb-10">

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className={labelCardClass}>Themes</div>
            <ArrowRight size={20} strokeWidth={2.5} className="shrink-0" />

            {cinematicThemes.map((theme) => (
              <button
                key={theme}
                type="button"
                onClick={() => setSelectedTheme(theme)}
                className={selectCardClass(selectedTheme === theme)}
              >
                {theme}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className={labelCardClass}>View</div>
            <ArrowRight size={20} strokeWidth={2.5} className="shrink-0" />

            {cinematicViews.map((view) => (
              <button
                key={view}
                type="button"
                onClick={() => setSelectedView(view)}
                className={selectCardClass(selectedView === view)}
              >
                {view}
              </button>
            ))}
          </div>

        </div>

        {/* OUTPUT */}
        <div className={`${panelClass} ${contentPanelWidthClass} overflow-hidden mb-10`}>

          <h3 className="text-lg font-bold text-center px-5 pt-5 pb-4">
            Output
          </h3>

          <div className="px-4 pb-4">
            <img
              src={cinematicOutputs[selectedTheme][selectedView]}
              alt={`${selectedTheme} ${selectedView} cinematic output`}
              className="w-full h-auto block rounded-xl"
            />
          </div>

        </div>

        {/* PROMPT */}
        <div className={`${panelClass} ${contentPanelWidthClass} p-5`}>

          <h3 className="text-lg font-bold mb-3">
            {selectedTheme} Prompt
          </h3>

          <p className="text-base text-gray-700 leading-relaxed">

            {cinematicPrompts[selectedTheme]}{" "}
            Rendered with a{" "}
            <span className="font-bold text-black">
              {selectedView.toLowerCase()}
            </span>
            {" "}view and movie-grade composition.

          </p>

        </div>

      </section>

      {/* ================= CULTURAL ================= */}

      <section
        id="cultural"
        className="max-w-7xl mx-auto px-6 pb-24"
      >

        <h2 className="text-3xl font-semibold text-center mb-10">
          Cultural Composition
        </h2>

        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">

          {culturalPairs.map((pair, index) => (

            <div
              key={index}
              onClick={() => selectCulturalPair(index)}
              className={`
                bg-white rounded-2xl p-3 shadow-md
                flex items-center justify-center gap-2
                cursor-pointer transition-all duration-300
                hover:scale-[1.02] hover:shadow-lg
                ${
                  selectedPairIndex === index
                    ? "ring-2 ring-black"
                    : ""
                }
              `}
            >

              {/* ACTOR */}
              <div>

                <div className={culturalThumbClass}>
                  <img
                    src={pair.actor.img}
                    alt={pair.actor.name}
                    className={culturalImgClass}
                  />
                </div>

                <div className="text-center mt-2 text-sm font-semibold">
                  {pair.actor.name}
                </div>

              </div>

              <div className="text-2xl font-light pointer-events-none">
                +
              </div>

              {/* CULTURE */}
              <div>

                <div className={culturalThumbClass}>
                  <img
                    src={pair.culture.img}
                    alt={pair.culture.name}
                    className={culturalCultureImgClass}
                  />
                </div>

                <div className="text-center mt-2 text-sm font-semibold">
                  {pair.culture.name}
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* OUTPUT */}
        <div className={`${panelClass} ${contentPanelWidthClass} overflow-hidden mb-10`}>

          <h3 className="text-lg font-bold text-center px-5 pt-5 pb-4">
            Output Image
          </h3>

          <div className="px-4 pb-4">
            <img
              src={culturalOutputSrc}
              alt={`${selectedPair.actor.name} and ${selectedPair.culture.name} composition`}
              className="w-full h-auto block rounded-xl"
            />
          </div>

        </div>

        {/* PROMPT */}
        <div className={`${panelClass} ${contentPanelWidthClass} p-5 mb-12`}>

          <h3 className="text-lg font-bold mb-3">
            Prompt
          </h3>

          <p className="text-base text-gray-700 leading-relaxed">

            A cinematic cultural composition featuring{" "}

            <span className="font-bold text-black">
              {selectedPair.actor.name}
            </span>

            {" "}immersed in{" "}

            <span className="font-bold text-black">
              {selectedPair.culture.name}
            </span>

            {" "}environment with dramatic storytelling,
            realistic lighting and movie-grade aesthetics.

          </p>

        </div>

        {/* ================= REFERENCES ================= */}

        <div className={`${panelClass} p-6`}>

          {/* REFERENCES */}
          <h2 className="text-2xl font-semibold mb-5">
            References
          </h2>

          <div
            className="
              text-base text-gray-700
              leading-relaxed space-y-5 mb-10
            "
          >

            <div>

              <a
                href="https://example.com/refcompose-paper"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-blue-600 hover:underline
                  font-medium block
                "
              >
                RefCompose: Multi-Reference Image Generation
                via LoRA-Conditioned Diffusion
              </a>

              <p className="text-gray-500 mt-1">
                BMVC 2026 Research Paper
              </p>

            </div>

            <div>

              <a
                href="https://example.com/lora-diffusion"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-blue-600 hover:underline
                  font-medium block
                "
              >
                LoRA-Conditioned Diffusion Models
              </a>

              <p className="text-gray-500 mt-1">
                Generative Vision Research
              </p>

            </div>

            <div>

              <a
                href="https://example.com/multi-reference"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-blue-600 hover:underline
                  font-medium block
                "
              >
                Multi-Reference Visual Composition Techniques
              </a>

              <p className="text-gray-500 mt-1">
                Image Composition & Layout Modeling
              </p>

            </div>

          </div>

          {/* CREDITS */}
          <h2 className="text-2xl font-semibold mb-5">
            Credits
          </h2>

          <div
            className="
              text-base text-gray-700
              leading-relaxed space-y-4
            "
          >

            <p>
              We acknowledge and credit the original authors
              for the webpage design inspiration and presentation layout.
            </p>

            <div>

              <p className="font-semibold mb-3">
                Website Inspiration
              </p>

              <a
                href="https://edit-by-track.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-blue-600 hover:underline block
                "
              >
                Edit-by-Track: Generative Video Motion Editing with 3D Point Tracks
              </a>

            </div>

            <p>
              This project webpage was designed for showcasing
              research demonstrations, visual outputs and
              multi-reference image generation results.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}