/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PwdAlphabet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdAlphabet  ::=  SEQUENCE OF UTF8String
 * ```
 */
export type PwdAlphabet = UTF8String[]; // SequenceOfType

let _cached_decoder_for_PwdAlphabet: $.ASN1Decoder<PwdAlphabet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PwdAlphabet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdAlphabet} The decoded data structure.
 */
export function _decode_PwdAlphabet(el: _Element) {
    if (!_cached_decoder_for_PwdAlphabet) {
        _cached_decoder_for_PwdAlphabet = $._decodeSequenceOf<UTF8String>(
            () => $._decodeUTF8String
        );
    }
    return _cached_decoder_for_PwdAlphabet(el);
}

let _cached_encoder_for_PwdAlphabet: $.ASN1Encoder<PwdAlphabet> | null = null;

/**
 * @summary Encodes a(n) PwdAlphabet into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdAlphabet, encoded as an ASN.1 Element.
 */
export function _encode_PwdAlphabet(
    value: PwdAlphabet,
    elGetter: $.ASN1Encoder<PwdAlphabet>
) {
    if (!_cached_encoder_for_PwdAlphabet) {
        _cached_encoder_for_PwdAlphabet = $._encodeSequenceOf<UTF8String>(
            () => $._encodeUTF8String,
            $.DER
        );
    }
    return _cached_encoder_for_PwdAlphabet(value, elGetter);
}


/* eslint-enable */
