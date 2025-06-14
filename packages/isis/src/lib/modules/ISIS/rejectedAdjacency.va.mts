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
/* START_OF_SYMBOL_DEFINITION rejectedAdjacency */
/**
 * @summary rejectedAdjacency
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rejectedAdjacency OBJECT IDENTIFIER ::= {se rejectedAdjacency(12)}
 * ```
 *
 * @constant
 */
export const rejectedAdjacency: OBJECT_IDENTIFIER = new _OID(
  [/* rejectedAdjacency */ 12],
  se
);
/* END_OF_SYMBOL_DEFINITION rejectedAdjacency */

/* eslint-enable */
