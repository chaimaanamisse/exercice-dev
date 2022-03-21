let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]



function showUserInfo() {  

let usersList = document.querySelector('#tbody')

usersList.innerHTML =
users.map((user, index) =>  {
    return ` <tr>
    <td>${user.id} </td>
    <td>${user.createdDate} </td>
    <td> <span id="label${index}" class="label">${user.status}</span></td>
    <td>${user.lastName} </td>
    <td>${user.firstName}</td>
    <td>${user.userName}</td>
    <td>${user.registrationNumber}</td>
    <td ><button value=" ${index}" onclick="deleteUser(this)"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
             </tr>`
            }).join('')

users.map((user, index) =>  {
              switch (user.status) {
                case "Validé": 
                document.getElementById("label"+index).classList.add("valide");
            
                    break;
                case "Rejeté": 
                document.getElementById("label"+index).classList.add("rejected");
                    break;
                case "En validation":
                document.getElementById("label"+index).classList.add("on-validation");
                    break;
            }
            })
}

showUserInfo();

function addUserInfo(){

    let nom = document.getElementById('nom').value;
    let username = document.getElementById('username').value;
    let matricule = document.getElementById('matricule').value;
    let date = document.getElementById('date').value;
    let etat = document.getElementById('etat').value;
    let firstName = document.getElementById('firstName').value;

    users.push(
        {
        id: Math.floor((1 + Math.random()) * 100000000), 
        createdDate : date, 
        status: etat,
        lastName: nom ,
        firstName : firstName, 
        userName: username,
        registrationNumber: matricule
        }
    );

showUserInfo();
users.map((user, index) =>  {
      switch (user.status) {
        case "Validé": 
        document.getElementById("label"+index).classList.add("valide");
    
            break;
        case "Rejeté": 
        document.getElementById("label"+index).classList.add("rejected");
            break;
        case "En validation":
        document.getElementById("label"+index).classList.add("on-validation");
            break;
    }
    })
modal.style.display = "none";

}

function deleteUser(btnValue){
    users.splice(parseInt(btnValue.value), 1);
    showUserInfo();
}



