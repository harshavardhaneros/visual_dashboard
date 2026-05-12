import React, { useState } from "react";

export default function ResultsGallery() {
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

        {/* ADS */}
        <section className="mb-24">

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

      </div>
    </div>
  );
}