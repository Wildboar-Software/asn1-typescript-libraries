/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisableEmergencyProfileResponse-disableEmergencyProfileResult ::= INTEGER {
 *     ok(0),
 *     profileNotInEnabledState(2),
 *     catBusy(5),
 *     ecallNotAvailable(8), -- Emergency Profile does not exist or is not supported
 *     undefinedError(127)
 * }
 * ```
 */
export
type DisableEmergencyProfileResponse_disableEmergencyProfileResult = INTEGER;

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok
 * @constant
 * @type {number}
 */
export
const ok: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const profileNotInEnabledState: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable
 * @constant
 * @type {number}
 */
export
const ecallNotAvailable: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DisableEmergencyProfileResponse_disableEmergencyProfileResult: $.ASN1Decoder<DisableEmergencyProfileResponse_disableEmergencyProfileResult> = $._decodeInteger;
export const _encode_DisableEmergencyProfileResponse_disableEmergencyProfileResult: $.ASN1Encoder<DisableEmergencyProfileResponse_disableEmergencyProfileResult> = $._encodeInteger;


/* eslint-enable */
