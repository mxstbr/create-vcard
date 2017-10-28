// @flow
import vCardJS from 'vcards-js';
import createVCard from '../';

// The REV in a vCard string is the current date
// let's remove it since it breaks tests
const removeRev = (vcard: string) => {
  return vcard.replace(/\n?^REV:.*$/m, '');
};

it('should create a vcard-js', () => {
  expect(createVCard({})).toMatchSnapshot();
});

it('should attach simple properties', () => {
  expect(
    createVCard({
      firstName: 'Max',
      lastName: 'Stoiber',
    })
  ).toMatchSnapshot();
});

it('should correct attach photo URLs', () => {
  expect(
    createVCard({
      photo: 'https://mxstbr.com/headshot.jpeg',
    })
  ).toMatchSnapshot();
});

it('should convert the vCard to a string', () => {
  const string = createVCard({
    firstName: 'Max',
    lastName: 'Stoiber',
  }).getFormattedString();
  expect(removeRev(string)).toMatchSnapshot();
});
