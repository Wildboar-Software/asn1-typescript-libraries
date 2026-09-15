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
 * @summary versionSkew
 * @description
 *
 * `specificProblems` value when adjacency initialisation fails because protocol
 * versions are incompatible. Neighbour version is `notificationVersion`.
 * probableCause `versionMismatch`; severity Major. Counted in
 * `initialisationFailures`.
 *
 * (ISO/IEC 10589:2002 clause 11.2.5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * versionSkew OBJECT IDENTIFIER ::= {se versionSkew(14)}
 * ```
 *
 * @constant
 */
export const versionSkew: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* versionSkew */ 14],
  se
);

/* eslint-enable */
