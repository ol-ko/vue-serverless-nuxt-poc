interface Address {
    locality: string;
    country: string;
    region: string;
    street: string;
    postalCode: string;
}

interface Media {
    url: string;
    title: string;
}

interface Attachments {
    media: Media[];
}

interface Description {
    value: string;
}

interface Descriptions {
    description: Description[];
}

interface Offer {
    name: string;
    attachments: Attachments;
    descriptions: Descriptions;
}

interface Offers {
    offer: Offer[];
}

interface Price {
    value: number;
}

export default interface ListingData {
    netPrice: Price;
    offers: Offers;
    address: Address;
}
