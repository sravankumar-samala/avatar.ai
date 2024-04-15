import { v4 as uuid } from "uuid";
// import chatGpt from "../../public/chat-gpt.png";
// import studyBuddy from "../../public/study-buddy.png";
// import Psychologist from "../../public/psychologist.png";
// import imageGenerator from "../../public/image-generator.png";

const aiSuggestionsData = [
  {
    id: uuid(),
    imageSrc: "chatgpt.png",
    name: "Chat GPT",
    creator: "@Dr_Clef_",
    description: "Actually made using chatgpt",
    usersCount: 3.6,
  },
  {
    id: uuid(),
    imageSrc: "study-buddy.png",
    name: "Study buddy",
    creator: "@Sumeryy",
    description: "Smart, Playful, can be stern",
    usersCount: 1.1,
  },
  {
    id: uuid(),
    imageSrc: "psychologist.png",
    name: "Psychologist",
    creator: "@Blazeman98",
    description: "Someone who helps with life difficulties",
    usersCount: 106.1,
  },
  {
    id: uuid(),
    imageSrc: "image-generator.png",
    name: "Image Generator",
    creator: "@LittleBanana",
    description: "An AI for you to create images",
    usersCount: 4.3,
  },
];
export default aiSuggestionsData;
