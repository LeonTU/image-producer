import React, { useEffect, useRef, useState } from 'react';
import PixelsProducer from './PixelsProducer';

const ImageProducer = () => {
  const colorSteps = 32;
  const canvasRef = useRef();
  const [renderStyle, setRenderStyle] = useState("normal");
  const [imageHeight, setImageHeight] = useState(128);
  const imageWidth = colorSteps * colorSteps * colorSteps / imageHeight;

  useEffect(() => {
    produceImage();
  });

  const produceImage = () => {
    const ctx = canvasRef.current.getContext('2d');
    const imageArray = PixelsProducer(colorSteps, renderStyle);
    const imageData = new ImageData(imageArray, imageWidth, imageHeight);
    ctx.putImageData(imageData, 0, 0);
  };

  return (
    <>
      <div>
        <div>
          <select className="form-select-md" value={renderStyle}
            onChange={e => setRenderStyle(e.target.value)}>
            <optgroup label="Choose Style">
              <option value="normal">Normal</option>
              <option value="random">Random</option>
            </optgroup>
          </select>

          <select className="form-select-md" value={imageHeight} style={{ marginLeft: 20 }}
            onChange={e => setImageHeight(e.target.value)}>
            <optgroup label="Choose Height">
              <option value="32">32</option>
              <option value="64">64</option>
              <option value="128">128</option>
            </optgroup>
          </select>
        </div>
        <button className="btn btn-primary btn-sm" type="button" style={{ marginTop: 10 }}
          onClick={produceImage} disabled={renderStyle === "normal"}>Random Again</button>
      </div>
      <div style={{ marginTop: 30 }}>
        <canvas id="tutorial" width={imageWidth} height={imageHeight} ref={canvasRef}></canvas>
      </div>
    </>
  );
};

export default ImageProducer;
