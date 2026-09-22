/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_scan_posInResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-scan-posInResponse ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_scan_posInResponse = INTEGER;

/**
 * @summary DiagFormat_scan_posInResponse_mustBeOne
 * @constant
 * @type {number}
 */
export
const DiagFormat_scan_posInResponse_mustBeOne: DiagFormat_scan_posInResponse = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_mustBeOne
 * @constant
 * @type {number}
 */
export
const mustBeOne: DiagFormat_scan_posInResponse = DiagFormat_scan_posInResponse_mustBeOne; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_mustBePositive
 * @constant
 * @type {number}
 */
export
const DiagFormat_scan_posInResponse_mustBePositive: DiagFormat_scan_posInResponse = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_mustBePositive
 * @constant
 * @type {number}
 */
export
const mustBePositive: DiagFormat_scan_posInResponse = DiagFormat_scan_posInResponse_mustBePositive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_mustBeNonNegative
 * @constant
 * @type {number}
 */
export
const DiagFormat_scan_posInResponse_mustBeNonNegative: DiagFormat_scan_posInResponse = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_mustBeNonNegative
 * @constant
 * @type {number}
 */
export
const mustBeNonNegative: DiagFormat_scan_posInResponse = DiagFormat_scan_posInResponse_mustBeNonNegative; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_other
 * @constant
 * @type {number}
 */
export
const DiagFormat_scan_posInResponse_other: DiagFormat_scan_posInResponse = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_other
 * @constant
 * @type {number}
 */
export
const other: DiagFormat_scan_posInResponse = DiagFormat_scan_posInResponse_other; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_scan_posInResponse: $.ASN1Decoder<DiagFormat_scan_posInResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_scan_posInResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_scan_posInResponse (el: _Element): DiagFormat_scan_posInResponse {
    if (!_cached_decoder_for_DiagFormat_scan_posInResponse) { _cached_decoder_for_DiagFormat_scan_posInResponse = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_scan_posInResponse(el);
}

let _cached_encoder_for_DiagFormat_scan_posInResponse: $.ASN1Encoder<DiagFormat_scan_posInResponse> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_scan_posInResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_scan_posInResponse, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_scan_posInResponse (value: DiagFormat_scan_posInResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_scan_posInResponse) { _cached_encoder_for_DiagFormat_scan_posInResponse = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_scan_posInResponse(value, elGetter);
}


/* eslint-enable */
