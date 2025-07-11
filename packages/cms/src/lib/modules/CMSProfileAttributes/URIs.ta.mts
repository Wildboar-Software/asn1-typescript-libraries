/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { URI, _decode_URI, _encode_URI } from "../CMSProfileAttributes/URI.ta.mjs";

/**
 * @summary URIs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URIs  ::=  SEQUENCE SIZE(1..MAX) OF uri URI
 * ```
 */
export type URIs = URI[]; // SequenceOfType


let _cached_decoder_for_URIs: $.ASN1Decoder<URIs> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) URIs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {URIs} The decoded data structure.
 */
export function _decode_URIs(el: _Element): URIs {
    if (!_cached_decoder_for_URIs) {
        _cached_decoder_for_URIs = $._decodeSequenceOf<URI>(() => _decode_URI);
    }
    return _cached_decoder_for_URIs(el);
}


let _cached_encoder_for_URIs: $.ASN1Encoder<URIs> | null = null;


/**
 * @summary Encodes a(n) URIs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URIs, encoded as an ASN.1 Element.
 */
export function _encode_URIs(value: URIs, elGetter: $.ASN1Encoder<URIs>): _Element {
    if (!_cached_encoder_for_URIs) {
        _cached_encoder_for_URIs = $._encodeSequenceOf<URI>(
            () => _encode_URI,
            $.DER
        );
    }
    return _cached_encoder_for_URIs(value, elGetter);
}


/* eslint-enable */
