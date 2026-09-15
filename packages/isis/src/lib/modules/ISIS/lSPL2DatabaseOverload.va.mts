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
 * @summary lSPL2DatabaseOverload
 * @description
 *
 * `specificProblems` value when `l2State` changes between On and Waiting. Same
 * additional-information and probableCause rules as Level 1 overload.
 *
 * (ISO/IEC 10589:2002 clauses 7.3.19 and 11.2.2.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * lSPL2DatabaseOverload OBJECT IDENTIFIER ::= {se lSPL2DatabaseOverload(7)}
 * ```
 *
 * @constant
 */
export const lSPL2DatabaseOverload: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* lSPL2DatabaseOverload */ 7],
  se
);

/* eslint-enable */
