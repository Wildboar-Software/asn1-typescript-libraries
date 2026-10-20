/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PagedResultsRequest_newRequest, _decode_PagedResultsRequest_newRequest, _encode_PagedResultsRequest_newRequest } from "../DirectoryAbstractService/PagedResultsRequest-newRequest.ta.mjs";
// export { PagedResultsRequest_newRequest, _decode_PagedResultsRequest_newRequest, _encode_PagedResultsRequest_newRequest } from "../DirectoryAbstractService/PagedResultsRequest-newRequest.ta.mjs";


/**
 * @summary PagedResultsRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PagedResultsRequest  ::=  CHOICE {
 *   newRequest
 *     SEQUENCE {pageSize  INTEGER,
 *               sortKeys  SEQUENCE SIZE (1..MAX) OF SortKey OPTIONAL,
 *               reverse   [1]  BOOLEAN DEFAULT FALSE,
 *               unmerged  [2]  BOOLEAN DEFAULT FALSE},
 *   queryReference  OCTET STRING
 * }
 * ```
 */
export
type PagedResultsRequest =
    { newRequest: PagedResultsRequest_newRequest } /* CHOICE_ALT_ROOT */
    | { queryReference: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PagedResultsRequest: $.ASN1Decoder<PagedResultsRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PagedResultsRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PagedResultsRequest (el: _Element): PagedResultsRequest {
    if (!_cached_decoder_for_PagedResultsRequest) { _cached_decoder_for_PagedResultsRequest = $._decode_inextensible_choice<PagedResultsRequest>({
    "UNIVERSAL 16": [ "newRequest", _decode_PagedResultsRequest_newRequest ],
    "UNIVERSAL 4": [ "queryReference", $._decodeOctetString ]
}); }
    return _cached_decoder_for_PagedResultsRequest(el);
}

let _cached_encoder_for_PagedResultsRequest: $.ASN1Encoder<PagedResultsRequest> | null = null;

/**
 * @summary Encodes a(n) PagedResultsRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PagedResultsRequest, encoded as an ASN.1 Element.
 */
export
function _encode_PagedResultsRequest (value: PagedResultsRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PagedResultsRequest) { _cached_encoder_for_PagedResultsRequest = $._encode_choice<PagedResultsRequest>({
    "newRequest": _encode_PagedResultsRequest_newRequest,
    "queryReference": $._encodeOctetString,
}, $.BER); }
    return _cached_encoder_for_PagedResultsRequest(value, elGetter);
}


/* eslint-enable */
