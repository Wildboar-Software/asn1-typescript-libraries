/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Tokenized,
    _decode_Tokenized,
    _encode_Tokenized,
} from "../TokenizationManifest/Tokenized.ta.mjs";

/**
 * @summary TokenizedParts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenizedParts  ::=  Tokenized {{ Manifest }}
 * ```
 */
export type TokenizedParts = Tokenized; // DefinedType


let _cached_decoder_for_TokenizedParts: $.ASN1Decoder<TokenizedParts> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TokenizedParts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenizedParts} The decoded data structure.
 */
export function _decode_TokenizedParts(el: _Element) {
    if (!_cached_decoder_for_TokenizedParts) {
        _cached_decoder_for_TokenizedParts = _decode_Tokenized;
    }
    return _cached_decoder_for_TokenizedParts(el);
}


let _cached_encoder_for_TokenizedParts: $.ASN1Encoder<TokenizedParts> | null = null;


/**
 * @summary Encodes a(n) TokenizedParts into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenizedParts, encoded as an ASN.1 Element.
 */
export function _encode_TokenizedParts(
    value: TokenizedParts,
    elGetter: $.ASN1Encoder<TokenizedParts>
) {
    if (!_cached_encoder_for_TokenizedParts) {
        _cached_encoder_for_TokenizedParts = _encode_Tokenized;
    }
    return _cached_encoder_for_TokenizedParts(value, elGetter);
}


/* eslint-enable */
