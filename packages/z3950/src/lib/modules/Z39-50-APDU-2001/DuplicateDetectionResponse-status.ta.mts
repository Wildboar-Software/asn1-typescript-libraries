/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DuplicateDetectionResponse_status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DuplicateDetectionResponse-status ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DuplicateDetectionResponse_status = INTEGER;

/**
 * @summary DuplicateDetectionResponse_status_success
 * @constant
 * @type {number}
 */
export
const DuplicateDetectionResponse_status_success: DuplicateDetectionResponse_status = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DuplicateDetectionResponse_status_success
 * @constant
 * @type {number}
 */
export
const success: DuplicateDetectionResponse_status = DuplicateDetectionResponse_status_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DuplicateDetectionResponse_status_failure
 * @constant
 * @type {number}
 */
export
const DuplicateDetectionResponse_status_failure: DuplicateDetectionResponse_status = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DuplicateDetectionResponse_status_failure
 * @constant
 * @type {number}
 */
export
const failure: DuplicateDetectionResponse_status = DuplicateDetectionResponse_status_failure; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DuplicateDetectionResponse_status: $.ASN1Decoder<DuplicateDetectionResponse_status> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DuplicateDetectionResponse_status
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DuplicateDetectionResponse_status (el: _Element): DuplicateDetectionResponse_status {
    if (!_cached_decoder_for_DuplicateDetectionResponse_status) { _cached_decoder_for_DuplicateDetectionResponse_status = $._decodeInteger; }
    return _cached_decoder_for_DuplicateDetectionResponse_status(el);
}

let _cached_encoder_for_DuplicateDetectionResponse_status: $.ASN1Encoder<DuplicateDetectionResponse_status> | null = null;

/**
 * @summary Encodes a(n) DuplicateDetectionResponse_status into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DuplicateDetectionResponse_status, encoded as an ASN.1 Element.
 */
export
function _encode_DuplicateDetectionResponse_status (value: DuplicateDetectionResponse_status, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DuplicateDetectionResponse_status) { _cached_encoder_for_DuplicateDetectionResponse_status = $._encodeInteger; }
    return _cached_encoder_for_DuplicateDetectionResponse_status(value, elGetter);
}


/* eslint-enable */
