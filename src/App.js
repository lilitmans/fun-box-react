import React, { Component } from 'react';
import './App.css';
import './Media-App.css';



class Banner extends Component {
  constructor(props){
    super(props);
    this.state={
      product:[
        {
          id:1,
          border: 'pink-bg',
          src: 'cat.png',
          title:'Сказочное заморское яство',
          brand: 'Нямушка',
          description: 'с фуа-гра',
          portion: 4,
          bonus: '',
          productWeightNumber: '0,5',
          clientStatus: 0,//1 -> yes 0 -> no
          inStock: true,
          aboutProductText: 'Чего сидишь? Порадуй котэ,'
        },
        {
          id:2,
          border: 'blue-bg',
          src: 'cat.png',
          title: 'Сказочное заморское яство',
          brand: 'Нямушка',
          description: 'с рыбой',
          portion:40,
          bonus: 2,
          productWeightNumber: 2,
          clientStatus: 0,//1 -> yes 0 -> no
          inStock: true,
          aboutProductText: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        },
        {
          id: 3,
          border: 'pink-bg',
          src:'cat.png',
          title:'Сказочное заморское яство',
          brand: 'Нямушка',
          description:'с курой',
          portion: 100,
          bonus: 5,
          customer: 'заказчик доволен',
          productWeightNumber: 5,
          clientStatus: 1,//1 -> yes 0 -> no
          inStock: false,
          aboutProductText: ''
        }
      ]
    }
  }
  chooseSyntaxPortion(num){
    let result = null;
    if(num === 1){
      result='порция';
    }else if(num !== 1 && num < 5){
      result='порции'
    }else {
      result='порций'
    }
    return result;
  }

  chooseSyntaxMouse(num){
    let result = null;
    if(num === '' || num === 1){
      result='мышь'
    }else if(num !== 1 && num < 5){
      result='мыши'
    }else {
      result='мышей'
    }
    return result;
  }

  checkIfProductDisabled(inStock, description, aboutProductText) {
    if(inStock === 'false') {
      return `Печалька, ${description} закончился.`;
    }else {
      return aboutProductText;
    }
  }


  render() {
    return (
        <div className="main-content flex-container clear">
            <h1 className="main-heading">Ты сегодня покормил кота?</h1>
            <div className="banners-block flex-container">
              {this.state.product.map((item,key) =>

                  <div id={item.id} key={item.id} className="banner-container">
                      <div className={`image-view-border ${!item.inStock?'': `${item.border}`}`}>
                        <div className="image-view">
                          <img className={`cat-img ${!item.inStock?'disabled-image':''}`} src={require('./assets/images/'+item.src+'')} alt="cat" />
                          <div className={`banner-text-block ${!item.inStock?'disabled-image-txt':''}`}>
                            <p className={`banner-sub-heading grey-txt ${!item.inStock?'disabled-image-txt':''}`}>{item.title}</p>
                            <h3 className="banner-heading">{item.brand}</h3>
                            <p className="banner-sub-heading-with">{item.description}</p>
                            <div className={`banner-product-description-quantity grey-txt ${!item.inStock?'disabled-image-txt':''}`}>
                              <ul>
                                <li>{item.portion} {this.chooseSyntaxPortion(`${item.portion}`)}</li>
                                <li>{item.bonus} {this.chooseSyntaxMouse(`${item.bonus}`)} в подарок</li>
                                <li>{item.customer}</li>
                              </ul>
                            </div>
                            <div className={`banner-product-weight flex-container ${!item.inStock?'': `${item.border}`}`}>
                              <div className="banner-product-weight-number">{item.productWeightNumber}</div>
                              <div className="product-kilogram">кг</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    <p className={`banner-text ${!item.inStock?'banner-text-disabled':''}`}>
                      {this.checkIfProductDisabled(`${item.inStock}`, `${item.description}`, `${item.aboutProductText}`)}
                      <a className={`banner-buy-link ${!item.inStock ? 'hide-block' : ''}`} href="#" alt="Buy" target="_blank"> купи.</a>
                    </p>
                  </div>
              )}

            </div>

        </div>

    )
  }
}

export default Banner;
