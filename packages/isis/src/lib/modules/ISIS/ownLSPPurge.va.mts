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
 * @summary ownLSPPurge
 * @description
 *
 * `specificProblems` value when a zero-aged copy of this system's own LSP is
 * received from another system (erroneous purge). probableCause
 * `communicationsProtocolError`; severity Minor.
 *
 * (ISO/IEC 10589:2002 clause 11.2.2.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ownLSPPurge OBJECT IDENTIFIER ::= {se ownLSPPurge(10)}
 * ```
 *
 * @constant
 */
export const ownLSPPurge: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* ownLSPPurge */ 10],
  se
);

/* eslint-enable */
