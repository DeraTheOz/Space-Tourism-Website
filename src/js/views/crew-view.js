import dataModel from '../models/data-model.js';
import imageMoonPng from '../../assets/destination/image-moon.png';
import imageMoonWebp from '../../assets/destination/image-moon.webp';
import imageMarsPng from '../../assets/destination/image-mars.png';
import imageMarsWebp from '../../assets/destination/image-mars.webp';
import imageEuropaPng from '../../assets/destination/image-europa.png';
import imageEuropaWebp from '../../assets/destination/image-europa.webp';
import imageTitanPng from '../../assets/destination/image-titan.png';
import imageTitanWebp from '../../assets/destination/image-titan.webp';

const images = {
    moon: { png: imageMoonPng, webp: imageMoonWebp },
    mars: { png: imageMarsPng, webp: imageMarsWebp },
    europa: { png: imageEuropaPng, webp: imageEuropaWebp },
    titan: { png: imageTitanPng, webp: imageTitanWebp }
};

const crew = dataModel.getCrew();
console.log(crew);

const crewView = function () {
    const render = (crewName = 'davidHurley') => {};

    return { render };
};
