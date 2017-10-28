// @flow
import vCardJS from 'vcards-js';

type VCardSocialUrls = {
  facebook?: string,
  linkedIn?: string,
  twitter?: string,
  flickr?: string,
  custom?: string,
};

type VCardData = {
  firstName?: string,
  lastName?: string,
  middleName?: string,
  uid?: string,
  organization?: string,
  photo?: string,
  birthday?: Date,
  title?: string,
  url?: string,
  note?: string,
  email?: string,
  socialUrls?: VCardSocialUrls,
};

const createVCard = (data: VCardData) => {
  const card = new vCardJS();
  // Photos are special because god knows why
  if (data.photo) {
    card.photo.attachFromUrl(data.photo);
    delete data.photo;
  }
  Object.keys(data).forEach(key => {
    card[key] = data[key];
  });
  return card;
};

export default createVCard;
