/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary AlternateCallResult
 * @description
 *
 * Positive acknowledgement: `extensions` for security/private data, or `noData`
 * (NULL) when none are returned. Atomic vs multi-step acknowledgement is
 * advertised via capability exchange.
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateCallResult  ::= CHOICE
 * {     extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type AlternateCallResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AlternateCallResult: $.ASN1Decoder<AlternateCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateCallResult (el: _Element): AlternateCallResult {
    if (!_cached_decoder_for_AlternateCallResult) { _cached_decoder_for_AlternateCallResult = $._decode_inextensible_choice<AlternateCallResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_AlternateCallResult(el);
}

let _cached_encoder_for_AlternateCallResult: $.ASN1Encoder<AlternateCallResult> | null = null;

/**
 * @summary Encodes a(n) AlternateCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateCallResult (value: AlternateCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateCallResult) { _cached_encoder_for_AlternateCallResult = $._encode_choice<AlternateCallResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_AlternateCallResult(value, elGetter);
}


/* eslint-enable */
