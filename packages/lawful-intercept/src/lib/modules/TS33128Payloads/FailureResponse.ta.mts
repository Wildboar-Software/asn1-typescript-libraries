/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FailureResponse
 * @description
 * 
 * Cause information when the registration, registration update or
 * deregistration has failed, if available.
 *
 * 3GPP TS 33.128, clause 7.14.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureResponse  ::=  ENUMERATED
 * {
 *     error400(1),
 *     error401(2),
 *     error403(3),
 *     error404(4),
 *     error406(5),
 *     error411(6),
 *     error413(7),
 *     error415(8),
 *     error429(9),
 *     error500(10),
 *     error503(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FailureResponse {
    error400 = 1,
    error401 = 2,
    error403 = 3,
    error404 = 4,
    error406 = 5,
    error411 = 6,
    error413 = 7,
    error415 = 8,
    error429 = 9,
    error500 = 10,
    error503 = 11,
}

/**
 * @summary FailureResponse
 * @description
 * 
 * Cause information when the registration, registration update or
 * deregistration has failed, if available.
 *
 * 3GPP TS 33.128, clause 7.14.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureResponse  ::=  ENUMERATED
 * {
 *     error400(1),
 *     error401(2),
 *     error403(3),
 *     error404(4),
 *     error406(5),
 *     error411(6),
 *     error413(7),
 *     error415(8),
 *     error429(9),
 *     error500(10),
 *     error503(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FailureResponse = _enum_for_FailureResponse;

/**
 * @summary FailureResponse
 * @description
 * 
 * Cause information when the registration, registration update or
 * deregistration has failed, if available.
 *
 * 3GPP TS 33.128, clause 7.14.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureResponse  ::=  ENUMERATED
 * {
 *     error400(1),
 *     error401(2),
 *     error403(3),
 *     error404(4),
 *     error406(5),
 *     error411(6),
 *     error413(7),
 *     error415(8),
 *     error429(9),
 *     error500(10),
 *     error503(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FailureResponse = _enum_for_FailureResponse;

/**
 * @summary FailureResponse_error400
 * @constant
 * @type {number}
 */
export
const FailureResponse_error400 = FailureResponse.error400 satisfies FailureResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error400
 * @constant
 * @type {number}
 */
export
const error400 = FailureResponse.error400 satisfies FailureResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error401
 * @constant
 * @type {number}
 */
export
const FailureResponse_error401 = FailureResponse.error401 satisfies FailureResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error401
 * @constant
 * @type {number}
 */
export
const error401 = FailureResponse.error401 satisfies FailureResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error403
 * @constant
 * @type {number}
 */
export
const FailureResponse_error403 = FailureResponse.error403 satisfies FailureResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error403
 * @constant
 * @type {number}
 */
export
const error403 = FailureResponse.error403 satisfies FailureResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error404
 * @constant
 * @type {number}
 */
export
const FailureResponse_error404 = FailureResponse.error404 satisfies FailureResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error404
 * @constant
 * @type {number}
 */
export
const error404 = FailureResponse.error404 satisfies FailureResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error406
 * @constant
 * @type {number}
 */
export
const FailureResponse_error406 = FailureResponse.error406 satisfies FailureResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error406
 * @constant
 * @type {number}
 */
export
const error406 = FailureResponse.error406 satisfies FailureResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error411
 * @constant
 * @type {number}
 */
export
const FailureResponse_error411 = FailureResponse.error411 satisfies FailureResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error411
 * @constant
 * @type {number}
 */
export
const error411 = FailureResponse.error411 satisfies FailureResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error413
 * @constant
 * @type {number}
 */
export
const FailureResponse_error413 = FailureResponse.error413 satisfies FailureResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error413
 * @constant
 * @type {number}
 */
export
const error413 = FailureResponse.error413 satisfies FailureResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error415
 * @constant
 * @type {number}
 */
export
const FailureResponse_error415 = FailureResponse.error415 satisfies FailureResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error415
 * @constant
 * @type {number}
 */
export
const error415 = FailureResponse.error415 satisfies FailureResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error429
 * @constant
 * @type {number}
 */
export
const FailureResponse_error429 = FailureResponse.error429 satisfies FailureResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error429
 * @constant
 * @type {number}
 */
export
const error429 = FailureResponse.error429 satisfies FailureResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error500
 * @constant
 * @type {number}
 */
export
const FailureResponse_error500 = FailureResponse.error500 satisfies FailureResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error500
 * @constant
 * @type {number}
 */
export
const error500 = FailureResponse.error500 satisfies FailureResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailureResponse_error503
 * @constant
 * @type {number}
 */
export
const FailureResponse_error503 = FailureResponse.error503 satisfies FailureResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary error503
 * @constant
 * @type {number}
 */
export
const error503 = FailureResponse.error503 satisfies FailureResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FailureResponse: $.ASN1Decoder<FailureResponse> = $._decodeEnumerated;
export const _encode_FailureResponse: $.ASN1Encoder<FailureResponse> = $._encodeEnumerated;


/* eslint-enable */
