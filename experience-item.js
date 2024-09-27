// This file holds the class for an experience-item
class Experience {
  constructor(
    company,
    location,
    start_date,
    end_date,
    title,
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
    const li = document.createElement("li");
    li.classList.add("experience-item");

    // Line with company and location
    const companyField = document.createElement("div");
    companyField.classList.add("experience-company");
    companyField.textContent = this.company + ",";

    const space = document.createElement("span"); // Two lines to add a single blank space??
    space.innerHTML = "&nbsp;";

    const companyLocation = document.createElement("div");
    companyLocation.classList.add("experience-location");
    companyLocation.textContent = this.location;

    const companyRow = document.createElement("div");
    companyRow.classList.add("company-row");
    companyRow.appendChild(companyField);
    companyRow.appendChild(space);
    companyRow.appendChild(companyLocation);

    // Job title / Degree
    const titleField = document.createElement("div");
    titleField.classList.add("experience-title");
    titleField.textContent = this.title;

    // Experience description
    const descriptionField = document.createElement("div");
    var descriptionList = document.createElement("ul");
    //descriptionList.classList.add("experience-description");
    this.description.forEach((item) => {
      var bullet = document.createElement("div");
      // bullet.classList.add("experience-description");
      bullet.textContent = item;
      descriptionList.appendChild(bullet);
    });
    descriptionField.appendChild(descriptionList);

    // Start and end date
    const dateField = document.createElement("div");
    dateField.classList.add("experience-date");
    dateField.textContent = this.start_date + " to " + this.end_date;

    li.appendChild(titleField);
    li.appendChild(companyRow);
    li.appendChild(dateField);
    li.appendChild(descriptionField);

    return li;
  }
}

// List of educations
const education = [
  new Experience(
    "Chalmers University of Technology",
    "Gothenburg, Sweden",
    "Master's Degree in High Performance Computer Systems",
    "September 2022",
    "June 2024",
    [
      "Here I learned even more stuff.",
      "And then I again learned some more!",
      "Jesus Christ will the learning never end!",
    ],
  ),
  new Experience(
    "Chalmers University of Technology",
    "Gothenburg, Sweden",
    "Bachelor's Degree in Computer Science",
    "September 2019",
    "June 2022",
    ["Here I learned some stuff.", "And then I learned some more."],
  ),
];

const educationContainer = document.getElementById("education-container");
const educationItem = document.createElement("ul");

education.forEach((item) => {
  educationItem.appendChild(item.createExperienceItem());
});

document.getElementById("education-container").appendChild(educationItem);
