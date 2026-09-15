/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CallBackMessageNonCallRelatedResult
 * @description
 *
 * Positive ack. `noData` if only the ROSE result is needed; `extensions`
 * carries `security`/`privateData`. ECMA-269 §22.1.2.2.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackMessageNonCallRelatedResult  ::=  CHOICE
 * {     extensions            CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type CallBackMessageNonCallRelatedResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallBackMessageNonCallRelatedResult: $.ASN1Decoder<CallBackMessageNonCallRelatedResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackMessageNonCallRelatedResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackMessageNonCallRelatedResult (el: _Element): CallBackMessageNonCallRelatedResult {
    if (!_cached_decoder_for_CallBackMessageNonCallRelatedResult) { _cached_decoder_for_CallBackMessageNonCallRelatedResult = $._decode_inextensible_choice<CallBackMessageNonCallRelatedResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_CallBackMessageNonCallRelatedResult(el);
}

let _cached_encoder_for_CallBackMessageNonCallRelatedResult: $.ASN1Encoder<CallBackMessageNonCallRelatedResult> | null = null;

/**
 * @summary Encodes a(n) CallBackMessageNonCallRelatedResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackMessageNonCallRelatedResult, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackMessageNonCallRelatedResult (value: CallBackMessageNonCallRelatedResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackMessageNonCallRelatedResult) { _cached_encoder_for_CallBackMessageNonCallRelatedResult = $._encode_choice<CallBackMessageNonCallRelatedResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CallBackMessageNonCallRelatedResult(value, elGetter);
}


/* eslint-enable */
