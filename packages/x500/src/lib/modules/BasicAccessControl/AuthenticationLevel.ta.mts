/* eslint-disable */
import { ASN1Element as _Element, type EXTERNAL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AuthenticationLevel_basicLevels,
    type AuthenticationLevel_basicLevelsJSON,
    _decode_AuthenticationLevel_basicLevels,
    _encode_AuthenticationLevel_basicLevels,
} from "../BasicAccessControl/AuthenticationLevel-basicLevels.ta.mjs";
/**
 * @summary AuthenticationLevel
 * @description
 *
 * Minimum requestor authentication for this ACI. `basicLevels.level`: `none`(0)
 * < `simple`(1) < `strong`(2). Identification without a password is `none`;
 * `simple` requires a password. `localQualifier` is compared only if present on
 * the ACI (requestor must be ≥); if omitted, the requestor's qualifier is
 * ignored. `signed` DEFAULT FALSE: TRUE requires a signed request. `other` is
 * EXTERNAL; comparison is a local matter. Deny ACI with a high level also
 * retains the denial when the requestor cannot prove non-membership.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationLevel  ::=  CHOICE {
 *   basicLevels     SEQUENCE {
 *     level           ENUMERATED {none(0), simple(1), strong(2),...},
 *     localQualifier  INTEGER OPTIONAL,
 *     signed          BOOLEAN DEFAULT FALSE,
 *     ...},
 *   other           EXTERNAL,
 *   ... }
 * ```
 */
export type AuthenticationLevel =
    | { basicLevels: AuthenticationLevel_basicLevels } /* CHOICE_ALT_ROOT */
    | { other: EXTERNAL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

/**
 * JSON Encoding Rules encoding of {@link AuthenticationLevel}.
 * An unrecognized alternative is `{ _unrecognized }`.
 */
export type AuthenticationLevelJSON =
    | { basicLevels: AuthenticationLevel_basicLevelsJSON }
    | { other: unknown }
    | { _unrecognized: unknown };

/**
 * @summary GSER of an `AuthenticationLevel` CHOICE
 * @description
 *
 * `basicLevels:` plus the nested SEQUENCE, or `other:` plus the
 * `EXTERNAL` value notation. An unrecognized alternative is
 * `unrecognized:` and the element's value notation.
 *
 * @param value The authentication level
 * @returns `basicLevels:{ level none }` or another alternative
 * @function
 * @public
 */
export function authenticationLevelToString(
    value: AuthenticationLevel,
): string {
    if ("basicLevels" in value) {
        return `basicLevels:${value.basicLevels.toString()}`;
    }
    if ("other" in value) {
        return `other:${value.other.toString()}`;
    }
    return `unrecognized:${value.toString()}`;
}

/**
 * @summary Convert `AuthenticationLevel` to JSON, loosely following ITU-T X.697
 * @description
 *
 * A one-member object whose key is the CHOICE alternative.
 * `other` is the `EXTERNAL` JSON. An unrecognized alternative is
 * `{ _unrecognized }`.
 *
 * @param value The authentication level
 * @returns The JSON Encoding Rules encoding of this value
 * @function
 * @public
 */
export function authenticationLevelToJSON(
    value: AuthenticationLevel,
): AuthenticationLevelJSON {
    if ("basicLevels" in value) {
        return { basicLevels: value.basicLevels.toJSON() };
    }
    if ("other" in value) {
        return { other: value.other.toJSON() };
    }
    return { _unrecognized: value.toJSON() };
}

let _cached_decoder_for_AuthenticationLevel: $.ASN1Decoder<AuthenticationLevel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationLevel} The decoded data structure.
 */
export function _decode_AuthenticationLevel(el: _Element): AuthenticationLevel {
    if (!_cached_decoder_for_AuthenticationLevel) {
        _cached_decoder_for_AuthenticationLevel = $._decode_extensible_choice<AuthenticationLevel>(
            {
                "UNIVERSAL 16": [
                    "basicLevels",
                    _decode_AuthenticationLevel_basicLevels,
                ],
                "UNIVERSAL 8": ["other", $._decodeExternal],
            }
        );
    }
    return _cached_decoder_for_AuthenticationLevel(el);
}

let _cached_encoder_for_AuthenticationLevel: $.ASN1Encoder<AuthenticationLevel> | null = null;

/**
 * @summary Encodes a(n) AuthenticationLevel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationLevel, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationLevel(
    value: AuthenticationLevel,
    elGetter: $.ASN1Encoder<AuthenticationLevel>
): _Element {
    if (!_cached_encoder_for_AuthenticationLevel) {
        _cached_encoder_for_AuthenticationLevel = $._encode_choice<AuthenticationLevel>(
            {
                basicLevels: _encode_AuthenticationLevel_basicLevels,
                other: $._encodeExternal,
            },
            $.DER
        );
    }
    return _cached_encoder_for_AuthenticationLevel(value, elGetter);
}


/* eslint-enable */
