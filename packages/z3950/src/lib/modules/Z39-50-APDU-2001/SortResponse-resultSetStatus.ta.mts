/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortResponse_resultSetStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortResponse-resultSetStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SortResponse_resultSetStatus = INTEGER;

/**
 * @summary SortResponse_resultSetStatus_empty
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_empty: SortResponse_resultSetStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_empty
 * @constant
 * @type {number}
 */
export
const empty: SortResponse_resultSetStatus = SortResponse_resultSetStatus_empty; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_interim
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_interim: SortResponse_resultSetStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_interim
 * @constant
 * @type {number}
 */
export
const interim: SortResponse_resultSetStatus = SortResponse_resultSetStatus_interim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_unchanged
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_unchanged: SortResponse_resultSetStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_unchanged
 * @constant
 * @type {number}
 */
export
const unchanged: SortResponse_resultSetStatus = SortResponse_resultSetStatus_unchanged; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_none
 * @constant
 * @type {number}
 */
export
const SortResponse_resultSetStatus_none: SortResponse_resultSetStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SortResponse_resultSetStatus_none
 * @constant
 * @type {number}
 */
export
const none: SortResponse_resultSetStatus = SortResponse_resultSetStatus_none; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SortResponse_resultSetStatus: $.ASN1Decoder<SortResponse_resultSetStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortResponse_resultSetStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortResponse_resultSetStatus (el: _Element): SortResponse_resultSetStatus {
    if (!_cached_decoder_for_SortResponse_resultSetStatus) { _cached_decoder_for_SortResponse_resultSetStatus = $._decodeInteger; }
    return _cached_decoder_for_SortResponse_resultSetStatus(el);
}

let _cached_encoder_for_SortResponse_resultSetStatus: $.ASN1Encoder<SortResponse_resultSetStatus> | null = null;

/**
 * @summary Encodes a(n) SortResponse_resultSetStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortResponse_resultSetStatus, encoded as an ASN.1 Element.
 */
export
function _encode_SortResponse_resultSetStatus (value: SortResponse_resultSetStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortResponse_resultSetStatus) { _cached_encoder_for_SortResponse_resultSetStatus = $._encodeInteger; }
    return _cached_encoder_for_SortResponse_resultSetStatus(value, elGetter);
}


/* eslint-enable */
