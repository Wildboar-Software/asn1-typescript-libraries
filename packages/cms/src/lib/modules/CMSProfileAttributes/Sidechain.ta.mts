/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    HashPointer,
    _decode_HashPointer,
    _encode_HashPointer,
} from "../CMSProfileAttributes/HashPointer.ta.mjs";

/**
 * @summary Sidechain
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Sidechain     ::=  HashPointer
 * ```
 */
export type Sidechain = HashPointer; // DefinedType


let _cached_decoder_for_Sidechain: $.ASN1Decoder<Sidechain> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Sidechain
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Sidechain} The decoded data structure.
 */
export function _decode_Sidechain(el: _Element): Sidechain {
    if (!_cached_decoder_for_Sidechain) {
        _cached_decoder_for_Sidechain = _decode_HashPointer;
    }
    return _cached_decoder_for_Sidechain(el);
}


let _cached_encoder_for_Sidechain: $.ASN1Encoder<Sidechain> | null = null;


/**
 * @summary Encodes a(n) Sidechain into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Sidechain, encoded as an ASN.1 Element.
 */
export function _encode_Sidechain(
    value: Sidechain,
    elGetter: $.ASN1Encoder<Sidechain>
): _Element {
    if (!_cached_encoder_for_Sidechain) {
        _cached_encoder_for_Sidechain = _encode_HashPointer;
    }
    return _cached_encoder_for_Sidechain(value, elGetter);
}


/* eslint-enable */
