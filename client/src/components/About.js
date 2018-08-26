import React from 'react';

const About = () => {
  return (
    <div>
      <h4 style={{ textAlign: 'center' }}>About</h4>
      <div className="row">
        <div className="six columns">
          <img className="selfie" src="./drawing.svg" alt="Selfie" />
        </div>
        <div className="six columns" style={{ paddingRight: '60px' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vulputate nunc eget nisi fermentum, vitae tempus sem viverra. In
            dignissim malesuada tristique.
          </p>
          <p>
            Quisque egestas, mi quis euismod iaculis, urna sem ornare nulla,
            porta gravida justo velit vehicula neque. Aenean convallis metus id
            hendrerit varius. Curabitur eleifend et elit quis fermentum. Ut
            rhoncus blandit neque in condimentum.
          </p>
          <p>
            Donec dapibus mauris nulla, nec tristique magna sagittis a. Sed sed
            ligula metus. Nam pretium pretium nisl sed condimentum. Maecenas nec
            velit tempor, dapibus dolor eu, porttitor quam. Praesent viverra
            egestas lacus, et mattis sapien feugiat mollis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
