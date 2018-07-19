  var showInput = document.getElementById("input1");
  var isClear = false;
  var tempStr ="";
  var clacType = "";
  var isContinue = true;
	var showInputOperator="";
  function kick(clickValue) {
    switch (clickValue) {
      case "=":
        if (tempStr != "" && clacType != "") {
		//alert("Temstr = "+tempStr+"\n"+"input value = "+showInput.value);
          showInput.value = clac(tempStr, showInput.value, clacType);
          isContinue = false;
          clacType = "";
			
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
	  
	  showInputOperator.value += clickValue;
        // If the stored operator is not empty   Represents continuous operation 
        if (clacType != "" && !isContinue && clacType!="" && clacType!=clickValue) { // Perform calculations first 
          tempStr = clac(tempStr, showInput.value, clacType);
          isClear = false;
          clacType = clickValue;
        } else {
          tempStr = showInput.value; // After clicking the operator   Pre stored character 
          isClear = true;// Represents the click operator 
          clacType = clickValue;// Stored operator 
        }
        isContinue = true;
		//alert(clacType);
        break;
		
        case "C":	//for clearing text box
			showInput.value = "0";
			isClear = false;
			tempStr = "";
			clacType = "";
			break;
		
		 case "del": //deleting one value from text box.
			showInput.value = showInput.value.substring(0, showInput.value.length - 1);
			break;

      default:// The regular numeric button hits 
	  
        showInput.value = showInput.value == "0" ? "" : showInput.value;
        isContinue =false;
		
        if (isClear) {
          	showInput.value = "";
          showInput.value += clickValue;
          isClear = false;
        } else {
          showInput.value += clickValue;
        }
        break;
    }
  }


  function clac(num1, num2, type) {
    switch (type) {
	
      case "+":
        return Number(num1) + Number(num2);
      case "-":
        return Number(num1) - Number(num2);
      case "*":
        return Number(num1) * Number(num2);
      case "/":
        return Number(num1) / Number(num2);
      default:
        break;
    }
   }