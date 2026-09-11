/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StopDataCollectionResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §25.1.6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopDataCollectionResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type StopDataCollectionResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_StopDataCollectionResult: $.ASN1Decoder<StopDataCollectionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopDataCollectionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopDataCollectionResult (el: _Element): StopDataCollectionResult {
    if (!_cached_decoder_for_StopDataCollectionResult) { _cached_decoder_for_StopDataCollectionResult = $._decode_inextensible_choice<StopDataCollectionResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_StopDataCollectionResult(el);
}

let _cached_encoder_for_StopDataCollectionResult: $.ASN1Encoder<StopDataCollectionResult> | null = null;

/**
 * @summary Encodes a(n) StopDataCollectionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopDataCollectionResult, encoded as an ASN.1 Element.
 */
export
function _encode_StopDataCollectionResult (value: StopDataCollectionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopDataCollectionResult) { _cached_encoder_for_StopDataCollectionResult = $._encode_choice<StopDataCollectionResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_StopDataCollectionResult(value, elGetter);
}


/* eslint-enable */
