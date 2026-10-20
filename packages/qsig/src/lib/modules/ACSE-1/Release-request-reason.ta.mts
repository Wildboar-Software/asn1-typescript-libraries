/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Release_request_reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Release-request-reason  ::=  INTEGER {normal(0), urgent(1), user-defined(30)
 * }(0 | 1 | 30, ...)
 * ```
 */
export
type Release_request_reason = INTEGER;

/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export
const Release_request_reason_normal: Release_request_reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export
const normal: Release_request_reason = Release_request_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export
const Release_request_reason_urgent: Release_request_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export
const urgent: Release_request_reason = Release_request_reason_urgent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export
const Release_request_reason_user_defined: Release_request_reason = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export
const user_defined: Release_request_reason = Release_request_reason_user_defined; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_Release_request_reason: $.ASN1Decoder<Release_request_reason> = $._decodeInteger;

export
const _encode_Release_request_reason: $.ASN1Encoder<Release_request_reason> = $._encodeInteger;

/* eslint-enable */
