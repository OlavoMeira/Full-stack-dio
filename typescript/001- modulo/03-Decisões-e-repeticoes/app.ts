const typeUser = {
    admin: 'Seja bem vindo admin',
    student: 'Você é um estudante',
    viewer: 'Você pde visualizar'
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer')