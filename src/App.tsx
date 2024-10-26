import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType = {
    id:number,
    nome:string,
    preco:string,
    descricao:string,
    imagem:string
}
type UsuariosType = {
  id:number,
  nome:string,
  email:string,
  created_at:string,
  update_at:string
}


function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [usuarios, setUsuarios] = useState<UsuariosType[]>([])

  useEffect(() => {
    fetch("https://one022a-marketplace-aq8p.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
  }, [])

  useEffect(() => {
    fetch("https://one022a-marketplace-aq8p.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

return (
  <>
    <div className="itens-container">
      <h1>Produtos</h1>
      <div className="produtos-container">
        {produtos.map(produto => (
          <div key={produto.id} className="produto-item">
            <h2>{produto.nome}</h2>
            <div className='container-imagem'>
              <img src={produto.imagem} alt={produto.nome} />
            </div>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
          </div>
        ))}
      </div>

      <h1>Usuarios</h1>
      <div className="usuarios-container">
        {usuarios.map(usuario => (
          <div key={usuario.id} className="usuario-item">
            <h2>{usuario.nome}</h2>
            <p><strong>E-mail:</strong> {usuario.email}</p>
                    {/* Formatando e exibindo a data de criação */}
                    <p><strong>Data de Cadastro:</strong> {new Date(usuario.created_at).toLocaleString()}</p>
                    {/* Formatando e exibindo a última atualização */}
                    <p><strong>Última Atualização:</strong> {new Date(usuario.update_at).toLocaleString()}</p>
            </div>
        ))}
      </div>
    </div>
  </>
);
}
export default App



