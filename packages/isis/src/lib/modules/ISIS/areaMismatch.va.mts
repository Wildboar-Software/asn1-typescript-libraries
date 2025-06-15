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
 * @summary areaMismatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * areaMismatch OBJECT IDENTIFIER ::= {se areaMismatch(0)}
 * ```
 *
 * @constant
 */
export const areaMismatch: OBJECT_IDENTIFIER = new _OID(
  [/* areaMismatch */ 0],
  se
);

/* eslint-enable */
