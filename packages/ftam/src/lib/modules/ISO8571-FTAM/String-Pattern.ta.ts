/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
  Equality_Comparision,
  Equality_Comparision_no_value_available_matches /* IMPORTED_LONG_NAMED_BIT */,
  no_value_available_matches /* IMPORTED_SHORT_NAMED_BIT */,
  Equality_Comparision_equals_matches /* IMPORTED_LONG_NAMED_BIT */,
  equals_matches /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Equality_Comparision,
  _encode_Equality_Comparision,
} from '../ISO8571-FTAM/Equality-Comparision.ta.js';
export {
  Equality_Comparision,
  Equality_Comparision_no_value_available_matches /* IMPORTED_LONG_NAMED_BIT */,
  no_value_available_matches /* IMPORTED_SHORT_NAMED_BIT */,
  Equality_Comparision_equals_matches /* IMPORTED_LONG_NAMED_BIT */,
  equals_matches /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Equality_Comparision,
  _encode_Equality_Comparision,
} from '../ISO8571-FTAM/Equality-Comparision.ta.js';
import {
  String_Pattern_string_value_Item,
  _decode_String_Pattern_string_value_Item,
  _encode_String_Pattern_string_value_Item,
} from '../ISO8571-FTAM/String-Pattern-string-value-Item.ta.js';
export {
  String_Pattern_string_value_Item,
  _decode_String_Pattern_string_value_Item,
  _encode_String_Pattern_string_value_Item,
} from '../ISO8571-FTAM/String-Pattern-string-value-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION String_Pattern */
/**
 * @summary String_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * String-Pattern ::= SEQUENCE {
 *   equality-comparision  [0] IMPLICIT Equality-Comparision,
 *   string-value
 *     [1] IMPLICIT SEQUENCE OF
 *                    CHOICE {substring-match
 *                              [2] IMPLICIT GraphicString,
 *                            any-match                   [3] IMPLICIT NULL,
 *                            number-of-characters-match  [4] IMPLICIT INTEGER
 *                    }
 * }
 * ```
 *
 * @class
 */
export class String_Pattern {
  constructor(
    /**
     * @summary `equality_comparision`.
     * @public
     * @readonly
     */
    readonly equality_comparision: Equality_Comparision,
    /**
     * @summary `string_value`.
     * @public
     * @readonly
     */
    readonly string_value: String_Pattern_string_value_Item[]
  ) {}

  /**
   * @summary Restructures an object into a String_Pattern
   * @description
   *
   * This takes an `object` and converts it to a `String_Pattern`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `String_Pattern`.
   * @returns {String_Pattern}
   */
  public static _from_object(
    _o: { [_K in keyof String_Pattern]: String_Pattern[_K] }
  ): String_Pattern {
    return new String_Pattern(_o.equality_comparision, _o.string_value);
  }
}
/* END_OF_SYMBOL_DEFINITION String_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_String_Pattern */
/**
 * @summary The Leading Root Component Types of String_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_String_Pattern: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'equality-comparision',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'string-value',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_String_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_String_Pattern */
/**
 * @summary The Trailing Root Component Types of String_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_String_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_String_Pattern */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_String_Pattern */
/**
 * @summary The Extension Addition Component Types of String_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_String_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_String_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_String_Pattern */
let _cached_decoder_for_String_Pattern: $.ASN1Decoder<String_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_String_Pattern */

/* START_OF_SYMBOL_DEFINITION _decode_String_Pattern */
/**
 * @summary Decodes an ASN.1 element into a(n) String_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {String_Pattern} The decoded data structure.
 */
export function _decode_String_Pattern(el: _Element) {
  if (!_cached_decoder_for_String_Pattern) {
    _cached_decoder_for_String_Pattern = function (
      el: _Element
    ): String_Pattern {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'String-Pattern contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'equality-comparision';
      sequence[1].name = 'string-value';
      let equality_comparision!: Equality_Comparision;
      let string_value!: String_Pattern_string_value_Item[];
      equality_comparision = $._decode_implicit<Equality_Comparision>(
        () => _decode_Equality_Comparision
      )(sequence[0]);
      string_value = $._decode_implicit<String_Pattern_string_value_Item[]>(
        () =>
          $._decodeSequenceOf<String_Pattern_string_value_Item>(
            () => _decode_String_Pattern_string_value_Item
          )
      )(sequence[1]);
      return new String_Pattern(equality_comparision, string_value);
    };
  }
  return _cached_decoder_for_String_Pattern(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_String_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_String_Pattern */
let _cached_encoder_for_String_Pattern: $.ASN1Encoder<String_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_String_Pattern */

/* START_OF_SYMBOL_DEFINITION _encode_String_Pattern */
/**
 * @summary Encodes a(n) String_Pattern into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The String_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_String_Pattern(
  value: String_Pattern,
  elGetter: $.ASN1Encoder<String_Pattern>
) {
  if (!_cached_encoder_for_String_Pattern) {
    _cached_encoder_for_String_Pattern = function (
      value: String_Pattern,
      elGetter: $.ASN1Encoder<String_Pattern>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Equality_Comparision,
              $.BER
            )(value.equality_comparision, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () =>
                $._encodeSequenceOf<String_Pattern_string_value_Item>(
                  () => _encode_String_Pattern_string_value_Item,
                  $.BER
                ),
              $.BER
            )(value.string_value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_String_Pattern(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_String_Pattern */

/* eslint-enable */
