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
import { sseoi } from '../ISIS/sseoi.va.mjs';
/* START_OF_SYMBOL_DEFINITION se */
/**
 * @summary se
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * se OBJECT IDENTIFIER ::= {sseoi specificProblems(3)}
 * ```
 *
 * @constant
 */
export const se: OBJECT_IDENTIFIER = new _OID(
  [/* specificProblems */ 3],
  sseoi
);
/* END_OF_SYMBOL_DEFINITION se */

/* eslint-enable */
