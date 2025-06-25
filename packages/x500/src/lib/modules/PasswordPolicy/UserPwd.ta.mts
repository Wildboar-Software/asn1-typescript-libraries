/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UserPwd_encrypted,
    _decode_UserPwd_encrypted,
    _encode_UserPwd_encrypted,
} from "../PasswordPolicy/UserPwd-encrypted.ta.mjs";
/**
 * @summary UserPwd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserPwd  ::=  CHOICE {
 *   clear                 UTF8String,
 *   encrypted             SEQUENCE {
 *     algorithmIdentifier   AlgorithmIdentifier{{SupportedAlgorithms}},
 *     encryptedString       OCTET STRING,
 *     ...},
 *   ...}
 * ```
 */
export type UserPwd =
    | { clear: UTF8String } /* CHOICE_ALT_ROOT */
    | { encrypted: UserPwd_encrypted } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_UserPwd: $.ASN1Decoder<UserPwd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserPwd
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserPwd} The decoded data structure.
 */
export function _decode_UserPwd(el: _Element): UserPwd {
    if (!_cached_decoder_for_UserPwd) {
        _cached_decoder_for_UserPwd = $._decode_extensible_choice<UserPwd>({
            "UNIVERSAL 12": ["clear", $._decodeUTF8String],
            "UNIVERSAL 16": ["encrypted", _decode_UserPwd_encrypted],
        });
    }
    return _cached_decoder_for_UserPwd(el);
}

let _cached_encoder_for_UserPwd: $.ASN1Encoder<UserPwd> | null = null;

/**
 * @summary Encodes a(n) UserPwd into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserPwd, encoded as an ASN.1 Element.
 */
export function _encode_UserPwd(
    value: UserPwd,
    elGetter: $.ASN1Encoder<UserPwd>
): _Element {
    if (!_cached_encoder_for_UserPwd) {
        _cached_encoder_for_UserPwd = $._encode_choice<UserPwd>(
            {
                clear: $._encodeUTF8String,
                encrypted: _encode_UserPwd_encrypted,
            },
            $.DER
        );
    }
    return _cached_encoder_for_UserPwd(value, elGetter);
}


/* eslint-enable */
