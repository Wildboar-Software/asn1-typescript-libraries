/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta.mjs";
import {
    TokenContent,
    _decode_TokenContent,
    _encode_TokenContent,
} from "../DirectoryAbstractService/TokenContent.ta.mjs";
/**
 * @summary Token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Token  ::=  SIGNED{TokenContent}
 * ```
 */
export type Token = SIGNED<TokenContent>; // DefinedType

let _cached_decoder_for_Token: $.ASN1Decoder<Token> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Token
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Token} The decoded data structure.
 */
export function _decode_Token(el: _Element) {
    if (!_cached_decoder_for_Token) {
        _cached_decoder_for_Token = _get_decoder_for_SIGNED<TokenContent>(
            _decode_TokenContent
        );
    }
    return _cached_decoder_for_Token(el);
}

let _cached_encoder_for_Token: $.ASN1Encoder<Token> | null = null;

/**
 * @summary Encodes a(n) Token into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Token, encoded as an ASN.1 Element.
 */
export function _encode_Token(value: Token, elGetter: $.ASN1Encoder<Token>) {
    if (!_cached_encoder_for_Token) {
        _cached_encoder_for_Token = _get_encoder_for_SIGNED<TokenContent>(
            _encode_TokenContent
        );
    }
    return _cached_encoder_for_Token(value, elGetter);
}


/* eslint-enable */
