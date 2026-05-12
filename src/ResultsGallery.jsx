import React, { useState } from "react";

export default function ResultsGallery() {

  /* ================= ADS SECTION ================= */

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

  /* ================= CINEMATIC SECTION ================= */

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

  /* ================= CULTURAL SECTION ================= */

  const [selectedActor, setSelectedActor] = useState({
    name: "Actor 1",
    img: "https://picsum.photos/300?101",
  });

  const [selectedCulture, setSelectedCulture] = useState({
    name: "Culture 1",
    img: "https://picsum.photos/300?201",
  });

  return (
    <div className="min-h-screen bg-[#f4f4f5] px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-24">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
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

          {/* SAMPLE SELECTOR */}
          <div className="flex flex-wrap justify-center gap-10 mb-20">

            {samples.map((sample) => (
              <div
                key={sample.id}
                onClick={() => setSelectedSample(sample)}
                className={`
                  w-[320px]
                  bg-white
                  rounded-3xl
                  p-5
                  shadow-md
                  cursor-pointer
                  transition-all duration-300

                  ${
                    selectedSample.id === sample.id
                      ? "ring-4 ring-black scale-105"
                      : "hover:scale-105"
                  }
                `}
              >

                <h3 className="text-center text-3xl font-bold mb-6">
                  {sample.id}
                </h3>

                <div className="grid grid-cols-3 gap-3">

                  {sample.grid.map((img, index) => (
                    <div
                      key={index}
                      className={`
                        overflow-hidden
                        rounded-2xl
                        bg-gray-200

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">

            {["canvas", "depth", "images"].map((type) => (

              <div
                key={type}
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-md
                "
              >

                <h3 className="text-2xl font-bold text-center capitalize mb-6">
                  {type}
                </h3>

                <div className="
                  bg-gray-100
                  rounded-2xl
                  min-h-[350px]
                  flex
                  items-center
                  justify-center
                ">

                  <img
                    src={selectedSample.outputs[type]}
                    alt=""
                    className="max-w-full max-h-[500px] object-contain rounded-2xl"
                  />

                </div>

              </div>

            ))}

          </div>

          {/* PROMPT */}
          <div className="
            bg-white
            rounded-3xl
            p-10
            shadow-md
          ">

            <h3 className="text-3xl font-bold mb-6">
              PROMPT
            </h3>

            <p className="text-2xl text-gray-700 leading-relaxed">
              {selectedSample.prompt}
            </p>

          </div>

        </section>

        {/* ================= CINEMATIC SHOTS ================= */}

        <section className="mb-32">

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
                  bg-white
                  rounded-3xl
                  p-5
                  shadow-md
                  cursor-pointer
                  transition-all duration-300

                  ${
                    selectedCinematicSample.id === sample.id
                      ? "ring-4 ring-black scale-105"
                      : "hover:scale-105"
                  }
                `}
              >

                <h3 className="text-center text-3xl font-bold mb-6">
                  {sample.id}
                </h3>

                <div className="grid grid-cols-3 gap-3">

                  {sample.layouts.map((img, index) => (
                    <div
                      key={index}
                      className={`
                        overflow-hidden
                        rounded-2xl
                        bg-gray-200

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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20">

            {cinematicStyles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`
                  rounded-2xl
                  bg-white
                  py-8
                  text-2xl
                  font-bold
                  shadow-md
                  transition-all duration-300

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

          {/* PROMPT */}
          <div className="
            bg-white
            rounded-3xl
            p-10
            shadow-md
            mb-16
          ">

            <div className="grid md:grid-cols-3 gap-8 items-center">

              <div className="text-3xl font-bold">
                {selectedStyle} PROMPT
              </div>

              <div className="md:col-span-2 text-2xl text-gray-700 leading-relaxed">

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
          <div className="
            bg-white
            rounded-3xl
            p-8
            shadow-md
          ">

            <h3 className="text-3xl font-bold text-center mb-8">
              OUTPUT
            </h3>

            <div className="
              bg-gray-100
              rounded-2xl
              min-h-[500px]
              flex
              items-center
              justify-center
            ">

              <img
                src={`https://picsum.photos/1200/700?random=${selectedStyle}`}
                alt=""
                className="max-w-full max-h-[700px] object-contain rounded-2xl"
              />

            </div>

          </div>

        </section>

        {/* ================= CULTURAL SHOTS ================= */}

        <section className="mb-24">

          <h2 className="text-4xl font-bold text-center mb-20">
            Cultural Shots
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
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-md
                  flex
                  items-center
                  justify-center
                  gap-6
                "
              >

                {/* ACTOR */}
                <div
                  onClick={() => setSelectedActor(pair.actor)}
                  className={`
                    cursor-pointer
                    rounded-2xl
                    overflow-hidden
                    shadow-sm
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

                  <div className="text-center text-lg font-semibold py-3 bg-white">
                    {pair.actor.name}
                  </div>

                </div>

                {/* PLUS */}
                <div className="text-4xl font-light">
                  +
                </div>

                {/* CULTURE */}
                <div
                  onClick={() => setSelectedCulture(pair.culture)}
                  className={`
                    cursor-pointer
                    rounded-2xl
                    overflow-hidden
                    shadow-sm
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

                  <div className="text-center text-lg font-semibold py-3 bg-white">
                    {pair.culture.name}
                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* OUTPUT */}
          <div className="max-w-3xl mx-auto mb-20">

            <div className="
              bg-white
              rounded-3xl
              p-8
              shadow-md
            ">

              <h3 className="text-3xl font-bold text-center mb-8">
                OUTPUT IMAGE
              </h3>

              <div className="
                bg-gray-100
                rounded-2xl
                min-h-[500px]
                flex
                items-center
                justify-center
              ">

                <img
                  src={`https://picsum.photos/1000/700?random=${
                    selectedActor?.name || "actor"
                  }${selectedCulture?.name || "culture"}`}
                  alt=""
                  className="max-w-full max-h-[650px] object-contain rounded-2xl"
                />

              </div>

            </div>

          </div>

          {/* PROMPT */}
          <div className="
            bg-white
            rounded-3xl
            p-10
            shadow-md
          ">

            <h3 className="text-3xl font-bold mb-6">
              PROMPT
            </h3>

            <p className="text-2xl leading-relaxed text-gray-700">

              A cinematic cultural composition featuring

              {" "}
              <span className="font-bold text-black">
                {selectedActor?.name || "Actor"}
              </span>

              {" "}
              immersed in

              {" "}
              <span className="font-bold text-black">
                {selectedCulture?.name || "Culture"}
              </span>

              {" "}
              environment with dramatic storytelling,
              realistic lighting, emotional atmosphere,
              movie-grade visual composition and ultra detailed cinematic aesthetics.

            </p>

          </div>

        </section>

      </div>
    </div>
  );
}