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
import { MECHANISM_NAME } from '../ACSE-1/MECHANISM-NAME.oca';
export { MECHANISM_NAME } from '../ACSE-1/MECHANISM-NAME.oca';
import { ObjectSet } from '../ACSE-1/ObjectSet.osa';
export { ObjectSet } from '../ACSE-1/ObjectSet.osa';

/* START_OF_SYMBOL_DEFINITION Authentication_value_other */
/**
 * @summary Authentication_value_other
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Authentication-value-other ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Authentication_value_other {
  constructor(
    /**
     * @summary `other_mechanism_name`.
     * @public
     * @readonly
     */
    readonly other_mechanism_name: OBJECT_IDENTIFIER,
    /**
     * @summary `other_mechanism_value`.
     * @public
     * @readonly
     */
    readonly other_mechanism_value: _Element
  ) {}

  /**
   * @summary Restructures an object into a Authentication_value_other
   * @description
   *
   * This takes an `object` and converts it to a `Authentication_value_other`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Authentication_value_other`.
   * @returns {Authentication_value_other}
   */
  public static _from_object(
    _o: {
      [_K in keyof Authentication_value_other]: Authentication_value_other[_K];
    }
  ): Authentication_value_other {
    return new Authentication_value_other(
      _o.other_mechanism_name,
      _o.other_mechanism_value
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Authentication_value_other */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Authentication_value_other */
/**
 * @summary The Leading Root Component Types of Authentication_value_other
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Authentication_value_other: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'other-mechanism-name',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'other-mechanism-value',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Authentication_value_other */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Authentication_value_other */
/**
 * @summary The Trailing Root Component Types of Authentication_value_other
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Authentication_value_other: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Authentication_value_other */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Authentication_value_other */
/**
 * @summary The Extension Addition Component Types of Authentication_value_other
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Authentication_value_other: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Authentication_value_other */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Authentication_value_other */
let _cached_decoder_for_Authentication_value_other: $.ASN1Decoder<Authentication_value_other> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Authentication_value_other */

/* START_OF_SYMBOL_DEFINITION _decode_Authentication_value_other */
/**
 * @summary Decodes an ASN.1 element into a(n) Authentication_value_other
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Authentication_value_other} The decoded data structure.
 */
export function _decode_Authentication_value_other(el: _Element) {
  if (!_cached_decoder_for_Authentication_value_other) {
    _cached_decoder_for_Authentication_value_other = function (
      el: _Element
    ): Authentication_value_other {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Authentication-value-other contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'other-mechanism-name';
      sequence[1].name = 'other-mechanism-value';
      let other_mechanism_name!: OBJECT_IDENTIFIER;
      let other_mechanism_value!: _Element;
      other_mechanism_name = $._decodeObjectIdentifier(sequence[0]);
      other_mechanism_value = $._decodeAny(sequence[1]);
      return new Authentication_value_other(
        other_mechanism_name,
        other_mechanism_value
      );
    };
  }
  return _cached_decoder_for_Authentication_value_other(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Authentication_value_other */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Authentication_value_other */
let _cached_encoder_for_Authentication_value_other: $.ASN1Encoder<Authentication_value_other> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Authentication_value_other */

/* START_OF_SYMBOL_DEFINITION _encode_Authentication_value_other */
/**
 * @summary Encodes a(n) Authentication_value_other into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Authentication_value_other, encoded as an ASN.1 Element.
 */
export function _encode_Authentication_value_other(
  value: Authentication_value_other,
  elGetter: $.ASN1Encoder<Authentication_value_other>
) {
  if (!_cached_encoder_for_Authentication_value_other) {
    _cached_encoder_for_Authentication_value_other = function (
      value: Authentication_value_other,
      elGetter: $.ASN1Encoder<Authentication_value_other>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(
              value.other_mechanism_name,
              $.BER
            ),
            /* REQUIRED   */ $._encodeAny(value.other_mechanism_value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Authentication_value_other(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Authentication_value_other */

/* eslint-enable */
