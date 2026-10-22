/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPBinaryAddress, _decode_IPBinaryAddress, _encode_IPBinaryAddress } from "./IPBinaryAddress.ta.mjs";
import { IPTextRepresentedAddress, _decode_IPTextRepresentedAddress, _encode_IPTextRepresentedAddress } from "./IPTextRepresentedAddress.ta.mjs";


/**
 * @summary GSNAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSNAddress  ::=  CHOICE {
 *    iPBinaryAddress              IPBinaryAddress,
 *    iPTextRepresentedAddress     IPTextRepresentedAddress}
 * ```
 */
export
type GSNAddress =
    { iPBinaryAddress: IPBinaryAddress } /* CHOICE_ALT_ROOT */
    | { iPTextRepresentedAddress: IPTextRepresentedAddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GSNAddress: $.ASN1Decoder<GSNAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSNAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSNAddress (el: _Element): GSNAddress {
    if (!_cached_decoder_for_GSNAddress) { _cached_decoder_for_GSNAddress = $._decode_inextensible_choice<GSNAddress>({
    "CONTEXT 0": [ "iPBinaryAddress", _decode_IPBinaryAddress ],
    "CONTEXT 1": [ "iPBinaryAddress", _decode_IPBinaryAddress ],
    "CONTEXT 4": [ "iPBinaryAddress", _decode_IPBinaryAddress ],
    "CONTEXT 2": [ "iPTextRepresentedAddress", _decode_IPTextRepresentedAddress ],
    "CONTEXT 3": [ "iPTextRepresentedAddress", _decode_IPTextRepresentedAddress ]
}); }
    return _cached_decoder_for_GSNAddress(el);
}

let _cached_encoder_for_GSNAddress: $.ASN1Encoder<GSNAddress> | null = null;

/**
 * @summary Encodes a(n) GSNAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSNAddress, encoded as an ASN.1 Element.
 */
export
function _encode_GSNAddress (value: GSNAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSNAddress) { _cached_encoder_for_GSNAddress = $._encode_choice<GSNAddress>({
    "iPBinaryAddress": _encode_IPBinaryAddress,
    "iPTextRepresentedAddress": _encode_IPTextRepresentedAddress,
}, $.BER); }
    return _cached_encoder_for_GSNAddress(value, elGetter);
}


/* eslint-enable */
