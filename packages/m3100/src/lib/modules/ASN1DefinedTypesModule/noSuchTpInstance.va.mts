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

/**
 * @summary noSuchTpInstance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noSuchTpInstance ProblemCause ::= integerValue:0
 * ```
 *
 * @constant
 */
export const noSuchTpInstance: ProblemCause = { integerValue: 0 };

/* eslint-enable */
