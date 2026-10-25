/* eslint-disable */
import {
    type ENUMERATED
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
 * What to do with a keyword on a stored MM. Table 15.3.6.1.2 describes adding
 * or removing a keyword. Annex B.15 also names filtering.
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TokenAction ::=  ENUMERATED
 * {
 *     addToken         (0),
 *     removeToken     (1),
 *     filterToken        (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TokenAction = _enum_for_TokenAction | ENUMERATED;

/**
 * @summary TokenAction_addToken
 * @description
 * 
 * Add a keyword to the keywords of a stored MM (table 15.3.6.1.2).
 * @constant
 * @type {number}
 */
export
const TokenAction_addToken: _enum_for_TokenAction.addToken = _enum_for_TokenAction.addToken; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary addToken
 * @description
 * 
 * Add a keyword on a stored MM.
 * @constant
 * @type {number}
 */
export
const addToken: _enum_for_TokenAction.addToken = TokenAction_addToken; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TokenAction_removeToken
 * @description
 * 
 * Remove a keyword from the keywords of a stored MM (table 15.3.6.1.2).
 * @constant
 * @type {number}
 */
export
const TokenAction_removeToken: _enum_for_TokenAction.removeToken = _enum_for_TokenAction.removeToken; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary removeToken
 * @description
 * 
 * Remove a keyword on a stored MM.
 * @constant
 * @type {number}
 */
export
const removeToken: _enum_for_TokenAction.removeToken = TokenAction_removeToken; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TokenAction_filterToken
 * @description
 * 
 * Annex B.15 names this keyword action. Table 15.3.6.1.2 describes only add and
 * remove. Clause 15.3 does not further define filtering.
 * @constant
 * @type {number}
 */
export
const TokenAction_filterToken: _enum_for_TokenAction.filterToken = _enum_for_TokenAction.filterToken; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary filterToken
 * @description
 * 
 * Keyword filter. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const filterToken: _enum_for_TokenAction.filterToken = TokenAction_filterToken; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TokenAction: $.ASN1Decoder<TokenAction> = $._decodeEnumerated;
export const _encode_TokenAction: $.ASN1Encoder<TokenAction> = $._encodeEnumerated;


/* eslint-enable */
