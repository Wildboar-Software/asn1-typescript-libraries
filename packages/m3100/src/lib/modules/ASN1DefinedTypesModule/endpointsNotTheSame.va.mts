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
    ProblemCause,
    _decode_ProblemCause,
    _encode_ProblemCause,
} from '../ASN1DefinedTypesModule/ProblemCause.ta.mjs';
/* START_OF_SYMBOL_DEFINITION endpointsNotTheSame */
/**
 * @summary endpointsNotTheSame
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * endpointsNotTheSame ProblemCause ::= integerValue:15
 * ```
 *
 * @constant
 */
export const endpointsNotTheSame: ProblemCause = { integerValue: 15 };
/* END_OF_SYMBOL_DEFINITION endpointsNotTheSame */

/* eslint-enable */
