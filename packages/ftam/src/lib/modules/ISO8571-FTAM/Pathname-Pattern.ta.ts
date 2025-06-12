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
  Pathname_Pattern_pathname_value_Item,
  _decode_Pathname_Pattern_pathname_value_Item,
  _encode_Pathname_Pattern_pathname_value_Item,
} from '../ISO8571-FTAM/Pathname-Pattern-pathname-value-Item.ta.js';
export {
  Pathname_Pattern_pathname_value_Item,
  _decode_Pathname_Pattern_pathname_value_Item,
  _encode_Pathname_Pattern_pathname_value_Item,
} from '../ISO8571-FTAM/Pathname-Pattern-pathname-value-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION Pathname_Pattern */
/**
 * @summary Pathname_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Pathname-Pattern ::= SEQUENCE {
 *   equality-comparision  [0] IMPLICIT Equality-Comparision,
 *   pathname-value
 *     [1] IMPLICIT SEQUENCE OF
 *                    CHOICE {string-match  [2] IMPLICIT String-Pattern,
 *                            any-match     [3] IMPLICIT NULL}
 * }
 * ```
 *
 * @class
 */
export class Pathname_Pattern {
  constructor(
    /**
     * @summary `equality_comparision`.
     * @public
     * @readonly
     */
    readonly equality_comparision: Equality_Comparision,
    /**
     * @summary `pathname_value`.
     * @public
     * @readonly
     */
    readonly pathname_value: Pathname_Pattern_pathname_value_Item[]
  ) {}

  /**
   * @summary Restructures an object into a Pathname_Pattern
   * @description
   *
   * This takes an `object` and converts it to a `Pathname_Pattern`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Pathname_Pattern`.
   * @returns {Pathname_Pattern}
   */
  public static _from_object(
    _o: { [_K in keyof Pathname_Pattern]: Pathname_Pattern[_K] }
  ): Pathname_Pattern {
    return new Pathname_Pattern(_o.equality_comparision, _o.pathname_value);
  }
}
/* END_OF_SYMBOL_DEFINITION Pathname_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Pathname_Pattern */
/**
 * @summary The Leading Root Component Types of Pathname_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Pathname_Pattern: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'equality-comparision',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'pathname-value',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Pathname_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Pathname_Pattern */
/**
 * @summary The Trailing Root Component Types of Pathname_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Pathname_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Pathname_Pattern */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Pathname_Pattern */
/**
 * @summary The Extension Addition Component Types of Pathname_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Pathname_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Pathname_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Pathname_Pattern */
let _cached_decoder_for_Pathname_Pattern: $.ASN1Decoder<Pathname_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Pathname_Pattern */

/* START_OF_SYMBOL_DEFINITION _decode_Pathname_Pattern */
/**
 * @summary Decodes an ASN.1 element into a(n) Pathname_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Pathname_Pattern} The decoded data structure.
 */
export function _decode_Pathname_Pattern(el: _Element) {
  if (!_cached_decoder_for_Pathname_Pattern) {
    _cached_decoder_for_Pathname_Pattern = function (
      el: _Element
    ): Pathname_Pattern {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Pathname-Pattern contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'equality-comparision';
      sequence[1].name = 'pathname-value';
      let equality_comparision!: Equality_Comparision;
      let pathname_value!: Pathname_Pattern_pathname_value_Item[];
      equality_comparision = $._decode_implicit<Equality_Comparision>(
        () => _decode_Equality_Comparision
      )(sequence[0]);
      pathname_value = $._decode_implicit<
        Pathname_Pattern_pathname_value_Item[]
      >(() =>
        $._decodeSequenceOf<Pathname_Pattern_pathname_value_Item>(
          () => _decode_Pathname_Pattern_pathname_value_Item
        )
      )(sequence[1]);
      return new Pathname_Pattern(equality_comparision, pathname_value);
    };
  }
  return _cached_decoder_for_Pathname_Pattern(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Pathname_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Pathname_Pattern */
let _cached_encoder_for_Pathname_Pattern: $.ASN1Encoder<Pathname_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Pathname_Pattern */

/* START_OF_SYMBOL_DEFINITION _encode_Pathname_Pattern */
/**
 * @summary Encodes a(n) Pathname_Pattern into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pathname_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Pathname_Pattern(
  value: Pathname_Pattern,
  elGetter: $.ASN1Encoder<Pathname_Pattern>
) {
  if (!_cached_encoder_for_Pathname_Pattern) {
    _cached_encoder_for_Pathname_Pattern = function (
      value: Pathname_Pattern,
      elGetter: $.ASN1Encoder<Pathname_Pattern>
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
                $._encodeSequenceOf<Pathname_Pattern_pathname_value_Item>(
                  () => _encode_Pathname_Pattern_pathname_value_Item,
                  $.BER
                ),
              $.BER
            )(value.pathname_value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Pathname_Pattern(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Pathname_Pattern */

/* eslint-enable */
