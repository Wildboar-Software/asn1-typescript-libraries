/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { se } from '../ISIS/se.va.mjs';
/**
 * @summary iDFieldLengthMismatch
 * @description
 *
 * `specificProblems` value when a PDU's ID Length differs from this IS. Report
 * received ID length and source ID via `notificationIDLength` and
 * `notificationSourceId`. probableCause `configurationOrCustomisationError`;
 * severity Major.
 *
 * (ISO/IEC 10589:2002 clauses 7.1.3.2 and 11.2.2.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iDFieldLengthMismatch OBJECT IDENTIFIER ::= {se iDFieldLengthMismatch(4)}
 * ```
 *
 * @constant
 */
export const iDFieldLengthMismatch: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* iDFieldLengthMismatch */ 4],
  se
);

/* eslint-enable */
