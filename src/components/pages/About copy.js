import React from 'react';
let myPic = '/assets/images/Oksana-Portrait.jpeg';
export default function About() {
  return (
    <div>
      <h1 className="text-center"> Oksana Tatsyak</h1>

      <img className = "float-left" height="200px" src={process.env.PUBLIC_URL + myPic} alt="myPicture" />
<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui 
        fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>

      <p>
        lorem ipsum dolor sit amet, consectetur adip
        </p>
        lorem ipsum dolor sit amet, consectetur adip
        <p>

        </p>
    </div>
  );
}
