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
import { genericULS } from '../ObjectIdentifiers/genericULS.va.mjs';
/* START_OF_SYMBOL_DEFINITION securityTransformations */
/**
 * @summary securityTransformations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityTransformations OBJECT IDENTIFIER ::= {genericULS 5}
 * ```
 *
 * @constant
 */
export const securityTransformations: OBJECT_IDENTIFIER = new _OID(
  [5],
  genericULS
);
/* END_OF_SYMBOL_DEFINITION securityTransformations */

/* eslint-enable */
