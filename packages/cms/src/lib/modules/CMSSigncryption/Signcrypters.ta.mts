/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Signcrypter,
    _decode_Signcrypter,
    _encode_Signcrypter,
} from "../CMSSigncryption/Signcrypter.ta.mjs";

/**
 * @summary Signcrypters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signcrypters  ::=  SEQUENCE (SIZE(1..MAX)) OF Signcrypter
 * ```
 */
export type Signcrypters = Signcrypter[]; // SequenceOfType


let _cached_decoder_for_Signcrypters: $.ASN1Decoder<Signcrypters> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Signcrypters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Signcrypters} The decoded data structure.
 */
export function _decode_Signcrypters(el: _Element) {
    if (!_cached_decoder_for_Signcrypters) {
        _cached_decoder_for_Signcrypters = $._decodeSequenceOf<Signcrypter>(
            () => _decode_Signcrypter
        );
    }
    return _cached_decoder_for_Signcrypters(el);
}


let _cached_encoder_for_Signcrypters: $.ASN1Encoder<Signcrypters> | null = null;


/**
 * @summary Encodes a(n) Signcrypters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signcrypters, encoded as an ASN.1 Element.
 */
export function _encode_Signcrypters(
    value: Signcrypters,
    elGetter: $.ASN1Encoder<Signcrypters>
) {
    if (!_cached_encoder_for_Signcrypters) {
        _cached_encoder_for_Signcrypters = $._encodeSequenceOf<Signcrypter>(
            () => _encode_Signcrypter,
            $.DER
        );
    }
    return _cached_encoder_for_Signcrypters(value, elGetter);
}


/* eslint-enable */
