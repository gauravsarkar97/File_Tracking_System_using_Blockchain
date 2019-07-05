import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()

  document.getElementById("btnnewfile").addEventListener("click", function () {
    var own_id = document.getElementById("u_id").value;
    var file_name = document.getElementById("file_name").value;
    var file_details = document.getElementById("filedetails").value;
    var to_dept = document.getElementById("todept").value;
    var to_user = document.getElementById("touser").value;
    //window.accounts = ["0xe6cfaefb5f019a922ffca6dc9988ce62b917dc4a"]

          window.pm.methods.createFile(own_id,file_name,file_details,to_dept,to_user).send({ from: window.accounts[0] , gas: 500000 }, function (error, result) {
        if (error) {
            console.log(error)

        } else {
          window.pm.methods.getFileId().call({ from: window.accounts[0] }, function (error, result) {
        if (error) {
            console.log(error)

        } else {

          document.getElementById("file_id").textContent=result-1;
            console.log(result)

            var res = (result-1).toString();
            let qrcode = new QRCode("output", {
                text: res,
                width: 150,
                height: 150,
                colorDark : "#009908",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });

            // document.body.addEventListener('click', ()=>{
            //     qrcode.clear();
            //     qrcode.makeCode();
            // })

        }
      })
        }
      })
      })

}
