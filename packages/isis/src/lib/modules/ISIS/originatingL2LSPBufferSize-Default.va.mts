/* eslint-disable */
import {
  INTEGER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { receiveLSPBufferSize } from '../ISIS/receiveLSPBufferSize.va.mjs';
/* START_OF_SYMBOL_DEFINITION originatingL2LSPBufferSize_Default */
/**
 * @summary originatingL2LSPBufferSize_Default
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originatingL2LSPBufferSize-Default INTEGER ::= receiveLSPBufferSize
 * ```
 *
 * @constant
 */
export const originatingL2LSPBufferSize_Default: INTEGER = receiveLSPBufferSize;
/* END_OF_SYMBOL_DEFINITION originatingL2LSPBufferSize_Default */

/* eslint-enable */
