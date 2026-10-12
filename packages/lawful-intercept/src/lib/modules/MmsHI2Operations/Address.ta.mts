/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";
// export { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";


/**
 * @summary Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Address ::=  EncodedString
 * ```
 */
export
type Address = EncodedString; // DefinedType

let _cached_decoder_for_Address: $.ASN1Decoder<Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Address (el: _Element): Address {
    if (!_cached_decoder_for_Address) { _cached_decoder_for_Address = _decode_EncodedString; }
    return _cached_decoder_for_Address(el);
}

let _cached_encoder_for_Address: $.ASN1Encoder<Address> | null = null;

/**
 * @summary Encodes a(n) Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Address, encoded as an ASN.1 Element.
 */
export
function _encode_Address (value: Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Address) { _cached_encoder_for_Address = _encode_EncodedString; }
    return _cached_encoder_for_Address(value, elGetter);
}


/* eslint-enable */
