const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeContainer = document.getElementById("resume") as HTMLElement;
const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
const profilePreview = document.getElementById("profilePreview") as HTMLImageElement;
profilePicInput.addEventListener("change", () => {
    const profilePicFile = profilePicInput.files?.[0];
    if (profilePicFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
            profilePreview.src = event.target?.result as string;
            profilePreview.style.display = "block"
        };
        reader.readAsDataURL(profilePicFile); 
    }
});
form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const fName = (document.getElementById("fname") as HTMLInputElement).value;
    const date = (document.getElementById("date") as HTMLInputElement).value;
    const nationality = (document.getElementById("nationality") as HTMLInputElement).value;
    const religion = (document.getElementById("religion") as HTMLInputElement).value;
    const graduation = (document.getElementById("graduate") as HTMLInputElement).value;
    const graduateYear = (document.getElementById("graduate-year") as HTMLInputElement).value;
    const inter = (document.getElementById("inter") as HTMLInputElement).value;
    const interYear = (document.getElementById("inter-year") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");
    const experince = (document.getElementById("experince") as HTMLInputElement).value;
    // const languageTwo = (document.getElementById("languages-two") as HTMLInputElement).value;
    // const languageThree = (document.getElementById("languages-three") as HTMLInputElement).value;
    const emailTwo = (document.getElementById("email-two") as HTMLInputElement).value;
    const cell = (document.getElementById("cel") as HTMLInputElement).value;
    const profilePicFile = profilePicInput.files?.[0];
    if (profilePicFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const profilePicURL = event.target?.result as string;
            resumeContainer.innerHTML = `
                <div class="profile">
                    <img src="${profilePicURL}" alt="Profile Picture" class="profile-pic">
                    <h2>${name}</h2>
                    <p>${email}</p>
                </div>
                 <div class="personal-info">
                    <h2> Personal Information : </h2>
                    <p><strong> Father Name: </strong> <span contenteditable="true"></span> ${fName}</p>
                    <p><strong> Date Of Birth: </strong> <span contenteditable="true"></span> ${date}</p> 
                    <p><strong> Nationality: </strong> <span contenteditable="true"></span> ${nationality}</p> 
                    <p><strong> Religion: </strong> <span contenteditable="true"></span> ${religion}</p>
                </div>
                <div class="education">
                    <h2> Education </h2>
                     <p><strong> Graduate in: </strong> <span contenteditable="true"></span> ${graduation}</p>
                     <p> <strong> Graduation Year: </strong> <span contenteditable="true"></span>${graduateYear}</p> 
                     <p><strong> Intermediate in: </strong> <span contenteditable="true"></span>${inter}</p> 
                     <p><strong> Inter Year: </strong> <span contenteditable="true"></span>${interYear}</p> 
                </div>
                <div class="skills">
                    <h2>Skills</h2>
                    <p contenteditable="true">${skills.map((skill) => `<li>${skill.trim()}</li>`).join("")}</p>
                </div>
                 <div class="experince">
                    <h2>Work Experince </h2>
                     <p contenteditable="true">${experince}</p>
                </div>
                 <div class="contact">
                    <h2> Contact Me </h2>
                     <p><strong> E-mail: </strong><span contenteditable="true"></span> ${emailTwo}</p>
                     <p><strong> Telephone </strong><span contenteditable="true"></span> ${cell}</p> 
                </div>
            `
            resumeContainer.style.display = "block";
        };
        reader.readAsDataURL(profilePicFile);
    } 
    else {
        resumeContainer.innerHTML = `
            <div class="profile">
                    <img src="${profilePicInput}" alt="Profile Picture" class="profile-pic">
                    <h2>${name}</h2>
                    <p>${email}</p>
                </div>
                  <div class="personal-info">
                    <h2> Personal Information : </h2>
                    <p><strong> Father Name: </strong> <span contenteditable="true"></span> ${fName}</p>
                    <p><strong> Date Of Birth: </strong> <span contenteditable="true"></span> ${date}</p> 
                    <p><strong> Nationality: </strong> <span contenteditable="true"></span> ${nationality}</p> 
                    <p><strong> Religion: </strong> <span contenteditable="true"></span> ${religion}</p>
                </div>
                <div class="education">
                    <h2> Education </h2>
                     <p><strong> Graduate in: </strong> <span contenteditable="true"></span> ${graduation}</p>
                     <p> <strong> Graduation Year: </strong> <span contenteditable="true"></span>${graduateYear}</p> 
                     <p><strong> Intermediate in: </strong> <span contenteditable="true"></span>${inter}</p> 
                     <p><strong> Inter Year: </strong> <span contenteditable="true"></span>${interYear}</p> 
                </div>
                <div class="skills">
                    <h2>Skills</h2>
                    <p contenteditable="true">${skills.map((skill) => `<li>${skill.trim()}</li>`).join("")}</p>
                </div>
                 <div class="experince">
                    <h2>Work Experince </h2>
                     <p contenteditable="true">${experince}</p>
                </div>
                 <div class="contact">
                    <h2> Contact Me </h2>
                     <p><strong> E-mail: </strong><span contenteditable="true"></span> ${emailTwo}</p>
                     <p><strong> Telephone </strong><span contenteditable="true"></span> ${cell}</p> 
                </div>
            `;
        resumeContainer.style.display = "block";
    }
});