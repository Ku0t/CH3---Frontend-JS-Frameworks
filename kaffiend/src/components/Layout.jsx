export default function Layout(props) {
    const { children } = props
    
    const header = (
        <header>
            <div>
                <h1 className="text-gradient">KAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            <button>
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">Kaffiend</span> was made by Kut0 <br />using the <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a> design library. <br />Check out the project on <a target="_blank" href="https://github.com/Ku0t/CH3---Frontend-JS-Frameworks">GitHub!</a></p>
        </footer>
    )
    
    return (
        <>
            {header}
            <main>
                {children}    
            </main>
            {footer}
        </>
    )
}