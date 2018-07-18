import ListingData from './ListingData';

export default class Listing {
    title: string;
    imageUrl: string;
    imageCaption: string;
    description: string;
    price: number;
    address: string;

    constructor(listingData: ListingData) {
        const price = listingData.netPrice.value;
        const offer = listingData.offers.offer[0];
        const address = listingData.address;

        this.title = offer.name;
        this.imageUrl = offer.attachments.media[0].url;
        this.imageCaption = offer.attachments.media[0].title;
        this.description = offer.descriptions.description[1].value;
        this.price = price;
        this.address = `${address.street}, ${address.postalCode}, ${address.region}`;
    }
};
