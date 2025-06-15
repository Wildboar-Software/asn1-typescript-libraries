/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    SearchResultData,
    _decode_SearchResultData,
    _encode_SearchResultData,
} from "../DirectoryAbstractService/SearchResultData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary SearchResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResult  ::=  OPTIONALLY-PROTECTED { SearchResultData }
 * ```
 */
export type SearchResult = OPTIONALLY_PROTECTED<SearchResultData>; // DefinedType

let _cached_decoder_for_SearchResult: $.ASN1Decoder<SearchResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResult} The decoded data structure.
 */
export function _decode_SearchResult(el: _Element) {
    if (!_cached_decoder_for_SearchResult) {
        _cached_decoder_for_SearchResult = _get_decoder_for_OPTIONALLY_PROTECTED<SearchResultData>(
            _decode_SearchResultData
        );
    }
    return _cached_decoder_for_SearchResult(el);
}

let _cached_encoder_for_SearchResult: $.ASN1Encoder<SearchResult> | null = null;

/**
 * @summary Encodes a(n) SearchResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult, encoded as an ASN.1 Element.
 */
export function _encode_SearchResult(
    value: SearchResult,
    elGetter: $.ASN1Encoder<SearchResult>
) {
    if (!_cached_encoder_for_SearchResult) {
        _cached_encoder_for_SearchResult = _get_encoder_for_OPTIONALLY_PROTECTED<SearchResultData>(
            _encode_SearchResultData
        );
    }
    return _cached_encoder_for_SearchResult(value, elGetter);
}


/* eslint-enable */
