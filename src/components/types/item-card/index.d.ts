export interface ItemCardProps {
  content: ItemCardContent;
}
export interface ItemCardContent {
  _id: {
    $oid: string;
  };
  vendor: {
    name: string;
  };
  series: {
    name: string;
    item_quantity: 6;
  };
  description_details: {
    en: {
      fabric: string;
      model_measurements: string;
      sample_size: string;
      product_measurements: string;
    };
  };
  main_image: string;
  price: 3;
  names: {
    en: string;
  };
  images: Array<string>;
  product_code: string;
}
