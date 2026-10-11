/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TokenAction {
    addToken = 0,
    removeToken = 1,
    filterToken = 2,
}

/**
 * @summary TokenAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TokenAction ::=  ENUMERATED
 * {
 *     addToken         (0),
 *     removeToken     (1),
 *     filterToken        (2),
 * 
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TokenAction = _enum_for_TokenAction | ENUMERATED;

/**
 * @summary TokenAction_addToken
 * @constant
 * @type {number}
 */
export
const TokenAction_addToken: TokenAction = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary addToken
 * @constant
 * @type {number}
 */
export
const addToken: TokenAction = TokenAction_addToken; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TokenAction_removeToken
 * @constant
 * @type {number}
 */
export
const TokenAction_removeToken: TokenAction = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary removeToken
 * @constant
 * @type {number}
 */
export
const removeToken: TokenAction = TokenAction_removeToken; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TokenAction_filterToken
 * @constant
 * @type {number}
 */
export
const TokenAction_filterToken: TokenAction = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary filterToken
 * @constant
 * @type {number}
 */
export
const filterToken: TokenAction = TokenAction_filterToken; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TokenAction: $.ASN1Decoder<TokenAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TokenAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TokenAction (el: _Element): TokenAction {
    if (!_cached_decoder_for_TokenAction) { _cached_decoder_for_TokenAction = $._decodeEnumerated; }
    return _cached_decoder_for_TokenAction(el);
}

let _cached_encoder_for_TokenAction: $.ASN1Encoder<TokenAction> | null = null;

/**
 * @summary Encodes a(n) TokenAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenAction, encoded as an ASN.1 Element.
 */
export
function _encode_TokenAction (value: TokenAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TokenAction) { _cached_encoder_for_TokenAction = $._encodeEnumerated; }
    return _cached_encoder_for_TokenAction(value, elGetter);
}


/* eslint-enable */
