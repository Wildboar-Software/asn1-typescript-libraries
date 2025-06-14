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
  EncodedCharacterString_encoding_format,
  _decode_EncodedCharacterString_encoding_format,
  _encode_EncodedCharacterString_encoding_format,
} from '../FastInfoset/EncodedCharacterString-encoding-format.ta.mjs';
import {
  NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EncodedCharacterString */
/**
 * @summary EncodedCharacterString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedCharacterString ::= SEQUENCE {
 *   encoding-format
 *     CHOICE {utf-8                NULL,
 *             utf-16               NULL,
 *             restricted-alphabet  INTEGER(1..256),
 *             encoding-algorithm   INTEGER(1..256)},
 *   octets           NonEmptyOctetString
 * }
 * ```
 *
 * @class
 */
export class EncodedCharacterString {
  constructor(
    /**
     * @summary `encoding_format`.
     * @public
     * @readonly
     */
    readonly encoding_format: EncodedCharacterString_encoding_format,
    /**
     * @summary `octets`.
     * @public
     * @readonly
     */
    readonly octets: NonEmptyOctetString
  ) {}

  /**
   * @summary Restructures an object into a EncodedCharacterString
   * @description
   *
   * This takes an `object` and converts it to a `EncodedCharacterString`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EncodedCharacterString`.
   * @returns {EncodedCharacterString}
   */
  public static _from_object(
    _o: { [_K in keyof EncodedCharacterString]: EncodedCharacterString[_K] }
  ): EncodedCharacterString {
    return new EncodedCharacterString(_o.encoding_format, _o.octets);
  }
}
/* END_OF_SYMBOL_DEFINITION EncodedCharacterString */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncodedCharacterString */
/**
 * @summary The Leading Root Component Types of EncodedCharacterString
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncodedCharacterString: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'encoding-format',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'octets',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncodedCharacterString */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncodedCharacterString */
/**
 * @summary The Trailing Root Component Types of EncodedCharacterString
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncodedCharacterString: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncodedCharacterString */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncodedCharacterString */
/**
 * @summary The Extension Addition Component Types of EncodedCharacterString
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncodedCharacterString: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncodedCharacterString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedCharacterString */
let _cached_decoder_for_EncodedCharacterString: $.ASN1Decoder<EncodedCharacterString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodedCharacterString */

/* START_OF_SYMBOL_DEFINITION _decode_EncodedCharacterString */
/**
 * @summary Decodes an ASN.1 element into a(n) EncodedCharacterString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncodedCharacterString} The decoded data structure.
 */
export function _decode_EncodedCharacterString(el: _Element) {
  if (!_cached_decoder_for_EncodedCharacterString) {
    _cached_decoder_for_EncodedCharacterString = function (
      el: _Element
    ): EncodedCharacterString {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'EncodedCharacterString contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'encoding-format';
      sequence[1].name = 'octets';
      let encoding_format!: EncodedCharacterString_encoding_format;
      let octets!: NonEmptyOctetString;
      encoding_format = _decode_EncodedCharacterString_encoding_format(
        sequence[0]
      );
      octets = _decode_NonEmptyOctetString(sequence[1]);
      return new EncodedCharacterString(encoding_format, octets);
    };
  }
  return _cached_decoder_for_EncodedCharacterString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncodedCharacterString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedCharacterString */
let _cached_encoder_for_EncodedCharacterString: $.ASN1Encoder<EncodedCharacterString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodedCharacterString */

/* START_OF_SYMBOL_DEFINITION _encode_EncodedCharacterString */
/**
 * @summary Encodes a(n) EncodedCharacterString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncodedCharacterString, encoded as an ASN.1 Element.
 */
export function _encode_EncodedCharacterString(
  value: EncodedCharacterString,
  elGetter: $.ASN1Encoder<EncodedCharacterString>
) {
  if (!_cached_encoder_for_EncodedCharacterString) {
    _cached_encoder_for_EncodedCharacterString = function (
      value: EncodedCharacterString    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EncodedCharacterString_encoding_format(
              value.encoding_format,
              $.BER
            ),
            /* REQUIRED   */ _encode_NonEmptyOctetString(value.octets, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EncodedCharacterString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncodedCharacterString */

/* eslint-enable */
