// Connect to the server's WebSocket route
const socket = io("/yaml");

let authYaml = false;
let authNostromo = false;
// Listen for events from the server
const yamlSocket = io("/yaml");
const nostromoSocket = io("/nostromo");

const authWebSocket = () => {
  // Listen for events from the server
  yamlSocket.on("connect", () => {
    console.log("Connected to /yaml route");
  });

  yamlSocket.on("yaml", (data) => {
    authYaml = true;
    if (authNostromo && authYaml) modifyData();
  });

  yamlSocket.on("disconnect", () => {
    console.log("Disconnected from /yaml route");
  });

  nostromoSocket.on("connect", () => {
    console.log("Connected to /nostromo route");
  });

  nostromoSocket.on("nostromo", (data) => {
    authNostromo = true;
    if (authNostromo && authYaml) modifyData();
  });

  nostromoSocket.on("disconnect", () => {
    console.log("Disconnected from /nostromo route");
  });
};

authWebSocket();

const modifyData = () => {
  contentx[2] = "Ash";
  contentx[3] = atob("VEhNX0ZMQUd7MFJEM1JfOTM3fQ==");
  document.querySelector(".crew-member").innerHTML = "Ash";
};

let totalCustomDotsContainer = 32;
let totalCustomDots = 42;

// site html for special section
function siteTemp() {
  return `
 <div class="special-grid">
  <div
  class="w-full] rounded-lg flex items-center z-20 p-3 pb-0  shadow-lg flex-1"
  >
  <div class="flex flex-col w-[30%] justify-between h-full mr-[50px] text-center">
    <div
      class="p-4 theme-green rounded-lg relative button-box"
      id="top"
    > 
    <div class="absolute top-[50%] -right-[51px] w-[51px] flex items-center justify-center">
      <p class="theme-line w-[51px]"></p>
    </div>
    Alien Loader
    </div>
    <div
      class="p-4 theme-green rounded-lg relative button-box"
      id="bottom"
    > Pathways </div>
    <div
      class="p-4 theme-green rounded-lg relative button-box"
      id="left"
    > Role </div>
    <div
      class="p-4 theme-green rounded-lg relative button-box"
      id="right"
    > Flag </div>
  </div>
  <div class="flex justify-center flex-1 h-[20rem] w-[20rem] overflow-y-auto 	 overflow-x-hidden theme-green">
    <div
      class=" rounded-lg py-2 px-4  flex gap-4 items-center justify-center mr-1"
    >
      <div class="content-placeholder">
        <p>
          Embedded within the intricate codes of Mother's system lies the Alien Loader, a peculiar
          YAML loader function. This function parses and loads YAML data. Be cautious, as this
          loader holds the truths to unveil the hidden paths.
        </p>
      </div>
    </div>
  </div>
  </div>
  <div class="flex w-full mx-auto items-center z-20 gap-2 pl-2 shadow-lg theme-color" >
    <p class="text-lg">Use</p>
    <b class="text-xl">UP</b>
    <p class="text-lg">and</p>
    <b class="text-xl">DOWN</b>
    <p class="text-lg">keys to move.</p>
  </div>
</div>
  `;
}

// rendering dots based on totalCustomDotsContainer || totalCustomDots
(() => {
  const dotsContainer = document.querySelector(".dots-container");
  const dots = [];

  for (let index = 0; index < totalCustomDotsContainer; index++) {
    let innerHTML = "";
    for (let j = 0; j < totalCustomDots; j++) {
      innerHTML += '<p class="custom-dots__dots"></p>';
    }
    if (index === 5) dots.push(siteTemp());
    dots.push(`<div class="custom-dots">${innerHTML}</div>`);
  }
  dotsContainer.insertAdjacentHTML("afterbegin", dots.join(""));
})();

const allBoxes = document.querySelectorAll(".button-box");
const arrow = `
<div class="absolute top-[50%] -right-[51px] w-[51px] flex items-center justify-center">
<p class="theme-line w-[51px]"></p>
</div>
`;

const removeArrow = () => {
  allBoxes.forEach((elem) => {
    elem.innerHTML = "";
  });
};

const boxes = ["Alien Loader", "Pathways", "Role", "Flag"];
let contentx = [
  "Embedded within the intricate codes of Mother's system lies the Alien Loader, a peculiar YAML loader function. This function parses and loads YAML data. Be cautious, as this loader holds the truths to unveil the hidden paths.",
  "[!]CAUTION[!] The Nostromo holds countless winding corridors and concealed chambers, harboring secrets that lie beyond the intended boundaries. Embrace the power of relative file paths within MOTHER, to uncover SECRETS and traverse the labyrinthine structure of the ship and reach your desired destinations.",
  "Crew Member",
  atob("Q0xBU1NJRklFRA=="),
];

const addArrow = (index) => {
  let content = contentx;

  const contentDoc = document.querySelector(".content-placeholder");
  allBoxes.forEach((elem, i) => {
    elem.innerHTML = boxes[i];

    if (index == i) {
      elem.insertAdjacentHTML("afterbegin", arrow);
      contentDoc.innerHTML = "";
      contentDoc.insertAdjacentHTML("afterbegin", `<p>${content[value]}</p>`);
    }
  });
};

let value = 0;
document.addEventListener("keydown", function (event) {
  var keyCode = event.keyCode || event.which;

  switch (keyCode) {
    case 38: // Up arrow key
      value = value - 1;
      if (value < 0) value = 0;
      removeArrow();
      addArrow(value);
      break;
    case 40: // Down arrow key
      value = value + 1;
      if (value > 3) value = 3;
      removeArrow();
      addArrow(value);
      break;
    default:
      // Ignore other keys
      return;
  }
});
