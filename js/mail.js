const firebaseConfig = {
    apiKey: "AIzaSyC_xbFR3dj2W58n9LJJ1Qz-pZLd1mBPoxk",
    authDomain: "stmaryswebsite-fb8ff.firebaseapp.com",
    projectId: "stmaryswebsite-fb8ff",
    storageBucket: "stmaryswebsite-fb8ff.appspot.com",
    databaseURL : "https://stmaryswebsite-fb8ff-default-rtdb.firebaseio.com/",
    messagingSenderId: "77865070851",
    appId: "1:77865070851:web:664be3ae00068d6c6cf936",
    measurementId: "G-JW4MKXGJZQ"
  };


  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database();

document.getElementById("application").addEventListener("submit", submitForm);

// var instbtn=document.getElementById("insbtn");

// instbtn.addEventListener('click',InsertData);
//  function InsertData(){
// set(ref(db,"TheStudents/"+document.getElementById("name").value),{
//   NameOfStd: document.getElementById("name").value,
//   RollNo: document.getElementById("mobile").value,
//   Section: document.getElementById("date").value,
//   Gender: document.getElementById("gender").value
//   })
//   .then(()=>{
//   alert("data stored successfully");
//   })
//   .catch((error)=>{
//   alert("unsuccessful, error"+error);
//   });
// }

function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var dob = getElementVal("dob1");
    var gender = getElementVal("gender");
    var mobile = getElementVal("mobile");
    var programme = getElementVal("programme");


  
    saveMessages(name, emailid, dob,gender,mobile,programme);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
    document.querySelector(".alert").style.background="green";
    alert("Applied Succesfully")
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  //   reset the form
  document.getElementById("application").reset();
}  


const saveMessages = (name, emailid, dob,gender,mobile,programme) => {
    var newContactForm = contactFormDB.ref('Candidate/'+document.getElementById("mobile").value);
  
    newContactForm.set({
      name: name,
      email: emailid,
      dob: dob,
      gender:gender,
      mobile:mobile,
      programme:programme,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

