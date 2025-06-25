/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
/**
 * @summary PostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostalAddress  ::=  SEQUENCE SIZE (1..MAX) OF UnboundedDirectoryString
 * ```
 */
export type PostalAddress = UnboundedDirectoryString[]; // SequenceOfType

let _cached_decoder_for_PostalAddress: $.ASN1Decoder<PostalAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PostalAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostalAddress} The decoded data structure.
 */
export function _decode_PostalAddress(el: _Element): PostalAddress {
    if (!_cached_decoder_for_PostalAddress) {
        _cached_decoder_for_PostalAddress = $._decodeSequenceOf<UnboundedDirectoryString>(
            () => _decode_UnboundedDirectoryString
        );
    }
    return _cached_decoder_for_PostalAddress(el);
}

let _cached_encoder_for_PostalAddress: $.ASN1Encoder<PostalAddress> | null = null;

/**
 * @summary Encodes a(n) PostalAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostalAddress, encoded as an ASN.1 Element.
 */
export function _encode_PostalAddress(
    value: PostalAddress,
    elGetter: $.ASN1Encoder<PostalAddress>
): _Element {
    if (!_cached_encoder_for_PostalAddress) {
        _cached_encoder_for_PostalAddress = $._encodeSequenceOf<UnboundedDirectoryString>(
            () => _encode_UnboundedDirectoryString,
            $.DER
        );
    }
    return _cached_encoder_for_PostalAddress(value, elGetter);
}


/* eslint-enable */
