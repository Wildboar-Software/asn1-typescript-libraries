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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  BioAPI_CATEGORY,
  _enum_for_BioAPI_CATEGORY,
  _decode_BioAPI_CATEGORY,
  _encode_BioAPI_CATEGORY,
} from '../BIP/BioAPI-CATEGORY.ta.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';

/**
 * @summary BioAPI_BFP_LIST_ELEMENT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BFP-LIST-ELEMENT ::= SEQUENCE {
 *   category        BioAPI-CATEGORY,
 *   bfpProductUuid  BioAPI-UUID
 * }
 * ```
 *
 * @class
 */
export class BioAPI_BFP_LIST_ELEMENT {
  constructor(
    /**
     * @summary `category`.
     * @public
     * @readonly
     */
    readonly category: BioAPI_CATEGORY,
    /**
     * @summary `bfpProductUuid`.
     * @public
     * @readonly
     */
    readonly bfpProductUuid: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_BFP_LIST_ELEMENT
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_BFP_LIST_ELEMENT`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_BFP_LIST_ELEMENT`.
   * @returns {BioAPI_BFP_LIST_ELEMENT}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_BFP_LIST_ELEMENT]: BioAPI_BFP_LIST_ELEMENT[_K] }
  ): BioAPI_BFP_LIST_ELEMENT {
    return new BioAPI_BFP_LIST_ELEMENT(_o.category, _o.bfpProductUuid);
  }

  /**
   * @summary The enum used as the type of the component `category`
   * @public
   * @static
   */

  public static _enum_for_category = _enum_for_BioAPI_CATEGORY;
}


/**
 * @summary The Leading Root Component Types of BioAPI_BFP_LIST_ELEMENT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_BFP_LIST_ELEMENT: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'category',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bfpProductUuid',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_BFP_LIST_ELEMENT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_BFP_LIST_ELEMENT: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_BFP_LIST_ELEMENT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_BFP_LIST_ELEMENT: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_BFP_LIST_ELEMENT: $.ASN1Decoder<BioAPI_BFP_LIST_ELEMENT> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BFP_LIST_ELEMENT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BFP_LIST_ELEMENT} The decoded data structure.
 */
export function _decode_BioAPI_BFP_LIST_ELEMENT(el: _Element) {
  if (!_cached_decoder_for_BioAPI_BFP_LIST_ELEMENT) {
    _cached_decoder_for_BioAPI_BFP_LIST_ELEMENT = function (
      el: _Element
    ): BioAPI_BFP_LIST_ELEMENT {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BioAPI-BFP-LIST-ELEMENT contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'category';
      sequence[1].name = 'bfpProductUuid';
      let category!: BioAPI_CATEGORY;
      let bfpProductUuid!: BioAPI_UUID;
      category = _decode_BioAPI_CATEGORY(sequence[0]);
      bfpProductUuid = _decode_BioAPI_UUID(sequence[1]);
      return new BioAPI_BFP_LIST_ELEMENT(category, bfpProductUuid);
    };
  }
  return _cached_decoder_for_BioAPI_BFP_LIST_ELEMENT(el);
}


let _cached_encoder_for_BioAPI_BFP_LIST_ELEMENT: $.ASN1Encoder<BioAPI_BFP_LIST_ELEMENT> | null = null;


/**
 * @summary Encodes a(n) BioAPI_BFP_LIST_ELEMENT into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BFP_LIST_ELEMENT, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BFP_LIST_ELEMENT(
  value: BioAPI_BFP_LIST_ELEMENT,
  elGetter: $.ASN1Encoder<BioAPI_BFP_LIST_ELEMENT>
) {
  if (!_cached_encoder_for_BioAPI_BFP_LIST_ELEMENT) {
    _cached_encoder_for_BioAPI_BFP_LIST_ELEMENT = function (
      value: BioAPI_BFP_LIST_ELEMENT    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_CATEGORY(value.category, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bfpProductUuid, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_BFP_LIST_ELEMENT(value, elGetter);
}


/* eslint-enable */
