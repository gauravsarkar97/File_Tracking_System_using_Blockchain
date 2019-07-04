import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()
      console.log("hp")


      document.getElementById("btnloginpress").addEventListener("click", function () {
        var id = document.getElementById("Uid").value;
        var username = document.getElementById("Uname").value;
        var password = document.getElementById("password").value;
        var uniqueid = document.getElementById("unique").value;

        if(id.length != 0 && username.length !=0 && password.length !=0 && uniqueid.length !=0){
          window.pm.methods.userLogin(id,username,password,uniqueid).call({ from: window.accounts[0]}, function (error, result) {
              if (error) {
                  console.log(error)
                  console.log("Login Failed")
              } else {
                  console.log(result)
                  //window.location.href = "newFile.html";
                  if(result == 1)    //if all details are correct userLogin returns true or 1
                  {
                    window.location.href = "newFile.html";
                  }

              }
          })
        }



    })
    }
