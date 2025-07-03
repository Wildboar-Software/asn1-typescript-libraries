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

export function _decode_NoInvokeId(el: _Element): NoInvokeId {
  return _decode_InvokeId(el);
}

export function _encode_NoInvokeId(
  value: NoInvokeId,
  elGetter: $.ASN1Encoder<NoInvokeId>
): _Element {
  return _encode_InvokeId(value, elGetter);
}

/* eslint-enable */
