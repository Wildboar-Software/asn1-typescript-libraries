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
} from 'asn1-ts';
import {
    Timer,
    _decode_Timer,
    _encode_Timer,
} from "@wildboar/gmi-attributemodule/src/lib/modules/GMI-AttributeModule/Timer.ta.mjs";

/* START_OF_SYMBOL_DEFINITION maximumLSPGenerationInterval_Default */
/**
 * @summary maximumLSPGenerationInterval_Default
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maximumLSPGenerationInterval-Default Timer ::= {exponent 2, mantissa 9}
 * ```
 *
 * @constant
 */
export const maximumLSPGenerationInterval_Default: Timer = Timer._from_object({
  exponent: 2,
  mantissa: 9,
});
/* END_OF_SYMBOL_DEFINITION maximumLSPGenerationInterval_Default */

/* eslint-enable */
