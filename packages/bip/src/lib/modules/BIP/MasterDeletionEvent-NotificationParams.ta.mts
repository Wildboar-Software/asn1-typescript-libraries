/* eslint-disable */
import {
  NULL,
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

/* START_OF_SYMBOL_DEFINITION MasterDeletionEvent_NotificationParams */
/**
 * @summary MasterDeletionEvent_NotificationParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterDeletionEvent-NotificationParams  ::=  NULL
 * ```
 */
export type MasterDeletionEvent_NotificationParams = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION MasterDeletionEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterDeletionEvent_NotificationParams */
let _cached_decoder_for_MasterDeletionEvent_NotificationParams: $.ASN1Decoder<MasterDeletionEvent_NotificationParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterDeletionEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _decode_MasterDeletionEvent_NotificationParams */
/**
 * @summary Decodes an ASN.1 element into a(n) MasterDeletionEvent_NotificationParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterDeletionEvent_NotificationParams} The decoded data structure.
 */
export function _decode_MasterDeletionEvent_NotificationParams(el: _Element) {
  if (!_cached_decoder_for_MasterDeletionEvent_NotificationParams) {
    _cached_decoder_for_MasterDeletionEvent_NotificationParams = $._decodeNull;
  }
  return _cached_decoder_for_MasterDeletionEvent_NotificationParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MasterDeletionEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterDeletionEvent_NotificationParams */
let _cached_encoder_for_MasterDeletionEvent_NotificationParams: $.ASN1Encoder<MasterDeletionEvent_NotificationParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterDeletionEvent_NotificationParams */

/* START_OF_SYMBOL_DEFINITION _encode_MasterDeletionEvent_NotificationParams */
/**
 * @summary Encodes a(n) MasterDeletionEvent_NotificationParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterDeletionEvent_NotificationParams, encoded as an ASN.1 Element.
 */
export function _encode_MasterDeletionEvent_NotificationParams(
  value: MasterDeletionEvent_NotificationParams,
  elGetter: $.ASN1Encoder<MasterDeletionEvent_NotificationParams>
) {
  if (!_cached_encoder_for_MasterDeletionEvent_NotificationParams) {
    _cached_encoder_for_MasterDeletionEvent_NotificationParams = $._encodeNull;
  }
  return _cached_encoder_for_MasterDeletionEvent_NotificationParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_MasterDeletionEvent_NotificationParams */

/* eslint-enable */
