interface People  {
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa: People = {
    nome: 'Paulo',
    idade: 32
}

const outraPessoa: People = {
    nome: 'Paulo',
    idade: 25,
    profissao: 'Desenvolvedor'
}

const arraypessoa: Array<People> = [
    pessoa,outraPessoa
] 

const arrayNum: number[] = [
    1,2,3
]

const arrayString: Array<string> = [
    '1','2','3'
]

