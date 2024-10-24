// This file holds the class for an experience-item
class Experience {
  constructor(company, location, title, duration, description) {
    this.company = company;
    this.location = location;
    this.title = title;
    this.duration = duration;
    this.description = description;
  }

  createExperienceItem() {
    const experience = document.createElement("div");

    const experiencePadding = document.createElement("div");
    experiencePadding.classList.add("experience-padding");

    const heading = document.createElement("div");
    heading.classList.add("experience-item-heading");
    heading.innerHTML = `
      <h3>${this.company}, <span style="font-weight:normal;">${this.location}</span></h3>
      <h3><span style="font-weight:normal;font-style:italic">${this.title}</span></h3>
      <p1>${this.duration}</p1>
      `;

    var descriptionPadding = document.createElement("div");
    descriptionPadding.classList.add("experience-description-padding");
    var description = document.createElement("div");
    description.classList.add("experience-description");
    description.textContent = this.description;

    // Add event listener to each experience-item
    experience.addEventListener("click", function () {
      description.classList.toggle("show");
    });

    descriptionPadding.appendChild(description);
    experiencePadding.appendChild(heading);
    experiencePadding.appendChild(descriptionPadding);
    experience.appendChild(experiencePadding);

    return experience;
  }
}

// List of education
const education = [
  new Experience(
    "Chalmers University of Technology",
    "Gothenburg",
    "Master's Degree in High Performance Computer Systems",
    "September 2022 to June 2024",
    "Master’s program with a focus on high performance computers systems where I took courses on Parallel Programming, Computer Graphics, Computer Architecture, Sustainable Computing and Real-time systems among others.\n\nI wrote my Master’s thesis on optimizing message distribution for Bluetooth mesh gateways with the purpose of improving throughput towards integrations such as Apple HomeKit and Google Home and to improve the overall energy efficiency of the gateways.",
  ),
  new Experience(
    "Chalmers University of Technology",
    "Gothenburg",
    "Bachelor's Degree in Computer Science",
    "September 2019 to June 2022",
    "Bachelor’s program in the field of computer science and engineering. Wide selection of courses on Algorithms and Data Structures, Computer Architecture and Embedded Systems, Maths, Computer Networks, Object Oriented Programming among others. Bacherlor’s thesis on exploring musical interpretations of images using AI. Exposure to a wide variety of programming languages such as C, C++, Java, Haskell, Python, Matlab and Assembler among others.",
  ),
];

// List of work
const work = [
  new Experience(
    "Volvo Group Truck Technology",
    "Gothenburg",
    "Summer Internship",
    "June to August, 2023 and 2024",
    "Internship  at the department for vehicle motion management at Volvo Trucks during the two summers of my Master's. The first summer I was tasked with implementation of a load balancing algorithm and an accompanying graphical interface in Python. The second summer I was tasked with development of a prototype user interface that is to be displayed to the driver during automatic coupling of truck and trailer. The interface was developed as an Android application using Kotlin and Jetpack Compose.",
  ),
  new Experience(
    "Plejd AB",
    "Gothenburg",
    "Master's Thesis Worker",
    "January 2024 to June 2024",
    "I wrote my master’s thesis as a member of the integrations team at Plejd. The team focuses on developing the integrations between Plejd products and smart home apps such as Alexa, Google Home and Apple HomeKit. My work revolved around designing and implementing a message distribution service for an embedded Linux micro-service system. The service was implemented in C. As part of the team I participated in all Agile ceremonies.",
  ),
  new Experience(
    "SGS Studenbostäder",
    "Gothenburg",
    "Groundskeeper / Janitor",
    "June 2022 to September 2022",
    "Maintainence of the outdoor and indoor residential areas at SGS Student Housing in Göteborg. The job involved gardening and lawn care as well as some janitorial duties.",
  ),
  new Experience(
    "Track Recycle",
    "Gothenburg",
    "Shop Assistant",
    "January 2022 to March 2022",
    "Shop assistant at a small store selling second hand outdoor equipment.",
  ),
  new Experience(
    "Chalmers Golf Club",
    "Gothenburg",
    "Greenkeeper",
    "May to August, 2019 and 2020",
    "Maintaing the golf course at Chalmers Golf Club in Landvetter. The work involved lawn care, irrigation and handling machinery. The work took a lot of team work and problemsolving to keep the course in top condition throughout the season",
  ),
  new Experience(
    "Skistar",
    "Sälen",
    "Ski Lift Attendant, Snow Maker, Terrain Park Crew",
    "December 2015 to April 2019",
    "For four winter seasons I worked at one of Swedens most popular ski resorts. I started out as a ski lift attendant helping skiers ride the lifts safely in all weather conditions. I then moved on to work as a snow maker, working with the snow production in the pre-seasons. For my last two winters I worked in the terrain parks, builing and maintaining jumps and rails in the various parks in Sälen.",
  ),
  new Experience(
    "TeliaSonera",
    "Norrköping",
    "Technical Support",
    "January 2015 to October 2017",
    "Here I worked as technical support for small and medium sized businesses at TeliaSonera, one of Sweden’s major telecoms. This was my first proper job and it was very valuable work where I learned alot, both from a technical point of view but also regarding how to meet and work with people.",
  ),
];

