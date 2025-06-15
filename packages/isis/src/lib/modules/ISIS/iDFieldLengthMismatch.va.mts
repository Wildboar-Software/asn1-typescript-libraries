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
 * @summary iDFieldLengthMismatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iDFieldLengthMismatch OBJECT IDENTIFIER ::= {se iDFieldLengthMismatch(4)}
 * ```
 *
 * @constant
 */
export const iDFieldLengthMismatch: OBJECT_IDENTIFIER = new _OID(
  [/* iDFieldLengthMismatch */ 4],
  se
);

/* eslint-enable */
