let current_student_id;
const password = "1212";
let students = [
    { name: "יעלה בדני", id: "218016806", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "חיה גולדשטיין", id: "218914919", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "רות גמליאל", id: "218163673", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "רייזי הורביץ", id: "332182278", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "יהודית חדד", id: "218133981", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "תמר ינקו", id: "218420446", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "מיכל לוינטל", id: "333223824", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "ברכה למברגר", id: "217350347", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "פייגי פריד", id: "218843985", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "שירה ראובני", id: "333098481", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "ריקי שטיינר", id: "218755296", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "יעל שטרן", id: "218094530", points: 0, class: 1, tasks_done: [false, false, false, false, false, false, false] },
    { name: "שרה אמסלם", id: "216843896", points: 0, class: 2, tasks_done: [false, false, false, false, false, false, false] },
    { name: "מירי בוים", id: "330814948", points: 0, class: 2, tasks_done: [false, false, false, false, false, false, false] },
    { name: "אורית בראל", id: "331550541", points: 0, class: 2, tasks_done: [false, false, false, false, false, false, false] },
    { name: "תהילה גדי", id: "216886192", points: 0, class: 2, tasks_done: [false, false, false, false, false, false, false] },
    { name: "נעמה חיימוב", id: "216529313", points: 0, class: 2, tasks_done: [false, false, false, false, false, false, false] },
    { name: "אסתי יארגאן", id: "214330797", points: 0, class: 2, tasks_done: [false, false, false, false, false, false, false] },
    { name: "שירה כהן", id: "217558949", points: 0, class: 2, tasks_done: [false, false, false, false, false, false, false] },
    { name: "אפרת צנעני", id: "217554328", points: 0, class: 2, tasks_done: [false, false, false, false, false, false, false] },
    { name: "יופיה אלדד", id: "216339531", points: 0, class: 3, tasks_done: [false, false, false, false, false, false, false] },
    { name: "יעל בוכריס", id: "330933581", points: 0, class: 3, tasks_done: [false, false, false, false, false, false, false] },
    { name: "ענאל בן-יעקב", id: "329687636", points: 0, class: 3, tasks_done: [false, false, false, false, false, false, false] },
    { name: "פייגי הלפרין", id: "327799649", points: 0, class: 3, tasks_done: [false, false, false, false, false, false, false] },
    { name: "נעמה יוסף", id: "329145098", points: 0, class: 3, tasks_done: [false, false, false, false, false, false, false] },
    { name: "הודיה נורוק", id: "330673153", points: 0, class: 3, tasks_done: [false, false, false, false, false, false, false] },
    { name: "אפרת עוזרי", id: "330744152", points: 0, class: 3, tasks_done: [false, false, false, false, false, false, false] },
    { name: "חני שכטר", id: "215930660", points: 0, class: 3, tasks_done: [false, false, false, false, false, false, false] },
    { name: "מלכי אירנשטיין", id: "328419742", points: 0, class: 4, tasks_done: [false, false, false, false, false, false, false]},
    { name: "רחלי גרינוולד", id: "215182122", points: 0, class: 4, tasks_done: [false, false, false, false, false, false, false] },
    { name: "לאה דוויאק", id: "326452554", points: 0, class: 4, tasks_done: [false, false, false, false, false, false, false] },
    { name: "עליזה לביא", id: "325958767", points: 0, class: 4, tasks_done: [false, false, false, false, false, false, false] },
    { name: "תהילה מלמד", id: "215019472", points: 0, class: 4, tasks_done: [false, false, false, false, false, false, false] },
    { name: "אושרית עמר", id: "215087834", points: 0, class: 4, tasks_done: [false, false, false, false, false, false, false] },
    { name: "ריקי פינס", id: "328518386", points: 0, class: 4, tasks_done: [false, false, false, false, false, false, false] },
    { name: "חיה פריד", id: "326208956", points: 0, class: 4, tasks_done: [false, false, false, false, false, false, false] },
    { name: "יוכבד בלומנפלד", id: "325341006", points: 0, class: 5, tasks_done: [false, false, false, false, false, false, false] },
    { name: "ליבי הוניגסברג", id: "328258124", points: 0, class: 5, tasks_done: [false, false, false, false, false, false, false] },
    { name: "ציפי חזנוביץ", id: "214904880", points: 0, class: 5, tasks_done: [false, false, false, false, false, false, false] },
    { name: "אפרת פינץ", id: "325448223", points: 0, class: 5, tasks_done: [false, false, false, false, false, false, false] },
    { name: "רותי פלמנבוים", id: "214375396", points: 0, class: 5, tasks_done: [false, false, false, false, false, false, false] },
    { name: "רחלי פלקסר", id: "325740090", points: 0, class: 5, tasks_done: [false, false, false, false, false, false, false] },
    { name: "רבקי שויפל", id: "325692135", points: 0, class: 5, tasks_done: [false, false, false, false, false, false, false] },
    { name: "תמי שטיינמן", id: "325747145", points: 0, class: 5, tasks_done: [false, false, false, false, false, false, false] },
    { name: "רחלי אייכן", id: "216272526", points: 0, class: 6, tasks_done: [false, false, false, false, false, false, false] },
    { name: "גילי אירנשטיין", id: "215889791", points: 0, class: 6, tasks_done: [false, false, false, false, false, false, false] },
    { name: "שיינדי דייטש", id: "214821209", points: 0, class: 6, tasks_done: [false, false, false, false, false, false, false] },
    { name: "שורי חיימוביץ", id: "215231622", points: 0, class: 6, tasks_done: [false, false, false, false, false, false, false] },
    { name: "לאה ישראל", id: "330892753", points: 0, class: 6, tasks_done: [false, false, false, false, false, false, false] },
    { name: "נוחי לוריא", id: "215974619", points: 0, class: 6, tasks_done: [false, false, false, false, false, false, false] },
    { name: "דבורי קרליץ", id: "215113523", points: 0, class: 6, tasks_done: [false, false, false, false, false, false, false] },
    { name: "גולדי שטיין", id: "328285945", points: 0, class: 6, tasks_done: [false, false, false, false, false, false, false] },
    { name: "רות מיכל ברוך", id: "219178449", points: 0, class: 7, tasks_done: [false, false, false, false, false, false, false] },
    { name: "שרה יעקב", id: "330810862", points: 0, class: 7, tasks_done: [false, false, false, false, false, false, false] },
    { name: "אורטל נגר", id: "332107002", points: 0, class: 7, tasks_done: [false, false, false, false, false, false, false] },
    { name: "אודליה סקייטל", id: "332932292", points: 0, class: 7, tasks_done: [false, false, false, false, false, false, false] },
    { name: "מיכל צנעני", id: "217554310", points: 0, class: 7, tasks_done: [false, false, false, false, false, false, false] },
    { name: "יהודית רייכמן", id: "333096162", points: 0, class: 7, tasks_done: [false, false, false, false, false, false, false] },
    { name: "יסכה שעשוע", id: "331417733", points: 0, class: 7, tasks_done: [false, false, false, false, false, false, false] },
    { name: "פלו", id: "1234", points: 0, class: 0, tasks_done: [false, false, false, false, false, false, false] },
    { name: "אלמו", id: "0000", points: 0, class: 0, tasks_done: [false, false, false, false, false, false, false] },
    { name: "טובי אלפר", id: "326657988", points: 0, class: 0, tasks_done: [false, false, false, false, false, false, false] },
    { name: "רחלי כהן", id: "326001906", points: 0, class: 0, tasks_done: [false, false, false, false, false, false, false] },
    { name: "נחמי האלופה", id: "326590973", points: 0, class: 0, tasks_done: [false, false, false, false, false, false, false] }
];

