/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LpaeActivationResponse_lpaeActivationResult
 * @description
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
 * @constant
 * @type {number}
 */
export
const LpaeActivationResponse_lpaeActivationResult_ok: LpaeActivationResponse_lpaeActivationResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LpaeActivationResponse_lpaeActivationResult_ok
 * @constant
 * @type {number}
 */
export
const ok: LpaeActivationResponse_lpaeActivationResult = LpaeActivationResponse_lpaeActivationResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LpaeActivationResponse_lpaeActivationResult_notSupported
 * @constant
 * @type {number}
 */
export
const LpaeActivationResponse_lpaeActivationResult_notSupported: LpaeActivationResponse_lpaeActivationResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LpaeActivationResponse_lpaeActivationResult_notSupported
 * @constant
 * @type {number}
 */
export
const notSupported: LpaeActivationResponse_lpaeActivationResult = LpaeActivationResponse_lpaeActivationResult_notSupported; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LpaeActivationResponse_lpaeActivationResult = $._decodeInteger;
export const _encode_LpaeActivationResponse_lpaeActivationResult = $._encodeInteger;


/* eslint-enable */
