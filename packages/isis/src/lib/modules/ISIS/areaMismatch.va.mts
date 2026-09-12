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
 * @summary areaMismatch
 * @description
 *
 * `specificProblems` value when two Level 1 ISs fail to initialise because they
 * share no area address. Report neighbour area addresses and system ID via
 * `notificationAreaAddresses` and `notificationSystemId`. probableCause
 * `configurationOrCustomisationError`; severity Major; counted in
 * `initialisationFailures`.
 *
 * (ISO/IEC 10589:2002 clauses 7.1.5 and 11.2.5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * areaMismatch OBJECT IDENTIFIER ::= {se areaMismatch(0)}
 * ```
 *
 * @constant
 */
export const areaMismatch: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* areaMismatch */ 0],
  se
);

/* eslint-enable */
