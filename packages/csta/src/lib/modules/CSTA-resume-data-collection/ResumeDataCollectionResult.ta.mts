/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ResumeDataCollectionResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §25.1.4.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResumeDataCollectionResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type ResumeDataCollectionResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ResumeDataCollectionResult: $.ASN1Decoder<ResumeDataCollectionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResumeDataCollectionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResumeDataCollectionResult (el: _Element): ResumeDataCollectionResult {
    if (!_cached_decoder_for_ResumeDataCollectionResult) { _cached_decoder_for_ResumeDataCollectionResult = $._decode_inextensible_choice<ResumeDataCollectionResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_ResumeDataCollectionResult(el);
}

let _cached_encoder_for_ResumeDataCollectionResult: $.ASN1Encoder<ResumeDataCollectionResult> | null = null;

/**
 * @summary Encodes a(n) ResumeDataCollectionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResumeDataCollectionResult, encoded as an ASN.1 Element.
 */
export
function _encode_ResumeDataCollectionResult (value: ResumeDataCollectionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResumeDataCollectionResult) { _cached_encoder_for_ResumeDataCollectionResult = $._encode_choice<ResumeDataCollectionResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ResumeDataCollectionResult(value, elGetter);
}


/* eslint-enable */
