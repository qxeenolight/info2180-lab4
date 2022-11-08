//Excercise 3

window.onload = function(){
    //Variables
    var request = new XMLHttpRequest();
    var btn = document.querySelector("#searchBtn");
    var input = document.querySelector("#hero");
    var output = document.querySelector("#result");
    var url = "superheroes.php";
    
    btn.addEventListener('click', e =>{
        e.preventDefault();

        //AJAX request using XMLHttpRequest
        request.onreadystatechange = e =>{
            if(request.readyState === 4){
                if(request.status === 200){
                    var answer = request.responseText
                    output.innerHTML = answer;
                    elem.classList.add("not-found", answer);
                    console.log(":D"); 
                }
                else{
                    output.innerHTML = "An error occured X_X";
                    console.log("D:");
                }
            }
        }
        console.log("test")
        request.open("GET", url + "?query=" + input.value);
        request.send();   
    });
}