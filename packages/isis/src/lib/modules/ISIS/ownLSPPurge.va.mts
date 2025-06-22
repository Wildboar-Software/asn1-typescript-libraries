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
 * @summary ownLSPPurge
 * @description
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
