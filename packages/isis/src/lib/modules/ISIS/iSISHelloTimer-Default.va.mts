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
 * @summary iSISHelloTimer_Default
 * @description
 *
 * Default period between IIH PDUs: 3 s. Also used as the period between ISH
 * PDUs when polling ES configuration. Holding timer for IIHs is `iSISHelloTimer
 * × ISISHoldingMultiplier` (10).
 *
 * GMI `Timer` encoding: value = mantissa × 10^exponent seconds (ISO/IEC
 * 10589:2002 Annex E.1.9).
 *
 * (ISO/IEC 10589:2002 clauses 7.5 table 2, 11.2.5.9 and 11.3.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iSISHelloTimer-Default Timer ::= {exponent 0, mantissa 3}
 * ```
 *
 * @constant
 */
export const iSISHelloTimer_Default: Timer = Timer._from_object({
  exponent: 0,
  mantissa: 3,
});

/* eslint-enable */
