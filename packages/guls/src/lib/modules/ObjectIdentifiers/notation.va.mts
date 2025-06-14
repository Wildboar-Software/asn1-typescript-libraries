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
import { modules } from '../ObjectIdentifiers/modules.va.mjs';
/* START_OF_SYMBOL_DEFINITION notation */
/**
 * @summary notation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notation OBJECT IDENTIFIER ::= {modules 1}
 * ```
 *
 * @constant
 */
export const notation: OBJECT_IDENTIFIER = new _OID([1], modules);
/* END_OF_SYMBOL_DEFINITION notation */

/* eslint-enable */
