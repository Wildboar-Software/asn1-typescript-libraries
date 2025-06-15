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
/**
 * @summary originatingL1LSPBufferSize_Default
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originatingL1LSPBufferSize-Default INTEGER ::= receiveLSPBufferSize
 * ```
 *
 * @constant
 */
export const originatingL1LSPBufferSize_Default: INTEGER = receiveLSPBufferSize;

/* eslint-enable */
