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
/* START_OF_SYMBOL_DEFINITION genericProtectingTransferSyntax */
/**
 * @summary genericProtectingTransferSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * genericProtectingTransferSyntax OBJECT IDENTIFIER ::= {modules 7}
 * ```
 *
 * @constant
 */
export const genericProtectingTransferSyntax: OBJECT_IDENTIFIER = new _OID(
  [7],
  modules
);
/* END_OF_SYMBOL_DEFINITION genericProtectingTransferSyntax */

/* eslint-enable */
