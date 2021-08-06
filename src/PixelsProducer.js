const PixelsProducer = (colorSteps, renderStyle) => {
  const totalCount = colorSteps * colorSteps * colorSteps;
  const colorIndexAmplyer = 256 / colorSteps;
  let uintc8 = new Uint8ClampedArray(totalCount * 4);
  let index = 0;

  for (let redIndex = 0; redIndex < colorSteps; redIndex++) {
    for (let greenIndex = 0; greenIndex < colorSteps; greenIndex++) {
      for (let blueIndex = 0; blueIndex < colorSteps; blueIndex++) {
        if (renderStyle === "random") { // produce pixel color from 0 to 255 and fill randomly
          index = Math.floor(Math.random() * totalCount);
          while (uintc8[index * 4] !== 0) {
            index = (index + 1) % totalCount;
          }
          uintc8[index * 4] = (redIndex + 1) * colorIndexAmplyer;
          uintc8[index * 4 + 1] = (greenIndex + 1) * colorIndexAmplyer;
          uintc8[index * 4 + 2] = (blueIndex + 1) * colorIndexAmplyer;
          uintc8[index * 4 + 3] = 256;
        } else { // produce pixel color from 0 to 255 and fill from location 0
          uintc8[index * 4] = (redIndex + 1) * colorIndexAmplyer;
          uintc8[index * 4 + 1] = (greenIndex + 1) * colorIndexAmplyer;
          uintc8[index * 4 + 2] = (blueIndex + 1) * colorIndexAmplyer;
          uintc8[index * 4 + 3] = 256;
          index++;
        }
      }
    }
  }

  return uintc8;
};

export default PixelsProducer;
