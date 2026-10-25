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
  type InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';

/**
 * @summary NoInvokeId
 * @description
 *
 * Value set of `InvokeId` containing only `noInvokeId`. Supply as `InvokeIdSet` when invocation correlation is provided by other means (ITU-T Rec. X.880 (07/94) §9.9.2, §9.2.2 a).
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

export const _decode_NoInvokeId: $.ASN1Decoder<NoInvokeId> = _decode_InvokeId;

export const _encode_NoInvokeId: $.ASN1Encoder<NoInvokeId> = _encode_InvokeId;

/* eslint-enable */
