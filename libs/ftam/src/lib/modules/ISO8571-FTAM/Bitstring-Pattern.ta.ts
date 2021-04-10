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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  Equality_Comparision,
  Equality_Comparision_no_value_available_matches /* IMPORTED_LONG_NAMED_BIT */,
  no_value_available_matches /* IMPORTED_SHORT_NAMED_BIT */,
  Equality_Comparision_equals_matches /* IMPORTED_LONG_NAMED_BIT */,
  equals_matches /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Equality_Comparision,
  _encode_Equality_Comparision,
} from '../ISO8571-FTAM/Equality-Comparision.ta';
export {
  Equality_Comparision,
  Equality_Comparision_no_value_available_matches /* IMPORTED_LONG_NAMED_BIT */,
  no_value_available_matches /* IMPORTED_SHORT_NAMED_BIT */,
  Equality_Comparision_equals_matches /* IMPORTED_LONG_NAMED_BIT */,
  equals_matches /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Equality_Comparision,
  _encode_Equality_Comparision,
} from '../ISO8571-FTAM/Equality-Comparision.ta';

/* START_OF_SYMBOL_DEFINITION Bitstring_Pattern */
/**
 * @summary Bitstring_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Bitstring-Pattern ::= SEQUENCE {
 *   equality-comparision    [0] IMPLICIT Equality-Comparision,
 *   match-bitstring         [1] IMPLICIT BIT STRING,
 *   significance-bitstring  [2] IMPLICIT BIT STRING
 * }
 * ```
 *
 * @class
 */
export class Bitstring_Pattern {
  constructor(
    /**
     * @summary `equality_comparision`.
     * @public
     * @readonly
     */
    readonly equality_comparision: Equality_Comparision,
    /**
     * @summary `match_bitstring`.
     * @public
     * @readonly
     */
    readonly match_bitstring: BIT_STRING,
    /**
     * @summary `significance_bitstring`.
     * @public
     * @readonly
     */
    readonly significance_bitstring: BIT_STRING
  ) {}

  /**
   * @summary Restructures an object into a Bitstring_Pattern
   * @description
   *
   * This takes an `object` and converts it to a `Bitstring_Pattern`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Bitstring_Pattern`.
   * @returns {Bitstring_Pattern}
   */
  public static _from_object(
    _o: { [_K in keyof Bitstring_Pattern]: Bitstring_Pattern[_K] }
  ): Bitstring_Pattern {
    return new Bitstring_Pattern(
      _o.equality_comparision,
      _o.match_bitstring,
      _o.significance_bitstring
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Bitstring_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Bitstring_Pattern */
/**
 * @summary The Leading Root Component Types of Bitstring_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Bitstring_Pattern: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'equality-comparision',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'match-bitstring',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'significance-bitstring',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Bitstring_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Bitstring_Pattern */
/**
 * @summary The Trailing Root Component Types of Bitstring_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Bitstring_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Bitstring_Pattern */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Bitstring_Pattern */
/**
 * @summary The Extension Addition Component Types of Bitstring_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Bitstring_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Bitstring_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Bitstring_Pattern */
let _cached_decoder_for_Bitstring_Pattern: $.ASN1Decoder<Bitstring_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Bitstring_Pattern */

/* START_OF_SYMBOL_DEFINITION _decode_Bitstring_Pattern */
/**
 * @summary Decodes an ASN.1 element into a(n) Bitstring_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Bitstring_Pattern} The decoded data structure.
 */
export function _decode_Bitstring_Pattern(el: _Element) {
  if (!_cached_decoder_for_Bitstring_Pattern) {
    _cached_decoder_for_Bitstring_Pattern = function (
      el: _Element
    ): Bitstring_Pattern {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'Bitstring-Pattern contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'equality-comparision';
      sequence[1].name = 'match-bitstring';
      sequence[2].name = 'significance-bitstring';
      let equality_comparision!: Equality_Comparision;
      let match_bitstring!: BIT_STRING;
      let significance_bitstring!: BIT_STRING;
      equality_comparision = $._decode_implicit<Equality_Comparision>(
        () => _decode_Equality_Comparision
      )(sequence[0]);
      match_bitstring = $._decode_implicit<BIT_STRING>(
        () => $._decodeBitString
      )(sequence[1]);
      significance_bitstring = $._decode_implicit<BIT_STRING>(
        () => $._decodeBitString
      )(sequence[2]);
      return new Bitstring_Pattern(
        equality_comparision,
        match_bitstring,
        significance_bitstring
      );
    };
  }
  return _cached_decoder_for_Bitstring_Pattern(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Bitstring_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Bitstring_Pattern */
let _cached_encoder_for_Bitstring_Pattern: $.ASN1Encoder<Bitstring_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Bitstring_Pattern */

/* START_OF_SYMBOL_DEFINITION _encode_Bitstring_Pattern */
/**
 * @summary Encodes a(n) Bitstring_Pattern into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bitstring_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Bitstring_Pattern(
  value: Bitstring_Pattern,
  elGetter: $.ASN1Encoder<Bitstring_Pattern>
) {
  if (!_cached_encoder_for_Bitstring_Pattern) {
    _cached_encoder_for_Bitstring_Pattern = function (
      value: Bitstring_Pattern,
      elGetter: $.ASN1Encoder<Bitstring_Pattern>
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
              () => $._encodeBitString,
              $.BER
            )(value.match_bitstring, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              2,
              () => $._encodeBitString,
              $.BER
            )(value.significance_bitstring, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Bitstring_Pattern(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Bitstring_Pattern */

/* eslint-enable */
