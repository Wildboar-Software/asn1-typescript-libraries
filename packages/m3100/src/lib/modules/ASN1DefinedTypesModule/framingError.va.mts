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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module';

/**
 * @summary framingError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * framingError ProbableCause ::= localValue:5
 * ```
 *
 * @constant
 */
export const framingError: ProbableCause = { localValue: 5 };

/* eslint-enable */
