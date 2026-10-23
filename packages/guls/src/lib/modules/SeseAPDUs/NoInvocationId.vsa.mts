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
  InvocationId,
  _decode_InvocationId,
  _encode_InvocationId,
} from '../SeseAPDUs/InvocationId.ta.mjs';

/**
 * @summary NoInvocationId
 * @description
 *
 * Invocation-id set containing only `noInvocationId`. Pass as
 * `InvocationIdSet` when distinct invocations never overlap.
 * ITU-T Rec. X.832 (04/95) [§7.1](https://www.itu.int/rec/T-REC-X.832-199504-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoInvocationId InvocationId ::= {noInvocationId}
 * ```
 *
 * @type {InvocationId}
 */
export type NoInvocationId = InvocationId; // VALUE_SET_TYPE

export const _decode_NoInvocationId: $.ASN1Decoder<NoInvocationId> = _decode_InvocationId;

export const _encode_NoInvocationId: $.ASN1Encoder<NoInvocationId> = _encode_InvocationId;

/* eslint-enable */
