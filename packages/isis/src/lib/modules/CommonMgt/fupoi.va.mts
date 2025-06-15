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
import { cmoi } from '../CommonMgt/cmoi.va.mjs';
/**
 * @summary fupoi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fupoi OBJECT IDENTIFIER ::= {cmoi functionalUnitPackage(1)}
 * ```
 *
 * @constant
 */
export const fupoi: OBJECT_IDENTIFIER = new _OID(
  [/* functionalUnitPackage */ 1],
  cmoi
);

/* eslint-enable */
