import imgBanner from '../../imagens/banner.png';
import './index.css'

function Banner (){
    return(
        <div className="banner">
            <img src={imgBanner} alt="Banner principal da página Organo"></img>
        </div>
    )
}
export default Banner