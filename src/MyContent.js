import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

  function MyContent() {
    return (
       <div>
       <Carousel>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://wallpapercave.com/wp/KzhYxUc.jpg"
                 alt="First slide"
               />
               <Carousel.Caption>
                 <h3>Football</h3>
                 <p>Most Interesting Game Ever.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://free4kwallpapers.com/uploads/wallpaper/lionel-messi-soccer-player-wallpaper-1920x1080-wallpaper.jpg"
                 alt="Second slide"
               />

               <Carousel.Caption>
                 <h3>Lionel Messi(G.O.A.T)</h3>
                 <p>Messical Messi.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701070027.jpg"
                 alt="Third slide"
               />

               <Carousel.Caption>
                 <h3>CR7(G.O.A.T)</h3>
                 <p>
                   Goal Machine Ronaldo.
                 </p>
               </Carousel.Caption>
             </Carousel.Item>
           </Carousel>

       <section classname="bg-light" id="about">
          <div classname="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div class="row">
                <p class="mt-4 mb-5">This is an Webpage of Football.It consist of details of every Football Clubs like Barcelona,Real Madrid,Liverpool,Manchester city and so many
                  Every Football Fan Must Visit this Page and Get the information you want to know about football
                  Several of the football codes are the most popular team sports in the world. Globally, association football is played by over 250 million players in over 200 nations,and has the highest television audience in sport,making it the most popular in the world. American football, with 1.1 million high school football players and nearly 70,000 college football players, is the most popular sport in the United States, with the annual Super Bowl game accounting for nine of the top ten of the most watched broadcasts in U.S. television history. The NFL has the highest average attendance (67,591) of any professional sports league in the world and has the highest revenue out of any single professional sports league. Thus, the best association football and American football players are among the highest paid athletes in the world</p>
             </div>
          </div>
        </section>

        <section class="" id="destinations">
         <div class="container">
             <div class="row">
              <div class="col-sm-12 col-md-12">
                 <h3 class="text-center mt-4 text-secondary">Big Football Clubs</h3>
               </div>
              </div>
              <div class="row">
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="https://1000logos.net/wp-content/uploads/2016/10/Barcelona-logo.jpg" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Barcelona</h4>
                          <p class="card-text text-secondary">commonly referred to as Barcelona and colloquially known as Barça is a professional football club based in Barcelona.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Read more</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Real Madrid</h4>
                          <p class="card-text text-secondary">   commonly referred to as Real Madrid or simply Real is a Spanish professional football club based in Madrid.         </p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Read more</a>
                       </div>
                    </div>
                 </div>
                 <div class="col-sm-4 mb-5">
                    <div class="card mt-4">
                       <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZ8AskSjbfn795Ql4uPiYgJWj88oVlE_JGA&usqp=CAU" alt=""/>
                       <div class="card-body">
                          <h4 class="card-title text-secondary">Manchester City </h4>
                          <p class="card-text text-secondary"> is an English football club based in Manchester that competes in the Premier League, the top flight of English football.</p>
                       </div>
                       <div class="card-footer">
                          <a href="#" class="btn btn-primary">Read more</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>





    <section class="bg-light mt-5" id="tourist">
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary"></h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="data:image/jpeg;base64,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" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Joan Laporta</h4>
          <h6 class="font-weight-bold blue-text my-3">Barcelona Owner</h6>
          <p class="font-weight-normal dark-grey-text">Joan Laporta is a Spanish politician and current president of FC Barcelona.
             During his first tenure as president of FC Barcelona, they set a new record for trophies won in a 12-month period, winning 6 in 2009.</p>
        </div>
      </div>

      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://e0.365dm.com/21/11/768x432/skysports-man-city-pep-guardiola_5597829.jpg?20211127230336" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">pep Guardiola</h4>
          <h6 class="font-weight-bold blue-text my-3">Former Barcelona Manager</h6>
          <p class="font-weight-normal dark-grey-text">The Best Club Manager in the World.
          He is considered one of the greatest managers of all time and holds the records for the most consecutive league games won in LaLiga, the Bundesliga and the Premier League.</p>
        </div>

      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://media.gettyimages.com/photos/lionel-messi-of-paris-saintgermain-applauds-the-fans-following-in-picture-id1344007051?s=612x612" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Lionel Messi</h4>
          <h6 class="font-weight-bold blue-text my-3">Former Barcelona Player</h6>
          <p class="font-weight-normal dark-grey-text">
             Widely regarded as one of the greatest players of all time, Messi has won a record seven Ballon d'Or awards a record six European Golden Shoes
            he won a club-record 35 trophies, including ten La Liga titles, seven Copa del Rey titles and four UEFA Champions Leagues.</p>
        </div>
        </div>
      </div>
    </div>
   </section>
   </div>
    );
  }

  export default MyContent;