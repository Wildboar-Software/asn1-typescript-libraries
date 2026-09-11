/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary EscapeRegisterArgument
 * @description
 *
 * `extensions` or empty `noData` (ECMA-269 §29.1.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeRegisterArgument  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type EscapeRegisterArgument =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EscapeRegisterArgument: $.ASN1Decoder<EscapeRegisterArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegisterArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegisterArgument (el: _Element): EscapeRegisterArgument {
    if (!_cached_decoder_for_EscapeRegisterArgument) { _cached_decoder_for_EscapeRegisterArgument = $._decode_inextensible_choice<EscapeRegisterArgument>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_EscapeRegisterArgument(el);
}

let _cached_encoder_for_EscapeRegisterArgument: $.ASN1Encoder<EscapeRegisterArgument> | null = null;

/**
 * @summary Encodes a(n) EscapeRegisterArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegisterArgument, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegisterArgument (value: EscapeRegisterArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegisterArgument) { _cached_encoder_for_EscapeRegisterArgument = $._encode_choice<EscapeRegisterArgument>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_EscapeRegisterArgument(value, elGetter);
}


/* eslint-enable */
