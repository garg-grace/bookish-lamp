document.getElementById("targeting_element").addEventListener("click" ,()=>{

    // alert("hello")
    console.log(window);
    localStorage.setItem("gotoalumai" , JSON.stringify("true"));
    window.location= "main.html";


    

    
    
})