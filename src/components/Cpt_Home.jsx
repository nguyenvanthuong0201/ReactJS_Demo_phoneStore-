import React, { Component } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import DataHomePromotion from '../data/DataHomePromotion'
import DataHomeProduct from '../data/DataHomeProduct'

class Cpt_Home extends Component {
  showSplidePromotion=(DataHomePromotion)=>{
        let splides = DataHomePromotion;
        let result = null;
        if(splides.length > 0){
            result = splides.map((splide,index)=>{
                return(
                    <SplideSlide key={index}>
                    <img  src={splide.img} alt={splide.alt} />
                  </SplideSlide>
                )
            })
        }
        return result;
    }
  showSplideProduct=(DataHomeProduct)=>{
    let products= DataHomeProduct;
    let result= null;
    if(products.length > 0){
      result=products.map((product,index)=>{
        return(
          <SplideSlide key={index}>
          <div className="card cartHomeProduct">
            <img
              className="card-img-top"
              src={product.img}
              alt={product.alt}
            />
            <div className="card-body">
              <h4 className="card-title">{product.title} </h4>
              <div className="card-text">
                <span className="float-left">{product.sale} ₫</span>
                <span className="float-right sale">{product.cost} {product.cost ? "₫": ""}</span>
              </div>
              <br/>
               <div className="card-text cartButton">
                <button type="button" class="btn btn-primary float-left" >Xem chi tiết</button>
                <button type="button" class="btn btn-danger float-right">Giỏ Hàng</button>
              </div>
            </div>
          </div>
        </SplideSlide>
        )
      })
    }
    return result
  }
    
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8">
            <div id="carouselId" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselId"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
                <li data-target="#carouselId" data-slide-to="3"></li>
                <li data-target="#carouselId" data-slide-to="4"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img src="img/carousel1.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img src="img/carousel2.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img src="img/carousel3.jpg" alt="Third slide" />
                </div>
                <div className="carousel-item">
                  <img src="img/carousel4.jpg" alt="Four slide" />
                </div>
                <div className="carousel-item">
                  <img src="img/carousel5.jpg" alt="Five slide" />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselId"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselId"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container">
              <div className="row bannerLeft">
                <img src="img/home1.jpg" alt="bannerLeft" />
              </div>
              <div className="row bannerLeft">
                <img src="img/home2.jpg" alt="bannerLeft" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-12">
                <h3 className="text-center text-uppercase">KHUYẾN MÃI hot</h3>
              </div>
              <div className="col-sm-12">
                {/* start flickity */}
                <div className="wrapper">
                  <Splide
                    options={{
                      rewind: true,
                      perPage: 3,
                      perMove: 1,
                      gap: "1rem",
                    }}
                    id="splide1"
                  >
                    {this.showSplidePromotion(DataHomePromotion)}
                  </Splide>
                </div>
                {/* start flickity */}
              </div>
            </div>
            <hr />

            {/* Start flickity sản phẩm */}
            <div className="row justify-content-center">
              <div className="col-sm-12">
                <h3 className="text-center text-uppercase">Sản Phẩm hot</h3>
              </div>
              <div className="col-sm-12">
                {/* start flickity */}
                <div className="wrapper2">
                  <Splide
                    options={{
                      rewind: true,
                      perPage: 4,
                      perMove: 1,
                      gap: "1rem",
                    }}
                    id="splide2"
                  >
                   {this.showSplideProduct(DataHomeProduct)}
                  </Splide>
                </div>
              </div>
            </div>

            {/* End flickity sản phẩm */}
          </div>
        </div>
      </div>
    );
  }
}

export default Cpt_Home;
