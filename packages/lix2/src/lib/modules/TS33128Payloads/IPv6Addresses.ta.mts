/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
// export { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";


/**
 * @summary IPv6Addresses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv6Addresses  ::=  SET OF IPv6Address
 * ```
 */
export
type IPv6Addresses = IPv6Address[]; // SetOfType

let _cached_decoder_for_IPv6Addresses: $.ASN1Decoder<IPv6Addresses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPv6Addresses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPv6Addresses (el: _Element): IPv6Addresses {
    if (!_cached_decoder_for_IPv6Addresses) { _cached_decoder_for_IPv6Addresses = $._decodeSetOf<IPv6Address>(() => _decode_IPv6Address); }
    return _cached_decoder_for_IPv6Addresses(el);
}

let _cached_encoder_for_IPv6Addresses: $.ASN1Encoder<IPv6Addresses> | null = null;

/**
 * @summary Encodes a(n) IPv6Addresses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv6Addresses, encoded as an ASN.1 Element.
 */
export
function _encode_IPv6Addresses (value: IPv6Addresses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPv6Addresses) { _cached_encoder_for_IPv6Addresses = $._encodeSetOf<IPv6Address>(() => _encode_IPv6Address, $.BER); }
    return _cached_encoder_for_IPv6Addresses(value, elGetter);
}


/* eslint-enable */
