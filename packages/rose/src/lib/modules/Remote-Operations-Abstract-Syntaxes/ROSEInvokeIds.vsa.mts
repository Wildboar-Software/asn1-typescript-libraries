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
import * as $ from '@wildboar/asn1/functional';
import {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';

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


let _cached_decoder_for_ROSEInvokeIds: $.ASN1Decoder<ROSEInvokeIds> | null = null;


export function _decode_ROSEInvokeIds(el: _Element) {
  if (!_cached_decoder_for_ROSEInvokeIds) {
    _cached_decoder_for_ROSEInvokeIds = _decode_InvokeId;
  }
  return _cached_decoder_for_ROSEInvokeIds(el);
}


let _cached_encoder_for_ROSEInvokeIds: $.ASN1Encoder<ROSEInvokeIds> | null = null;


export function _encode_ROSEInvokeIds(
  value: ROSEInvokeIds,
  elGetter: $.ASN1Encoder<ROSEInvokeIds>
) {
  if (!_cached_encoder_for_ROSEInvokeIds) {
    _cached_encoder_for_ROSEInvokeIds = _encode_InvokeId;
  }
  return _cached_encoder_for_ROSEInvokeIds(value, elGetter);
}

/* eslint-enable */
