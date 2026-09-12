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
 * @summary rejectedAdjacency
 * @description
 *
 * `specificProblems` value when a new adjacency cannot be created for lack of
 * resources. Neighbour ID is `notificationSystemId`. probableCause
 * `resourceAtOrNearingCapacity`; severity Major.
 *
 * (ISO/IEC 10589:2002 clause 11.2.5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rejectedAdjacency OBJECT IDENTIFIER ::= {se rejectedAdjacency(12)}
 * ```
 *
 * @constant
 */
export const rejectedAdjacency: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* rejectedAdjacency */ 12],
  se
);

/* eslint-enable */
