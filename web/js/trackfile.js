import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()

  document.getElementById("btntrackfile").addEventListener("click", function () {
    var file_id = document.getElementById("file_id").value;

          window.pm.methods.getFile_tracking_ids(file_id).call({ from: window.accounts[0]  }, function (error, result) {
        if (error) {
            console.log(error)
            console.log("false")
        } else {

          document.getElementById("track_id").textContent = result;
            console.log(result)
        }
      })
      })

      document.getElementById("btntrack").addEventListener("click", function () {
        var trk_id = document.getElementById("trackid").value;

              window.pm.methods.getFile_trackindex(trk_id).call({ from: window.accounts[0]  }, function (error, result) {
            if (error) {
                console.log(error)
            } else {
              document.getElementById("trackdetails").innerHTML = "ID: "+result[0]+"<br>"+"Name: "+result[1]+"<br>"+result[2]+"<br>"+"ID: "+result[3]+"<br>"+"Name: "+result[4]+"<br>"+result[5];
                console.log(result[1])
                console.log("true")
            }
          })

          })

}
