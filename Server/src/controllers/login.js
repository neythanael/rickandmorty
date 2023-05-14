const user = require ("../utils/users")

const usuarioLogin = (req, res) => {
    const {email, password} = req.query
    const usuario = user.find((user)=>user.email === email && user.password === password);
    if (usuario){
    res.status(200).json({ access : true });
    } else {
        res.status(400).json({access : false});
    }


}

module.exports = usuarioLogin;