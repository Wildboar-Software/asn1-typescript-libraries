/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SearchResult, _decode_SearchResult, _encode_SearchResult } from "../DirectoryAbstractService/SearchResult.ta.mjs";
// export { SearchResult, _decode_SearchResult, _encode_SearchResult } from "../DirectoryAbstractService/SearchResult.ta.mjs";


/**
 * @summary IN_SearchResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-SearchResult  ::= 
 *   SearchResult
 *     (WITH COMPONENTS {
 *        ...,
 *        toBeProtected  (WITH COMPONENTS {
 *                          ...,
 *                          searchInfo  (WITH COMPONENTS {
 *                                         ...,
 *                                         entries                  (WITH
 *                                                                     COMPONENT
 *                                                                     (IN-EntryInformation)),
 *                                         partialOutcomeQualifier  (PartialOutcomeQualifier
 *                                                                     (WITH COMPONENTS {
 *                                                                     ...,
 *                                                                     queryReference  ABSENT
 *                                                                     })) OPTIONAL
 *                                       })
 *                        })
 *      })
 * ```
 */
export
type IN_SearchResult = SearchResult; // DefinedType

let _cached_decoder_for_IN_SearchResult: $.ASN1Decoder<IN_SearchResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_SearchResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_SearchResult (el: _Element): IN_SearchResult {
    if (!_cached_decoder_for_IN_SearchResult) { _cached_decoder_for_IN_SearchResult = _decode_SearchResult; }
    return _cached_decoder_for_IN_SearchResult(el);
}

let _cached_encoder_for_IN_SearchResult: $.ASN1Encoder<IN_SearchResult> | null = null;

/**
 * @summary Encodes a(n) IN_SearchResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_SearchResult, encoded as an ASN.1 Element.
 */
export
function _encode_IN_SearchResult (value: IN_SearchResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_SearchResult) { _cached_encoder_for_IN_SearchResult = _encode_SearchResult; }
    return _cached_encoder_for_IN_SearchResult(value, elGetter);
}


/* eslint-enable */