function json() {
    let students_json = JSON.stringify(students);
    localStorage.setItem("students_storage", students_json);
}
function onLoad() {
    if (!localStorage.getItem('students_storage') || localStorage.getItem("students_storage") == null)
        json();
}
function Enter() {
    location.href = "ragley mevaser/checkId.html"
}
function checkId() {
    const tz = document.querySelector("#id").value;
    let s = students.filter(x => x.id == tz)[0];
    if (s) {
        current_student_id = s.id;
        localStorage.setItem('current', JSON.stringify(current_student_id));
        location.href = "AddPoints.html";
        return;
    }
    alert("מספר הזהות שהוקש שגוי, נסי שוב");
    document.querySelector("#id").value = "";
}
function addPoints() {
    students = JSON.parse(localStorage.getItem('students_storage'));
    current_student_id = JSON.parse(localStorage.getItem('current'));
    let s = students.filter(x => x.id == current_student_id)[0];
    const checkboxes = document.querySelectorAll(".single-select-checkbox");
    const index = Array.from(checkboxes).findIndex(x => x.checked);
    if (s.tasks_done[index]) {
        alert("כבר בצעת משימה זו!!");
        checkboxes.forEach(x => x.checked = false);
        return;
    }
    let score = 0;
    switch (index) {
        case 0:
            score = 50;
            break;
        case 1:
            score = 50;
            break;
        case 2:
            score = 30;
            break;
        case 3:
            score = 40;
            break;
        case 4:
            score = 50;
            break;
        case 5:
            score = 30;
            break;
        case 6:
            score = 30;
            break;
    }

    var result = confirm(`האם להוסיף ל${s.name} ${score} נקודות?`);
    if (result) {
        s.tasks_done[index] = true;
        s.points += score;
        json();
        console.log(s);
    }
    location.reload();
}
const checkboxes = document.querySelectorAll('.single-select-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});
function color_by_levels(student_elemet, student) {
    let count = 0;
    student.tasks_done.forEach(t => { if (t) count++ });
    if (count <= 2)
        student_elemet.classList.add("red");
    else if (count <= 5)
        student_elemet.classList.add("yellow");
    else
        student_elemet.classList.add("blue");
}
function student_class() {
    students = JSON.parse(localStorage.getItem("students_storage"));
    let current_id = JSON.parse(localStorage.getItem("current"));
    let s = students.filter(x => x.id == current_id)[0];
    document.querySelector("#title").innerHTML = `${s.name} יקרה!  עד כה צברת ${s.points} נקודות`
    let studentsInClass = students.filter(x => x.class == s.class);
    for (let student of studentsInClass) {
        document.querySelector("#ul_class").innerHTML += `
        <div class="square" id="li${student.id}">
        <div  id="${student.id}">
        <div > ${student.name} </div>
        <div >  ${student.points}</div>
        </div>
        </div>
        `;
        let stu_id = document.getElementById(`li${student.id}`);
        color_by_levels(stu_id, student);
    }
}
function showAllDetails() {

    students = JSON.parse(localStorage.getItem("students_storage"));
    const list = document.querySelector("#list_student");
    for (let stu of students) {
        list.innerHTML += `
        <li class="list-group-item" id="li${stu.id}" >
        <div class="row">
        <div class="col-4"> ${stu.name} </div>
        <div class="col-4">  ${stu.points}</div>
        <div class="col-4"><button class="btn btn-secondary" onclick="updateManage(event)" id="${stu.id}">עדכון נקודות</button></div>
       <div class="none" class="col-2" id="divinput${stu.id}"><input id="input${stu.id}" type="number" /><button id="btninput${stu.id}" class="btn btn-secondary" onclick="savePoints(event)">אישור</button></div>
        </div>
        </li>
         `
        let stu_id = document.getElementById(`li${stu.id}`);
        color_by_levels(stu_id, stu)
    }
}
function enter_manager() {
    location.href = "ragley mevaser/manager.html"
}
function updateManage(event) {
    document.querySelector(`#divinput${event.target.id}`).classList.remove("none");
}
function savePoints(event) {
    let score = document.querySelector(`#${event.target.id.substring(3)}`).value;
    students = JSON.parse(localStorage.getItem("students_storage"));
    let s = students.filter(x => x.id == event.target.id.substring(8))[0];
    var result = confirm(`האם להוסיף ל${s.name} ${score} נקודות?`);
    if (!result)
        score = 0;
    const prevScore = s.points;
    students.filter(x => x.id == event.target.id.substring(8))[0].points = Number(prevScore) + Number(score);
    json();
    document.querySelector("#list_student").innerHTML = "";
    showAllDetails();
    document.querySelector(`#div${event.target.id.substring(3)}`).classList.add("none");
}
function checkPassword() {
    let val = document.querySelector("#password").value;
    if (val == password) {
        var element = document.getElementById("all_manage");
        element.parentNode.removeChild(element);
        showAllDetails()
    }

    else
       reLocation()
}
function load_all_stu() {
    const students = JSON.parse(localStorage.getItem("students_storage"));
    const list = document.querySelector("#list_stu");
    for (let stu of students) {
        if (stu.class != 0) {
            list.innerHTML += `
        <div class="square1"  id="${stu.id}" >       
        <div > ${stu.name} </div>
        <div >  ${stu.points}</div>
        </div>
        </div>
        `
            let stu_id = document.getElementById(stu.id);
            color_by_levels(stu_id, stu);
        }

    }
}
function enter_all() {
    location.href = "ragley mevaser/all_students.html"
}
function reLocation() {
    location.href = "../index.html"
}
