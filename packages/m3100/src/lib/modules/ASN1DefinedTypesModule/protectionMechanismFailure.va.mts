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
 * @summary protectionMechanismFailure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protectionMechanismFailure ProbableCause ::= localValue:81
 * ```
 *
 * @constant
 */
export const protectionMechanismFailure: ProbableCause = { localValue: 81 };

/* eslint-enable */
