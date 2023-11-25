let counter = 0;

const accordion = document.getElementById("accordion");
const accordionContent = document.getElementById("accordion-content");

const accordion1 = document.getElementById("accordion1");
const accordionContent1 = document.getElementById("accordion-content1");

const accordion2 = document.getElementById("accordion2");
const accordionContent2 = document.getElementById("accordion-content2");

const accordion3 = document.getElementById("accordion3");
const accordionContent3 = document.getElementById("accordion-content3");

const accordion4 = document.getElementById("accordion4");
const accordionContent4 = document.getElementById("accordion-content4");

const accordion5 = document.getElementById("accordion5");
const accordionContent5 = document.getElementById("accordion-content5");

const App = () => {
    accordion.onclick = () => {
        handleAccordion(accordion, accordionContent);

        const isHidden = accordionContent.getAttribute("aria-hidden") === "true";

        if (!isHidden) {
            accordionContent1.setAttribute("aria-hidden", "false");
        } else {
            accordionContent1.setAttribute("aria-hidden", "true");
        };
    };

    handleClick(accordion1, accordionContent1, accordionContent2);
    handleClick(accordion2, accordionContent2, accordionContent3);
    handleClick(accordion3, accordionContent3, accordionContent4);
    handleClick(accordion4, accordionContent4, accordionContent5);
    handleClick(accordion5, accordionContent5);

    console.log(counter);
};

const handleContainer = (head, body) => {
    const isExpanded = head.getAttribute("aria-expanded") === "true";

    console.log(head);
    console.log(body);
    console.log({ isExpanded });
    console.log(counter);

    // head.setAttribute("aria-expanded", String(!isExpanded));
    if (isExpanded) {
        console.log("if", { isExpanded });
        body.setAttribute("aria-hidden", "false");
        head.setAttribute("aria-expanded", "true");
        counter += 1;
    } else {
        console.log("else", isExpanded);
        body.setAttribute("aria-hidden", "true");
        head.setAttribute("aria-expanded", "false");
        counter -= 1;
    };
    console.log(counter);
};

const handleClick = (h1, b1, b2) => {
    h1.onclick = () => {
        handleContainer(h1, b1);
        const isHidden = b1.getAttribute("aria-hidden") === "false";

        if (!b2) return;
        console.log(b2);

        if (!isHidden) {
            b2.setAttribute("aria-hidden", "false");
        } else {
            b2.setAttribute("aria-hidden", "true");
        };
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
    };
};



App()



