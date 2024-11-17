import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./filme.css";

import api from "../../services/api";

function Filme() {
    const { id } = useParams();
    const [Filme, setFilme] = useState();
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "a70c38af5d350c309d5a86da4e6d4411",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch((error)=>{
                console.log("Filmes não encontrado");
            })
        }
        loadFilme();

        return ()=>{
            console.log("Desmontado");
        }
    },[])

    if(Loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
           <h1>{Filme.title}</h1>
           <img src={`https://image.tmdb.org/t/p/original/${Filme.backdrop_path}`} alt={Filme.title} />
            
            <h3>Sinopse</h3>
            <span>{Filme.overview}</span>
            <strong>Avaliação: {Filme.vote_average.toFixed(1)} / 10</strong>

            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a href="#">
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Filme;