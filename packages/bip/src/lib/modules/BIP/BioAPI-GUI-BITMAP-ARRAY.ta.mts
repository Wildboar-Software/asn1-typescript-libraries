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
  BioAPI_GUI_BITMAP,
  _decode_BioAPI_GUI_BITMAP,
  _encode_BioAPI_GUI_BITMAP,
} from '../BIP/BioAPI-GUI-BITMAP.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_BITMAP_ARRAY */
/**
 * @summary BioAPI_GUI_BITMAP_ARRAY
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-BITMAP-ARRAY ::= SEQUENCE {
 *   guiBitmaps
 *     SEQUENCE (SIZE (0..max-unsigned-int)) OF guiBitmap BioAPI-GUI-BITMAP
 * }
 * ```
 *
 * @class
 */
export class BioAPI_GUI_BITMAP_ARRAY {
  constructor(
    /**
     * @summary `guiBitmaps`.
     * @public
     * @readonly
     */
    readonly guiBitmaps: BioAPI_GUI_BITMAP[]
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_GUI_BITMAP_ARRAY
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_GUI_BITMAP_ARRAY`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_GUI_BITMAP_ARRAY`.
   * @returns {BioAPI_GUI_BITMAP_ARRAY}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_GUI_BITMAP_ARRAY]: BioAPI_GUI_BITMAP_ARRAY[_K] }
  ): BioAPI_GUI_BITMAP_ARRAY {
    return new BioAPI_GUI_BITMAP_ARRAY(_o.guiBitmaps);
  }
}
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_BITMAP_ARRAY */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_GUI_BITMAP_ARRAY */
/**
 * @summary The Leading Root Component Types of BioAPI_GUI_BITMAP_ARRAY
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_GUI_BITMAP_ARRAY: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'guiBitmaps',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_GUI_BITMAP_ARRAY */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_GUI_BITMAP_ARRAY */
/**
 * @summary The Trailing Root Component Types of BioAPI_GUI_BITMAP_ARRAY
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_GUI_BITMAP_ARRAY: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_GUI_BITMAP_ARRAY */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_GUI_BITMAP_ARRAY */
/**
 * @summary The Extension Addition Component Types of BioAPI_GUI_BITMAP_ARRAY
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_GUI_BITMAP_ARRAY: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_GUI_BITMAP_ARRAY */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_BITMAP_ARRAY */
let _cached_decoder_for_BioAPI_GUI_BITMAP_ARRAY: $.ASN1Decoder<BioAPI_GUI_BITMAP_ARRAY> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_BITMAP_ARRAY */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_BITMAP_ARRAY */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_GUI_BITMAP_ARRAY
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_GUI_BITMAP_ARRAY} The decoded data structure.
 */
export function _decode_BioAPI_GUI_BITMAP_ARRAY(el: _Element) {
  if (!_cached_decoder_for_BioAPI_GUI_BITMAP_ARRAY) {
    _cached_decoder_for_BioAPI_GUI_BITMAP_ARRAY = function (
      el: _Element
    ): BioAPI_GUI_BITMAP_ARRAY {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'BioAPI-GUI-BITMAP-ARRAY contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'guiBitmaps';
      let guiBitmaps!: BioAPI_GUI_BITMAP[];
      guiBitmaps = $._decodeSequenceOf<BioAPI_GUI_BITMAP>(
        () => _decode_BioAPI_GUI_BITMAP
      )(sequence[0]);
      return new BioAPI_GUI_BITMAP_ARRAY(guiBitmaps);
    };
  }
  return _cached_decoder_for_BioAPI_GUI_BITMAP_ARRAY(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_BITMAP_ARRAY */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_BITMAP_ARRAY */
let _cached_encoder_for_BioAPI_GUI_BITMAP_ARRAY: $.ASN1Encoder<BioAPI_GUI_BITMAP_ARRAY> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_BITMAP_ARRAY */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_BITMAP_ARRAY */
/**
 * @summary Encodes a(n) BioAPI_GUI_BITMAP_ARRAY into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_GUI_BITMAP_ARRAY, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_GUI_BITMAP_ARRAY(
  value: BioAPI_GUI_BITMAP_ARRAY,
  elGetter: $.ASN1Encoder<BioAPI_GUI_BITMAP_ARRAY>
) {
  if (!_cached_encoder_for_BioAPI_GUI_BITMAP_ARRAY) {
    _cached_encoder_for_BioAPI_GUI_BITMAP_ARRAY = function (
      value: BioAPI_GUI_BITMAP_ARRAY    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_GUI_BITMAP>(
              () => _encode_BioAPI_GUI_BITMAP,
              $.BER
            )(value.guiBitmaps, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_GUI_BITMAP_ARRAY(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_BITMAP_ARRAY */

/* eslint-enable */
