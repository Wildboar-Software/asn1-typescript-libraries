/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIGNATURE, _get_decoder_for_SIGNATURE, _get_encoder_for_SIGNATURE } from "../AuthenticationFramework/SIGNATURE.ta.mjs";
// export { SIGNATURE, _get_decoder_for_SIGNATURE, _get_encoder_for_SIGNATURE } from "../AuthenticationFramework/SIGNATURE.ta.mjs";


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
export
type SimpleCredentials_password =
    { unprotected: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { protected_: SIGNATURE<OCTET_STRING> } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SimpleCredentials_password: $.ASN1Decoder<SimpleCredentials_password> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleCredentials_password
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SimpleCredentials_password (el: _Element): SimpleCredentials_password {
    if (!_cached_decoder_for_SimpleCredentials_password) { _cached_decoder_for_SimpleCredentials_password = $._decode_inextensible_choice<SimpleCredentials_password>({
    "UNIVERSAL 4": [ "unprotected", $._decodeOctetString ],
    "UNIVERSAL 16": [ "protected_", _get_decoder_for_SIGNATURE<OCTET_STRING>($._decodeOctetString) ]
}); }
    return _cached_decoder_for_SimpleCredentials_password(el);
}

let _cached_encoder_for_SimpleCredentials_password: $.ASN1Encoder<SimpleCredentials_password> | null = null;

/**
 * @summary Encodes a(n) SimpleCredentials_password into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleCredentials_password, encoded as an ASN.1 Element.
 */
export
function _encode_SimpleCredentials_password (value: SimpleCredentials_password, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SimpleCredentials_password) { _cached_encoder_for_SimpleCredentials_password = $._encode_choice<SimpleCredentials_password>({
    "unprotected": $._encodeOctetString,
    "protected_": _get_encoder_for_SIGNATURE<OCTET_STRING>($._encodeOctetString),
}, $.BER); }
    return _cached_encoder_for_SimpleCredentials_password(value, elGetter);
}


/* eslint-enable */
