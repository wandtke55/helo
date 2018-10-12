module.exports = {
    register: (req, res, next)=>{
        const dbInstance = req.app.get('db')
        const {username, password} = req.body

        dbInstance.new_user([username, password])
        .then(user => res.status(200).send(user))
        .catch(err => {
            res.status(500).send({errorMessage: `Well better luck next time cuz there is no user here!`})
            console.log(err)
        })
    },
    login: (req, res, next)=>{
        const dbInstance = req.app.get('db')
        const {username, password} = req.body

        dbInstance.login_user([username, password])
        .then(user => res.status(200).send(user))
        .catch(err =>{
            res.status(404).send({errorMessage: `No user found please register an account with us`})
            console.log(err)
        })
    }
}