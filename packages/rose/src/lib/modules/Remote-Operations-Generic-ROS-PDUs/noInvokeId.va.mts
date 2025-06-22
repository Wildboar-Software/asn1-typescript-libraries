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
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';

/**
 * @summary noInvokeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noInvokeId InvokeId ::= absent:NULL
 * ```
 *
 * @constant
 */
export const noInvokeId: InvokeId = { absent: null };

/* eslint-enable */
