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
 * @summary farEndReceiverFailure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * farEndReceiverFailure ProbableCause ::= localValue:4
 * ```
 *
 * @constant
 */
export const farEndReceiverFailure: ProbableCause = { localValue: 4 };

/* eslint-enable */
