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
} from '@wildboar/asn1';
import { receiveLSPBufferSize } from '../ISIS/receiveLSPBufferSize.va.mjs';
/**
 * @summary originatingL2LSPBufferSize_Default
 * @description
 *
 * Default maximum size of originated Level 2 LSPs and SNPs:
 * `receiveLSPBufferSize` (1492).
 *
 * (ISO/IEC 10589:2002 clauses 7.5, 11.2.2.2 and 11.3.2).
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

/* eslint-enable */
