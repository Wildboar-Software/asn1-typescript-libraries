/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SearchResult,
    _decode_SearchResult,
    _encode_SearchResult,
} from "../DirectoryAbstractService/SearchResult.ta.mjs";
import {
    SearchResultData_searchInfo,
    _decode_SearchResultData_searchInfo,
    _encode_SearchResultData_searchInfo,
} from "../DirectoryAbstractService/SearchResultData-searchInfo.ta.mjs";
/**
 * @summary SearchResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResultData  ::=  CHOICE {
 *   searchInfo                    SET {
 *     name                          Name OPTIONAL,
 *     entries                  [0]  SET OF EntryInformation,
 *     partialOutcomeQualifier  [2]  PartialOutcomeQualifier OPTIONAL,
 *     altMatching              [3]  BOOLEAN DEFAULT FALSE,
 *     ...,
 *     ...,
 *     COMPONENTS OF                 CommonResults
 *     },
 *   uncorrelatedSearchInfo   [0]  SET OF SearchResult,
 *   ... }
 * ```
 */
export type SearchResultData =
    | { searchInfo: SearchResultData_searchInfo } /* CHOICE_ALT_ROOT */
    | { uncorrelatedSearchInfo: SearchResult[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SearchResultData: $.ASN1Decoder<SearchResultData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResultData} The decoded data structure.
 */
export function _decode_SearchResultData(el: _Element): SearchResultData {
    if (!_cached_decoder_for_SearchResultData) {
        _cached_decoder_for_SearchResultData = $._decode_extensible_choice<SearchResultData>(
            {
                "UNIVERSAL 17": [
                    "searchInfo",
                    _decode_SearchResultData_searchInfo,
                ],
                "CONTEXT 0": [
                    "uncorrelatedSearchInfo",
                    $._decode_explicit<SearchResult[]>(() =>
                        $._decodeSetOf<SearchResult>(() => _decode_SearchResult)
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SearchResultData(el);
}

let _cached_encoder_for_SearchResultData: $.ASN1Encoder<SearchResultData> | null = null;

/**
 * @summary Encodes a(n) SearchResultData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResultData, encoded as an ASN.1 Element.
 */
export function _encode_SearchResultData(
    value: SearchResultData,
    elGetter: $.ASN1Encoder<SearchResultData>
): _Element {
    if (!_cached_encoder_for_SearchResultData) {
        _cached_encoder_for_SearchResultData = $._encode_choice<SearchResultData>(
            {
                searchInfo: _encode_SearchResultData_searchInfo,
                uncorrelatedSearchInfo: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () =>
                        $._encodeSetOf<SearchResult>(
                            () => _encode_SearchResult,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SearchResultData(value, elGetter);
}


/* eslint-enable */
