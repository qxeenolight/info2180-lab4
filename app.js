//Excercise 2

window.onload = function(){
    //Variables
    var btn = document.querySelector("#searchBtn");
    var httpRequest = new XMLHttpRequest();

    btn.addEventListener('click', e =>{
        e.preventDefault();

        //AJAX request using the XMLHttpRequest object
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState === XMLHttpRequest.DONE){
                if (httpRequest.status === 200) {
                    let msg = httpRequest.responseText;
                    alert(msg)
                }
                else{
                    alert('There was a problem with the request.');
                }
            }
        } 
        httpRequest.open('GET', "superheroes.php");
        httpRequest.send();
    });
}
