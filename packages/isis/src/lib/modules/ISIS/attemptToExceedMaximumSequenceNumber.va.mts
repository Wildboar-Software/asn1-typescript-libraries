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
 * @summary attemptToExceedMaximumSequenceNumber
 * @description
 *
 * `specificProblems` value when an attempt is made to increment an LSP sequence
 * number past the modulus (2^32). probableCause `communicationsProtocolError`;
 * severity Major.
 *
 * (ISO/IEC 10589:2002 clauses 7.5 table 2 and 11.2.2.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attemptToExceedMaximumSequenceNumber OBJECT IDENTIFIER ::= {se attemptToExceedMaximumSequenceNumber(1)}
 * ```
 *
 * @constant
 */
export const attemptToExceedMaximumSequenceNumber: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* attemptToExceedMaximumSequenceNumber */ 1],
  se
);

/* eslint-enable */
