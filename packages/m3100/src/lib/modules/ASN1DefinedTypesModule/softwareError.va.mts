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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';
/* START_OF_SYMBOL_DEFINITION softwareError */
/**
 * @summary softwareError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * softwareError ProbableCause ::= localValue:164
 * ```
 *
 * @constant
 */
export const softwareError: ProbableCause = { localValue: 164 };
/* END_OF_SYMBOL_DEFINITION softwareError */

/* eslint-enable */
