'use strict'

import {
    getContatos,
    postContato,
    putContato,
    deleteContato
} from './contatos.js'

const salvar = document.getElementById('salvar')

let idAtual = null

salvar.addEventListener('click', async () => {

    const contato = {
        nome: document.getElementById('nome').value.trim(),
        foto: document.getElementById('foto').value.trim(),
        email: document.getElementById('email').value.trim(),
        celular: document.getElementById('celular').value.trim(),
        endereco: document.getElementById('endereco').value.trim(),
        cidade: document.getElementById('cidade').value.trim()
    }

    if (!contato.nome || !contato.foto || !contato.email || !contato.celular || !contato.endereco || !contato.cidade) {
        alert('Preencha todos os campos!')
        return
    }

    if (idAtual == null) {
        await postContato(contato)
    } else {
        await putContato(idAtual, contato)

        idAtual = null
        salvar.textContent = 'Salvar'
    }

    limparCampos()
    get()
})

async function get() {
    const contatos = await getContatos()

    const linhas = contatos.map(criarLinha)

    document.getElementById('tbody')
        .replaceChildren(...linhas)
}

function put(contato) {

    idAtual = contato.id

    document.getElementById('nome').value     = contato.nome
    document.getElementById('foto').value     = contato.foto
    document.getElementById('email').value    = contato.email
    document.getElementById('celular').value  = contato.celular
    document.getElementById('endereco').value = contato.endereco
    document.getElementById('cidade').value   = contato.cidade

    salvar.textContent = 'Atualizar'
}

async function del(id) {
    await deleteContato(id)

    get()
}

function criarLinha(contato) {
    const tr = document.createElement('tr')

    const id       = document.createElement('td')
    const nome     = document.createElement('td')
    const foto     = document.createElement('td')
    const email    = document.createElement('td')
    const celular  = document.createElement('td')
    const endereco = document.createElement('td')
    const cidade   = document.createElement('td')
    const acoes    = document.createElement('td')

    id.textContent       = contato.id
    nome.textContent     = contato.nome
    email.textContent    = contato.email
    celular.textContent  = contato.celular
    endereco.textContent = contato.endereco
    cidade.textContent   = contato.cidade

    const imagem = document.createElement('img')
    imagem.src   = contato.foto
    imagem.width = 80

    foto.appendChild(imagem)

    const atualizar = document.createElement('button')
    atualizar.textContent = 'U'
    atualizar.addEventListener('click', () => put(contato))

    const deletar = document.createElement('button')
    deletar.textContent = 'D'
    deletar.addEventListener('click', () => del(contato.id))

    acoes.append(atualizar, deletar)

    tr.replaceChildren(id, nome, foto, email, celular, endereco, cidade, acoes)

    return tr
}

function limparCampos() {
    document.getElementById('nome').value = ''
    document.getElementById('foto').value = ''
    document.getElementById('email').value = ''
    document.getElementById('celular').value = ''
    document.getElementById('endereco').value = ''
    document.getElementById('cidade').value = ''
}

get()