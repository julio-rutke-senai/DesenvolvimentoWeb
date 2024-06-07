const Tabela = (props) => {

    return(
        <section id="tabela">
                    <div id="header_tabela">
                        <div class="nome">Nome</div>
                        <div class="paginas">Páginas</div>
                        <div class="autor">Autor</div>
                        <div class="acoes">Ações</div>
                    </div>
                    <div id="body_tabela">
                        {
                            props.livrosSalvos.map(livro => (
                                <div class="livro">
                                    <div class="nome">{livro.nome}</div>
                                    <div class="paginas">{livro.paginas}</div>
                                    <div class="autor">{livro.autor}</div>
                                    <div class="acoes">Ações</div>
                                </div>
                            ))
                        }
                    </div>
        </section>
    )
}

export default Tabela;