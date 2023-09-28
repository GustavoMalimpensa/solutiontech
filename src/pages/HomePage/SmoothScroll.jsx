import './Gsap.scss'

export default function SmoothScroll() {

    return (
        <div className='wrapper-body'>
            <h1 className="scroll-text">Imagens de Rolagem</h1>
            <h1 aria-hidden="true" className="scroll-text outline-text">Imagens de Rolagem</h1>
            <h1 aria-hidden="true" className="scroll-text filter-text">Imagens de Rolagem</h1>

            <div id="wrapper">
                <section id="content">
                    <section className="images">
                        <img data-speed="0.8" src="" />
                        <img data-speed="0.9" src="" alt="" />
                        <img data-speed="1" src="" alt="" />
                        <img data-speed="1.1" src="" alt="" />
                        <img data-speed="0.9" src="" alt="" />
                        <img data-speed="1.2" src="" alt="" />
                        <img data-speed="0.8" src="" alt="" />
                        <img data-speed="1" src="" alt="" />
                    </section>
                </section>
            </div>
        </div>
    )
}