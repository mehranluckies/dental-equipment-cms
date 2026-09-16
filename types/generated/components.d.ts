import type { Schema, Struct } from '@strapi/strapi';

export interface ProductSpecificationProduct extends Struct.ComponentSchema {
  collectionName: 'components_product_specification_products';
  info: {
    displayName: 'Product';
  };
  attributes: {
    group: Schema.Attribute.String;
    label: Schema.Attribute.String;
    unit: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ProductProductBadge extends Struct.ComponentSchema {
  collectionName: 'components_product_product_badges';
  info: {
    displayName: 'Product Badge';
    icon: 'cast';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface ProductProductFeature extends Struct.ComponentSchema {
  collectionName: 'components_product_product_features';
  info: {
    displayName: 'Product Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'product-specification.product': ProductSpecificationProduct;
      'product.product-badge': ProductProductBadge;
      'product.product-feature': ProductProductFeature;
    }
  }
}
