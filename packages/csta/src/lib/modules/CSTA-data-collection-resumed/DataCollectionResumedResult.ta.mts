/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DataCollectionResumedResult
 * @description
 *
 * Positive acknowledgement is `extensions` or empty `noData` (atomic
 * acknowledgement model). (ECMA-269 §25.1.2.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataCollectionResumedResult  ::=  CHOICE
 * {    extensions             CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type DataCollectionResumedResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DataCollectionResumedResult: $.ASN1Decoder<DataCollectionResumedResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataCollectionResumedResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataCollectionResumedResult (el: _Element): DataCollectionResumedResult {
    if (!_cached_decoder_for_DataCollectionResumedResult) { _cached_decoder_for_DataCollectionResumedResult = $._decode_inextensible_choice<DataCollectionResumedResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_DataCollectionResumedResult(el);
}

let _cached_encoder_for_DataCollectionResumedResult: $.ASN1Encoder<DataCollectionResumedResult> | null = null;

/**
 * @summary Encodes a(n) DataCollectionResumedResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataCollectionResumedResult, encoded as an ASN.1 Element.
 */
export
function _encode_DataCollectionResumedResult (value: DataCollectionResumedResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataCollectionResumedResult) { _cached_encoder_for_DataCollectionResumedResult = $._encode_choice<DataCollectionResumedResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_DataCollectionResumedResult(value, elGetter);
}


/* eslint-enable */
