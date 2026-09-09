/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SuspendDataCollectionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspendDataCollectionResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type SuspendDataCollectionResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SuspendDataCollectionResult: $.ASN1Decoder<SuspendDataCollectionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendDataCollectionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendDataCollectionResult (el: _Element): SuspendDataCollectionResult {
    if (!_cached_decoder_for_SuspendDataCollectionResult) { _cached_decoder_for_SuspendDataCollectionResult = $._decode_inextensible_choice<SuspendDataCollectionResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_SuspendDataCollectionResult(el);
}

let _cached_encoder_for_SuspendDataCollectionResult: $.ASN1Encoder<SuspendDataCollectionResult> | null = null;

/**
 * @summary Encodes a(n) SuspendDataCollectionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendDataCollectionResult, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendDataCollectionResult (value: SuspendDataCollectionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendDataCollectionResult) { _cached_encoder_for_SuspendDataCollectionResult = $._encode_choice<SuspendDataCollectionResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SuspendDataCollectionResult(value, elGetter);
}


/* eslint-enable */
