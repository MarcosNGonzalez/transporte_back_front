import '../styles/HomePage.css';









const HomePage = (props) => {
    return (

        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="el avion"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos">
                <h2> Bienvenidos </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod hic sint non veritatis doloremque quia quis minus, ipsum labore possimus esse adipisci praesentium fuga delectus consectetur totam cupiditate quasi officiis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi dolore laborum esse odio assumenda sapiente voluptatibus cum adipisci blanditiis explicabo, quidem suscipit tempora obcaecati consequatur sequi illo tempore inventore?</p>
            </div>
            <div className="testimonios">
                <h2>Testimonios</h2>
                <div class="testimonio">
                    <span class="cita"> "Exlentente servicio"</span>
                    <span class="autor"> Silvio Rodriguez  --- cliente  </span>
                </div>
            </div>

        </div>




    </main>
        
    );
}


export default HomePage;