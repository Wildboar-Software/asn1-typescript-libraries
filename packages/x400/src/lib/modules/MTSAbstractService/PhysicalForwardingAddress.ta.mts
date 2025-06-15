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
import {
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
/**
 * @summary PhysicalForwardingAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalForwardingAddress  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type PhysicalForwardingAddress = ORAddressAndOptionalDirectoryName; // DefinedType

let _cached_decoder_for_PhysicalForwardingAddress: $.ASN1Decoder<PhysicalForwardingAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalForwardingAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalForwardingAddress} The decoded data structure.
 */
export function _decode_PhysicalForwardingAddress(el: _Element) {
    if (!_cached_decoder_for_PhysicalForwardingAddress) {
        _cached_decoder_for_PhysicalForwardingAddress = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_PhysicalForwardingAddress(el);
}

let _cached_encoder_for_PhysicalForwardingAddress: $.ASN1Encoder<PhysicalForwardingAddress> | null = null;

/**
 * @summary Encodes a(n) PhysicalForwardingAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalForwardingAddress, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalForwardingAddress(
    value: PhysicalForwardingAddress,
    elGetter: $.ASN1Encoder<PhysicalForwardingAddress>
) {
    if (!_cached_encoder_for_PhysicalForwardingAddress) {
        _cached_encoder_for_PhysicalForwardingAddress = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_PhysicalForwardingAddress(value, elGetter);
}


/* eslint-enable */
