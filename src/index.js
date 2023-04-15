import './css/styles.css';
import refs from './js/refs';
import { fetchCountries } from './js/fetch-countries';
import { markup } from './js/markup';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
function onSearch() {
  if (refs.input.value) {
    fetchCountries(refs.input.value.trim());
  }
}
