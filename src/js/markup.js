import Notiflix from 'notiflix';
import refs from './refs';
import { createListCountries } from './create-list';

export function markup(data) {
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
  if (data.length >= 2 && data.length <= 10) {
    refs.list.insertAdjacentHTML('beforeend', createListCountries(data));
  }
}
