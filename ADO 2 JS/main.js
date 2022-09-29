var output = document.getElementById('output')
document.getElementById('btn').addEventListener('click',predictName);
let name = document.getElementById('nameInput');
document.getElementById('nameInput').addEventListener('change',checkName)
function predictName(){
        let name = nameInput.value;

        fetch('https://api.agify.io?name='+name,{ method:'GET'})
        .then(function(response){return response.json();})
        .then(data => {
            if (name != '') {
                output.innerHTML = "I guess &#129300 your age is " + data.age;
                output.style.display = 'block';
                console.log(data.age);
            }else{
                output.style.display = 'none'; 
            }


        })
        .catch(err => console.log(err));
    }

 function checkName(){
    let name = nameInput.value;
    if (name == '') {
        output.style.display = 'none'; 
    }};
    