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
import { CMIP_ACTION } from '../CMIP-1/CMIP-ACTION.oca';
export { CMIP_ACTION } from '../CMIP-1/CMIP-ACTION.oca';
import { ActionSet } from '../CMIP-1/ActionSet.osa';
export { ActionSet } from '../CMIP-1/ActionSet.osa';
import {
  NoSuchArgument,
  _decode_NoSuchArgument,
  _encode_NoSuchArgument,
} from '../CMIP-1/NoSuchArgument.ta';
export {
  NoSuchArgument,
  _decode_NoSuchArgument,
  _encode_NoSuchArgument,
} from '../CMIP-1/NoSuchArgument.ta';
import {
  InvalidArgumentValue,
  _decode_InvalidArgumentValue,
  _encode_InvalidArgumentValue,
} from '../CMIP-1/InvalidArgumentValue.ta';
export {
  InvalidArgumentValue,
  _decode_InvalidArgumentValue,
  _encode_InvalidArgumentValue,
} from '../CMIP-1/InvalidArgumentValue.ta';
import {
    ActionTypeId,
    _decode_ActionTypeId,
    _encode_ActionTypeId,
} from '../CMIP-1/ActionTypeId.ta';

/* START_OF_SYMBOL_DEFINITION ActionErrorInfo_errorInfo */
/**
 * @summary ActionErrorInfo_errorInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionErrorInfo-errorInfo ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ActionErrorInfo_errorInfo =
  | { actionType: ActionTypeId } /* CHOICE_ALT_ROOT */
  | { actionArgument: NoSuchArgument } /* CHOICE_ALT_ROOT */
  | { argumentValue: InvalidArgumentValue } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ActionErrorInfo_errorInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionErrorInfo_errorInfo */
let _cached_decoder_for_ActionErrorInfo_errorInfo: $.ASN1Decoder<ActionErrorInfo_errorInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActionErrorInfo_errorInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ActionErrorInfo_errorInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ActionErrorInfo_errorInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionErrorInfo_errorInfo} The decoded data structure.
 */
export function _decode_ActionErrorInfo_errorInfo(el: _Element) {
  if (!_cached_decoder_for_ActionErrorInfo_errorInfo) {
    _cached_decoder_for_ActionErrorInfo_errorInfo = $._decode_inextensible_choice<ActionErrorInfo_errorInfo>(
      {
        '*': ['actionType', _decode_ActionTypeId],
        'CONTEXT 0': [
          'actionArgument',
          $._decode_explicit<NoSuchArgument>(() => _decode_NoSuchArgument),
        ],
        'CONTEXT 1': [
          'argumentValue',
          $._decode_explicit<InvalidArgumentValue>(
            () => _decode_InvalidArgumentValue
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_ActionErrorInfo_errorInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActionErrorInfo_errorInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionErrorInfo_errorInfo */
let _cached_encoder_for_ActionErrorInfo_errorInfo: $.ASN1Encoder<ActionErrorInfo_errorInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActionErrorInfo_errorInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ActionErrorInfo_errorInfo */
/**
 * @summary Encodes a(n) ActionErrorInfo_errorInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionErrorInfo_errorInfo, encoded as an ASN.1 Element.
 */
export function _encode_ActionErrorInfo_errorInfo(
  value: ActionErrorInfo_errorInfo,
  elGetter: $.ASN1Encoder<ActionErrorInfo_errorInfo>
) {
  if (!_cached_encoder_for_ActionErrorInfo_errorInfo) {
    _cached_encoder_for_ActionErrorInfo_errorInfo = $._encode_choice<ActionErrorInfo_errorInfo>(
      {
        actionType: _encode_ActionTypeId,
        actionArgument: $._encode_explicit(
          _TagClass.context,
          0,
          () => _encode_NoSuchArgument,
          $.BER
        ),
        argumentValue: $._encode_explicit(
          _TagClass.context,
          1,
          () => _encode_InvalidArgumentValue,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_ActionErrorInfo_errorInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActionErrorInfo_errorInfo */

/* eslint-enable */
