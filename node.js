var button = document.getElementById("rnd_btn")

const code_verifier = "bc2b3b9656a9308f45e0982a6a4272907b56f3927d01db80f0e06dea"
const code_challenge = "3qR6vaeerzuZoa6_hzrAas7bHS9nyXXtO2gE1B6jx2Y"

var URL = `https://myanimelist.net/v1/oauth2/authorize?
response_type=code
&client_id=${2}
&state=${1}
&code_challenge=${code_challenge}
&code_challenge_method=plain`;

button.addEventListener("click",()=>{

})