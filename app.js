let counter = 0;

const accordion = document.getElementById("accordion");
const accordionContent = document.getElementById("accordion-content");

const notificationBtn = document.getElementById("notification-btn");
const menuToggle = document.getElementById("menu-toggle");

const accordionContainers = document.querySelectorAll(".accordion");

const accordion1 = document.querySelector("#accordion1");
const accordionContent1 = document.getElementById("accordion-content1");

const accordion2 = document.getElementById("accordion2");
const accordionContent2 = document.getElementById("accordion-content2");

const accordion3 = document.getElementById("accordion3");
const accordionContent3 = document.getElementById("accordion-content3");

const accordion4 = document.getElementById("accordion4");
const accordionContent4 = document.getElementById("accordion-content4");

const accordion5 = document.getElementById("accordion5");
const accordionContent5 = document.getElementById("accordion-content5");

const progressBar = document.querySelector(".progressContainer #progressBar");
const progressCounter = document.querySelector("#progressCounter");

const plan = document.querySelector(".plans");
const planTrigger = document.querySelector("#plan-trigger");

const App = () => {
  accordion.onclick = (e) => {
    e.stopPropagation();
    handleAccordion(accordion, accordionContent);

    const isHidden = accordionContent.getAttribute("aria-hidden") === "true";

    if (!isHidden) {
      accordionContent1.setAttribute("aria-hidden", "false");
    } else {
      accordionContent1.setAttribute("aria-hidden", "true");
    }

    handleContainerBg();
  };

  notificationBtn.onclick = () => {
    const isExpanded = notificationBtn.getAttribute("aria-expanded") === "true";
    notificationBtn.setAttribute("aria-expanded", String(!isExpanded));
  };

  menuToggle.onclick = () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  };

  planTrigger.onclick = () => plan.setAttribute("aria-hidden", "true");

  handleClick(accordion1, accordionContent1, accordionContent2);
  handleClick(accordion2, accordionContent2, accordionContent3);
  handleClick(accordion3, accordionContent3, accordionContent4);
  handleClick(accordion4, accordionContent4, accordionContent5);
  handleClick(accordion5, accordionContent5);

  handleCounter(counter);
};

const handleContainerBg = () => {
  accordionContainers.forEach((container) => {
    const isHidden =
      container.children[1].getAttribute("aria-hidden") === "true";

    if (isHidden) return (container.style.backgroundColor = "transparent");
    container.style.backgroundColor = "#f3f3f3";
  });
};

const handleCounter = (counter) => {
  progressCounter.innerHTML = `${counter} / 5 completed`;

  progressBar.style.width = `${(counter / 5) * 100}%`;
  if (counter === 5) {
    progressBar.style.borderTopRightRadius = `8px`;
    progressBar.style.borderBottomRightRadius = "8px";
  } else {
    progressBar.style.borderTopRightRadius = `0px`;
    progressBar.style.borderBottomRightRadius = "0px";
  }
};

const handleContainer = (head, body) => {
  const isExpanded = head.getAttribute("aria-expanded") === "false";

  // head.setAttribute("aria-expanded", String(!isExpanded));
  if (isExpanded) {
    head.setAttribute("aria-expanded", "true");
    if (counter <= 5) counter += 1;
    body.setAttribute("aria-hidden", "true");
  } else {
    body.setAttribute("aria-hidden", "false");

    head.setAttribute("aria-expanded", "false");
    if (counter >= 0) counter -= 1;
  }

  handleCounter(counter);
};

const handleClick = (h1, b1, b2) => {
  h1.onclick = () => {
    handleContainer(h1, b1);
    const isHidden = b1.getAttribute("aria-hidden") === "false";

    if (b2) {
      if (!isHidden) {
        b2.setAttribute("aria-hidden", "false");
      } else {
        b2.setAttribute("aria-hidden", "true");
      }
    }
    handleContainerBg();
  };
};

const handleAccordion = (head, body) => {
  const isExpanded = head.getAttribute("aria-expanded") === "false";

  head.setAttribute("aria-expanded", String(isExpanded));
  if (isExpanded) {
    // counter++;
    body.setAttribute("aria-hidden", "false");
  } else {
    body.setAttribute("aria-hidden", "true");
  }
};

App();
