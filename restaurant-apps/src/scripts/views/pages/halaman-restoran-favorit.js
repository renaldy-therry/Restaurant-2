/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import dbRestoFavorit from '../../data/restoran-favorit';
import {buatItemResto} from '../templates/template-halaman-resto';

const Favorite = {
  async render() {
    return `    
    <section class="resto-content">
        <h2 class="title" tabindex="0">Favorite Restaurant</h2>
        <section class="resto-list">
            <div class="grid-card"></div>
        </section>
    </section>`;
  },

  async afterRender() {
    const restaurants = await dbRestoFavorit.dapatSemuaDataRestoran();
    const containerRestaurants = document.querySelector('.grid-card');

    restaurants.forEach((restaurant) => {
      containerRestaurants.innerHTML += buatItemResto(restaurant);
    });
  },
};

export default Favorite;
