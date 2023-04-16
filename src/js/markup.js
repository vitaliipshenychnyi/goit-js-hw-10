import Notiflix from 'notiflix';
import refs from './refs';
import { createListCountries } from './create-list';
import { createInfoCountry } from './create-info';

export function markup(data) {
  console.log(data);

  if (data.length === 1) {
    refs.info.insertAdjacentHTML('beforeend', createInfoCountry(data));
  } else if (data.length >= 2 && data.length <= 10) {
    refs.list.insertAdjacentHTML('beforeend', createListCountries(data));
  } else {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
}
