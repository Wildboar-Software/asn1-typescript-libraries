/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SearchResponse_resultSetStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchResponse-resultSetStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SearchResponse_resultSetStatus = INTEGER;

/**
 * @summary SearchResponse_resultSetStatus_subset
 * @constant
 * @type {number}
 */
export
const SearchResponse_resultSetStatus_subset: SearchResponse_resultSetStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_subset
 * @constant
 * @type {number}
 */
export
const subset: SearchResponse_resultSetStatus = SearchResponse_resultSetStatus_subset; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_interim
 * @constant
 * @type {number}
 */
export
const SearchResponse_resultSetStatus_interim: SearchResponse_resultSetStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_interim
 * @constant
 * @type {number}
 */
export
const interim: SearchResponse_resultSetStatus = SearchResponse_resultSetStatus_interim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_none
 * @constant
 * @type {number}
 */
export
const SearchResponse_resultSetStatus_none: SearchResponse_resultSetStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SearchResponse_resultSetStatus_none
 * @constant
 * @type {number}
 */
export
const none: SearchResponse_resultSetStatus = SearchResponse_resultSetStatus_none; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SearchResponse_resultSetStatus: $.ASN1Decoder<SearchResponse_resultSetStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchResponse_resultSetStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchResponse_resultSetStatus (el: _Element): SearchResponse_resultSetStatus {
    if (!_cached_decoder_for_SearchResponse_resultSetStatus) { _cached_decoder_for_SearchResponse_resultSetStatus = $._decodeInteger; }
    return _cached_decoder_for_SearchResponse_resultSetStatus(el);
}

let _cached_encoder_for_SearchResponse_resultSetStatus: $.ASN1Encoder<SearchResponse_resultSetStatus> | null = null;

/**
 * @summary Encodes a(n) SearchResponse_resultSetStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResponse_resultSetStatus, encoded as an ASN.1 Element.
 */
export
function _encode_SearchResponse_resultSetStatus (value: SearchResponse_resultSetStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchResponse_resultSetStatus) { _cached_encoder_for_SearchResponse_resultSetStatus = $._encodeInteger; }
    return _cached_encoder_for_SearchResponse_resultSetStatus(value, elGetter);
}


/* eslint-enable */
