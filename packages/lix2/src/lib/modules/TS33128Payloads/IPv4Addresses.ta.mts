/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
// export { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";


/**
 * @summary IPv4Addresses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv4Addresses  ::=  SET OF IPv4Address
 * ```
 */
export
type IPv4Addresses = IPv4Address[]; // SetOfType

let _cached_decoder_for_IPv4Addresses: $.ASN1Decoder<IPv4Addresses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPv4Addresses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPv4Addresses (el: _Element): IPv4Addresses {
    if (!_cached_decoder_for_IPv4Addresses) { _cached_decoder_for_IPv4Addresses = $._decodeSetOf<IPv4Address>(() => _decode_IPv4Address); }
    return _cached_decoder_for_IPv4Addresses(el);
}

let _cached_encoder_for_IPv4Addresses: $.ASN1Encoder<IPv4Addresses> | null = null;

/**
 * @summary Encodes a(n) IPv4Addresses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv4Addresses, encoded as an ASN.1 Element.
 */
export
function _encode_IPv4Addresses (value: IPv4Addresses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPv4Addresses) { _cached_encoder_for_IPv4Addresses = $._encodeSetOf<IPv4Address>(() => _encode_IPv4Address, $.BER); }
    return _cached_encoder_for_IPv4Addresses(value, elGetter);
}


/* eslint-enable */
