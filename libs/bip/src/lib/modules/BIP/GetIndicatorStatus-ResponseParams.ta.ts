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
  BioAPI_INDICATOR_STATUS,
  _enum_for_BioAPI_INDICATOR_STATUS,
  BioAPI_INDICATOR_STATUS_accept /* IMPORTED_LONG_ENUMERATION_ITEM */,
  accept /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_INDICATOR_STATUS_reject /* IMPORTED_LONG_ENUMERATION_ITEM */,
  reject /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_INDICATOR_STATUS_ready /* IMPORTED_LONG_ENUMERATION_ITEM */,
  ready /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_INDICATOR_STATUS_busy /* IMPORTED_LONG_ENUMERATION_ITEM */,
  busy /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_INDICATOR_STATUS_failure /* IMPORTED_LONG_ENUMERATION_ITEM */,
  failure /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_INDICATOR_STATUS,
  _encode_BioAPI_INDICATOR_STATUS,
} from '../BIP/BioAPI-INDICATOR-STATUS.ta';
export {
  BioAPI_INDICATOR_STATUS,
  _enum_for_BioAPI_INDICATOR_STATUS,
  BioAPI_INDICATOR_STATUS_accept /* IMPORTED_LONG_ENUMERATION_ITEM */,
  accept /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_INDICATOR_STATUS_reject /* IMPORTED_LONG_ENUMERATION_ITEM */,
  reject /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_INDICATOR_STATUS_ready /* IMPORTED_LONG_ENUMERATION_ITEM */,
  ready /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_INDICATOR_STATUS_busy /* IMPORTED_LONG_ENUMERATION_ITEM */,
  busy /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_INDICATOR_STATUS_failure /* IMPORTED_LONG_ENUMERATION_ITEM */,
  failure /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_INDICATOR_STATUS,
  _encode_BioAPI_INDICATOR_STATUS,
} from '../BIP/BioAPI-INDICATOR-STATUS.ta';

/* START_OF_SYMBOL_DEFINITION GetIndicatorStatus_ResponseParams */
/**
 * @summary GetIndicatorStatus_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetIndicatorStatus-ResponseParams ::= SEQUENCE {
 *   indicatorStatus  BioAPI-INDICATOR-STATUS
 * }
 * ```
 *
 * @class
 */
export class GetIndicatorStatus_ResponseParams {
  constructor(
    /**
     * @summary `indicatorStatus`.
     * @public
     * @readonly
     */
    readonly indicatorStatus: BioAPI_INDICATOR_STATUS
  ) {}

  /**
   * @summary Restructures an object into a GetIndicatorStatus_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `GetIndicatorStatus_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GetIndicatorStatus_ResponseParams`.
   * @returns {GetIndicatorStatus_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GetIndicatorStatus_ResponseParams]: GetIndicatorStatus_ResponseParams[_K];
    }
  ): GetIndicatorStatus_ResponseParams {
    return new GetIndicatorStatus_ResponseParams(_o.indicatorStatus);
  }

  /**
   * @summary The enum used as the type of the component `indicatorStatus`
   * @public
   * @static
   */

  public static _enum_for_indicatorStatus = _enum_for_BioAPI_INDICATOR_STATUS;
}
/* END_OF_SYMBOL_DEFINITION GetIndicatorStatus_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetIndicatorStatus_ResponseParams */
/**
 * @summary The Leading Root Component Types of GetIndicatorStatus_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GetIndicatorStatus_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'indicatorStatus',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GetIndicatorStatus_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetIndicatorStatus_ResponseParams */
/**
 * @summary The Trailing Root Component Types of GetIndicatorStatus_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GetIndicatorStatus_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GetIndicatorStatus_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetIndicatorStatus_ResponseParams */
/**
 * @summary The Extension Addition Component Types of GetIndicatorStatus_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GetIndicatorStatus_ResponseParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GetIndicatorStatus_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GetIndicatorStatus_ResponseParams */
let _cached_decoder_for_GetIndicatorStatus_ResponseParams: $.ASN1Decoder<GetIndicatorStatus_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GetIndicatorStatus_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_GetIndicatorStatus_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) GetIndicatorStatus_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetIndicatorStatus_ResponseParams} The decoded data structure.
 */
export function _decode_GetIndicatorStatus_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_GetIndicatorStatus_ResponseParams) {
    _cached_decoder_for_GetIndicatorStatus_ResponseParams = function (
      el: _Element
    ): GetIndicatorStatus_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'GetIndicatorStatus-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'indicatorStatus';
      let indicatorStatus!: BioAPI_INDICATOR_STATUS;
      indicatorStatus = _decode_BioAPI_INDICATOR_STATUS(sequence[0]);
      return new GetIndicatorStatus_ResponseParams(indicatorStatus);
    };
  }
  return _cached_decoder_for_GetIndicatorStatus_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GetIndicatorStatus_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GetIndicatorStatus_ResponseParams */
let _cached_encoder_for_GetIndicatorStatus_ResponseParams: $.ASN1Encoder<GetIndicatorStatus_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GetIndicatorStatus_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_GetIndicatorStatus_ResponseParams */
/**
 * @summary Encodes a(n) GetIndicatorStatus_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetIndicatorStatus_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_GetIndicatorStatus_ResponseParams(
  value: GetIndicatorStatus_ResponseParams,
  elGetter: $.ASN1Encoder<GetIndicatorStatus_ResponseParams>
) {
  if (!_cached_encoder_for_GetIndicatorStatus_ResponseParams) {
    _cached_encoder_for_GetIndicatorStatus_ResponseParams = function (
      value: GetIndicatorStatus_ResponseParams,
      elGetter: $.ASN1Encoder<GetIndicatorStatus_ResponseParams>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_INDICATOR_STATUS(
              value.indicatorStatus,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GetIndicatorStatus_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GetIndicatorStatus_ResponseParams */

/* eslint-enable */
