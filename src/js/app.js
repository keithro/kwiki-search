import 'normalize.css/normalize.css';
import '../sass/main.scss';

// import { wiki } from './wiki';
import { ui } from './ui';

// Hide content section on load
document.addEventListener('DOMContentLoaded', ui.hideSearchContent);

// Show content section on input focus
document.querySelector('.search__input').addEventListener('focus', ui.showSearchContent);

// Hide on blur IF there are no search results