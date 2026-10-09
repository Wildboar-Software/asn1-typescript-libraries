/* eslint-disable */
import {
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
export const _decode_DiagFormat_scan_posInResponse = $._decodeInteger;
export const _encode_DiagFormat_scan_posInResponse = $._encodeInteger;


/* eslint-enable */
