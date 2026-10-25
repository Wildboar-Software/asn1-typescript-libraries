/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LpaeActivationResponse_lpaeActivationResult
 * @description
 * 
 * `ok` (0) or `notSupported` (1) for LPAe activation. SGP.22 v3.1 §5.7.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LpaeActivationResponse-lpaeActivationResult ::= INTEGER {
 *     ok(0),
 *     notSupported(1)
 * }
 * ```
 */
export
type LpaeActivationResponse_lpaeActivationResult = INTEGER;

/**
 * @summary LpaeActivationResponse_lpaeActivationResult_ok
 * @description
 * 
 * LPAe was activated. SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 * @type {number}
 */
export
const LpaeActivationResponse_lpaeActivationResult_ok = 0 satisfies LpaeActivationResponse_lpaeActivationResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LpaeActivationResponse_lpaeActivationResult_ok
 * @description
 * 
 * LPAe was activated. SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 * @type {number}
 */
export
const ok = LpaeActivationResponse_lpaeActivationResult_ok satisfies LpaeActivationResponse_lpaeActivationResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LpaeActivationResponse_lpaeActivationResult_notSupported
 * @description
 * 
 * The requested LPAe option is not supported. SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 * @type {number}
 */
export
const LpaeActivationResponse_lpaeActivationResult_notSupported = 1 satisfies LpaeActivationResponse_lpaeActivationResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LpaeActivationResponse_lpaeActivationResult_notSupported
 * @description
 * 
 * The requested LPAe option is not supported. SGP.22 v3.1 §5.7.1.
 * 
 * @constant
 * @type {number}
 */
export
const notSupported = LpaeActivationResponse_lpaeActivationResult_notSupported satisfies LpaeActivationResponse_lpaeActivationResult; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LpaeActivationResponse_lpaeActivationResult = $._decodeInteger;
export const _encode_LpaeActivationResponse_lpaeActivationResult = $._encodeInteger;


/* eslint-enable */
