

export default function validateInput(input) {
    let errors={};
    if(!input.username || !/\S+@\S+\.\S+/.test(input.username) || input.username.length >= 35) errors.username= "email invalido"
    if(!input.password || !/^(?=.*\d).{6,10}$/.test(input.password)) errors.password= "contraseña incorrecta"
    return errors
}