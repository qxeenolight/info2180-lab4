//Excercise 2

window.onload = function(){
    //Variables
    var btn = document.querySelector("#searchBtn");
    var url = "superheroes.php";
    
    btn.addEventListener('click', e =>{
        e.preventDefault();

        //AJAX request using fetch
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text()
                } 
                else {
                    var error = Promise.reject('Error')
                    return error
                }
            })
            .then(superheroes => {
               alert(superheroes);
            })
    });
}
