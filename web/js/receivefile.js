import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()

  document.getElementById("btnreceivefile").addEventListener("click", function () {
    var owner = document.getElementById("u_id").value;
    var recipient = document.getElementById("reci_id").value;
    var file_id = document.getElementById("file_id").value;

          window.pm.methods.transferOwnership_file(owner,recipient,file_id).send({ from: window.accounts[0] , gas: 500000 }, function (error, result) {
        if (error) {
            console.log(error)
        } else {
          document.getElementById("msg").textContent="SUCCESS";
          window.pm.methods.getFileId().call({ from: window.accounts[0] }, function (error, result) {
        if (error) {
            console.log(error)
        } else {
            console.log(result)
        }
      })
        }
      })
      })

}
