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
 * @summary minimumBroadcastLSPTransmissionInterval_Default
 * @description
 *
 * Default minimum interval between LSP transmissions on a broadcast circuit: 33
 * ms. Resolution shall be no coarser than 10 ms. See clause 7.3.15.6.
 *
 * GMI `Timer` encoding: value = mantissa × 10^exponent seconds (ISO/IEC
 * 10589:2002 Annex E.1.9).
 *
 * (ISO/IEC 10589:2002 clauses 7.3.15.6, 11.2.4 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * minimumBroadcastLSPTransmissionInterval-Default Timer ::= {exponent -3, mantissa 33}
 * ```
 *
 * @constant
 */
export const minimumBroadcastLSPTransmissionInterval_Default: Timer = Timer._from_object(
  { exponent: -3, mantissa: 33 }
);

/* eslint-enable */
