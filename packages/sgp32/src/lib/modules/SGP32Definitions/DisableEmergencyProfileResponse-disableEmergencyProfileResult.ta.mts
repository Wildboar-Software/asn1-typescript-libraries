/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult
 * @description
 *
 * Result of ES10b.DisableEmergencyProfile. On success the eUICC may generate
 * OtherSignedNotification entries configured in the metadata of the Emergency
 * Profile and of the Profile that is enabled again.
 *
 * SGP.32 v1.2, section 5.9.23.
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
 * @description
 *
 * The Emergency Profile was disabled, or marked to be disabled, and the
 * previously enabled Profile was enabled, or marked to be enabled. Rollback
 * authorisation was cleared.
 *
 * SGP.32 v1.2, section 5.9.23.
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok
 * @description
 *
 * The Emergency Profile was disabled and the previous Profile enabled (SGP.32
 * v1.2, section 5.9.23).
 * @constant
 * @type {number}
 */
export
const ok: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState
 * @description
 *
 * The Emergency Profile (ecallIndication TRUE) is not enabled.
 *
 * SGP.32 v1.2, section 5.9.23.
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState
 * @description
 *
 * The Emergency Profile is not enabled (SGP.32 v1.2, section 5.9.23).
 * @constant
 * @type {number}
 */
export
const profileNotInEnabledState: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy
 * @description
 *
 * A proactive session is still open. The eUICC may return this code. If it
 * continues, it terminates that proactive session internally.
 *
 * SGP.32 v1.2, section 5.9.23.
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy
 * @description
 *
 * A proactive session is open and the eUICC stopped the command (SGP.32 v1.2,
 * section 5.9.23).
 * @constant
 * @type {number}
 */
export
const catBusy: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable
 * @description
 *
 * The Emergency feature is unsupported, or no Profile has ecallIndication set
 * to TRUE.
 *
 * SGP.32 v1.2, section 5.9.23.
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable
 * @description
 *
 * Emergency is unsupported, or no Emergency Profile exists (SGP.32 v1.2,
 * section 5.9.23).
 * @constant
 * @type {number}
 */
export
const ecallNotAvailable: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError
 * @description
 *
 * SGP.32 v1.2 lists this code on DisableEmergencyProfile and does not further
 * define it. Annex C.
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError
 * @description
 *
 * Listed on DisableEmergencyProfile; SGP.32 v1.2 does not further define it
 * (Annex C).
 * @constant
 * @type {number}
 */
export
const undefinedError: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DisableEmergencyProfileResponse_disableEmergencyProfileResult: $.ASN1Decoder<DisableEmergencyProfileResponse_disableEmergencyProfileResult> = $._decodeInteger;
export const _encode_DisableEmergencyProfileResponse_disableEmergencyProfileResult: $.ASN1Encoder<DisableEmergencyProfileResponse_disableEmergencyProfileResult> = $._encodeInteger;


/* eslint-enable */
