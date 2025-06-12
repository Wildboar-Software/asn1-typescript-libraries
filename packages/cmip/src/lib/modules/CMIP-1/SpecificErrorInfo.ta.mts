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
import { CMIP_SPECIFICERROR } from '../CMIP-1/CMIP-SPECIFICERROR.oca.mjs';
export { CMIP_SPECIFICERROR } from '../CMIP-1/CMIP-SPECIFICERROR.oca.mjs';
import { SpecificErrorSet } from '../CMIP-1/SpecificErrorSet.osa.mjs';
export { SpecificErrorSet } from '../CMIP-1/SpecificErrorSet.osa.mjs';

/* START_OF_SYMBOL_DEFINITION SpecificErrorInfo */
/**
 * @summary SpecificErrorInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpecificErrorInfo ::= SEQUENCE {
 *   errorId    CMIP-SPECIFICERROR.&id({SpecificErrorSet}),
 *   errorInfo  CMIP-SPECIFICERROR.&Value({SpecificErrorSet}{@.errorId})
 * }
 * ```
 *
 * @class
 */
export class SpecificErrorInfo {
  constructor(
    /**
     * @summary `errorId`.
     * @public
     * @readonly
     */
    readonly errorId: OBJECT_IDENTIFIER,
    /**
     * @summary `errorInfo`.
     * @public
     * @readonly
     */
    readonly errorInfo: _Element
  ) {}

  /**
   * @summary Restructures an object into a SpecificErrorInfo
   * @description
   *
   * This takes an `object` and converts it to a `SpecificErrorInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SpecificErrorInfo`.
   * @returns {SpecificErrorInfo}
   */
  public static _from_object(
    _o: { [_K in keyof SpecificErrorInfo]: SpecificErrorInfo[_K] }
  ): SpecificErrorInfo {
    return new SpecificErrorInfo(_o.errorId, _o.errorInfo);
  }
}
/* END_OF_SYMBOL_DEFINITION SpecificErrorInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecificErrorInfo */
/**
 * @summary The Leading Root Component Types of SpecificErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SpecificErrorInfo: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'errorId',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec('errorInfo', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecificErrorInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecificErrorInfo */
/**
 * @summary The Trailing Root Component Types of SpecificErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SpecificErrorInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecificErrorInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecificErrorInfo */
/**
 * @summary The Extension Addition Component Types of SpecificErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SpecificErrorInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecificErrorInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecificErrorInfo */
let _cached_decoder_for_SpecificErrorInfo: $.ASN1Decoder<SpecificErrorInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecificErrorInfo */

/* START_OF_SYMBOL_DEFINITION _decode_SpecificErrorInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) SpecificErrorInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecificErrorInfo} The decoded data structure.
 */
export function _decode_SpecificErrorInfo(el: _Element) {
  if (!_cached_decoder_for_SpecificErrorInfo) {
    _cached_decoder_for_SpecificErrorInfo = function (
      el: _Element
    ): SpecificErrorInfo {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'SpecificErrorInfo contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'errorId';
      sequence[1].name = 'errorInfo';
      let errorId!: OBJECT_IDENTIFIER;
      let errorInfo!: _Element;
      errorId = $._decodeObjectIdentifier(sequence[0]);
      errorInfo = $._decodeAny(sequence[1]);
      return new SpecificErrorInfo(errorId, errorInfo);
    };
  }
  return _cached_decoder_for_SpecificErrorInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SpecificErrorInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecificErrorInfo */
let _cached_encoder_for_SpecificErrorInfo: $.ASN1Encoder<SpecificErrorInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecificErrorInfo */

/* START_OF_SYMBOL_DEFINITION _encode_SpecificErrorInfo */
/**
 * @summary Encodes a(n) SpecificErrorInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificErrorInfo, encoded as an ASN.1 Element.
 */
export function _encode_SpecificErrorInfo(
  value: SpecificErrorInfo,
  elGetter: $.ASN1Encoder<SpecificErrorInfo>
) {
  if (!_cached_encoder_for_SpecificErrorInfo) {
    _cached_encoder_for_SpecificErrorInfo = function (
      value: SpecificErrorInfo,
      elGetter: $.ASN1Encoder<SpecificErrorInfo>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.errorId, $.BER),
            /* REQUIRED   */ $._encodeAny(value.errorInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SpecificErrorInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SpecificErrorInfo */

/* eslint-enable */
