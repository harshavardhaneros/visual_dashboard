import React, { useState } from "react";
import {
  FileText,
  PlayCircle,
  Quote,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import horrorStraight from "../themes/horror/underwater_resultt.png";
import underwaterStraight from "../themes/underwater/underwater_resultt.png";
import s1Thumb from "../themes/ads/chotabheem.png";
import s1Images from "../themes/ads/chotahouse.png";
import s2Thumb from "../themes/ads/indian sample.png";
import s2Images from "../themes/ads/indian_house.png";
import srkActorImg from "../themes/cultural_shots/image srk.png";
import upanayanamCultureImg from "../themes/cultural_shots/image upanayanam.png";
import srkUpanayanamResult from "../themes/cultural_shots/integrated_result_srk_var03_perfect_depth (1).png";
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

const outputPanelWidthClass = "w-full max-w-5xl mx-auto";

const contentPanelWidthClass = outputPanelWidthClass;

const cinematicOutputAspectClass = "aspect-[3/2]";

const culturalImgClass = "w-full h-full object-contain";

const culturalCultureImgClass =
  "w-full h-full object-cover object-[center_75%]";

export default function ResultsGallery() {

  /* ================= ADS ================= */

  const samples = [
    {
      id: "S1",
      prompt:
        "Medium-wide cinematic shot of a cozy Indian children's bedroom, captured from a closer eye-level perspective with a 35mm lens, focusing on the bed, study table, and surrounding toys rather than the entire room. The composition feels intimate, warm, and naturally lived-in. A wooden bed with a colorful Doraemon cartoon bedsheet fills the center foreground, with soft pillows and slightly messy blankets. Beside the bed, a partially opened Carrom board with scattered coins lies on the tiled floor next to a Chhota Bheem action figure, Beyblade Burst toys, and a colorful toy auto rickshaw. An SG cricket bat leans against a grey Godrej steel almirah covered with faded cartoon stickers and small Virat Kohli posters. A cluttered Indian study table holds a Parle-G biscuit packet, Amul Butter box, Natraj pencils, Classmate notebooks, Camlin crayons, and a warm desk lamp. A red Milton lunch box and a half-open Skybags school backpack sit nearby on the floor. On a side shelf firmly mounted on a solid plain painted wall, a Horlicks jar stands beside a stainless steel Milton water bottle and stacks of Amar Chitra Katha comics. No curtains, no windows on the side walls, only plain painted walls visible behind and around the shelf. Ceiling fan overhead, plastic chair, nostalgic middle-class Indian home atmosphere, authentic clutter, realistic textures, cinematic natural lighting, photorealistic documentary-style interior photography, shallow-to-medium depth of field.",
      thumb: s1Thumb,
      outputs: {
        images: s1Images,
      },
    },

    {
      id: "S2",
      prompt:
        "Indian heritage interior in a sandstone and teakwood haveli with an symmetrical layout prioritizing background visibility and depth. Warm golden sunlight streams through geometric jaali screens on the left, casting patterned shadows across wooden floor and walls. In the foreground sits a polished brass urli with floating marigolds and jasmine blossoms, paired with a slender antique brass nilavilakku lamp. Center-right stands an elegant carved Chettinad teak pillar with aged texture, preserving open spatial flow. The back wall features a wooden jharokha with lattice carving framing a devotional artwork, beneath which rest a Bidriware vase with silver inlay patterns and a hammered copper water vessel. The left side contains low cane lounge chairs and a flatwoven dhurrie rug with muted indigo, terracotta, beige. Background details include a hanging temple bell near an arched doorway and earthen clay pots in alcoves. lighting, sandstone and teak textures, wide-angle composition, deep focus, minimal clutter.",
      thumb: s2Thumb,
      outputs: {
        images: s2Images,
      },
    },

  ];

  const [selectedSample, setSelectedSample] =
    useState(samples[0]);

  /* ================= CINEMATIC ================= */

  const cinematicThemes = ["Horror", "Underwater"];

  const [selectedTheme, setSelectedTheme] = useState("Horror");

  const cinematicOutputs = {
    Horror: horrorStraight,
    Underwater: underwaterStraight,
  };

  const cinematicPrompts = {
    Horror:
      "Photorealistic dark fantasy photography, decaying traditional Indian heritage artifacts and furniture abandoned in a grim, ancient stone crypt. Weathered woven rattan cane chairs with faded cushions, a heavy carved wooden pillar draped in thick cobwebs, and an ornate dusty wooden jharokha frame mounted on a crumbling stone wall. A large, oxidized brass urli filled with dark water, wilting marigold flowers, and a single softly glowing candle. Resting on a cold, rough-hewn stone dungeon floor scattered with dead flower petals, debris, and tiny ancient bones. Oppressive, claustrophobic atmosphere, a single cold, piercing volumetric moonbeam shining down through a high barred dungeon window, illuminating glowing dust motes dancing in the air. Heavy shadows, sinister cinematic horror lighting, dense spiderwebs connecting the ancient objects. 8k resolution, dark gothic aesthetic, highly detailed decayed textures, chilling and eerie environment.",
    Underwater:
      "Photorealistic underwater photography, traditional Indian heritage artifacts and furniture suspended weightlessly in the deep ocean. Floating woven rattan cane chairs, a tilted carved Chettinad wooden pillar, and an ornate wooden jharokha frame. A polished brass urli spilling bright orange marigold flowers into the water current. Resting above a soft white sandy seabed surrounded by vibrant, lush coral reefs and sea sponges. Crystal-clear turquoise ocean water, intense volumetric god rays refracting from the surface, shimmering water caustics dancing across brass and teakwood. Schools of small colorful tropical fish swimming through the scene, tiny rising air bubbles. 8k resolution, cinematic underwater lighting, National Geographic style, highly detailed marine environment.",
  };

  const culturalPairs = [
    {
      actor: {
        name: "SRK",
        img: srkActorImg,
      },
      culture: {
        name: "Upanayanam",
        img: upanayanamCultureImg,
      },
      output: srkUpanayanamResult,
      prompt:
        "Cinematic scene inside an ancient South Indian temple-like mandapam with massive stone pillars, carved walls, and soft golden light streaming from the left, creating a dusty, atmospheric glow. In the center foreground, a man in a white dhoti and a young boy wearing a flower garland participate in a traditional Hindu ritual, with the man guiding the boy as they hold a sacred thread or object. They sit behind a detailed, colorful rangoli (kolam) surrounded by brass plates of flowers, a lit diya on a leaf, and a vessel with green foliage. On the left stands Shah Rukh Khan in a deep purple sherwani, calmly observing the scene.",
    },
    {
      actor: {
        name: "Ranveer Singh",
        img: actor2Img,
      },
      culture: {
        name: "Theyyam",
        img: culture2Img,
      },
      output: actor2Culture2Result,
      prompt:
        "Cinematic scene set in a dim, ancient stone corridor resembling a South Indian temple hall, with long carved pillars fading into mist and dramatic, moody lighting. In the left foreground, Ranveer Singh appears as a regal historical figure, seated or leaning forward in an ornate emerald green velvet angrakha with heavy gold zari embroidery, paired with a cream inner garment and a jeweled traditional turban, styled mustache, and kohl-lined eyes. In the right background, a Kathakali dancer performs in full traditional costume with green face makeup, elaborate headgear, and red-white attire. Ritual elements include a brass kalash with coconut and mango leaves, marigolds, and a lit diya on a leaf.",
    },
    {
      actor: {
        name: "Aishwarya Rai",
        img: actor3Img,
      },
      culture: {
        name: "Goddess Kali",
        img: culture3Img,
      },
      output: actor3Culture3Result,
      prompt:
        "Cinematic, mystical scene inside an ancient shadowy stone chamber lined with carved pillars and filled with atmospheric fog and smoke, creating a divine yet intense mood. At the center stands a large idol of Goddess Kali, depicted with dark skin, a fierce expression, protruding red tongue, wide eyes, and a third eye on her forehead. She has multiple arms holding symbolic weapons including a sword and a severed head, and is richly adorned with layered garlands of flowers, beads, and heavy gold ornaments cascading to the floor. Beneath her feet lies a prone white figure symbolizing Lord Shiva. In the left foreground, a woman in an ornate cream saree with red and gold borders stands in a prayerful, meditative pose with traditional bridal jewelry. Floating elements include a vertical dagger and hanging torch-like lights, enhancing the surreal sacred atmosphere.",
    },
  ];

  /* ================= CULTURAL ================= */

  const [selectedPairIndex, setSelectedPairIndex] = useState(0);

  const selectedPair = culturalPairs[selectedPairIndex];
  const culturalOutputSrc = selectedPair.output;

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

        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">

          {samples.map((sample) => (
            <div
              key={sample.id}
              onClick={() => setSelectedSample(sample)}
              className={`
                ${panelClass} px-3 pt-3 pb-2
                h-[240px] flex flex-col
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

        {/* OUTPUTS */}
        <div className="flex justify-center mb-10">

          <div
            className={`${panelClass} ${outputPanelWidthClass} p-5 hover:shadow-lg transition-all duration-300`}
          >

            <h3 className="text-lg font-bold text-center mb-4">
              Images
            </h3>

            <div
              className={`w-full overflow-hidden rounded-xl bg-gray-100 ${cinematicOutputAspectClass}`}
            >

              <img
                src={selectedSample.outputs.images}
                alt={`${selectedSample.id} output`}
                className="w-full h-full object-contain"
              />

            </div>

          </div>

        </div>

        {/* PROMPT */}
        <div className={`${panelClass} p-5 ${outputPanelWidthClass}`}>

          <h3 className="text-lg font-bold mb-3">
            Prompt
          </h3>

          <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
            {selectedSample.prompt}
          </p>

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

        </div>

        {/* OUTPUT */}
        <div className={`${panelClass} ${contentPanelWidthClass} overflow-hidden mb-10`}>

          <h3 className="text-lg font-bold text-center px-5 pt-5 pb-4">
            Output
          </h3>

          <div className="px-4 pb-4">
            <div
              className={`w-full overflow-hidden rounded-xl bg-gray-100 ${cinematicOutputAspectClass}`}
            >
              <img
                src={cinematicOutputs[selectedTheme]}
                alt={`${selectedTheme} cinematic output`}
                className="w-full h-full object-cover object-center block"
              />
            </div>
          </div>

        </div>

        {/* PROMPT */}
        <div className={`${panelClass} ${contentPanelWidthClass} p-5`}>

          <h3 className="text-lg font-bold mb-3">
            {selectedTheme} Prompt
          </h3>

          <p className="text-base text-gray-700 leading-relaxed">
            {cinematicPrompts[selectedTheme]}
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
            <div
              className={`w-full overflow-hidden rounded-xl bg-gray-100 ${cinematicOutputAspectClass}`}
            >
              <img
                src={culturalOutputSrc}
                alt={`${selectedPair.actor.name} and ${selectedPair.culture.name} composition`}
                className="w-full h-full object-contain object-center block"
              />
            </div>
          </div>

        </div>

        {/* PROMPT */}
        <div className={`${panelClass} ${contentPanelWidthClass} p-5 mb-12`}>

          <h3 className="text-lg font-bold mb-3">
            Prompt
          </h3>

          <p className="text-base text-gray-700 leading-relaxed">
            {selectedPair.prompt}
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