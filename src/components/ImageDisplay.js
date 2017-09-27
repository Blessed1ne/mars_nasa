import React, { Component } from 'react';

class ImageDisplay extends Component {

  render() {
    let imageArray = this.props.images;
    if(this.props.images.length === 0){
      imageArray = [
        {
          id: "sampleid",
          img_src: 'https://vignette.wikia.nocookie.net/looneytunes/images/7/78/Marvin_the_Martian.png/revision/latest?cb=20130218203516'
        }
      ]
    }
    return (
      <div className="imageReturns">
        {imageArray.map((imgURL)=>{
          return(
            <div key={imgURL.id}>
              <ul>
                <li><img src={imgURL.img_src} /></li>
              </ul>
            </div>
          )
        })}
      </div>
    );
  }

}

export default ImageDisplay;
