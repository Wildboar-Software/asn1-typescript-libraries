/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableEmergencyProfileResponse-enableEmergencyProfileResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EnableEmergencyProfileResponse_enableEmergencyProfileResult = INTEGER;

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok
 * @constant
 * @type {number}
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok: EnableEmergencyProfileResponse_enableEmergencyProfileResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok
 * @constant
 * @type {number}
 */
export
const ok: EnableEmergencyProfileResponse_enableEmergencyProfileResult = EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState: EnableEmergencyProfileResponse_enableEmergencyProfileResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const profileNotInDisabledState: EnableEmergencyProfileResponse_enableEmergencyProfileResult = EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy: EnableEmergencyProfileResponse_enableEmergencyProfileResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: EnableEmergencyProfileResponse_enableEmergencyProfileResult = EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable
 * @constant
 * @type {number}
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable: EnableEmergencyProfileResponse_enableEmergencyProfileResult = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable
 * @constant
 * @type {number}
 */
export
const ecallNotAvailable: EnableEmergencyProfileResponse_enableEmergencyProfileResult = EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError: EnableEmergencyProfileResponse_enableEmergencyProfileResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EnableEmergencyProfileResponse_enableEmergencyProfileResult = EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EnableEmergencyProfileResponse_enableEmergencyProfileResult: $.ASN1Decoder<EnableEmergencyProfileResponse_enableEmergencyProfileResult> = $._decodeInteger;
export const _encode_EnableEmergencyProfileResponse_enableEmergencyProfileResult: $.ASN1Encoder<EnableEmergencyProfileResponse_enableEmergencyProfileResult> = $._encodeInteger;


/* eslint-enable */
