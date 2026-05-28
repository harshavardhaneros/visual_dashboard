import React, { useState } from "react";
import {
  FileText,
  PlayCircle,
  Quote,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import horrorStraight from "../themes/horror/underwater_resultt.png";
import horrorDepth from "../themes/depth/horror/gen_depth.png";
import underwaterStraight from "../themes/underwater/underwater_resultt.png";
import underwaterDepth from "../themes/depth/underwater/gen_depth.png";
import actor1Img from "../themes/cultural_shots/image srk.png";
import culture1Img from "../themes/cultural_shots/image upanayanam.png";
import srkUpanayanamResult from "../themes/cultural_shots/integrated_result_srk_var03_perfect_depth (1).png";

const cinematicCardBase =
  "w-48 h-16 flex items-center justify-center text-center shrink-0 bg-white rounded-2xl text-lg md:text-xl font-bold";

const selectCardClass = (isSelected) =>
  `
    ${cinematicCardBase}
    uppercase tracking-wide
    shadow-[0_4px_16px_rgba(0,0,0,0.08)]
    border-2 transition-all duration-200 cursor-pointer
    ${
      isSelected
        ? "border-black"
        : "border-transparent hover:border-gray-300"
    }
  `;

const labelCardClass = `${cinematicCardBase} border-2 border-black capitalize`;

const culturalThumbClass =
  "w-32 h-48 rounded-2xl overflow-hidden bg-black flex items-center justify-center";

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
      grid: [
        "https://picsum.photos/400?1",
        "https://picsum.photos/400?2",
        "https://picsum.photos/400?3",
        "https://picsum.photos/400?4",
        "https://picsum.photos/400?5",
        "https://picsum.photos/400?6",
      ],
      outputs: {
        canvas: "https://picsum.photos/900/600?7",
        depth: "https://picsum.photos/900/600?8",
        images: "https://picsum.photos/900/600?9",
      },
    },

    {
      id: "S2",
      prompt:
        "Urban fashion commercial with editorial composition and cinematic contrast.",
      grid: [
        "https://picsum.photos/400?10",
        "https://picsum.photos/400?11",
        "https://picsum.photos/400?12",
        "https://picsum.photos/400?13",
        "https://picsum.photos/400?14",
        "https://picsum.photos/400?15",
      ],
      outputs: {
        canvas: "https://picsum.photos/900/600?16",
        depth: "https://picsum.photos/900/600?17",
        images: "https://picsum.photos/900/600?18",
      },
    },

    {
      id: "S3",
      prompt:
        "Minimal beverage advertisement with soft gradients and product-centric framing.",
      grid: [
        "https://picsum.photos/400?19",
        "https://picsum.photos/400?20",
        "https://picsum.photos/400?21",
        "https://picsum.photos/400?22",
        "https://picsum.photos/400?23",
        "https://picsum.photos/400?24",
      ],
      outputs: {
        canvas: "https://picsum.photos/900/600?25",
        depth: "https://picsum.photos/900/600?26",
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
      Isometric: horrorDepth,
    },
    Underwater: {
      Straight: underwaterStraight,
      Isometric: underwaterDepth,
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
        img: actor1Img,
      },
      culture: {
        name: "Culture 1",
        img: culture1Img,
      },
    },
    {
      actor: {
        name: "Actor 2",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=320&h=320&fit=crop",
      },
      culture: {
        name: "Culture 2",
        img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=320&h=320&fit=crop",
      },
    },
    {
      actor: {
        name: "Actor 3",
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=320&h=320&fit=crop",
      },
      culture: {
        name: "Culture 3",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=320&h=320&fit=crop",
      },
    },
  ];

  const culturalOutputs = {
    "Actor 1|Culture 1": srkUpanayanamResult,
  };

  /* ================= CULTURAL ================= */

  const [selectedActor, setSelectedActor] = useState(
    culturalPairs[0].actor
  );

  const [selectedCulture, setSelectedCulture] = useState(
    culturalPairs[0].culture
  );

  const culturalOutputSrc =
    culturalOutputs[`${selectedActor?.name}|${selectedCulture?.name}`] ??
    `https://picsum.photos/1000/700?random=${
      selectedActor?.name || "actor"
    }${selectedCulture?.name || "culture"}`;

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

        <h2 className="text-5xl font-semibold text-center mb-16">
          Ads Generation
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mb-14">

          {samples.map((sample) => (
            <div
              key={sample.id}
              onClick={() => setSelectedSample(sample)}
              className={`
                bg-white rounded-3xl p-5 shadow-md
                cursor-pointer transition-all duration-300
                hover:scale-[1.03] hover:shadow-xl

                ${
                  selectedSample.id === sample.id
                    ? "ring-4 ring-black"
                    : ""
                }
              `}
            >

              <h3 className="text-3xl font-bold text-center mb-6">
                {sample.id}
              </h3>

              <div className="grid grid-cols-3 gap-3">

                {sample.grid.map((img, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl h-28"
                  >

                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* PROMPT */}
        <div className="bg-white rounded-3xl p-8 shadow-md mb-16">

          <h3 className="text-2xl font-bold mb-4">
            Prompt
          </h3>

          <p className="text-xl text-gray-700 leading-relaxed">
            {selectedSample.prompt}
          </p>

        </div>

        {/* OUTPUTS */}
        <div className="grid lg:grid-cols-3 gap-10">

          {["canvas", "depth", "images"].map((type) => (

            <div
              key={type}
              className="
                bg-white rounded-3xl shadow-md p-6
                hover:shadow-xl transition-all duration-300
              "
            >

              <h3 className="text-2xl font-bold capitalize text-center mb-6">
                {type}
              </h3>

              <div
                className="
                  bg-gray-100 rounded-2xl
                  min-h-[350px]
                  flex items-center justify-center
                "
              >

                <img
                  src={selectedSample.outputs[type]}
                  alt=""
                  className="
                    max-w-full max-h-[500px]
                    object-contain rounded-2xl
                  "
                />

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= CINEMATIC ================= */}

      <section
        id="cinematic"
        className="max-w-7xl mx-auto px-6 mb-40"
      >

        <h2 className="text-5xl font-semibold text-center mb-16">
          Cinematic Shots
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 mb-16">

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className={labelCardClass}>Themes</div>
            <ArrowRight size={28} strokeWidth={2.5} className="shrink-0" />

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

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className={labelCardClass}>View</div>
            <ArrowRight size={28} strokeWidth={2.5} className="shrink-0" />

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

        {/* PROMPT */}
        <div className="bg-white rounded-3xl p-10 shadow-md mb-16">

          <h3 className="text-3xl font-bold mb-6">
            {selectedTheme} Prompt
          </h3>

          <p className="text-2xl text-gray-700 leading-relaxed">

            {cinematicPrompts[selectedTheme]}{" "}
            Rendered with a{" "}
            <span className="font-bold text-black">
              {selectedView.toLowerCase()}
            </span>
            {" "}view and movie-grade composition.

          </p>

        </div>

        {/* OUTPUT */}
        <div className="bg-white rounded-3xl p-8 shadow-md">

          <h3 className="text-3xl font-bold text-center mb-8">
            Output
          </h3>

          <div
            className="
              bg-gray-100 rounded-2xl
              min-h-[550px]
              flex items-center justify-center
            "
          >

            <img
              src={cinematicOutputs[selectedTheme][selectedView]}
              alt={`${selectedTheme} ${selectedView} cinematic output`}
              className="
                max-w-full max-h-[700px]
                object-contain rounded-2xl
              "
            />

          </div>

        </div>

      </section>

      {/* ================= CULTURAL ================= */}

      <section
        id="cultural"
        className="max-w-7xl mx-auto px-6 pb-24"
      >

        <h2 className="text-5xl font-semibold text-center mb-16">
          Cultural Composition
        </h2>

        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">

          {culturalPairs.map((pair, index) => (

            <div
              key={index}
              className="
                bg-white rounded-3xl p-5 shadow-md
                flex items-center justify-center gap-4
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-xl
              "
            >

              {/* ACTOR */}
              <div
                onClick={() => setSelectedActor(pair.actor)}
                className="
                  cursor-pointer
                  transition-all duration-300
                  hover:scale-105
                "
              >

                <div className={culturalThumbClass}>
                  <img
                    src={pair.actor.img}
                    alt={pair.actor.name}
                    className={culturalImgClass}
                  />
                </div>

                <div className="text-center mt-3 text-base font-semibold">
                  {pair.actor.name}
                </div>

              </div>

              <div className="text-4xl font-light">
                +
              </div>

              {/* CULTURE */}
              <div
                onClick={() => setSelectedCulture(pair.culture)}
                className="
                  cursor-pointer
                  transition-all duration-300
                  hover:scale-105
                "
              >

                <div className={culturalThumbClass}>
                  <img
                    src={pair.culture.img}
                    alt={pair.culture.name}
                    className={culturalCultureImgClass}
                  />
                </div>

                <div className="text-center mt-3 text-base font-semibold">
                  {pair.culture.name}
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* OUTPUT */}
        <div
          className="
            max-w-4xl mx-auto bg-white
            rounded-3xl p-8 shadow-md mb-20
          "
        >

          <h3 className="text-3xl font-bold text-center mb-8">
            Output Image
          </h3>

          <div
            className="
              bg-gray-100 rounded-2xl
              min-h-[550px]
              flex items-center justify-center
            "
          >

            <img
              src={culturalOutputSrc}
              alt={`${selectedActor?.name} and ${selectedCulture?.name} composition`}
              className="
                max-w-full max-h-[700px]
                object-contain rounded-2xl
              "
            />

          </div>

        </div>

        {/* PROMPT */}
        <div className="bg-white rounded-3xl p-10 shadow-md mb-24">

          <h3 className="text-3xl font-bold mb-6">
            Prompt
          </h3>

          <p className="text-2xl text-gray-700 leading-relaxed">

            A cinematic cultural composition featuring{" "}

            <span className="font-bold text-black">
              {selectedActor?.name}
            </span>

            {" "}immersed in{" "}

            <span className="font-bold text-black">
              {selectedCulture?.name}
            </span>

            {" "}environment with dramatic storytelling,
            realistic lighting and movie-grade aesthetics.

          </p>

        </div>

        {/* ================= REFERENCES ================= */}

        <div className="bg-white rounded-3xl shadow-md p-10">

          {/* REFERENCES */}
          <h2 className="text-4xl font-semibold mb-8">
            References
          </h2>

          <div
            className="
              text-xl text-gray-700
              leading-relaxed space-y-8 mb-16
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
          <h2 className="text-4xl font-semibold mb-8">
            Credits
          </h2>

          <div
            className="
              text-xl text-gray-700
              leading-relaxed space-y-6
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