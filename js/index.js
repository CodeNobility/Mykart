let password = "prince"
let a = prompt("enter the password : ")

const func = (a) => {
    return a == password ? false : true
}
if (func(a)) {
    location.href = "index.html"
}
else {
    console.error("wrong password");
}