const aboutShort =
  "Hey! My name is Titus, I am software engineer from Sweden, now living in Lisbon. Hire me!";

const aboutLong =
  "<br>I am a 29 year old, recent graduate from the computer science program at Chalmers Technical University in Göteborg, Sweden and I have recently relocated from Sweden to Lisboa together with my fiancée. I like to describe myself as calm, down-to-earh and solution oriented.<br>I am particularily interested in the fields of embedded systems and computer graphics. However, I have recently started diving into front-end development and found it to be very rewarding. I am always eager to learn and excited about exploring different fields within software development! I equally enjoy digging down into a problem by myself as I do working in a team to find the perfect solution. I find that I do my best work in environments that allow for both.<br>In my free time I enjoy music, photography, running and snowboarding.";

// Fill education section
const educationList = document.getElementById("education-item-container");
education.forEach((item) => {
  const experienceItem = item.createExperienceItem();
  experienceItem.classList.add("education-experience-item");
  educationList.appendChild(experienceItem);
});

// Fill work section
const workList = document.getElementById("work-item-container");
var numWorkItems = 0;
work.forEach((item) => {
  const experienceItem = item.createExperienceItem();
  experienceItem.classList.add("work-experience-item");
  if (numWorkItems > 1) {
    experienceItem.style.maxHeight = "0px";
    experienceItem.style.opacity = "0%";
  }
  numWorkItems++;
  workList.appendChild(experienceItem);
});

// Make expand-work-button work
var expandWorkButton = document.getElementById("expand-work-button");
expandWorkButton.addEventListener("click", function () {
  this.classList.toggle("active");
  var workListArray = document.getElementsByClassName("work-experience-item");
  if (this.classList.contains("active")) {
    // More
    console.log("Open this thing.");
    for (var i = 0; i < workListArray.length; i++) {
      workListArray[i].style.maxHeight = "300px";
      workListArray[i].style.opacity = "1";
    }
    setTimeout(() => {
      console.log("Scroll!");
      document
        .getElementById("work-container")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }, 350);
  } else {
    // Less
    console.log("Close this thing");
    for (var i = workListArray.length - 1; i > 1; i--) {
      workListArray[i].style.maxHeight = "0px";
      workListArray[i].style.opacity = "0";
    }
  }
});

// Make expand-about button work
var aboutContainer = document.getElementById("about-container");
aboutContainer.addEventListener("click", function () {
  this.classList.toggle("active");
  var about = document.getElementById("about-long");
  if (this.classList.contains("active")) {
    about.style.maxHeight = "600px";
    about.style.opacity = "1";
    setTimeout(() => {
      document
        .getElementById("about-container")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }, 450);
  } else {
    about.style.maxHeight = "0px";
    about.style.opacity = "0%";
  }
});

// Make expand-skills button work
var skillsContainer = document.getElementById("skills-container");
skillsContainer.addEventListener("click", function () {
  this.classList.toggle("active");
  var skills = document.getElementById("skills-long");
  if (this.classList.contains("active")) {
    skills.style.maxHeight = "500px";
    skills.style.opacity = "1";
    setTimeout(() => {
      document
        .getElementById("skills-container")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }, 450);
  } else {
    skills.style.maxHeight = "0px";
    skills.style.opacity = "0%";
  }
});
