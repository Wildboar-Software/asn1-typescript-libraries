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

/* START_OF_SYMBOL_DEFINITION Date_and_Time_Pattern */
/**
 * @summary Date_and_Time_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Date-and-Time-Pattern ::= SEQUENCE {
 *   relational-camparision  [0] IMPLICIT Equality-Comparision,
 *   time-and-date-value     [1] IMPLICIT GeneralizedTime
 * }
 * ```
 *
 * @class
 */
export class Date_and_Time_Pattern {
  constructor(
    /**
     * @summary `relational_camparision`.
     * @public
     * @readonly
     */
    readonly relational_camparision: Equality_Comparision,
    /**
     * @summary `time_and_date_value`.
     * @public
     * @readonly
     */
    readonly time_and_date_value: GeneralizedTime
  ) {}

  /**
   * @summary Restructures an object into a Date_and_Time_Pattern
   * @description
   *
   * This takes an `object` and converts it to a `Date_and_Time_Pattern`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Date_and_Time_Pattern`.
   * @returns {Date_and_Time_Pattern}
   */
  public static _from_object(
    _o: { [_K in keyof Date_and_Time_Pattern]: Date_and_Time_Pattern[_K] }
  ): Date_and_Time_Pattern {
    return new Date_and_Time_Pattern(
      _o.relational_camparision,
      _o.time_and_date_value
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Date_and_Time_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Date_and_Time_Pattern */
/**
 * @summary The Leading Root Component Types of Date_and_Time_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Date_and_Time_Pattern: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'relational-camparision',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'time-and-date-value',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Date_and_Time_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Date_and_Time_Pattern */
/**
 * @summary The Trailing Root Component Types of Date_and_Time_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Date_and_Time_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Date_and_Time_Pattern */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Date_and_Time_Pattern */
/**
 * @summary The Extension Addition Component Types of Date_and_Time_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Date_and_Time_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Date_and_Time_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Date_and_Time_Pattern */
let _cached_decoder_for_Date_and_Time_Pattern: $.ASN1Decoder<Date_and_Time_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Date_and_Time_Pattern */

/* START_OF_SYMBOL_DEFINITION _decode_Date_and_Time_Pattern */
/**
 * @summary Decodes an ASN.1 element into a(n) Date_and_Time_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Date_and_Time_Pattern} The decoded data structure.
 */
export function _decode_Date_and_Time_Pattern(el: _Element) {
  if (!_cached_decoder_for_Date_and_Time_Pattern) {
    _cached_decoder_for_Date_and_Time_Pattern = function (
      el: _Element
    ): Date_and_Time_Pattern {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Date-and-Time-Pattern contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'relational-camparision';
      sequence[1].name = 'time-and-date-value';
      let relational_camparision!: Equality_Comparision;
      let time_and_date_value!: GeneralizedTime;
      relational_camparision = $._decode_implicit<Equality_Comparision>(
        () => _decode_Equality_Comparision
      )(sequence[0]);
      time_and_date_value = $._decode_implicit<GeneralizedTime>(
        () => $._decodeGeneralizedTime
      )(sequence[1]);
      return new Date_and_Time_Pattern(
        relational_camparision,
        time_and_date_value
      );
    };
  }
  return _cached_decoder_for_Date_and_Time_Pattern(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Date_and_Time_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Date_and_Time_Pattern */
let _cached_encoder_for_Date_and_Time_Pattern: $.ASN1Encoder<Date_and_Time_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Date_and_Time_Pattern */

/* START_OF_SYMBOL_DEFINITION _encode_Date_and_Time_Pattern */
/**
 * @summary Encodes a(n) Date_and_Time_Pattern into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Date_and_Time_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Date_and_Time_Pattern(
  value: Date_and_Time_Pattern,
  elGetter: $.ASN1Encoder<Date_and_Time_Pattern>
) {
  if (!_cached_encoder_for_Date_and_Time_Pattern) {
    _cached_encoder_for_Date_and_Time_Pattern = function (
      value: Date_and_Time_Pattern,
      elGetter: $.ASN1Encoder<Date_and_Time_Pattern>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Equality_Comparision,
              $.BER
            )(value.relational_camparision, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => $._encodeGeneralizedTime,
              $.BER
            )(value.time_and_date_value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Date_and_Time_Pattern(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Date_and_Time_Pattern */

/* eslint-enable */
