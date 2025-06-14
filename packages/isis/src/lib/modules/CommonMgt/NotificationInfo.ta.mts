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
  Parameter,
  _decode_Parameter,
  _encode_Parameter,
} from '../CommonMgt/Parameter.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NotificationInfo */
/**
 * @summary NotificationInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationInfo  ::=  SET OF Parameter
 * ```
 */
export type NotificationInfo = Parameter[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION NotificationInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationInfo */
let _cached_decoder_for_NotificationInfo: $.ASN1Decoder<NotificationInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationInfo */

/* START_OF_SYMBOL_DEFINITION _decode_NotificationInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) NotificationInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotificationInfo} The decoded data structure.
 */
export function _decode_NotificationInfo(el: _Element) {
  if (!_cached_decoder_for_NotificationInfo) {
    _cached_decoder_for_NotificationInfo = $._decodeSetOf<Parameter>(
      () => _decode_Parameter
    );
  }
  return _cached_decoder_for_NotificationInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NotificationInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationInfo */
let _cached_encoder_for_NotificationInfo: $.ASN1Encoder<NotificationInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationInfo */

/* START_OF_SYMBOL_DEFINITION _encode_NotificationInfo */
/**
 * @summary Encodes a(n) NotificationInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationInfo, encoded as an ASN.1 Element.
 */
export function _encode_NotificationInfo(
  value: NotificationInfo,
  elGetter: $.ASN1Encoder<NotificationInfo>
) {
  if (!_cached_encoder_for_NotificationInfo) {
    _cached_encoder_for_NotificationInfo = $._encodeSetOf<Parameter>(
      () => _encode_Parameter,
      $.BER
    );
  }
  return _cached_encoder_for_NotificationInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NotificationInfo */

/* eslint-enable */
