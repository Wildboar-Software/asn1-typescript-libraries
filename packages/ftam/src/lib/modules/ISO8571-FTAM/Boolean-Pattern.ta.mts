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
} from '../ISO8571-FTAM/Equality-Comparision.ta.mjs';
export {
  Equality_Comparision,
  Equality_Comparision_no_value_available_matches /* IMPORTED_LONG_NAMED_BIT */,
  no_value_available_matches /* IMPORTED_SHORT_NAMED_BIT */,
  Equality_Comparision_equals_matches /* IMPORTED_LONG_NAMED_BIT */,
  equals_matches /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_Equality_Comparision,
  _encode_Equality_Comparision,
} from '../ISO8571-FTAM/Equality-Comparision.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Boolean_Pattern */
/**
 * @summary Boolean_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Boolean-Pattern ::= SEQUENCE {
 *   equality-comparision  [0] IMPLICIT Equality-Comparision,
 *   boolean-value         [1] IMPLICIT BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class Boolean_Pattern {
  constructor(
    /**
     * @summary `equality_comparision`.
     * @public
     * @readonly
     */
    readonly equality_comparision: Equality_Comparision,
    /**
     * @summary `boolean_value`.
     * @public
     * @readonly
     */
    readonly boolean_value: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a Boolean_Pattern
   * @description
   *
   * This takes an `object` and converts it to a `Boolean_Pattern`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Boolean_Pattern`.
   * @returns {Boolean_Pattern}
   */
  public static _from_object(
    _o: { [_K in keyof Boolean_Pattern]: Boolean_Pattern[_K] }
  ): Boolean_Pattern {
    return new Boolean_Pattern(_o.equality_comparision, _o.boolean_value);
  }
}
/* END_OF_SYMBOL_DEFINITION Boolean_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Boolean_Pattern */
/**
 * @summary The Leading Root Component Types of Boolean_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Boolean_Pattern: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'equality-comparision',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'boolean-value',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Boolean_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Boolean_Pattern */
/**
 * @summary The Trailing Root Component Types of Boolean_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Boolean_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Boolean_Pattern */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Boolean_Pattern */
/**
 * @summary The Extension Addition Component Types of Boolean_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Boolean_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Boolean_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Boolean_Pattern */
let _cached_decoder_for_Boolean_Pattern: $.ASN1Decoder<Boolean_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Boolean_Pattern */

/* START_OF_SYMBOL_DEFINITION _decode_Boolean_Pattern */
/**
 * @summary Decodes an ASN.1 element into a(n) Boolean_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Boolean_Pattern} The decoded data structure.
 */
export function _decode_Boolean_Pattern(el: _Element) {
  if (!_cached_decoder_for_Boolean_Pattern) {
    _cached_decoder_for_Boolean_Pattern = function (
      el: _Element
    ): Boolean_Pattern {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Boolean-Pattern contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'equality-comparision';
      sequence[1].name = 'boolean-value';
      let equality_comparision!: Equality_Comparision;
      let boolean_value!: BOOLEAN;
      equality_comparision = $._decode_implicit<Equality_Comparision>(
        () => _decode_Equality_Comparision
      )(sequence[0]);
      boolean_value = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(
        sequence[1]
      );
      return new Boolean_Pattern(equality_comparision, boolean_value);
    };
  }
  return _cached_decoder_for_Boolean_Pattern(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Boolean_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Boolean_Pattern */
let _cached_encoder_for_Boolean_Pattern: $.ASN1Encoder<Boolean_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Boolean_Pattern */

/* START_OF_SYMBOL_DEFINITION _encode_Boolean_Pattern */
/**
 * @summary Encodes a(n) Boolean_Pattern into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Boolean_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Boolean_Pattern(
  value: Boolean_Pattern,
  elGetter: $.ASN1Encoder<Boolean_Pattern>
) {
  if (!_cached_encoder_for_Boolean_Pattern) {
    _cached_encoder_for_Boolean_Pattern = function (
      value: Boolean_Pattern,
      elGetter: $.ASN1Encoder<Boolean_Pattern>
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
              () => $._encodeBoolean,
              $.BER
            )(value.boolean_value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Boolean_Pattern(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Boolean_Pattern */

/* eslint-enable */
