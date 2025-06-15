/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { URI, _decode_URI, _encode_URI } from "../TokenizationManifest/URI.ta.mjs";

/**
 * @summary TokenServiceProvider
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenServiceProvider  ::=  URI
 * ```
 */
export type TokenServiceProvider = URI; // DefinedType


let _cached_decoder_for_TokenServiceProvider: $.ASN1Decoder<TokenServiceProvider> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TokenServiceProvider
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenServiceProvider} The decoded data structure.
 */
export function _decode_TokenServiceProvider(el: _Element) {
    if (!_cached_decoder_for_TokenServiceProvider) {
        _cached_decoder_for_TokenServiceProvider = _decode_URI;
    }
    return _cached_decoder_for_TokenServiceProvider(el);
}


let _cached_encoder_for_TokenServiceProvider: $.ASN1Encoder<TokenServiceProvider> | null = null;


/**
 * @summary Encodes a(n) TokenServiceProvider into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenServiceProvider, encoded as an ASN.1 Element.
 */
export function _encode_TokenServiceProvider(
    value: TokenServiceProvider,
    elGetter: $.ASN1Encoder<TokenServiceProvider>
) {
    if (!_cached_encoder_for_TokenServiceProvider) {
        _cached_encoder_for_TokenServiceProvider = _encode_URI;
    }
    return _cached_encoder_for_TokenServiceProvider(value, elGetter);
}


/* eslint-enable */
