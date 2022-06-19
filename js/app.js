let newElement = document.createElement("div");
let newSection = document.createElement("section");
let newContainerSkills = document.createElement("div");


newElement.innerHTML = "Hi! Adil Bagdatson";
newElement.className = "title";
newSection.className = "skills";
newContainerSkills.className = "container";


document.body.append(newElement);
document.body.append(newSection);
document.body.append(newContainerSkills);



console.log(newElement, newSection);