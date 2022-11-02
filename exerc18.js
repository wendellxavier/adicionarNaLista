function addContato(){
    const contatoSelecao = document.getElementById('contatos-lista')

    const h3 = document.createElement('h3')
    h3.innerText = "Contato"

    const ul = documento.createElement('ul')
    
    const nomeLi = document.createElement('li')
    nomeLi.innerText = "Nome: "
    const nomeInput = document.createElement('input')
    nomeInput.type = 'text'
    nomeInput.name = 'fullname'
    nomeLi.appendChild(nomeInput)
    ul.appendChild(nomeLi)
    ul.appendChild(document.createElement('br'))

    const foneLi = document.createElement('li')
    foneLi.innerText = "Nome: "
    const foneInput = document.createElement('input')
    foneInput.type = 'text'
    foneInput.name = 'fullname'
    foneLi.appendChild(foneInput)
    ul.appendChild(foneLi)
    ul.appendChild(document.createElement('br'))

    const addEnderecoLi = document.createElement('li')
    addEnderecoLi.innerHTML = '<label for="addEndereco">Endereço: </label>'
    const addEnderecoInput = document.createElement('input')
    addEnderecoInput.type = 'text'
    addEnderecoInput.name = 'address'
    addEnderecoInput.id = 'address'
    addEnderecoLi.appendChild(addEnderecoInput)
    ul.appendChild(addEnderecoLi)
    ul.appendChild(document.createElement('br'))


    contatoSelecao.appendChild(h3, ul)


} 

function removerContato(){
    const contatoSelecao = document.getElementById('contatos-lista')

    const titulos = document.getElementsByTagName('h3')
    const contatos = document.getElementsByTagName('ul')

    contatoSelecao.removeChild(titulos[titulos.length - 1])
    contatoSelecao.removeChild(contatos[contatos.length - 1])
}