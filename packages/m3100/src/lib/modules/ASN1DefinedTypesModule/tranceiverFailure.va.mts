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
 * @summary tranceiverFailure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tranceiverFailure ProbableCause ::= localValue:80
 * ```
 *
 * @constant
 */
export const tranceiverFailure: ProbableCause = { localValue: 80 };

/* eslint-enable */
