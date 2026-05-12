import React, { useState } from "react";

export default function ResultsGallery() {

  /* ---------------- ADS SECTION ---------------- */

  const samples = [
    {
      id: "S1",
      prompt: "Luxury cinematic perfume advertisement",
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
      prompt: "Fashion commercial with urban styling",
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
      prompt: "Minimal beverage advertisement",
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

  const [selectedSample, setSelectedSample] = useState(samples[0]);

  /* ---------------- CINEMATIC SECTION ---------------- */

  const cinematicSamples = [
    {
      id: "S1",
      layouts: [
        "https://picsum.photos/300?31",
        "https://picsum.photos/300?32",
        "https://picsum.photos/300?33",
        "https://picsum.photos/300?34",
        "https://picsum.photos/300?35",
        "https://picsum.photos/300?36",
      ],
    },

    {
      id: "S2",
      layouts: [
        "https://picsum.photos/300?41",
        "https://picsum.photos/300?42",
        "https://picsum.photos/300?43",
        "https://picsum.photos/300?44",
        "https://picsum.photos/300?45",
        "https://picsum.photos/300?46",
      ],
    },

    {
      id: "S3",
      layouts: [
        "https://picsum.photos/300?51",
        "https://picsum.photos/300?52",
        "https://picsum.photos/300?53",
        "https://picsum.photos/300?54",
        "https://picsum.photos/300?55",
        "https://picsum.photos/300?56",
      ],
    },
  ];

  const cinematicStyles = [
    "HORROR",
    "COMIC",
    "TRAGEDY",
    "SPACE",
    "CINEMATIC",
    "INDIA",
  ];

  const [selectedCinematicSample, setSelectedCinematicSample] =
    useState(cinematicSamples[0]);

  const [selectedStyle, setSelectedStyle] =
    useState(cinematicStyles[0]);

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-5">
            Visual Results Dashboard
          </h1>

          <p className="text-gray-500 text-lg md:text-xl">
            Ads, cinematic shots and cultural shots viewer
          </p>
        </div>

        {/* ================= ADS ================= */}

        <section className="mb-32">

          <h2 className="text-4xl font-bold text-center mb-16">
            Ads
          </h2>

          {/* SAMPLE LAYOUTS */}
          <div className="flex flex-wrap justify-center gap-10 mb-20">

            {samples.map((sample) => (
              <div
                key={sample.id}
                onClick={() => setSelectedSample(sample)}
                className={`
                  w-[320px]
                  border-[5px]
                  p-4
                  bg-white
                  cursor-pointer
                  transition-all

                  ${
                    selectedSample.id === sample.id
                      ? "border-black scale-105"
                      : "border-gray-400"
                  }
                `}
              >

                <h3 className="text-center text-2xl font-bold mb-5">
                  {sample.id}
                </h3>

                {/* CUSTOM GRID */}
                <div className="grid grid-cols-3 gap-3">

                  {sample.grid.map((img, index) => (
                    <div
                      key={index}
                      className={`
                        overflow-hidden
                        border-[4px]
                        border-black
                        rounded-2xl
                        bg-gray-100

                        ${index === 0 ? "h-20" : ""}
                        ${index === 1 ? "h-28 row-span-2" : ""}
                        ${index === 2 ? "h-20" : ""}
                        ${index === 3 ? "h-28" : ""}
                        ${index === 4 ? "h-20" : ""}
                        ${index === 5 ? "h-20" : ""}
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

          {/* OUTPUTS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">

            {/* CANVAS */}
            <div className="border-[5px] border-black bg-white p-5">

              <h3 className="text-center text-2xl font-bold mb-5">
                canvas
              </h3>

              <div className="flex items-center justify-center bg-gray-100 min-h-[350px]">
                <img
                  src={selectedSample.outputs.canvas}
                  alt=""
                  className="max-w-full max-h-[500px] object-contain"
                />
              </div>

            </div>

            {/* DEPTH */}
            <div className="border-[5px] border-black bg-white p-5">

              <h3 className="text-center text-2xl font-bold mb-5">
                depth
              </h3>

              <div className="flex items-center justify-center bg-gray-100 min-h-[350px]">
                <img
                  src={selectedSample.outputs.depth}
                  alt=""
                  className="max-w-full max-h-[500px] object-contain"
                />
              </div>

            </div>

            {/* IMAGE */}
            <div className="border-[5px] border-black bg-white p-5">

              <h3 className="text-center text-2xl font-bold mb-5">
                image
              </h3>

              <div className="flex items-center justify-center bg-gray-100 min-h-[350px]">
                <img
                  src={selectedSample.outputs.images}
                  alt=""
                  className="max-w-full max-h-[500px] object-contain"
                />
              </div>

            </div>

          </div>

          {/* PROMPT */}
          <div className="border-[5px] border-black bg-white p-10">

            <h3 className="text-3xl font-bold mb-6">
              prompts
            </h3>

            <p className="text-xl md:text-2xl leading-relaxed">
              {selectedSample.prompt}
            </p>

          </div>

        </section>

        {/* ================= CINEMATIC SHOTS ================= */}

        <section className="mb-24">

          <h2 className="text-4xl font-bold text-center mb-16">
            Cinematic Shots
          </h2>

          {/* SAMPLE SELECTOR */}
          <div className="flex flex-wrap justify-center gap-10 mb-20">

            {cinematicSamples.map((sample) => (
              <div
                key={sample.id}
                onClick={() => setSelectedCinematicSample(sample)}
                className={`
                  w-[320px]
                  border-[5px]
                  p-4
                  bg-white
                  cursor-pointer

                  ${
                    selectedCinematicSample.id === sample.id
                      ? "border-black scale-105"
                      : "border-gray-400"
                  }
                `}
              >

                <h3 className="text-center text-2xl font-bold mb-5">
                  {sample.id}
                </h3>

                <div className="grid grid-cols-3 gap-3">

                  {sample.layouts.map((img, index) => (
                    <div
                      key={index}
                      className={`
                        overflow-hidden
                        border-[4px]
                        border-black
                        rounded-2xl
                        bg-gray-100

                        ${index === 0 ? "h-20" : ""}
                        ${index === 1 ? "h-28 row-span-2" : ""}
                        ${index === 2 ? "h-20" : ""}
                        ${index === 3 ? "h-28" : ""}
                        ${index === 4 ? "h-20" : ""}
                        ${index === 5 ? "h-20" : ""}
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

          {/* STYLE BUTTONS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-16">

            {cinematicStyles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`
                  border-[5px]
                  bg-white
                  py-10
                  text-2xl
                  font-bold

                  ${
                    selectedStyle === style
                      ? "border-black"
                      : "border-gray-400"
                  }
                `}
              >
                {style}
              </button>
            ))}

          </div>

          {/* PROMPT */}
          <div className="border-[5px] border-black bg-white p-10 mb-16">

            <div className="grid md:grid-cols-3 gap-8 items-center">

              <div className="text-3xl font-bold">
                {selectedStyle} PROMPT
              </div>

              <div className="md:col-span-2 text-2xl leading-relaxed">

                {selectedStyle === "HORROR" &&
                  "Dark abandoned mansion, cinematic horror atmosphere, fog, dramatic shadows, eerie lighting, ultra realistic movie scene."}

                {selectedStyle === "COMIC" &&
                  "Stylized comic-book scene with vibrant colors, exaggerated action pose, dynamic framing, graphic novel aesthetic."}

                {selectedStyle === "TRAGEDY" &&
                  "Emotional cinematic scene with rain, sorrowful atmosphere, soft lighting, dramatic storytelling composition."}

                {selectedStyle === "SPACE" &&
                  "Futuristic outer space environment, glowing nebula, astronauts, sci-fi cinematic visuals, ultra detailed galaxy backdrop."}

                {selectedStyle === "CINEMATIC" &&
                  "Movie-grade cinematic frame with volumetric lighting, realistic shadows, dramatic composition and immersive storytelling."}

                {selectedStyle === "INDIA" &&
                  "Indian cultural cinematic scene with vibrant festival atmosphere, traditional clothing, warm lighting and authentic environment."}

              </div>

            </div>

          </div>

          {/* OUTPUT */}
          <div>

            <h3 className="text-3xl font-bold mb-8">
              OUTPUT
            </h3>

            <div className="border-[5px] border-black bg-white p-6">

              <div className="bg-gray-100 flex items-center justify-center min-h-[500px]">

                <img
                  src={`https://picsum.photos/1200/700?random=${selectedStyle}`}
                  alt=""
                  className="max-w-full max-h-[700px] object-contain"
                />

              </div>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
}