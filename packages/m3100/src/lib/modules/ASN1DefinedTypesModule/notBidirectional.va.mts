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
 * @summary notBidirectional
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notBidirectional ProblemCause ::= integerValue:17
 * ```
 *
 * @constant
 */
export const notBidirectional: ProblemCause = { integerValue: 17 };

/* eslint-enable */
