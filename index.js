const SubmitButton=document.getElementById('form-submit')
SubmitButton.addEventListener('click',SubmitData)
const Form=document.getElementById('form')

Form.addEventListener('submit', (event)=> {
    event.preventDefault();
    SubmitData(event);
    Form.reset();
});

function SubmitData(event){
  event.preventDefault();

  //Get DOm Element
  const nameField=document.getElementById('name')
  const nameValue=nameField.value

  const emailField=document.getElementById('email_address')
  const emailValue=emailField.value

const phField=document.getElementById('phone_number')
const phValue=phField.value

const addressField=document.getElementById('address')
const addressValue=addressField.value

const fatherField=document.getElementById('father_name')
const fatherValue=fatherField.value

const motherField=document.getElementById('mother_name')
const motherValue=motherField.value

const ageField=document.getElementById('age')
const ageValue=ageField.value

const guardianField=document.getElementById('guardian_number')
const guardianValue=guardianField.value






  localStorage.setItem('Student', JSON.stringify({
    Name: nameValue,
    Email_address: emailValue,
    Phone_number: phValue,
    Address: addressValue,
    Father_name: fatherValue,
    Mother_name: motherValue,
    Age: ageValue,
    Guardian_number: guardianValue
    
  }))

}


// const form = document.querySelector('.form');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const data = [...new FormData(form)]
//     .reduce((obj, [key, value]) => (obj[key] = value, obj), {});
//   localStorage.setItem('Student', JSON.stringify(data));
//   form.reset();
// });
