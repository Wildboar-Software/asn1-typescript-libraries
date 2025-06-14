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
import { isisoi } from '../ISIS/isisoi.va.mjs';
/* START_OF_SYMBOL_DEFINITION proi */
/**
 * @summary proi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * proi OBJECT IDENTIFIER ::= {isisoi parameter(5)}
 * ```
 *
 * @constant
 */
export const proi: OBJECT_IDENTIFIER = new _OID([/* parameter */ 5], isisoi);
/* END_OF_SYMBOL_DEFINITION proi */

/* eslint-enable */
