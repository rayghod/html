$(document).ready(function(){
    $("#rejestracja").validate({  
        rules: {
            login:
                {
                required: true,
                minlength: 5
                },
            password: 
                {
                required: true,
                minlength: 6
                },
            password2: 
                {
                required: true,
                equalTo: "#password"
                },
            email: 
                {
                required: true,
                email: true
                },
            age:
                {
                required: true,
                min:18
                },
            bot:
                {
                required: true,
                min:34
                },
            regulamin:
                {
                required:true
                }
            },
        messages: {
            login:{
                required: "Podaj login",
                minlength: "Wymagane jest conajmniej 5 znaków"
            },
            password:{
                required: "Podaj hasło",
                minlength: "Wymagane jest conajmniej 6 znaków"
            },
            password2:{
                required: "Powtórz hasło",
                equalTo: "Hasła są różne"
            },
            email:{
                required: "Wprowadź adres e-mail",
                  email: "Wprowadź adres e-mail"
                },
            age:{
                required:"Podaj swój wiek",
                min:"Musisz być pełnoletni by się zarejestrować"
            },
            bot:{
                required:"Podaj sume",
                min:"Niestety nie"
            },
            regulamin:{
                required:"Musisz zaakceptować nasz regulamin by się zarejestrować"
            }
        },
     });
});