/* eslint-disable */
import { ASN1Element as _Element, EXTERNAL } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AuthenticationLevel_basicLevels,
    _decode_AuthenticationLevel_basicLevels,
    _encode_AuthenticationLevel_basicLevels,
} from "../BasicAccessControl/AuthenticationLevel-basicLevels.ta.mjs";
/**
 * @summary AuthenticationLevel
 * @description
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

let _cached_decoder_for_AuthenticationLevel: $.ASN1Decoder<AuthenticationLevel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationLevel} The decoded data structure.
 */
export function _decode_AuthenticationLevel(el: _Element) {
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
) {
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
