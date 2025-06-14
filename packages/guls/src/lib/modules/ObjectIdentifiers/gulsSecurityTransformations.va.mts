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
/* START_OF_SYMBOL_DEFINITION gulsSecurityTransformations */
/**
 * @summary gulsSecurityTransformations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gulsSecurityTransformations OBJECT IDENTIFIER ::= {modules 3}
 * ```
 *
 * @constant
 */
export const gulsSecurityTransformations: OBJECT_IDENTIFIER = new _OID(
  [3],
  modules
);
/* END_OF_SYMBOL_DEFINITION gulsSecurityTransformations */

/* eslint-enable */
