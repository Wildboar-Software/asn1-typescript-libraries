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
/* START_OF_SYMBOL_DEFINITION noMoreThanOneTpIsAllowed */
/**
 * @summary noMoreThanOneTpIsAllowed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noMoreThanOneTpIsAllowed ProblemCause ::= integerValue:10
 * ```
 *
 * @constant
 */
export const noMoreThanOneTpIsAllowed: ProblemCause = { integerValue: 10 };
/* END_OF_SYMBOL_DEFINITION noMoreThanOneTpIsAllowed */

/* eslint-enable */
