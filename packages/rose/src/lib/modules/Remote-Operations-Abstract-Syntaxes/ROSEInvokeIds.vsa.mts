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
} from '@wildboar/asn1';
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

export function _decode_ROSEInvokeIds(el: _Element): ROSEInvokeIds {
  return _decode_InvokeId(el);
}

export function _encode_ROSEInvokeIds(
  value: ROSEInvokeIds,
  elGetter: $.ASN1Encoder<ROSEInvokeIds>
): _Element {
  return _encode_InvokeId(value, elGetter);
}

/* eslint-enable */
