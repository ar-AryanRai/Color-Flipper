let type;
    let simple = ["lightgreen","lightblue","orange","white","purple","beige","yellow","pink"];
    function changeColor(){
      if(type == "Simple"){
        let random_number = Math.floor(Math.random()*10);
        let color = simple[random_number];
        const elements = document.getElementsByClassName("cc");
        elements[0].style.color = color;
        elements[1].style.color = color;
        elements[2].style.backgroundColor = color;
        document.getElementsByTagName("main")[0].style.backgroundColor = color;
        let name = document.getElementById("color-code");
        name.innerHTML = color;
      }
      else{
        let color = "#" + Math.floor(Math.random()*16777215).toString(16);
        const elements = document.getElementsByClassName("cc");
        elements[0].style.color = color;
        elements[1].style.color = color;
        elements[2].style.backgroundColor = color;
        document.getElementsByTagName("main")[0].style.backgroundColor = color;
        let name = document.getElementById("color-code");
        name.innerHTML = color;
      }
    }