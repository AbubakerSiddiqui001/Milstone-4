var form = document.getElementById("resume-form");
var resumeContainer = document.getElementById("resume");
var profilePicInput = document.getElementById("profilePic");
var profilePreview = document.getElementById("profilePreview");
profilePicInput.addEventListener("change", function () {
    var _a;
    var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePicFile) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            profilePreview.src = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            profilePreview.style.display = "block";
        };
        reader.readAsDataURL(profilePicFile);
    }
});
form.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var fName = document.getElementById("fname").value;
    var date = document.getElementById("date").value;
    var nationality = document.getElementById("nationality").value;
    var religion = document.getElementById("religion").value;
    var graduation = document.getElementById("graduate").value;
    var graduateYear = document.getElementById("graduate-year").value;
    var inter = document.getElementById("inter").value;
    var interYear = document.getElementById("inter-year").value;
    var skills = document.getElementById("skills").value.split(",");
    var experince = document.getElementById("experince").value;
    // const languageTwo = (document.getElementById("languages-two") as HTMLInputElement).value;
    // const languageThree = (document.getElementById("languages-three") as HTMLInputElement).value;
    var emailTwo = document.getElementById("email-two").value;
    var cell = document.getElementById("cel").value;
    var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePicFile) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var profilePicURL = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            resumeContainer.innerHTML = "\n                <div class=\"profile\">\n                    <img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" class=\"profile-pic\">\n                    <h2>").concat(name, "</h2>\n                    <p>").concat(email, "</p>\n                </div>\n                 <div class=\"personal-info\">\n                    <h2> Personal Information : </h2>\n                    <p><strong> Father Name: </strong> <span contenteditable=\"true\"></span> ").concat(fName, "</p>\n                    <p><strong> Date Of Birth: </strong> <span contenteditable=\"true\"></span> ").concat(date, "</p> \n                    <p><strong> Nationality: </strong> <span contenteditable=\"true\"></span> ").concat(nationality, "</p> \n                    <p><strong> Religion: </strong> <span contenteditable=\"true\"></span> ").concat(religion, "</p>\n                </div>\n                <div class=\"education\">\n                    <h2> Education </h2>\n                     <p><strong> Graduate in: </strong> <span contenteditable=\"true\"></span> ").concat(graduation, "</p>\n                     <p> <strong> Graduation Year: </strong> <span contenteditable=\"true\"></span>").concat(graduateYear, "</p> \n                     <p><strong> Intermediate in: </strong> <span contenteditable=\"true\"></span>").concat(inter, "</p> \n                     <p><strong> Inter Year: </strong> <span contenteditable=\"true\"></span>").concat(interYear, "</p> \n                </div>\n                <div class=\"skills\">\n                    <h2>Skills</h2>\n                    <p contenteditable=\"true\">").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "</p>\n                </div>\n                 <div class=\"experince\">\n                    <h2>Work Experince </h2>\n                     <p contenteditable=\"true\">").concat(experince, "</p>\n                </div>\n                 <div class=\"contact\">\n                    <h2> Contact Me </h2>\n                     <p><strong> E-mail: </strong><span contenteditable=\"true\"></span> ").concat(emailTwo, "</p>\n                     <p><strong> Telephone </strong><span contenteditable=\"true\"></span> ").concat(cell, "</p> \n                </div>\n            ");
            resumeContainer.style.display = "block";
        };
        reader.readAsDataURL(profilePicFile);
    }
    else {
        resumeContainer.innerHTML = "\n            <div class=\"profile\">\n                    <img src=\"".concat(profilePicInput, "\" alt=\"Profile Picture\" class=\"profile-pic\">\n                    <h2>").concat(name, "</h2>\n                    <p>").concat(email, "</p>\n                </div>\n                  <div class=\"personal-info\">\n                    <h2> Personal Information : </h2>\n                    <p><strong> Father Name: </strong> <span contenteditable=\"true\"></span> ").concat(fName, "</p>\n                    <p><strong> Date Of Birth: </strong> <span contenteditable=\"true\"></span> ").concat(date, "</p> \n                    <p><strong> Nationality: </strong> <span contenteditable=\"true\"></span> ").concat(nationality, "</p> \n                    <p><strong> Religion: </strong> <span contenteditable=\"true\"></span> ").concat(religion, "</p>\n                </div>\n                <div class=\"education\">\n                    <h2> Education </h2>\n                     <p><strong> Graduate in: </strong> <span contenteditable=\"true\"></span> ").concat(graduation, "</p>\n                     <p> <strong> Graduation Year: </strong> <span contenteditable=\"true\"></span>").concat(graduateYear, "</p> \n                     <p><strong> Intermediate in: </strong> <span contenteditable=\"true\"></span>").concat(inter, "</p> \n                     <p><strong> Inter Year: </strong> <span contenteditable=\"true\"></span>").concat(interYear, "</p> \n                </div>\n                <div class=\"skills\">\n                    <h2>Skills</h2>\n                    <p contenteditable=\"true\">").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "</p>\n                </div>\n                 <div class=\"experince\">\n                    <h2>Work Experince </h2>\n                     <p contenteditable=\"true\">").concat(experince, "</p>\n                </div>\n                 <div class=\"contact\">\n                    <h2> Contact Me </h2>\n                     <p><strong> E-mail: </strong><span contenteditable=\"true\"></span> ").concat(emailTwo, "</p>\n                     <p><strong> Telephone </strong><span contenteditable=\"true\"></span> ").concat(cell, "</p> \n                </div>\n            ");
        resumeContainer.style.display = "block";
    }
});
