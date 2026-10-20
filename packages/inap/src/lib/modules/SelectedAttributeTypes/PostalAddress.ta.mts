/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { ub_postal_string } from "../UpperBounds/ub-postal-string.va.mjs";


/**
 * @summary PostalAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PostalAddress  ::= 
 *   SEQUENCE SIZE (1..ub-postal-line) OF DirectoryString{ub-postal-string}
 * ```
 */
export
type PostalAddress = DirectoryString[]; // SequenceOfType

let _cached_decoder_for_PostalAddress: $.ASN1Decoder<PostalAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PostalAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PostalAddress (el: _Element): PostalAddress {
    if (!_cached_decoder_for_PostalAddress) { _cached_decoder_for_PostalAddress = $._decodeSequenceOf<DirectoryString>(() => _decode_DirectoryString); }
    return _cached_decoder_for_PostalAddress(el);
}

let _cached_encoder_for_PostalAddress: $.ASN1Encoder<PostalAddress> | null = null;

/**
 * @summary Encodes a(n) PostalAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostalAddress, encoded as an ASN.1 Element.
 */
export
function _encode_PostalAddress (value: PostalAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PostalAddress) { _cached_encoder_for_PostalAddress = $._encodeSequenceOf<DirectoryString>(() => _encode_DirectoryString, $.BER); }
    return _cached_encoder_for_PostalAddress(value, elGetter);
}


/* eslint-enable */
