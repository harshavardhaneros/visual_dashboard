import React, { useState } from "react";
import {
  FileText,
  PlayCircle,
  Quote,
  BookOpen,
} from "lucide-react";

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

  const cinematicStyles = [
    "HORROR",
    "COMIC",
    "TRAGEDY",
    "SPACE",
    "CINEMATIC",
    "INDIA",
  ];

  const [selectedStyle, setSelectedStyle] =
    useState(cinematicStyles[0]);

  /* ================= CULTURAL ================= */

  const [selectedActor, setSelectedActor] = useState({
    name: "Actor 1",
    img: "https://picsum.photos/300?101",
  });

  const [selectedCulture, setSelectedCulture] = useState({
    name: "Culture 1",
    img: "https://picsum.photos/300?201",
  });

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
            <span>Kuppa Sai Sri Teja¹</span>
            <span>Priyadarsan B¹²</span>
            <span>Parth Shinde¹²</span>
            <span>Jinka Harshavardhan²³</span>
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
            <span className="mr-6">
              ¹ IIT Madras
            </span>

            <span className="mr-6">
              ² EROS NOW
            </span>

            <span>³ SRMIST</span>
          </div>

          <div className="text-3xl font-semibold mb-14">
            BMVC 2026
          </div>

          {/* BUTTONS */}
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
              href="https://arxiv.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white
                rounded-full
                px-6
                md:px-8
                py-3
                md:py-4
                shadow-md
                flex
                items-center
                gap-2
                md:gap-3
                text-base
                md:text-xl
                font-medium
                hover:scale-105
                hover:shadow-lg
                transition-all
                duration-300
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
                bg-white
                rounded-full
                px-6
                md:px-8
                py-3
                md:py-4
                shadow-md
                flex
                items-center
                gap-2
                md:gap-3
                text-base
                md:text-xl
                font-medium
                hover:scale-105
                hover:shadow-lg
                transition-all
                duration-300
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
                bg-white
                rounded-full
                px-6
                md:px-8
                py-3
                md:py-4
                shadow-md
                flex
                items-center
                gap-2
                md:gap-3
                text-base
                md:text-xl
                font-medium
                hover:scale-105
                hover:shadow-lg
                transition-all
                duration-300
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
                bg-white
                rounded-full
                px-6
                md:px-8
                py-3
                md:py-4
                shadow-md
                flex
                items-center
                gap-2
                md:gap-3
                text-base
                md:text-xl
                font-medium
                hover:scale-105
                hover:shadow-lg
                transition-all
                duration-300
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
              text-2xl
              md:text-3xl
              leading-relaxed
              mb-10
            "
          >
            RefCompose enables controllable multi-reference image generation
            through LoRA-conditioned diffusion models. Explore our visual
            applications below:
          </p>

          <div
            className="
              bg-white
              rounded-full
              shadow-md
              px-6
              py-5
              flex
              flex-wrap
              justify-center
              gap-10
            "
          >

            <a
              href="#ads"
              className="
                text-xl
                font-semibold
                hover:text-blue-600
                transition-all
              "
            >
              Ads Generation
            </a>

            <a
              href="#cinematic"
              className="
                text-xl
                font-semibold
                hover:text-blue-600
                transition-all
              "
            >
              Cinematic Shots
            </a>

            <a
              href="#cultural"
              className="
                text-xl
                font-semibold
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

                ${
                  selectedSample.id === sample.id
                    ? "ring-4 ring-black scale-105"
                    : "hover:scale-105"
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
                    className={`
                      overflow-hidden rounded-2xl

                      ${index === 0 ? "h-24" : ""}
                      ${index === 1 ? "h-32 row-span-2" : ""}
                      ${index === 2 ? "h-24" : ""}
                      ${index === 3 ? "h-32" : ""}
                      ${index === 4 ? "h-24" : ""}
                      ${index === 5 ? "h-24" : ""}
                    `}
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
              className="bg-white rounded-3xl shadow-md p-6"
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
                    max-w-full
                    max-h-[500px]
                    object-contain
                    rounded-2xl
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

        <div className="grid md:grid-cols-3 gap-8 mb-20">

          {cinematicStyles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`
                bg-white rounded-3xl py-10 text-2xl
                font-semibold shadow-md transition-all duration-300

                ${
                  selectedStyle === style
                    ? "ring-4 ring-black scale-105"
                    : "hover:scale-105"
                }
              `}
            >
              {style}
            </button>
          ))}

        </div>

        <div className="bg-white rounded-3xl p-10 shadow-md mb-16">

          <h3 className="text-3xl font-bold mb-6">
            {selectedStyle} Prompt
          </h3>

          <p className="text-2xl text-gray-700 leading-relaxed">

            Cinematic scene generated in

            {" "}
            <span className="font-bold text-black">
              {selectedStyle}
            </span>

            {" "}
            style with movie-grade lighting,
            storytelling composition and visually rich atmosphere.

          </p>

        </div>

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
              src={`https://picsum.photos/1200/700?random=${selectedStyle}`}
              alt=""
              className="
                max-w-full
                max-h-[700px]
                object-contain
                rounded-2xl
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

        {/* PAIRS */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">

          {[
            {
              actor: {
                name: "Actor 1",
                img: "https://picsum.photos/300?101",
              },
              culture: {
                name: "Culture 1",
                img: "https://picsum.photos/300?201",
              },
            },

            {
              actor: {
                name: "Actor 2",
                img: "https://picsum.photos/300?102",
              },
              culture: {
                name: "Culture 2",
                img: "https://picsum.photos/300?202",
              },
            },

            {
              actor: {
                name: "Actor 3",
                img: "https://picsum.photos/300?103",
              },
              culture: {
                name: "Culture 3",
                img: "https://picsum.photos/300?203",
              },
            },

            {
              actor: {
                name: "Actor 4",
                img: "https://picsum.photos/300?104",
              },
              culture: {
                name: "Culture 4",
                img: "https://picsum.photos/300?204",
              },
            },

          ].map((pair, index) => (

            <div
              key={index}
              className="
                bg-white rounded-3xl p-6 shadow-md
                flex items-center justify-center gap-6
              "
            >

              {/* ACTOR */}
              <div
                onClick={() => setSelectedActor(pair.actor)}
                className={`
                  rounded-2xl overflow-hidden cursor-pointer
                  transition-all duration-300

                  ${
                    selectedActor?.name === pair.actor.name
                      ? "ring-4 ring-black scale-105"
                      : "hover:scale-105"
                  }
                `}
              >

                <img
                  src={pair.actor.img}
                  alt=""
                  className="w-40 h-40 object-cover"
                />

                <div className="text-center py-3 text-lg font-semibold bg-white">
                  {pair.actor.name}
                </div>

              </div>

              <div className="text-4xl font-light">
                +
              </div>

              {/* CULTURE */}
              <div
                onClick={() => setSelectedCulture(pair.culture)}
                className={`
                  rounded-2xl overflow-hidden cursor-pointer
                  transition-all duration-300

                  ${
                    selectedCulture?.name === pair.culture.name
                      ? "ring-4 ring-black scale-105"
                      : "hover:scale-105"
                  }
                `}
              >

                <img
                  src={pair.culture.img}
                  alt=""
                  className="w-40 h-40 object-cover"
                />

                <div className="text-center py-3 text-lg font-semibold bg-white">
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
              src={`https://picsum.photos/1000/700?random=${
                selectedActor?.name || "actor"
              }${selectedCulture?.name || "culture"}`}
              alt=""
              className="
                max-w-full
                max-h-[700px]
                object-contain
                rounded-2xl
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

            A cinematic cultural composition featuring

            {" "}
            <span className="font-bold text-black">
              {selectedActor?.name}
            </span>

            {" "}
            immersed in

            {" "}
            <span className="font-bold text-black">
              {selectedCulture?.name}
            </span>

            {" "}
            environment with dramatic storytelling,
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
              leading-relaxed space-y-5 mb-16
            "
          >

            <p>
              RefCompose: Multi-Reference Image Generation
              via LoRA-Conditioned Diffusion.
            </p>

            <p>
              BMVC 2026 Research Demonstration Website.
            </p>

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

            <div>

              <p>
                We acknowledge and credit the original authors
                for the webpage design inspiration and presentation layout.
              </p>

            </div>

            <div>

              <p className="font-semibold mb-3">
                Website Inspiration
              </p>

              <a
                href="https://edit-by-track.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-blue-600
                  hover:underline
                  block
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