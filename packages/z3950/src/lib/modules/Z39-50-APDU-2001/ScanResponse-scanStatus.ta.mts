/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScanResponse_scanStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScanResponse-scanStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ScanResponse_scanStatus = INTEGER;

/**
 * @summary ScanResponse_scanStatus_success
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_success: ScanResponse_scanStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_success
 * @constant
 * @type {number}
 */
export
const success: ScanResponse_scanStatus = ScanResponse_scanStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_1
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_1: ScanResponse_scanStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_1
 * @constant
 * @type {number}
 */
export
const partial_1: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_2
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_2: ScanResponse_scanStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_2
 * @constant
 * @type {number}
 */
export
const partial_2: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_3
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_3: ScanResponse_scanStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_3
 * @constant
 * @type {number}
 */
export
const partial_3: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_4
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_4: ScanResponse_scanStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_4
 * @constant
 * @type {number}
 */
export
const partial_4: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_5
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_partial_5: ScanResponse_scanStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_partial_5
 * @constant
 * @type {number}
 */
export
const partial_5: ScanResponse_scanStatus = ScanResponse_scanStatus_partial_5; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_failure
 * @constant
 * @type {number}
 */
export
const ScanResponse_scanStatus_failure: ScanResponse_scanStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ScanResponse_scanStatus_failure
 * @constant
 * @type {number}
 */
export
const failure: ScanResponse_scanStatus = ScanResponse_scanStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ScanResponse_scanStatus: $.ASN1Decoder<ScanResponse_scanStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScanResponse_scanStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScanResponse_scanStatus (el: _Element): ScanResponse_scanStatus {
    if (!_cached_decoder_for_ScanResponse_scanStatus) { _cached_decoder_for_ScanResponse_scanStatus = $._decodeInteger; }
    return _cached_decoder_for_ScanResponse_scanStatus(el);
}

let _cached_encoder_for_ScanResponse_scanStatus: $.ASN1Encoder<ScanResponse_scanStatus> | null = null;

/**
 * @summary Encodes a(n) ScanResponse_scanStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScanResponse_scanStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ScanResponse_scanStatus (value: ScanResponse_scanStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScanResponse_scanStatus) { _cached_encoder_for_ScanResponse_scanStatus = $._encodeInteger; }
    return _cached_encoder_for_ScanResponse_scanStatus(value, elGetter);
}


/* eslint-enable */
