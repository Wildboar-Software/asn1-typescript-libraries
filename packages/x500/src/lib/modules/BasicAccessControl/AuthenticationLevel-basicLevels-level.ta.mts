/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_AuthenticationLevel_basicLevels_level {
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
export type AuthenticationLevel_basicLevels_level =
    | _enum_for_AuthenticationLevel_basicLevels_level
    | ENUMERATED;

/**
 * @summary AuthenticationLevel_basicLevels_level_none
 * @constant
 * @type {number}
 */
export const AuthenticationLevel_basicLevels_level_none: AuthenticationLevel_basicLevels_level = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export const none: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level_none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationLevel_basicLevels_level_simple
 * @constant
 * @type {number}
 */
export const AuthenticationLevel_basicLevels_level_simple: AuthenticationLevel_basicLevels_level = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary simple
 * @constant
 * @type {number}
 */
export const simple: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level_simple; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationLevel_basicLevels_level_strong
 * @constant
 * @type {number}
 */
export const AuthenticationLevel_basicLevels_level_strong: AuthenticationLevel_basicLevels_level = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary strong
 * @constant
 * @type {number}
 */
export const strong: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level_strong; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AuthenticationLevel_basicLevels_level: $.ASN1Decoder<AuthenticationLevel_basicLevels_level> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationLevel_basicLevels_level
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationLevel_basicLevels_level} The decoded data structure.
 */
export function _decode_AuthenticationLevel_basicLevels_level(el: _Element) {
    if (!_cached_decoder_for_AuthenticationLevel_basicLevels_level) {
        _cached_decoder_for_AuthenticationLevel_basicLevels_level =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_AuthenticationLevel_basicLevels_level(el);
}

let _cached_encoder_for_AuthenticationLevel_basicLevels_level: $.ASN1Encoder<AuthenticationLevel_basicLevels_level> | null = null;

/**
 * @summary Encodes a(n) AuthenticationLevel_basicLevels_level into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationLevel_basicLevels_level, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationLevel_basicLevels_level(
    value: AuthenticationLevel_basicLevels_level,
    elGetter: $.ASN1Encoder<AuthenticationLevel_basicLevels_level>
) {
    if (!_cached_encoder_for_AuthenticationLevel_basicLevels_level) {
        _cached_encoder_for_AuthenticationLevel_basicLevels_level =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_AuthenticationLevel_basicLevels_level(
        value,
        elGetter
    );
}


/* eslint-enable */
