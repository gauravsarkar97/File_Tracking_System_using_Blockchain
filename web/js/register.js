import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()
      document.getElementById("btnnew").addEventListener("click", function () {
        var uniqueid = document.getElementById("unique").value;
        var username = document.getElementById("Uname").value;
        var password = document.getElementById("password").value;
        var udept = document.getElementById("userdept").value;
        var utype = document.getElementById("usertype").value;
        var repass = document.getElementById("re_password").value;

          window.accounts = ["0xdd64d525a73cd50d21af3c08d7e66d3312c6be17"]

          // if(password.trim() != repass.trim()){
          //   document.getElementById("msg").textContent="PASSWORD NOT MATCHING !!!!!!";
          // }

          if(uniqueid.length == 0 || username.length ==0 || password.length ==0 || repass.length ==0 || udept.length ==0 || utype.length == 0){
            document.getElementById("msg").textContent="ENTER ALL FIELDS PLEASE !!!!!!";
          }

          else{
            window.pm.methods.createParticipant(uniqueid,username,password,udept,utype).send({ from: window.accounts[0] , gas: 500000 }, function (error, result) {
          if (error) {
              console.log(error)
          } else {
            window.pm.methods.getParticipantId().call({ from: window.accounts[0] }, function (error, result) {
          if (error) {
              console.log(error)
          } else {

            document.getElementById("user_id").textContent=result-1;
            console.log(result)

            var res = (result-1).toString();
            //generate qr code
            let qrcode = new QRCode("output", {
                text: res,
                width: 150,
                height: 150,
                colorDark : "#009908",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });

            document.body.addEventListener('click', ()=>{
                qrcode.clear();
                qrcode.makeCode();
            })

          }
        })
          }
        })
          }
      })
}
