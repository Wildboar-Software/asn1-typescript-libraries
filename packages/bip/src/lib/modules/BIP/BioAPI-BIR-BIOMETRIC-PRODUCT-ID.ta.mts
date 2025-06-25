/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  UnsignedShort,
  _decode_UnsignedShort,
  _encode_UnsignedShort,
} from '../BIP/UnsignedShort.ta.mjs';

/**
 * @summary BioAPI_BIR_BIOMETRIC_PRODUCT_ID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-BIOMETRIC-PRODUCT-ID ::= SEQUENCE {
 *   productOwner  UnsignedShort,
 *   productType   UnsignedShort
 * }
 * ```
 *
 * @class
 */
export class BioAPI_BIR_BIOMETRIC_PRODUCT_ID {
  constructor(
    /**
     * @summary `productOwner`.
     * @public
     * @readonly
     */
    readonly productOwner: UnsignedShort,
    /**
     * @summary `productType`.
     * @public
     * @readonly
     */
    readonly productType: UnsignedShort
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_BIR_BIOMETRIC_PRODUCT_ID
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_BIR_BIOMETRIC_PRODUCT_ID`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_BIR_BIOMETRIC_PRODUCT_ID`.
   * @returns {BioAPI_BIR_BIOMETRIC_PRODUCT_ID}
   */
  public static _from_object(
    _o: {
      [_K in keyof BioAPI_BIR_BIOMETRIC_PRODUCT_ID]: BioAPI_BIR_BIOMETRIC_PRODUCT_ID[_K];
    }
  ): BioAPI_BIR_BIOMETRIC_PRODUCT_ID {
    return new BioAPI_BIR_BIOMETRIC_PRODUCT_ID(_o.productOwner, _o.productType);
  }
}


/**
 * @summary The Leading Root Component Types of BioAPI_BIR_BIOMETRIC_PRODUCT_ID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_BIR_BIOMETRIC_PRODUCT_ID: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'productOwner',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'productType',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_BIR_BIOMETRIC_PRODUCT_ID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_BIR_BIOMETRIC_PRODUCT_ID: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_BIR_BIOMETRIC_PRODUCT_ID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_BIR_BIOMETRIC_PRODUCT_ID: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_BIR_BIOMETRIC_PRODUCT_ID: $.ASN1Decoder<BioAPI_BIR_BIOMETRIC_PRODUCT_ID> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_BIOMETRIC_PRODUCT_ID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_BIOMETRIC_PRODUCT_ID} The decoded data structure.
 */
export function _decode_BioAPI_BIR_BIOMETRIC_PRODUCT_ID(el: _Element): BioAPI_BIR_BIOMETRIC_PRODUCT_ID {
  if (!_cached_decoder_for_BioAPI_BIR_BIOMETRIC_PRODUCT_ID) {
    _cached_decoder_for_BioAPI_BIR_BIOMETRIC_PRODUCT_ID = function (
      el: _Element
    ): BioAPI_BIR_BIOMETRIC_PRODUCT_ID {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BioAPI-BIR-BIOMETRIC-PRODUCT-ID contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'productOwner';
      sequence[1].name = 'productType';
      let productOwner!: UnsignedShort;
      let productType!: UnsignedShort;
      productOwner = _decode_UnsignedShort(sequence[0]);
      productType = _decode_UnsignedShort(sequence[1]);
      return new BioAPI_BIR_BIOMETRIC_PRODUCT_ID(productOwner, productType);
    };
  }
  return _cached_decoder_for_BioAPI_BIR_BIOMETRIC_PRODUCT_ID(el);
}


let _cached_encoder_for_BioAPI_BIR_BIOMETRIC_PRODUCT_ID: $.ASN1Encoder<BioAPI_BIR_BIOMETRIC_PRODUCT_ID> | null = null;


/**
 * @summary Encodes a(n) BioAPI_BIR_BIOMETRIC_PRODUCT_ID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_BIOMETRIC_PRODUCT_ID, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_BIOMETRIC_PRODUCT_ID(
  value: BioAPI_BIR_BIOMETRIC_PRODUCT_ID,
  elGetter: $.ASN1Encoder<BioAPI_BIR_BIOMETRIC_PRODUCT_ID>
): _Element {
  if (!_cached_encoder_for_BioAPI_BIR_BIOMETRIC_PRODUCT_ID) {
    _cached_encoder_for_BioAPI_BIR_BIOMETRIC_PRODUCT_ID = function (
      value: BioAPI_BIR_BIOMETRIC_PRODUCT_ID    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_UnsignedShort(value.productOwner, $.BER),
            /* REQUIRED   */ _encode_UnsignedShort(value.productType, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_BIR_BIOMETRIC_PRODUCT_ID(value, elGetter);
}


/* eslint-enable */
