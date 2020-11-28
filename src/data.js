import { v4 as uuidv4 } from "uuid";
function data() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_960_720.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#012129", "#a3a8af"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://cdn.pixabay.com/photo/2017/06/03/20/12/art-2369664_960_720.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#fb1543", "#adae87"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://cdn.pixabay.com/photo/2016/11/29/04/45/aged-1867381_960_720.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#4c4347", "#a1abb0"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://cdn.pixabay.com/photo/2019/09/18/21/31/marine-4487710_960_720.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#416788", "#cbd0d4"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://cdn.pixabay.com/photo/2014/03/25/22/53/smoke-298243_960_720.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#000000", "#fcfdfa"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://cdn.pixabay.com/photo/2014/12/15/17/16/night-sky-569319_960_720.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#04184f", "#baa4b0"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default data;
