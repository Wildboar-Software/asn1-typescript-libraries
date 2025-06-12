/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_ServiceProviderErrorResponseReason */
/**
 * @summary ServiceProviderErrorResponseReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceProviderErrorResponseReason  ::=  ENUMERATED {
 *   insufficientResources(0), providerDoesNotExist(1), providerNotAvailable(2),
 *   requiredServiceNotAvailable(3)}
 * ```@enum {number}
 */
export enum _enum_for_ServiceProviderErrorResponseReason {
    insufficientResources = 0,
    providerDoesNotExist = 1,
    providerNotAvailable = 2,
    requiredServiceNotAvailable = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ServiceProviderErrorResponseReason */

/* START_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason */
/**
 * @summary ServiceProviderErrorResponseReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceProviderErrorResponseReason  ::=  ENUMERATED {
 *   insufficientResources(0), providerDoesNotExist(1), providerNotAvailable(2),
 *   requiredServiceNotAvailable(3)}
 * ```@enum {number}
 */
export type ServiceProviderErrorResponseReason = _enum_for_ServiceProviderErrorResponseReason;
/* END_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason */

/* START_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason */
/**
 * @summary ServiceProviderErrorResponseReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceProviderErrorResponseReason  ::=  ENUMERATED {
 *   insufficientResources(0), providerDoesNotExist(1), providerNotAvailable(2),
 *   requiredServiceNotAvailable(3)}
 * ```@enum {number}
 */
export const ServiceProviderErrorResponseReason = _enum_for_ServiceProviderErrorResponseReason;
/* END_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason */

/* START_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason_insufficientResources */
/**
 * @summary ServiceProviderErrorResponseReason_insufficientResources
 * @constant
 * @type {number}
 */
export const ServiceProviderErrorResponseReason_insufficientResources: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.insufficientResources; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason_insufficientResources */

/* START_OF_SYMBOL_DEFINITION insufficientResources */
/**
 * @summary insufficientResources
 * @constant
 * @type {number}
 */
export const insufficientResources: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.insufficientResources; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION insufficientResources */

/* START_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason_providerDoesNotExist */
/**
 * @summary ServiceProviderErrorResponseReason_providerDoesNotExist
 * @constant
 * @type {number}
 */
export const ServiceProviderErrorResponseReason_providerDoesNotExist: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.providerDoesNotExist; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason_providerDoesNotExist */

/* START_OF_SYMBOL_DEFINITION providerDoesNotExist */
/**
 * @summary providerDoesNotExist
 * @constant
 * @type {number}
 */
export const providerDoesNotExist: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.providerDoesNotExist; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION providerDoesNotExist */

/* START_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason_providerNotAvailable */
/**
 * @summary ServiceProviderErrorResponseReason_providerNotAvailable
 * @constant
 * @type {number}
 */
export const ServiceProviderErrorResponseReason_providerNotAvailable: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.providerNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason_providerNotAvailable */

/* START_OF_SYMBOL_DEFINITION providerNotAvailable */
/**
 * @summary providerNotAvailable
 * @constant
 * @type {number}
 */
export const providerNotAvailable: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.providerNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION providerNotAvailable */

/* START_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason_requiredServiceNotAvailable */
/**
 * @summary ServiceProviderErrorResponseReason_requiredServiceNotAvailable
 * @constant
 * @type {number}
 */
export const ServiceProviderErrorResponseReason_requiredServiceNotAvailable: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.requiredServiceNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProviderErrorResponseReason_requiredServiceNotAvailable */

/* START_OF_SYMBOL_DEFINITION requiredServiceNotAvailable */
/**
 * @summary requiredServiceNotAvailable
 * @constant
 * @type {number}
 */
export const requiredServiceNotAvailable: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.requiredServiceNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION requiredServiceNotAvailable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceProviderErrorResponseReason */
let _cached_decoder_for_ServiceProviderErrorResponseReason: $.ASN1Decoder<ServiceProviderErrorResponseReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceProviderErrorResponseReason */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceProviderErrorResponseReason */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceProviderErrorResponseReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceProviderErrorResponseReason} The decoded data structure.
 */
export function _decode_ServiceProviderErrorResponseReason(el: _Element) {
    if (!_cached_decoder_for_ServiceProviderErrorResponseReason) {
        _cached_decoder_for_ServiceProviderErrorResponseReason =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_ServiceProviderErrorResponseReason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceProviderErrorResponseReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceProviderErrorResponseReason */
let _cached_encoder_for_ServiceProviderErrorResponseReason: $.ASN1Encoder<ServiceProviderErrorResponseReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceProviderErrorResponseReason */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceProviderErrorResponseReason */
/**
 * @summary Encodes a(n) ServiceProviderErrorResponseReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceProviderErrorResponseReason, encoded as an ASN.1 Element.
 */
export function _encode_ServiceProviderErrorResponseReason(
    value: ServiceProviderErrorResponseReason,
    elGetter: $.ASN1Encoder<ServiceProviderErrorResponseReason>
) {
    if (!_cached_encoder_for_ServiceProviderErrorResponseReason) {
        _cached_encoder_for_ServiceProviderErrorResponseReason =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_ServiceProviderErrorResponseReason(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceProviderErrorResponseReason */

/* eslint-enable */
