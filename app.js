'use strict'

import { getContatos, getContato, postContato, putContato, deleteContato } from "./contatos.js"

const novoContato = {
    "nome": "Gustavo Vidal de Abreu",
    "celular": "11 9 7125-4661",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "gustavovidalgva@gmail.com",
    "endereco": "Rua João Fiochi, 67",
    "cidade": "Jandira"
}

// console.table(await getContatos())
// console.table(await getContato(1))
// console.table(await postContato(novoContato))
// console.table(await putContato(67, novoContato))
// console.table(await deleteContato(217))
