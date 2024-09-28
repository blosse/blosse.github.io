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
    experience.classList.add("experience-item");

    experience.innerHTML = `
      <h3>${this.company}, <span style="font-weight:normal;">${this.location}</span></h3>
      <h3><span style="font-weight:normal;font-style:italic">${this.title}</span></h3>
      <p1>${this.start_date} to ${this.end_date}</p1>
      `;

    var description = document.createElement("ul");
    description.classList.add("experience-description");

    this.description.forEach((item) => {
      var desc = document.createElement("li");
      desc.classList.add("experience-description");
      desc.textContent = item;
      description.appendChild(desc);
    });
    experience.appendChild(description);

    return experience;
  }
}

// List of educations
const education = [
  new Experience(
    "Chalmers University of Technology",
    "Gothenburg",
    "Master's Degree in High Performance Computer Systems",
    "September 2022",
    "June 2024",
    [
      "Master’s program with a focus on high performance computers systems where I took courses on Parallel Programming, Computer Graphics, Computer Architecture, Sustainable Computing and Real-time systems.",
      "Master’s thesis on optimizing message distribution for Bluetooth mesh gateways with the purpose of improving throughput and energy e ciency.",
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

const educationContainer = document.getElementById("education-container");
const educationList = document.createElement("ul");

education.forEach((item) => {
  educationList.appendChild(item.createExperienceItem());
});

document.getElementById("education-container").appendChild(educationList);
