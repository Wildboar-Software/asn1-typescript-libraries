/* eslint-disable */
import {
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

export const _decode_TokenAction: $.ASN1Decoder<TokenAction> = $._decodeEnumerated;

export const _encode_TokenAction: $.ASN1Encoder<TokenAction> = $._encodeEnumerated;

/* eslint-enable */
