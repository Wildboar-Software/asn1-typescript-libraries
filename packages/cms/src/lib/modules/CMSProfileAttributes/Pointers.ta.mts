/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Pointer,
    _decode_Pointer,
    _encode_Pointer,
} from "../CMSProfileAttributes/Pointer.ta.mjs";

/**
 * @summary Pointers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Pointers  ::=  SEQUENCE SIZE(1..MAX) OF pointer Pointer
 * ```
 */
export type Pointers = Pointer[]; // SequenceOfType


let _cached_decoder_for_Pointers: $.ASN1Decoder<Pointers> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Pointers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Pointers} The decoded data structure.
 */
export function _decode_Pointers(el: _Element): Pointers {
    if (!_cached_decoder_for_Pointers) {
        _cached_decoder_for_Pointers = $._decodeSequenceOf<Pointer>(
            () => _decode_Pointer
        );
    }
    return _cached_decoder_for_Pointers(el);
}


let _cached_encoder_for_Pointers: $.ASN1Encoder<Pointers> | null = null;


/**
 * @summary Encodes a(n) Pointers into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pointers, encoded as an ASN.1 Element.
 */
export function _encode_Pointers(
    value: Pointers,
    elGetter: $.ASN1Encoder<Pointers>
): _Element {
    if (!_cached_encoder_for_Pointers) {
        _cached_encoder_for_Pointers = $._encodeSequenceOf<Pointer>(
            () => _encode_Pointer,
            $.DER
        );
    }
    return _cached_encoder_for_Pointers(value, elGetter);
}


/* eslint-enable */
