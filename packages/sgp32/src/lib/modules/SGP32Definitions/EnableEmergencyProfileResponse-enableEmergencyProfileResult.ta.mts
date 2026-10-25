/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult
 * @description
 * 
 * Result of ES10b.EnableEmergencyProfile (SGP.32 v1.2, section 5.9.22).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableEmergencyProfileResponse-enableEmergencyProfileResult ::= INTEGER {
 *     ok(0),
 *     profileNotInDisabledState(2),
 *     catBusy(5),
 *     ecallNotAvailable(8), -- Emergency Profile does not exist
 *     undefinedError(127)
 * }
 * ```
 */
export
type EnableEmergencyProfileResponse_enableEmergencyProfileResult = INTEGER;

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok
 * @constant
 * @type {number}
 * @description
 * The Emergency Profile was enabled, or was marked "to be enabled" when
 * refreshFlag is set and REFRESH has been sent (SGP.32 v1.2, section 5.9.22).
 * No Notification is generated for this enablement.
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok = 0 satisfies EnableEmergencyProfileResponse_enableEmergencyProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok
 * @constant
 * @type {number}
 * @description
 * The Emergency Profile enablement succeeded (SGP.32 v1.2, section 5.9.22).
 */
export
const ok = EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok satisfies EnableEmergencyProfileResponse_enableEmergencyProfileResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 * @description
 * The Emergency Profile (ecallIndication TRUE) is already enabled (SGP.32
 * v1.2, section 5.9.22).
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState = 2 satisfies EnableEmergencyProfileResponse_enableEmergencyProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 * @description
 * The Emergency Profile is already enabled (SGP.32 v1.2, section 5.9.22).
 */
export
const profileNotInDisabledState = EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState satisfies EnableEmergencyProfileResponse_enableEmergencyProfileResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy
 * @constant
 * @type {number}
 * @description
 * A proactive session is still open and the eUICC chooses to stop the command
 * (SGP.32 v1.2, section 5.9.22). The other choice is to end that session and
 * continue.
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy = 5 satisfies EnableEmergencyProfileResponse_enableEmergencyProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy
 * @constant
 * @type {number}
 * @description
 * An open proactive session caused the eUICC to stop the command (SGP.32 v1.2,
 * section 5.9.22).
 */
export
const catBusy = EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy satisfies EnableEmergencyProfileResponse_enableEmergencyProfileResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable
 * @constant
 * @type {number}
 * @description
 * The eUICC does not support the Emergency feature, or no Profile with
 * ecallIndication TRUE is present (SGP.32 v1.2, section 5.9.22). The ASN.1
 * comment in that section names the missing-Profile case.
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable = 8 satisfies EnableEmergencyProfileResponse_enableEmergencyProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable
 * @constant
 * @type {number}
 * @description
 * Emergency support is absent, or no Emergency Profile is present (SGP.32
 * v1.2, section 5.9.22).
 */
export
const ecallNotAvailable = EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable satisfies EnableEmergencyProfileResponse_enableEmergencyProfileResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists undefinedError(127) in section 5.9.22 and does not further
 * define the condition that produces it.
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError = 127 satisfies EnableEmergencyProfileResponse_enableEmergencyProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code in section 5.9.22 and does not further define
 * the condition that produces it.
 */
export
const undefinedError = EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError satisfies EnableEmergencyProfileResponse_enableEmergencyProfileResult; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EnableEmergencyProfileResponse_enableEmergencyProfileResult: $.ASN1Decoder<EnableEmergencyProfileResponse_enableEmergencyProfileResult> = $._decodeInteger;
export const _encode_EnableEmergencyProfileResponse_enableEmergencyProfileResult: $.ASN1Encoder<EnableEmergencyProfileResponse_enableEmergencyProfileResult> = $._encodeInteger;


/* eslint-enable */
