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
/* START_OF_SYMBOL_DEFINITION ROSEInvokeIds */
/**
 * @summary ROSEInvokeIds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ROSEInvokeIds InvokeId ::= {ALL EXCEPT noInvokeId}
 * ```
 *
 * @type {InvokeId}
 */
export type ROSEInvokeIds = InvokeId; // VALUE_SET_TYPE
/* END_OF_SYMBOL_DEFINITION ROSEInvokeIds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ROSEInvokeIds */
let _cached_decoder_for_ROSEInvokeIds: $.ASN1Decoder<ROSEInvokeIds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ROSEInvokeIds */

/* START_OF_SYMBOL_DEFINITION _decode_ROSEInvokeIds */
export function _decode_ROSEInvokeIds(el: _Element) {
  if (!_cached_decoder_for_ROSEInvokeIds) {
    _cached_decoder_for_ROSEInvokeIds = _decode_InvokeId;
  }
  return _cached_decoder_for_ROSEInvokeIds(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ROSEInvokeIds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ROSEInvokeIds */
let _cached_encoder_for_ROSEInvokeIds: $.ASN1Encoder<ROSEInvokeIds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ROSEInvokeIds */

/* START_OF_SYMBOL_DEFINITION _encode_ROSEInvokeIds */
export function _encode_ROSEInvokeIds(
  value: ROSEInvokeIds,
  elGetter: $.ASN1Encoder<ROSEInvokeIds>
) {
  if (!_cached_encoder_for_ROSEInvokeIds) {
    _cached_encoder_for_ROSEInvokeIds = _encode_InvokeId;
  }
  return _cached_encoder_for_ROSEInvokeIds(value, elGetter);
}
/* END_OF_SYMBOL_DEFINITION _encode_ROSEInvokeIds */

/* eslint-enable */
