/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SuspendDataPathResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §24.2.10.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspendDataPathResult  ::=  CHOICE
 * {    extensions            CSTACommonArguments,
 *     noData                NULL }
 * ```
 */
export
type SuspendDataPathResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SuspendDataPathResult: $.ASN1Decoder<SuspendDataPathResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendDataPathResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendDataPathResult (el: _Element): SuspendDataPathResult {
    if (!_cached_decoder_for_SuspendDataPathResult) { _cached_decoder_for_SuspendDataPathResult = $._decode_inextensible_choice<SuspendDataPathResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SuspendDataPathResult(el);
}

let _cached_encoder_for_SuspendDataPathResult: $.ASN1Encoder<SuspendDataPathResult> | null = null;

/**
 * @summary Encodes a(n) SuspendDataPathResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendDataPathResult, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendDataPathResult (value: SuspendDataPathResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendDataPathResult) { _cached_encoder_for_SuspendDataPathResult = $._encode_choice<SuspendDataPathResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SuspendDataPathResult(value, elGetter);
}


/* eslint-enable */
