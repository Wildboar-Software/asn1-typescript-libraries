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
 * `InvokeId` used when an integer is not needed or not available (`absent:NULL`) (ITU-T Rec. X.880 (07/94) §9.9.1). Used on `Reject` when the rejected PDU's invoke-id cannot be determined (X.880 §9.6.2 a). OSI ROSE does not use this value on `Invoke`/`ReturnResult`/`ReturnError` (X.880 §9.2.2 note 2).
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
