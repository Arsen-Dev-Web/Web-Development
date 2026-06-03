let nav = document.createElement("nav");
document.body.appendChild(nav);
nav.style.cssText = `
  width:100%; background:#e40808; display:flex; justify-content:center;
  padding:15px 0; position:fixed; top:0; left:0; z-index:1000; font-family:Arial,sans-serif;
  box-shadow:0 2px 5px rgba(0,0,0,0.3);
`;

let menuItems = ["Home", "About", "Services", "Gallery", "Content"];
menuItems.forEach((item) => {
  let link = document.createElement("a");
  link.href = "#";
  link.innerText = item;
  link.style.cssText =
    "color:#fff;text-decoration:none;margin:0 20px;font-size:16px;transition:0.3s all";
  link.addEventListener("mouseenter", () => {
    link.style.color = "#ff9800";
    link.style.transform = "scale(1.1)";
  });
  link.addEventListener("mouseleave", () => {
    link.style.color = "#fff";
    link.style.transform = "scale(1)";
  });
  nav.appendChild(link);
});

let hamburgerBox = document.createElement("div");
hamburgerBox.style.cssText = `
  width:40px; height:30px; display:none; justify-content:center; align-items:center;
  cursor:pointer; position:absolute; right:20px; top:50%; transform:translateY(-50%);
  border:2px solid transparent; border-radius:6px; transition:0.3s all;
  padding:5px; background:rgba(255,255,255,0.1);
`;
nav.appendChild(hamburgerBox);

let hamburgerLines = [];
for (let i = 0; i < 3; i++) {
  let line = document.createElement("span");
  line.style.cssText = `
    display:block; width:30px; height:4px; background:#fff; border-radius:2px;
    transition:0.3s all; margin:3px 0;
  `;
  hamburgerBox.appendChild(line);
  hamburgerLines.push(line);
}

hamburgerBox.addEventListener("mouseenter", () => {
  hamburgerBox.style.borderColor = "#ff9800";
  hamburgerBox.style.background = "rgba(255,152,0,0.2)";
  hamburgerBox.style.transform = "translateY(-50%) scale(1.1)";
});
hamburgerBox.addEventListener("mouseleave", () => {
  hamburgerBox.style.borderColor = "transparent";
  hamburgerBox.style.background = "rgba(255,255,255,0.1)";
  hamburgerBox.style.transform = "translateY(-50%) scale(1)";
});

let open = false;
hamburgerBox.addEventListener("click", () => {
  open = !open;
  if (open) {
    hamburgerLines[0].style.transform = "rotate(45deg) translate(5px,5px)";
    hamburgerLines[1].style.opacity = "0";
    hamburgerLines[2].style.transform = "rotate(-45deg) translate(5px,-5px)";
    nav.querySelectorAll("a").forEach((a) => {
      a.style.display = "block";
      a.style.margin = "10px 0";
    });
    nav.style.flexDirection = "column";
  } else {
    hamburgerLines[0].style.transform = "rotate(0) translate(0,0)";
    hamburgerLines[1].style.opacity = "1";
    hamburgerLines[2].style.transform = "rotate(0) translate(0,0)";
    nav.querySelectorAll("a").forEach((a) => {
      a.style.display = "inline-block";
      a.style.margin = "0 20px";
    });
    nav.style.flexDirection = "row";
  }
});

let topContainer = document.createElement("div");
document.body.appendChild(topContainer);
topContainer.style.cssText =
  "display:flex; justify-content:space-between; width:960px; margin:50px; gap:20px;";

let container = document.createElement("div");
document.body.appendChild(container);
container.style.cssText =
  "display:flex; flex-wrap:wrap; justify-content:space-between; width:960px; margin:50px auto; gap:20px;";

let divDate = [
  { img: "jc.jpg" },
  { img: "jc.jpg" },
  { img: "jc.jpg" },
  { img: "jc.jpg" },
  { img: "jc.jpg" },
  { img: "jc.jpg" },
  { img: "jc.jpg" },
  { img: "jc.jpg" },
  { img: "jc.jpg" },
];

divDate.forEach((data) => {
  let box = document.createElement("div");
  box.style.cssText = `
    width:300px; height:160px; background:url(${data.img}) center/cover no-repeat;
    display:flex; justify-content:center; align-items:center; color:white; font-size:24px;
    font-weight:bold; text-shadow:2px 2px 5px rgba(0,0,0,0.7); border-radius:8px;
    transition:0.3s all; cursor:pointer;
  `;

  box.addEventListener("mouseenter", () => {
    box.style.transform = "scale(1.05)";
    box.style.filter = "brightness(1.2)";
    box.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
  });
  box.addEventListener("mouseleave", () => {
    box.style.transform = "scale(1)";
    box.style.filter = "brightness(1)";
    box.style.boxShadow = "none";
  });

  container.appendChild(box);
});

let footer = document.createElement("footer");
document.body.appendChild(footer);
footer.style.cssText = `
  width:100%; background:#111; color:#bbb; display:flex; justify-content:space-around;
  padding:30px 0; position:fixed; bottom:0; left:0; font-family:Arial,sans-serif;
  box-sizing:border-box;
`;

function createFooterBox(title, links) {
  let box = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerText = title;
  h3.style.color = "#fff";
  h3.style.marginBottom = "5px";
  h3.style.fontSize = "16px";
  box.appendChild(h3);

  links.forEach((linkText) => {
    let a = document.createElement("a");
    a.href = "#";
    a.innerText = linkText;
    a.style.cssText =
      "display:block;color:#bbb;margin:3px 0;text-decoration:none;transition:0.3s; font-size:14px";
    a.addEventListener("mouseenter", () => {
      a.style.color = "#fff";
      a.style.transform = "translateX(5px)";
    });
    a.addEventListener("mouseleave", () => {
      a.style.color = "#bbb";
      a.style.transform = "translateX(0)";
    });
    box.appendChild(a);
  });

  return box;
}
footer.appendChild(
  createFooterBox("Website", ["Home", "Gallery", "About", "Content"]),
);
footer.appendChild(createFooterBox("Links", ["Blog", "Services", "FAQS"]));
footer.appendChild(
  createFooterBox("Follow", ["Facebook", "Instagram", "YouTube"]),
);

function handleResize() {
  if (window.innerWidth < 768) {
    hamburgerBox.style.display = "flex";
    nav.querySelectorAll("a").forEach((a) => (a.style.display = "none"));

    topContainer.style.flexDirection = "column";
    topContainer.style.alignItems = "center";
    topContainer.style.width = "90%";

    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.width = "90%";

    container.querySelectorAll("div").forEach((div) => {
      div.style.width = "100%";
      div.style.maxWidth = "300px";
    });

    nav.style.flexDirection = "column";
  } else {
    hamburgerBox.style.display = "none";
    nav
      .querySelectorAll("a")
      .forEach((a) => (a.style.display = "inline-block"));

    topContainer.style.flexDirection = "row";
    topContainer.style.alignItems = "stretch";
    topContainer.style.width = "960px";

    container.style.flexDirection = "row";
    container.style.alignItems = "stretch";
    container.style.width = "960px";

    container.querySelectorAll("div").forEach((div) => {
      div.style.width = "300px";
    });

    nav.style.flexDirection = "row";
  }
}
window.addEventListener("resize", handleResize);
handleResize();
