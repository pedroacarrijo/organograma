import '../Rodape/Rodape.css'

const Rodape = () => {
    return (   
        <footer>
            <div className='logo-redes'>
            <a href='#'> 
            <img src='/imagens/ig.png' alt='Logo instagram'/>
            </a>
            <a href='#'> 
            <img src='/imagens/fb.png' alt='Logo facebook'/>
            </a>
            <a href='#'> 
            <img src='/imagens/tw.png' alt='Logo twitter'/>
            </a>
    
            
            </div>

            <div className='logo-organo'>

            <img src='/imagens/logo.png' alt='Logo organo'/>
            
            
            </div>
            <div className='texto'>
            
            <h3> Desenvolvido por @pedroacarrijo. </h3>
            
            
            </div>
        
        
        </footer>

    )
}

export default Rodape