export interface UserModel {
  username: string;
  password: string;
}

export interface LocationModel {
  country_code: string;
  country_name: string;
  city: string;
  postal: number;
  latitude: number;
  longitude: number;
  IPv4: string;
  state: string;
}

export interface RestaurantModel {
  result: Array<{
    name: string;
    cuisine: Array<string>;
    deliveryTimeInMins: number;
    open: boolean;
    cloudinaryImageId: string;
    price: Price;
  }>
}

interface Price {
  discountInfo: string;
  costForTwo: number;
}

export interface OfferModel {
  result: Array<{
    restaurant: string;
    name: string;
    deliveryTimeInMins: number;
    available:boolean;
    cloudinaryImageId: string;
    price: {
      discountPrice: number,
      costPrice: number
    };
  }>
}


export interface OrdersModel {
  total_orders: 12,
  orders: Array<{
    id: string,
    restaurant: string,
    location: string,
    address: {
      from: string,
      to: string
    },
    orderDateTime: Date | string,
    deliveryDateTime: string,
    status: string,
    imageId: string,
    price: {
      subTotal: number,
      packingCost: number,
      discount: number,
      total: number
    },
    paymentMode: string,
    orderItems: Array<{
      name: string,
      quantity: number,
      costForOne: number,
      itemCost: number
    }>
  }>
}
