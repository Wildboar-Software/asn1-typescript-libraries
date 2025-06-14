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

/* START_OF_SYMBOL_DEFINITION suggestedESConfigurationTimerDefault */
/**
 * @summary suggestedESConfigurationTimerDefault
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * suggestedESConfigurationTimerDefault Timer ::= {exponent 0, mantissa 600}
 * ```
 *
 * @constant
 */
export const suggestedESConfigurationTimerDefault: Timer = Timer._from_object({
    exponent: 0,
    mantissa: 600,
});
/* END_OF_SYMBOL_DEFINITION suggestedESConfigurationTimerDefault */

/* eslint-enable */
