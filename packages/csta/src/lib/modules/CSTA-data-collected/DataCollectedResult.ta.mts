/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DataCollectedResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollectedResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type DataCollectedResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DataCollectedResult: $.ASN1Decoder<DataCollectedResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataCollectedResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataCollectedResult (el: _Element): DataCollectedResult {
    if (!_cached_decoder_for_DataCollectedResult) { _cached_decoder_for_DataCollectedResult = $._decode_inextensible_choice<DataCollectedResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_DataCollectedResult(el);
}

let _cached_encoder_for_DataCollectedResult: $.ASN1Encoder<DataCollectedResult> | null = null;

/**
 * @summary Encodes a(n) DataCollectedResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCollectedResult, encoded as an ASN.1 Element.
 */
export
function _encode_DataCollectedResult (value: DataCollectedResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataCollectedResult) { _cached_encoder_for_DataCollectedResult = $._encode_choice<DataCollectedResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_DataCollectedResult(value, elGetter);
}


/* eslint-enable */
