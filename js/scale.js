import {removeLastCharacter} from './utils.js';

const scaleOptions = {
  MIN: 25,
  MAX: 100,
  BY_DEFAULT: 100,
  STEP: 25
};

const scaleControls = document.querySelector('.scale');
const scaleSmaller = scaleControls.querySelector('.scale__control--smaller');
const scaleBigger = scaleControls.querySelector('.scale__control--bigger');
const scaleValue = scaleControls.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const setValuesScale = (transform, isDefault) => {
  if(isDefault) {
    imagePreview.style.transform = transform;
    scaleValue.value = `${scaleOptions.BY_DEFAULT}%`;
  } else {
    scaleValue.value = `${transform}%`;
    imagePreview.style.transform = `scale(${transform / 100})`;
  }
};

const getZoomValue = () => {
  const currentValue = scaleValue.value;
  return Number(removeLastCharacter(currentValue));
};

const setScaleSmaller = () => {
  const numberValue = getZoomValue();
  if(numberValue > scaleOptions.MIN) {
    const newValue = numberValue - scaleOptions.STEP;
    setValuesScale(newValue);
  }
};

const setScaleBigger = () => {
  const numberValue = getZoomValue();
  if(numberValue < scaleOptions.MAX) {
    const newValue = numberValue + scaleOptions.STEP;
    setValuesScale(newValue);
  }
};

const addListeners = () => {
  scaleSmaller.addEventListener('click', setScaleSmaller);
  scaleBigger.addEventListener('click', setScaleBigger);
};

const removeListeners = () => {
  scaleSmaller.removeEventListener('click', setScaleSmaller);
  scaleBigger.removeEventListener('click', setScaleBigger);
};

function setScale() {
  setValuesScale('',true);
  addListeners();
}

export const resetScale = () => {
  setValuesScale('',true);
  removeListeners();
};

setScale();
