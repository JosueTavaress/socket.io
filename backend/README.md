# socket.io

# Projeto chatTime - Back-End
## A documentação da api foi desenvolvida pelo Swagger é essencial que ela seja consultada com a aplicação online exemplo http://localhost:5050/api-docs/

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

> para ler a documentação da api o server do back end devera está no ar.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] endpoint POST novo usuário
- [x] endpoint POST login de usuário
- [x] endpoint GET retorna todos os canais 
- [x] endpoint GET retorna as mensagens salvas da sala
- [x] endpoint POST subscribe faz a inscrição do usuário na sala
- [x] estabelece comunicação com socket.io 
- [x] endpoint GET subscribe retorna a incrição do usuário
- [x] endpoint DELETE subscribe faz a desinscrição do usuário
- [ ] endpoint POST cria uma nova sala
- [ ] endpoint PUT atualiza uma mensagem
- [ ] endpoint DELETE exclui sala

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* Você instalou a versão v16 `<nodejs / informado no README.md>`
* Você instalou `<mysql />`
* rodar o arquivo sql no banco de dados
* Recomendação workbench

## 🚀 Subindo o `<chatTime-back-end>`

Para instalar o `<chatTime back-end>`, siga estas etapas:

Linux e macOS:
```
<npm install>
```

## ☕ Usando <chatTime>

Para usar a documentação da api, siga estas etapas:

```
<npm run debug>
```

após o servidor está online entre em localhost:5050/api-docs
  

## exemplo para rodar o servidor e acessar a documentação da api completa
  
  ![nodemon](https://user-images.githubusercontent.com/69441257/156900568-fbf19b23-855a-4e47-817e-d0c15504c898.png)
  ![api-docs](https://user-images.githubusercontent.com/69441257/156900826-856bed71-9475-47c4-9762-fc9892ed1e83.png)
  ![exx](https://user-images.githubusercontent.com/69441257/156900950-85a43010-62e1-4772-bf33-f70878365a54.png)
  
## exemplo de resposta da api do endpoint login
  ![response](https://user-images.githubusercontent.com/69441257/156900993-3e0f212e-0247-40fd-8470-38dbc5a89147.png)
  
  
## evento de conexão e seleção da sala via socket
 para emitir o evento de seleção de sala e envio de mensagem deverá ser passada no evento
  
  <div>
    <b>socket.emit('Select_Channel_Send_Message')</b>  
  </div>
  
  ## exemplo
  ![en](https://user-images.githubusercontent.com/69441257/156901451-19468922-6e3a-44de-b54d-4e7e1b3e8783.png)
  
  ## evento onde as mensagens serão escutadas caso o usuário esteja autendicado cadastrado e dentro da sala
  obs: leia a documentação da api para resgatar todas as mensagens quando o usuário entrar pela primeira vez.
  
  ## para escutar os eventos do server (socket.io)
 
  

    socket.on('message', data);
  
  ## exemplo de retorno de menssagem do server socket io
  
  ![data](https://user-images.githubusercontent.com/69441257/156901672-b22896d7-c717-418c-8df6-b9140526a329.png)



## 📫 Como contribuir para `<chatTime>`
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/69441257?v=4" width="100px;" alt="Foto Josué Tavares no GitHub"/><br>
        <sub>
          <b>Josué Tavares</b>
        </sub>
      </a>
    </td>

</table>


## 😄 Seja um dos Colaboradores<br>
