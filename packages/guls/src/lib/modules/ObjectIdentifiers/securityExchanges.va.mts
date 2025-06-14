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
/* START_OF_SYMBOL_DEFINITION securityExchanges */
/**
 * @summary securityExchanges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityExchanges OBJECT IDENTIFIER ::= {genericULS 4}
 * ```
 *
 * @constant
 */
export const securityExchanges: OBJECT_IDENTIFIER = new _OID([4], genericULS);
/* END_OF_SYMBOL_DEFINITION securityExchanges */

/* eslint-enable */
