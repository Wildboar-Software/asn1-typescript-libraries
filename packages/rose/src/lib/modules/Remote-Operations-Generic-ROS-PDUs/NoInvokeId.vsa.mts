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
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NoInvokeId */
/**
 * @summary NoInvokeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoInvokeId InvokeId ::= {noInvokeId}
 * ```
 *
 * @type {InvokeId}
 */
export type NoInvokeId = InvokeId; // VALUE_SET_TYPE
/* END_OF_SYMBOL_DEFINITION NoInvokeId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoInvokeId */
let _cached_decoder_for_NoInvokeId: $.ASN1Decoder<NoInvokeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoInvokeId */

/* START_OF_SYMBOL_DEFINITION _decode_NoInvokeId */
export function _decode_NoInvokeId(el: _Element) {
  if (!_cached_decoder_for_NoInvokeId) {
    _cached_decoder_for_NoInvokeId = _decode_InvokeId;
  }
  return _cached_decoder_for_NoInvokeId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NoInvokeId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoInvokeId */
let _cached_encoder_for_NoInvokeId: $.ASN1Encoder<NoInvokeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoInvokeId */

/* START_OF_SYMBOL_DEFINITION _encode_NoInvokeId */
export function _encode_NoInvokeId(
  value: NoInvokeId,
  elGetter: $.ASN1Encoder<NoInvokeId>
) {
  if (!_cached_encoder_for_NoInvokeId) {
    _cached_encoder_for_NoInvokeId = _encode_InvokeId;
  }
  return _cached_encoder_for_NoInvokeId(value, elGetter);
}
/* END_OF_SYMBOL_DEFINITION _encode_NoInvokeId */

/* eslint-enable */
