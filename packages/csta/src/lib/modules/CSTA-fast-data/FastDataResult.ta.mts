/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary FastDataResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §24.2.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FastDataResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type FastDataResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FastDataResult: $.ASN1Decoder<FastDataResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FastDataResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FastDataResult (el: _Element): FastDataResult {
    if (!_cached_decoder_for_FastDataResult) { _cached_decoder_for_FastDataResult = $._decode_inextensible_choice<FastDataResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_FastDataResult(el);
}

let _cached_encoder_for_FastDataResult: $.ASN1Encoder<FastDataResult> | null = null;

/**
 * @summary Encodes a(n) FastDataResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FastDataResult, encoded as an ASN.1 Element.
 */
export
function _encode_FastDataResult (value: FastDataResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FastDataResult) { _cached_encoder_for_FastDataResult = $._encode_choice<FastDataResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_FastDataResult(value, elGetter);
}


/* eslint-enable */
