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
} from 'asn1-ts';
import { se } from '../ISIS/se.va.mjs';
/**
 * @summary attemptToExceedMaximumSequenceNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attemptToExceedMaximumSequenceNumber OBJECT IDENTIFIER ::= {se attemptToExceedMaximumSequenceNumber(1)}
 * ```
 *
 * @constant
 */
export const attemptToExceedMaximumSequenceNumber: OBJECT_IDENTIFIER = new _OID(
  [/* attemptToExceedMaximumSequenceNumber */ 1],
  se
);

/* eslint-enable */
