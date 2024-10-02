// This file holds the class for an experience-item
class Experience {
  constructor(
    company,
    location,
    title,
    start_date,
    end_date,
    description = [],
  ) {
    this.company = company;
    this.location = location;
    this.title = title;
    this.start_date = start_date;
    this.end_date = end_date;
    this.description = description;
  }

  createExperienceItem() {
    const experience = document.createElement("li");
    // experience.classList.add("experience-item");

    // Add event listener to each experience-item
    experience.addEventListener("click", function () {
      description.classList.toggle("show");
      console.log(description.classList);
    });

    experience.innerHTML = `
      <h3>${this.company}, <span style="font-weight:normal;">${this.location}</span></h3>
      <h3><span style="font-weight:normal;font-style:italic">${this.title}</span></h3>
      <p1>${this.start_date} to ${this.end_date}</p1>
      `;

    var description = document.createElement("ul");
    description.classList.add("experience-description-list");

    this.description.forEach((item) => {
      var desc = document.createElement("li");
      desc.classList.add("experience-description-item");
      desc.textContent = item;
      description.appendChild(desc);
    });

    experience.appendChild(description);

    return experience;
  }
}

// List of education
const education = [
  new Experience(
    "Chalmers University of Technology",
    "Gothenburg",
    "Master's Degree in High Performance Computer Systems",
    "September 2022",
    "June 2024",
    [
      "Master’s program with a focus on high performance computers systems where I took courses on Parallel Programming, Computer Graphics, Computer Architecture, Sustainable Computing and Real-time systems.",
      "Master’s thesis on optimizing message distribution for Bluetooth mesh gateways with the purpose of improving throughput and energy efficiency.",
      "The thesis revolved around designing and implementing a message distribution service for an embedded Linux micro-service system using the C programming language.",
    ],
  ),
  new Experience(
    "Chalmers University of Technology",
    "Gothenburg",
    "Bachelor's Degree in Computer Science",
    "September 2019",
    "June 2022",
    [
      "Bachelor’s program in the field of computer science and engineering. Wide selection of courses on Algorithms and Data Structures, Computer Architecture and Embedded Systems, Maths, Computer Networks, Object Oriented Programming among others.",
      "Bacherlor’s thesis on exploring musical interpretations of images using AI.",
      "Exposure to a wide variety of programming languages such as C, C++, Java, Haskell, Python, Matlab and Assembler among others.",
    ],
  ),
];

// List of work
const work = [
  new Experience(
    "Volvo Group Truck Technology",
    "Gothenburg",
    "Summer internship",
    "June 2024",
    "August 2024",
    [
      "Internship at the department for vehicle motion management at Volvo Trucks during the two summers of my masters.",
      "Development of a user interface displayed to the driver during automatic coupling of truck and trailer.",
      "The interface was developed as an Android application using Kotlin and Jetpack Compose.",
      "Implementation of a load balancing algorithm and an accompanying graphical interface for prototyping purposes in Python.",
      "Version control using Git and GitHub.",
    ],
  ),
  new Experience(
    "SGS Studenbostäder",
    "Gothenburg",
    "Groundskeeper / Janitor",
    "June 2022",
    "September 2022",
    [
      "Maintaining the outdoor and indoor residential areas at SGS Student Housing in Göteborg.",
      "Gardening and lawn care.",
      "Janitorial duties.",
    ],
  ),
  new Experience(
    "Track Recycle",
    "Gothenburg",
    "Shop Assistant",
    "January 2022",
    "March 2022",
    [
      "Shop assistant at a small store selling second hand outdoor equipment.",
      "Customer service.",
    ],
  ),
  new Experience(
    "Chalmers Golf Club",
    "Gothenburg",
    "Greenkeeper",
    "May 2019",
    "August 2019",
    [
      "Maintaing the golf course at Chalmers Golf Club in Landvetter.",
      "Lawn care and irrigation.",
      "Teamwork and problem solving.",
      "Handling machinery and vehicles such as lawn mowers, bunker-rakers and tractors.",
    ],
  ),
  new Experience(
    "Skistar",
    "Sälen",
    "Ski Lift Attendant, Snow Maker, Terrain Park Crew",
    "December 2015",
    "April 2019",
    [
      "Ski lift attendant helping skiers ride the ski lifts safely in all weather conditions.",
      "Problem solving and teamwork as me and my colleagues worked around the clock in the pre-season to make snow across the resort.",
      "Builing and maintaining the jumps and rails in the various parks in Sälen, one of Swedens most popular ski resorts.",
    ],
  ),
  new Experience(
    "TeliaSonera",
    "Norrköping",
    "Technical Support",
    "January 2015",
    "October 2017",
    [
      "Technical support for small and medium sized businesses at TeliaSonera, one of Sweden’s major telecoms.",
      "Valuable work where I learned alot, both from a technical point of view but also regarding how to meet and work with people.",
    ],
  ),
];

// Fill education column
const educationContainer = document.getElementById("education-container");
var educationList = document.createElement("ul");
educationList.classList.add("experience-list");
education.forEach((item) => {
  const experienceItem = item.createExperienceItem();
  experienceItem.classList.add("education-experience-item");
  educationList.appendChild(experienceItem);
});

// Fill work column
const workContainer = document.getElementById("work-container");
var workList = document.createElement("ul");
workList.classList.add("experience-list");
var numWorkItems = 0;
work.forEach((item) => {
  const experienceItem = item.createExperienceItem();
  experienceItem.classList.add("work-experience-item");
  if (numWorkItems > 2) {
    experienceItem.style.display = "none";
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
    for (var i = 0; i < workListArray.length; i++) {
      workListArray[i].style.display = "block";
    }
  } else {
    for (var i = workListArray.length - 1; i > 2; i--) {
      workListArray[i].style.display = "none";
    }
  }
});

document.getElementById("education-container").appendChild(educationList);
document.getElementById("work-container").appendChild(workList);
