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
import * as $ from 'asn1-ts/dist/functional.mjs';

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
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_ServiceProviderErrorResponseReason {
    insufficientResources = 0,
    providerDoesNotExist = 1,
    providerNotAvailable = 2,
    requiredServiceNotAvailable = 3,
}

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
 * ```
 * 
 * @enum {number}
 */
export type ServiceProviderErrorResponseReason = _enum_for_ServiceProviderErrorResponseReason;

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
 * ```
 * 
 * @enum {number}
 */
export const ServiceProviderErrorResponseReason = _enum_for_ServiceProviderErrorResponseReason;

/**
 * @summary ServiceProviderErrorResponseReason_insufficientResources
 * @constant
 * @type {number}
 */
export const ServiceProviderErrorResponseReason_insufficientResources: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.insufficientResources; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientResources
 * @constant
 * @type {number}
 */
export const insufficientResources: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.insufficientResources; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceProviderErrorResponseReason_providerDoesNotExist
 * @constant
 * @type {number}
 */
export const ServiceProviderErrorResponseReason_providerDoesNotExist: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.providerDoesNotExist; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary providerDoesNotExist
 * @constant
 * @type {number}
 */
export const providerDoesNotExist: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.providerDoesNotExist; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceProviderErrorResponseReason_providerNotAvailable
 * @constant
 * @type {number}
 */
export const ServiceProviderErrorResponseReason_providerNotAvailable: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.providerNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary providerNotAvailable
 * @constant
 * @type {number}
 */
export const providerNotAvailable: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.providerNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceProviderErrorResponseReason_requiredServiceNotAvailable
 * @constant
 * @type {number}
 */
export const ServiceProviderErrorResponseReason_requiredServiceNotAvailable: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.requiredServiceNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requiredServiceNotAvailable
 * @constant
 * @type {number}
 */
export const requiredServiceNotAvailable: ServiceProviderErrorResponseReason =
    ServiceProviderErrorResponseReason.requiredServiceNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ServiceProviderErrorResponseReason: $.ASN1Decoder<ServiceProviderErrorResponseReason> | null = null;

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

let _cached_encoder_for_ServiceProviderErrorResponseReason: $.ASN1Encoder<ServiceProviderErrorResponseReason> | null = null;

/**
 * @summary Encodes a(n) ServiceProviderErrorResponseReason into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
