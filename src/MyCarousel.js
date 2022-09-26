import Carousel from 'react-bootstrap/Carousel';
//import ChampionsLeague from './ChampionsLeague.jpg';
//import MessiCele from './MessiCele.jpg';
//import ChampionsLeagueFinal from './ChampionsLeagueFinal.jpg';

function MyCarousel() {
  return (
         <section class="">
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="https://wallpapercave.com/wp/KzhYxUc.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="https://free4kwallpapers.com/uploads/wallpaper/lionel-messi-soccer-player-wallpaper-1920x1080-wallpaper.jpg" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701070027.jpg" alt="Third slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>

export default  MyCarousel;