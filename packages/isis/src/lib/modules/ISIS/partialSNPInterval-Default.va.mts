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
} from "@wildboar/gmi-attributemodule/src/lib/modules/GMI-AttributeModule/Timer.ta.mjs";

/**
 * @summary partialSNPInterval_Default
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * partialSNPInterval-Default Timer ::= {exponent 0, mantissa 2}
 * ```
 *
 * @constant
 */
export const partialSNPInterval_Default: Timer = Timer._from_object({
  exponent: 0,
  mantissa: 2,
});

/* eslint-enable */
