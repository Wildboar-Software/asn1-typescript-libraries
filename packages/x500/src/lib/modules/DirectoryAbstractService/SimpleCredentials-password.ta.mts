/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "../AuthenticationFramework/HASH.ta.mjs";
import {
    UserPwd,
    _decode_UserPwd,
    _encode_UserPwd,
} from "../PasswordPolicy/UserPwd.ta.mjs";
/**
 * @summary SimpleCredentials_password
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SimpleCredentials-password ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SimpleCredentials_password =
    | { unprotected: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { protected_: HASH<OCTET_STRING> } /* CHOICE_ALT_ROOT */
    | { userPwd: UserPwd } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SimpleCredentials_password: $.ASN1Decoder<SimpleCredentials_password> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleCredentials_password
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SimpleCredentials_password} The decoded data structure.
 */
export function _decode_SimpleCredentials_password(el: _Element): SimpleCredentials_password {
    if (!_cached_decoder_for_SimpleCredentials_password) {
        _cached_decoder_for_SimpleCredentials_password = $._decode_extensible_choice<SimpleCredentials_password>(
            {
                "UNIVERSAL 4": ["unprotected", $._decodeOctetString],
                "UNIVERSAL 16": [
                    "protected_",
                    _get_decoder_for_HASH<OCTET_STRING>($._decodeOctetString),
                ],
                "CONTEXT 0": [
                    "userPwd",
                    $._decode_explicit<UserPwd>(() => _decode_UserPwd),
                ],
            }
        );
    }
    return _cached_decoder_for_SimpleCredentials_password(el);
}

let _cached_encoder_for_SimpleCredentials_password: $.ASN1Encoder<SimpleCredentials_password> | null = null;

/**
 * @summary Encodes a(n) SimpleCredentials_password into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleCredentials_password, encoded as an ASN.1 Element.
 */
export function _encode_SimpleCredentials_password(
    value: SimpleCredentials_password,
    elGetter: $.ASN1Encoder<SimpleCredentials_password>
): _Element {
    if (!_cached_encoder_for_SimpleCredentials_password) {
        _cached_encoder_for_SimpleCredentials_password = $._encode_choice<SimpleCredentials_password>(
            {
                unprotected: $._encodeOctetString,
                protected_: _get_encoder_for_HASH<OCTET_STRING>(
                    $._encodeOctetString
                ),
                userPwd: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_UserPwd,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SimpleCredentials_password(value, elGetter);
}


/* eslint-enable */
