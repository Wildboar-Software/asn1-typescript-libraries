/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
  SNPAPrefix,
  _decode_SNPAPrefix,
  _encode_SNPAPrefix,
} from '../ISIS/SNPAPrefix.ta.mjs';
/**
 * @summary sNPAPrefix_Default
 * @description
 *
 * Default SNPA prefix for `extractDSP` mapping: empty bit string.
 *
 * (ISO/IEC 10589:2002 clauses 8.1, 11.2.12.2 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sNPAPrefix-Default SNPAPrefix ::= ''B
 * ```
 *
 * @constant
 */
export const sNPAPrefix_Default: SNPAPrefix = new Uint8ClampedArray([]);

/* eslint-enable */
