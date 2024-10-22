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
  const [nome, setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType []>([])
  const [usuarios, setUsuarios] = useState<UsuariosType []>([])

  useEffect(() => {
    setNome("Narriane Silva")
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
    <h1>{nome}</h1>
    <div className="itens-container">
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

      <div className="usuarios-container">
        {usuarios.map(usuario => (
          <div key={usuario.id} className="usuario-item">
            <h2>{usuario.nome}</h2>
            <p>{usuario.email}</p>
            <div className='data'>
              <p>{usuario.created_at}</p>
              <p>{usuario.update_at}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);
}
export default App



