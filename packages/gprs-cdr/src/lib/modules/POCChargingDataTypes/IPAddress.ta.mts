/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPBinaryAddress, _decode_IPBinaryAddress, _encode_IPBinaryAddress } from "../POCChargingDataTypes/IPBinaryAddress.ta.mjs";
// export { IPBinaryAddress, _decode_IPBinaryAddress, _encode_IPBinaryAddress } from "../POCChargingDataTypes/IPBinaryAddress.ta.mjs";
import { IPTextRepresentedAddress, _decode_IPTextRepresentedAddress, _encode_IPTextRepresentedAddress } from "../POCChargingDataTypes/IPTextRepresentedAddress.ta.mjs";
// export { IPTextRepresentedAddress, _decode_IPTextRepresentedAddress, _encode_IPTextRepresentedAddress } from "../POCChargingDataTypes/IPTextRepresentedAddress.ta.mjs";


/**
 * @summary IPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAddress  ::=  CHOICE {
 *    iPBinaryAddress              IPBinaryAddress,
 *    iPTextRepresentedAddress     IPTextRepresentedAddress}
 * ```
 */
export
type IPAddress =
    { iPBinaryAddress: IPBinaryAddress } /* CHOICE_ALT_ROOT */
    | { iPTextRepresentedAddress: IPTextRepresentedAddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IPAddress: $.ASN1Decoder<IPAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPAddress (el: _Element): IPAddress {
    if (!_cached_decoder_for_IPAddress) { _cached_decoder_for_IPAddress = $._decode_inextensible_choice<IPAddress>({
    "CONTEXT 0": [ "iPBinaryAddress", _decode_IPBinaryAddress ],
    "CONTEXT 1": [ "iPBinaryAddress", _decode_IPBinaryAddress ],
    "CONTEXT 4": [ "iPBinaryAddress", _decode_IPBinaryAddress ],
    "CONTEXT 2": [ "iPTextRepresentedAddress", _decode_IPTextRepresentedAddress ],
    "CONTEXT 3": [ "iPTextRepresentedAddress", _decode_IPTextRepresentedAddress ]
}); }
    return _cached_decoder_for_IPAddress(el);
}

let _cached_encoder_for_IPAddress: $.ASN1Encoder<IPAddress> | null = null;

/**
 * @summary Encodes a(n) IPAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPAddress, encoded as an ASN.1 Element.
 */
export
function _encode_IPAddress (value: IPAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPAddress) { _cached_encoder_for_IPAddress = $._encode_choice<IPAddress>({
    "iPBinaryAddress": _encode_IPBinaryAddress,
    "iPTextRepresentedAddress": _encode_IPTextRepresentedAddress,
}, $.BER); }
    return _cached_encoder_for_IPAddress(value, elGetter);
}


/* eslint-enable */
