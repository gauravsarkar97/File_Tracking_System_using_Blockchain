import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()
      console.log("hp")
      document.getElementById("btnnew").addEventListener("click", function () {
        var uniqueid = document.getElementById("unique").value;
        var username = document.getElementById("Uname").value;
        var password = document.getElementById("password").value;
        var udept = document.getElementById("userdept").value;
        var utype = document.getElementById("usertype").value;
        var repass = document.getElementById("re_password").value;
        //var qr = qrcode(4, 'L');
          window.accounts = ["0xa7f85da8b0a3477cdc586b31db07102d03fb879e"]

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
              console.log("false")
          } else {
            window.pm.methods.getParticipantId().call({ from: window.accounts[0] }, function (error, result) {
          if (error) {
              console.log(error)
              console.log("false")
          } else {

            document.getElementById("user_id").textContent=result-1;
            console.log(result)
            console.log("true")
            // qr.addData('Hi!');
            // qr.make();
            // document.getElementById('placeHolder').innerHTML = qr.createImgTag();
            var res = (result-1).toString();
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
