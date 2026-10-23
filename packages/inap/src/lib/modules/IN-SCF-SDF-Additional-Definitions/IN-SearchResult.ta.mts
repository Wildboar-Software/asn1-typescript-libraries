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

/**
 * @summary Decodes an ASN.1 element into a(n) IN_SearchResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_SearchResult: $.ASN1Decoder<IN_SearchResult> = _decode_SearchResult;

/**
 * @summary Encodes a(n) IN_SearchResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_SearchResult, encoded as an ASN.1 Element.
 */
export const _encode_IN_SearchResult: (value: IN_SearchResult, elGetter: $.ASN1Encoder<any>) => _Element = _encode_SearchResult;


/* eslint-enable */
