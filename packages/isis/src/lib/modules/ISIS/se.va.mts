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
import { sseoi } from '../ISIS/sseoi.va.mjs';
/**
 * @summary se
 * @description
 *
 * Arc for communicationsAlarm `specificProblems` values: `{sseoi
 * specificProblems(3)}`. Each protocol event below is an OID under `se`.
 *
 * (ISO/IEC 10589:2002 clauses 11.2.2.1 and 11.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * se OBJECT IDENTIFIER ::= {sseoi specificProblems(3)}
 * ```
 *
 * @constant
 */
export const se: OBJECT_IDENTIFIER = _OID.fromParts(
  [/* specificProblems */ 3],
  sseoi
);

/* eslint-enable */
