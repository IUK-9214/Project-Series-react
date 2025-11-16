
import Header from '../component/Header'

import Footer from '../component/Footer'
import descript from "../img/showcase-photo3.jpg"
import  photo1 from "../img/showcase-photo1.jpg"

function Home() {
  return (
    <>
   <Header/>
   
    <section class='showcase'>
        <div class="container">
            <div class="row row1">
                <div class="img-box">
                    <img src={descript} alt="Image Description" />
                </div>
                <div class="text-box">
                    <h2 class='lg-heading text-black'>DEGANVY, U.K</h2>
                    <p class='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere consequatur rem, fuga minus! Rerum, dolorem praesentium. Nemo?</p>
                    <a href="./about.html" class='btn btn-secondary'>More</a>
                </div>
            </div>
            <div class="row row2">
                <div class="img-box">
                    <img src={photo1} alt="Image Description" />
                </div>
                <div class="text-box">
                    <h2 class='lg-heading text-black'>DESERT, EGYPT</h2>
                    <p class='text-gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione, quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur obcaecati fugiat asperiores nulla adipisci. Porro, atque itaque.</p>
                    <a href="./about.html" class='btn btn-secondary'>More</a>
                </div>
            </div>
        </div>
    </section>
<section class="features">
        <div class="container">
            <div class="box-wrapper">
                <div class="box box-1">
                    <i class="fas fa-route fa-2x text-red"></i>
                    <h2 class="md-heading">Adventure</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
                <div class="box box-2">
                    <i class="fas fa-strikethrough fa-2x"></i>
                    <h2 class="md-heading">Less Price</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
                <div class="box box-3">
                    <i class="fas fa-user-check fa-2x text-red"></i>
                    <h2 class="md-heading">Experice</h2>    
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, quia. Corporis dolores ipsa a veniam molestias beatae, fuga ex laboriosam.</p>
                </div>
            </div>
        </div>
        
    </section>
   <Footer/>
   </>
  )
}

export default Home