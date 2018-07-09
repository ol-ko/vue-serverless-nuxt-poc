import Listing from "./models/Listing";
import ListingData from "./models/ListingData";

export const state = () => ({
  listing: {}
});

export const mutations = {
  setListing(state, listing) {
    state.listing = listing
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
      const requestConfig = {
          url: 'https://1u5zv1svga.execute-api.eu-central-1.amazonaws.com/TEST/listings/cbdd491b-a259-4880-b8a9-ed7ea8fc00a5',
          method: 'get',
          responseType: 'json',
          headers: {
              'x-api-key': 'hfoOyQuZSW8gLoab9CemK1w7soBcz4er6h7bzes5'
          }
      };

      const listingData: ListingData = await app.$axios.$request(requestConfig);

      commit("setListing", new Listing(listingData))
  }
};
