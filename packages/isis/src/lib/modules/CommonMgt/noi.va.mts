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
/* START_OF_SYMBOL_DEFINITION noi */
/**
 * @summary noi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noi OBJECT IDENTIFIER ::= {cmoi notification(10)}
 * ```
 *
 * @constant
 */
export const noi: OBJECT_IDENTIFIER = new _OID([/* notification */ 10], cmoi);
/* END_OF_SYMBOL_DEFINITION noi */

/* eslint-enable */
