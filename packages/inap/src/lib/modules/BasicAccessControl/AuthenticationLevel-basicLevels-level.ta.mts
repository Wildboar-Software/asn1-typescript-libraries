/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthenticationLevel_basicLevels_level
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationLevel-basicLevels-level ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AuthenticationLevel_basicLevels_level {
    none = 0,
    simple = 1,
    strong = 2,
}

/**
 * @summary AuthenticationLevel_basicLevels_level
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationLevel-basicLevels-level ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type AuthenticationLevel_basicLevels_level = _enum_for_AuthenticationLevel_basicLevels_level;

/**
 * @summary AuthenticationLevel_basicLevels_level
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationLevel-basicLevels-level ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const AuthenticationLevel_basicLevels_level = _enum_for_AuthenticationLevel_basicLevels_level;

/**
 * @summary AuthenticationLevel_basicLevels_level_none
 * @constant
 * @type {number}
 */
export
const AuthenticationLevel_basicLevels_level_none: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationLevel_basicLevels_level_simple
 * @constant
 * @type {number}
 */
export
const AuthenticationLevel_basicLevels_level_simple: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level.simple; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary simple
 * @constant
 * @type {number}
 */
export
const simple: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level.simple; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationLevel_basicLevels_level_strong
 * @constant
 * @type {number}
 */
export
const AuthenticationLevel_basicLevels_level_strong: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level.strong; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary strong
 * @constant
 * @type {number}
 */
export
const strong: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level.strong; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AuthenticationLevel_basicLevels_level: $.ASN1Decoder<AuthenticationLevel_basicLevels_level> = $._decodeEnumerated;

export
const _encode_AuthenticationLevel_basicLevels_level: $.ASN1Encoder<AuthenticationLevel_basicLevels_level> = $._encodeEnumerated;

/* eslint-enable */
