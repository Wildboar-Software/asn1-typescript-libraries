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
    ProblemCause,
    _decode_ProblemCause,
    _encode_ProblemCause,
} from '../ASN1DefinedTypesModule/ProblemCause.ta.mjs';

/**
 * @summary alreadyMemberOfGtp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * alreadyMemberOfGtp ProblemCause ::= integerValue:8
 * ```
 *
 * @constant
 */
export const alreadyMemberOfGtp: ProblemCause = { integerValue: 8 };

/* eslint-enable */
