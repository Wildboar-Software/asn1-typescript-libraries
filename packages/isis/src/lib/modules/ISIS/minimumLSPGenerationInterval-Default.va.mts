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
    Timer,
    _decode_Timer,
    _encode_Timer,
} from "@wildboar/gmi-attributemodule";

/**
 * @summary minimumLSPGenerationInterval_Default
 * @description
 *
 * Default minimum interval between successive origination of LSPs with the same
 * LSP ID: 30 s.
 *
 * GMI `Timer` encoding: value = mantissa × 10^exponent seconds (ISO/IEC
 * 10589:2002 Annex E.1.9).
 *
 * (ISO/IEC 10589:2002 clauses 7.3.21, 11.2.4 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * minimumLSPGenerationInterval-Default Timer ::= {exponent 0, mantissa 30}
 * ```
 *
 * @constant
 */
export const minimumLSPGenerationInterval_Default: Timer = Timer._from_object({
  exponent: 0,
  mantissa: 30,
});

/* eslint-enable */
