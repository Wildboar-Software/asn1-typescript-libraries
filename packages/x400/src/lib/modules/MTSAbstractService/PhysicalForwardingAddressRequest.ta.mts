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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary PhysicalForwardingAddressRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingAddressRequest  ::=  ENUMERATED {
 *   physical-forwarding-address-not-requested(0),
 *   physical-forwarding-address-requested(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_PhysicalForwardingAddressRequest {
    physical_forwarding_address_not_requested = 0,
    physical_forwarding_address_requested = 1,
}

/**
 * @summary PhysicalForwardingAddressRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingAddressRequest  ::=  ENUMERATED {
 *   physical-forwarding-address-not-requested(0),
 *   physical-forwarding-address-requested(1)}
 * ```
 *
 * @enum {number}
 */
export type PhysicalForwardingAddressRequest = _enum_for_PhysicalForwardingAddressRequest;

/**
 * @summary PhysicalForwardingAddressRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingAddressRequest  ::=  ENUMERATED {
 *   physical-forwarding-address-not-requested(0),
 *   physical-forwarding-address-requested(1)}
 * ```
 *
 * @enum {number}
 */
export const PhysicalForwardingAddressRequest = _enum_for_PhysicalForwardingAddressRequest;

/**
 * @summary PhysicalForwardingAddressRequest_physical_forwarding_address_not_requested
 * @constant
 * @type {number}
 */
export const PhysicalForwardingAddressRequest_physical_forwarding_address_not_requested: PhysicalForwardingAddressRequest =
    PhysicalForwardingAddressRequest.physical_forwarding_address_not_requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary physical_forwarding_address_not_requested
 * @constant
 * @type {number}
 */
export const physical_forwarding_address_not_requested: PhysicalForwardingAddressRequest =
    PhysicalForwardingAddressRequest.physical_forwarding_address_not_requested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PhysicalForwardingAddressRequest_physical_forwarding_address_requested
 * @constant
 * @type {number}
 */
export const PhysicalForwardingAddressRequest_physical_forwarding_address_requested: PhysicalForwardingAddressRequest =
    PhysicalForwardingAddressRequest.physical_forwarding_address_requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary physical_forwarding_address_requested
 * @constant
 * @type {number}
 */
export const physical_forwarding_address_requested: PhysicalForwardingAddressRequest =
    PhysicalForwardingAddressRequest.physical_forwarding_address_requested; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PhysicalForwardingAddressRequest: $.ASN1Decoder<PhysicalForwardingAddressRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalForwardingAddressRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalForwardingAddressRequest} The decoded data structure.
 */
export function _decode_PhysicalForwardingAddressRequest(el: _Element) {
    if (!_cached_decoder_for_PhysicalForwardingAddressRequest) {
        _cached_decoder_for_PhysicalForwardingAddressRequest =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_PhysicalForwardingAddressRequest(el);
}

let _cached_encoder_for_PhysicalForwardingAddressRequest: $.ASN1Encoder<PhysicalForwardingAddressRequest> | null = null;

/**
 * @summary Encodes a(n) PhysicalForwardingAddressRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalForwardingAddressRequest, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalForwardingAddressRequest(
    value: PhysicalForwardingAddressRequest,
    elGetter: $.ASN1Encoder<PhysicalForwardingAddressRequest>
) {
    if (!_cached_encoder_for_PhysicalForwardingAddressRequest) {
        _cached_encoder_for_PhysicalForwardingAddressRequest =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_PhysicalForwardingAddressRequest(
        value,
        elGetter
    );
}


/* eslint-enable */
