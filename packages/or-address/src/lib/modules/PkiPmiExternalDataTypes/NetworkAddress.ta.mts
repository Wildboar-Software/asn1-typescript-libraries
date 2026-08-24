/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    X121Address,
    _decode_X121Address,
    _encode_X121Address,
} from "../PkiPmiExternalDataTypes/X121Address.ta.mjs";

/**
 * @summary NetworkAddress
 * @description
 *
 * Built-in `network-address` is an X.121 NumericString (ITU-T X.402 (1999), §18.3.7 a).
 * X.121 strings may include Telex/telephone numbers with a leading escape digit. MHS
 * carries 16 digits, allowing escape + 15-digit E.164; mapping to protocols limited to
 * 14 digits is a local matter. E.164 two-string and PSAP forms are **not** this type —
 * use extension `extended-network-address`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NetworkAddress  ::=  X121Address
 * ```
 */
export type NetworkAddress = X121Address; // DefinedType

let _cached_decoder_for_NetworkAddress: $.ASN1Decoder<NetworkAddress> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NetworkAddress} The decoded data structure.
 */
export function _decode_NetworkAddress(el: _Element): NetworkAddress {
    if (!_cached_decoder_for_NetworkAddress) {
        _cached_decoder_for_NetworkAddress = _decode_X121Address;
    }
    return _cached_decoder_for_NetworkAddress(el);
}

let _cached_encoder_for_NetworkAddress: $.ASN1Encoder<NetworkAddress> | null =
    null;

/**
 * @summary Encodes a(n) NetworkAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkAddress, encoded as an ASN.1 Element.
 */
export function _encode_NetworkAddress(value: NetworkAddress, elGetter: $.ASN1Encoder<NetworkAddress>): _Element {
    if (!_cached_encoder_for_NetworkAddress) {
        _cached_encoder_for_NetworkAddress = _encode_X121Address;
    }
    return _cached_encoder_for_NetworkAddress(value, elGetter);
}


/* eslint-enable */
