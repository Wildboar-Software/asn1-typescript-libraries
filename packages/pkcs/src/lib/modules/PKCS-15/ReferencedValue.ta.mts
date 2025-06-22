/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { Path, _decode_Path, _encode_Path } from "../PKCS-15/Path.ta.mjs";
import { URL, _decode_URL, _encode_URL } from "../PKCS-15/URL.ta.mjs";

/**
 * @summary ReferencedValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReferencedValue {Type}  ::=  CHOICE {
 *     path Path,
 *     url URL
 * } (CONSTRAINED BY {-- 'path' or 'url' shall point to an object of type -- Type})
 * ```
 */
export type ReferencedValue<_Type> =
    | { path: Path } /* CHOICE_ALT_ROOT */
    | { url: URL } /* CHOICE_ALT_ROOT */;


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ReferencedValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ReferencedValue<Type>(
    _decode_Type: $.ASN1Decoder<Type>
) {
    return $._decode_inextensible_choice<ReferencedValue<Type>>({
        "UNIVERSAL 16": ["path", _decode_Path],
        "UNIVERSAL 19": ["url", _decode_URL],
        "CONTEXT 3": ["url", _decode_URL],
    });
}


/**
 * @summary Returns a function that will encode a(n) ReferencedValue into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ReferencedValue as an ASN.1 element.
 */
export function _get_encoder_for_ReferencedValue<Type>(
    _encode_Type: $.ASN1Encoder<Type>
) {
    return $._encode_choice<ReferencedValue<Type>>(
        {
            path: _encode_Path,
            url: _encode_URL,
        },
        $.BER
    );
}

/* eslint-enable */
