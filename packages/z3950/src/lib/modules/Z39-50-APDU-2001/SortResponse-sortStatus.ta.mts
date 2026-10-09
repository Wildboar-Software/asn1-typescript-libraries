/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortResponse_sortStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortResponse-sortStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SortResponse_sortStatus = INTEGER;

/**
 * @summary SortResponse_sortStatus_success
 * @constant
 * @type {number}
 */
export
const SortResponse_sortStatus_success: SortResponse_sortStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_success
 * @constant
 * @type {number}
 */
export
const success: SortResponse_sortStatus = SortResponse_sortStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_partial_1
 * @constant
 * @type {number}
 */
export
const SortResponse_sortStatus_partial_1: SortResponse_sortStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_partial_1
 * @constant
 * @type {number}
 */
export
const partial_1: SortResponse_sortStatus = SortResponse_sortStatus_partial_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_failure
 * @constant
 * @type {number}
 */
export
const SortResponse_sortStatus_failure: SortResponse_sortStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_sortStatus_failure
 * @constant
 * @type {number}
 */
export
const failure: SortResponse_sortStatus = SortResponse_sortStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SortResponse_sortStatus: $.ASN1Decoder<SortResponse_sortStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortResponse_sortStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortResponse_sortStatus (el: _Element): SortResponse_sortStatus {
    if (!_cached_decoder_for_SortResponse_sortStatus) { _cached_decoder_for_SortResponse_sortStatus = $._decodeInteger; }
    return _cached_decoder_for_SortResponse_sortStatus(el);
}

let _cached_encoder_for_SortResponse_sortStatus: $.ASN1Encoder<SortResponse_sortStatus> | null = null;

/**
 * @summary Encodes a(n) SortResponse_sortStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortResponse_sortStatus, encoded as an ASN.1 Element.
 */
export
function _encode_SortResponse_sortStatus (value: SortResponse_sortStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortResponse_sortStatus) { _cached_encoder_for_SortResponse_sortStatus = $._encodeInteger; }
    return _cached_encoder_for_SortResponse_sortStatus(value, elGetter);
}


/* eslint-enable */
