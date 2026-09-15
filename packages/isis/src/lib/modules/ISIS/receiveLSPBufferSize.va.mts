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

/**
 * @summary receiveLSPBufferSize
 * @description
 *
 * Architectural constant RecieveLSPBufferSize: every IS must be able to receive
 * an LSP of this size. Default originating L1/L2 LSP buffer sizes.
 *
 * (ISO/IEC 10589:2002 clauses 7.5 table 2 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * receiveLSPBufferSize INTEGER ::= 1492
 * ```
 *
 * @constant
 */
export const receiveLSPBufferSize: INTEGER = 1492;

/* eslint-enable */
