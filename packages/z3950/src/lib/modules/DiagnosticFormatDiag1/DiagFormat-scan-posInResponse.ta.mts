/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_scan_posInResponse
 * @description
 * 
 * Why a Scan position-in-response was rejected (diag-1, DIAG.1 condition 233).
 * The comment names these four cases and does not define `other` further.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-scan-posInResponse ::= INTEGER {
 *     -- value of positionIn-
 *     -- Response not supported
 *     mustBeOne (1),
 *     mustBePositive (2),
 *     mustBeNonNegative (3),
 *     other (4)
 * }
 * ```
 */
export
type DiagFormat_scan_posInResponse = INTEGER;

/**
 * @summary DiagFormat_scan_posInResponse_mustBeOne
 * @description
 * 
 * position-in-response must be one (DIAG.1 condition 233).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_scan_posInResponse_mustBeOne = 1 satisfies DiagFormat_scan_posInResponse; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_mustBeOne
 * @description
 * 
 * position-in-response must be one (DIAG.1 condition 233).
 * 
 * @constant
 * @type {number}
 */
export
const mustBeOne = DiagFormat_scan_posInResponse_mustBeOne; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_mustBePositive
 * @description
 * 
 * position-in-response must be positive (DIAG.1 condition 233).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_scan_posInResponse_mustBePositive = 2 satisfies DiagFormat_scan_posInResponse; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_mustBePositive
 * @description
 * 
 * position-in-response must be positive (DIAG.1 condition 233).
 * 
 * @constant
 * @type {number}
 */
export
const mustBePositive = DiagFormat_scan_posInResponse_mustBePositive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_mustBeNonNegative
 * @description
 * 
 * position-in-response must be non-negative (DIAG.1 condition 233).
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_scan_posInResponse_mustBeNonNegative = 3 satisfies DiagFormat_scan_posInResponse; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_mustBeNonNegative
 * @description
 * 
 * position-in-response must be non-negative (DIAG.1 condition 233).
 * 
 * @constant
 * @type {number}
 */
export
const mustBeNonNegative = DiagFormat_scan_posInResponse_mustBeNonNegative; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_other
 * @description
 * 
 * position-in-response is unsupported for some other reason (DIAG.1 condition
 * 233). The standard does not say which.
 * 
 * @constant
 * @type {number}
 */
export
const DiagFormat_scan_posInResponse_other = 4 satisfies DiagFormat_scan_posInResponse; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_scan_posInResponse_other
 * @description
 * 
 * position-in-response is unsupported for some other reason (DIAG.1 condition
 * 233). The standard does not say which.
 * 
 * @constant
 * @type {number}
 */
export
const other = DiagFormat_scan_posInResponse_other; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagFormat_scan_posInResponse: $.ASN1Decoder<DiagFormat_scan_posInResponse> = $._decodeInteger;
export const _encode_DiagFormat_scan_posInResponse: $.ASN1Encoder<DiagFormat_scan_posInResponse> = $._encodeInteger;


/* eslint-enable */
