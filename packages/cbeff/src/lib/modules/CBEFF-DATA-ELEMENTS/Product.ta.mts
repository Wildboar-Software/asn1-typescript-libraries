/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary Product
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Product ::= SEQUENCE {
 *   product-owner  INTEGER(1..65535) OPTIONAL,
 *   product-type   INTEGER(1..65535) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Product {
  constructor(
    /**
     * @summary `product_owner`.
     * @public
     * @readonly
     */
    readonly product_owner: OPTIONAL<INTEGER>,
    /**
     * @summary `product_type`.
     * @public
     * @readonly
     */
    readonly product_type: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a Product
   * @description
   *
   * This takes an `object` and converts it to a `Product`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Product`.
   * @returns {Product}
   */
  public static _from_object(
    _o: { [_K in keyof Product]: Product[_K] }
  ): Product {
    return new Product(_o.product_owner, _o.product_type);
  }
}

/**
 * @summary The Leading Root Component Types of Product
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Product: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'product-owner',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'product-type',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];

/**
 * @summary The Trailing Root Component Types of Product
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Product: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Product
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Product: $.ComponentSpec[] = [];

let _cached_decoder_for_Product: $.ASN1Decoder<Product> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Product
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Product} The decoded data structure.
 */
export function _decode_Product(el: _Element) {
  if (!_cached_decoder_for_Product) {
    _cached_decoder_for_Product = function (el: _Element): Product {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let product_owner: OPTIONAL<INTEGER>;
      let product_type: OPTIONAL<INTEGER>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        'product-owner': (_el: _Element): void => {
          product_owner = $._decodeInteger(_el);
        },
        'product-type': (_el: _Element): void => {
          product_type = $._decodeInteger(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Product,
        _extension_additions_list_spec_for_Product,
        _root_component_type_list_2_spec_for_Product,
        undefined
      );
      return new Product /* SEQUENCE_CONSTRUCTOR_CALL */(
        product_owner,
        product_type
      );
    };
  }
  return _cached_decoder_for_Product(el);
}

let _cached_encoder_for_Product: $.ASN1Encoder<Product> | null = null;

/**
 * @summary Encodes a(n) Product into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Product, encoded as an ASN.1 Element.
 */
export function _encode_Product(
  value: Product,
  elGetter: $.ASN1Encoder<Product>
) {
  if (!_cached_encoder_for_Product) {
    _cached_encoder_for_Product = function (
      value: Product    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.product_owner === undefined
              ? undefined
              : $._encodeInteger(value.product_owner, $.BER),
            /* IF_ABSENT  */ value.product_type === undefined
              ? undefined
              : $._encodeInteger(value.product_type, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Product(value, elGetter);
}


/* eslint-enable */
