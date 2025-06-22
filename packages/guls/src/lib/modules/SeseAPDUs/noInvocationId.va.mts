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
import {
  InvocationId,
  _decode_InvocationId,
  _encode_InvocationId,
} from '../SeseAPDUs/InvocationId.ta.mjs';

/**
 * @summary noInvocationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noInvocationId InvocationId ::= absent:NULL
 * ```
 *
 * @constant
 */
export const noInvocationId: InvocationId = { absent: null };

/* eslint-enable */
