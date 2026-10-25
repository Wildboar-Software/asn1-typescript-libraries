/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMDeregReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMDeregReason  ::=  ENUMERATED
 * {
 *     uEInitialRegistration(1),
 *     uERegistrationAreaChange(2),
 *     subscriptionWithdrawn(3),
 *     fiveGSToEPSMobility(4),
 *     fiveGSToEPSMobilityUeInitialRegistration(5),
 *     reregistrationRequired(6),
 *     sMFContextTransferred(7),
 *     duplicatePDUSession(8),
 *     fiveGSRVCCToUTRANMobility(9),
 *     pDUSessionReactivationRequired(10),
 *     disasterConditionTerminated(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMDeregReason {
    uEInitialRegistration = 1,
    uERegistrationAreaChange = 2,
    subscriptionWithdrawn = 3,
    fiveGSToEPSMobility = 4,
    fiveGSToEPSMobilityUeInitialRegistration = 5,
    reregistrationRequired = 6,
    sMFContextTransferred = 7,
    duplicatePDUSession = 8,
    fiveGSRVCCToUTRANMobility = 9,
    pDUSessionReactivationRequired = 10,
    disasterConditionTerminated = 11,
}

/**
 * @summary UDMDeregReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMDeregReason  ::=  ENUMERATED
 * {
 *     uEInitialRegistration(1),
 *     uERegistrationAreaChange(2),
 *     subscriptionWithdrawn(3),
 *     fiveGSToEPSMobility(4),
 *     fiveGSToEPSMobilityUeInitialRegistration(5),
 *     reregistrationRequired(6),
 *     sMFContextTransferred(7),
 *     duplicatePDUSession(8),
 *     fiveGSRVCCToUTRANMobility(9),
 *     pDUSessionReactivationRequired(10),
 *     disasterConditionTerminated(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMDeregReason = _enum_for_UDMDeregReason;

/**
 * @summary UDMDeregReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMDeregReason  ::=  ENUMERATED
 * {
 *     uEInitialRegistration(1),
 *     uERegistrationAreaChange(2),
 *     subscriptionWithdrawn(3),
 *     fiveGSToEPSMobility(4),
 *     fiveGSToEPSMobilityUeInitialRegistration(5),
 *     reregistrationRequired(6),
 *     sMFContextTransferred(7),
 *     duplicatePDUSession(8),
 *     fiveGSRVCCToUTRANMobility(9),
 *     pDUSessionReactivationRequired(10),
 *     disasterConditionTerminated(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMDeregReason: typeof _enum_for_UDMDeregReason = _enum_for_UDMDeregReason;

/**
 * @summary UDMDeregReason_uEInitialRegistration
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_uEInitialRegistration: _enum_for_UDMDeregReason.uEInitialRegistration = UDMDeregReason.uEInitialRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEInitialRegistration
 * @constant
 * @type {number}
 */
export
const uEInitialRegistration: _enum_for_UDMDeregReason.uEInitialRegistration = UDMDeregReason.uEInitialRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_uERegistrationAreaChange
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_uERegistrationAreaChange: _enum_for_UDMDeregReason.uERegistrationAreaChange = UDMDeregReason.uERegistrationAreaChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uERegistrationAreaChange
 * @constant
 * @type {number}
 */
export
const uERegistrationAreaChange: _enum_for_UDMDeregReason.uERegistrationAreaChange = UDMDeregReason.uERegistrationAreaChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_subscriptionWithdrawn
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_subscriptionWithdrawn: _enum_for_UDMDeregReason.subscriptionWithdrawn = UDMDeregReason.subscriptionWithdrawn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionWithdrawn
 * @constant
 * @type {number}
 */
export
const subscriptionWithdrawn: _enum_for_UDMDeregReason.subscriptionWithdrawn = UDMDeregReason.subscriptionWithdrawn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_fiveGSToEPSMobility
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_fiveGSToEPSMobility: _enum_for_UDMDeregReason.fiveGSToEPSMobility = UDMDeregReason.fiveGSToEPSMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGSToEPSMobility
 * @constant
 * @type {number}
 */
export
const fiveGSToEPSMobility: _enum_for_UDMDeregReason.fiveGSToEPSMobility = UDMDeregReason.fiveGSToEPSMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_fiveGSToEPSMobilityUeInitialRegistration
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_fiveGSToEPSMobilityUeInitialRegistration: _enum_for_UDMDeregReason.fiveGSToEPSMobilityUeInitialRegistration = UDMDeregReason.fiveGSToEPSMobilityUeInitialRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGSToEPSMobilityUeInitialRegistration
 * @constant
 * @type {number}
 */
export
const fiveGSToEPSMobilityUeInitialRegistration: _enum_for_UDMDeregReason.fiveGSToEPSMobilityUeInitialRegistration = UDMDeregReason.fiveGSToEPSMobilityUeInitialRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_reregistrationRequired
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_reregistrationRequired: _enum_for_UDMDeregReason.reregistrationRequired = UDMDeregReason.reregistrationRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reregistrationRequired
 * @constant
 * @type {number}
 */
export
const reregistrationRequired: _enum_for_UDMDeregReason.reregistrationRequired = UDMDeregReason.reregistrationRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_sMFContextTransferred
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_sMFContextTransferred: _enum_for_UDMDeregReason.sMFContextTransferred = UDMDeregReason.sMFContextTransferred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMFContextTransferred
 * @constant
 * @type {number}
 */
export
const sMFContextTransferred: _enum_for_UDMDeregReason.sMFContextTransferred = UDMDeregReason.sMFContextTransferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_duplicatePDUSession
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_duplicatePDUSession: _enum_for_UDMDeregReason.duplicatePDUSession = UDMDeregReason.duplicatePDUSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicatePDUSession
 * @constant
 * @type {number}
 */
export
const duplicatePDUSession: _enum_for_UDMDeregReason.duplicatePDUSession = UDMDeregReason.duplicatePDUSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_fiveGSRVCCToUTRANMobility
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_fiveGSRVCCToUTRANMobility: _enum_for_UDMDeregReason.fiveGSRVCCToUTRANMobility = UDMDeregReason.fiveGSRVCCToUTRANMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGSRVCCToUTRANMobility
 * @constant
 * @type {number}
 */
export
const fiveGSRVCCToUTRANMobility: _enum_for_UDMDeregReason.fiveGSRVCCToUTRANMobility = UDMDeregReason.fiveGSRVCCToUTRANMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_pDUSessionReactivationRequired
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_pDUSessionReactivationRequired: _enum_for_UDMDeregReason.pDUSessionReactivationRequired = UDMDeregReason.pDUSessionReactivationRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionReactivationRequired
 * @constant
 * @type {number}
 */
export
const pDUSessionReactivationRequired: _enum_for_UDMDeregReason.pDUSessionReactivationRequired = UDMDeregReason.pDUSessionReactivationRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_disasterConditionTerminated
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_disasterConditionTerminated: _enum_for_UDMDeregReason.disasterConditionTerminated = UDMDeregReason.disasterConditionTerminated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disasterConditionTerminated
 * @constant
 * @type {number}
 */
export
const disasterConditionTerminated: _enum_for_UDMDeregReason.disasterConditionTerminated = UDMDeregReason.disasterConditionTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UDMDeregReason: $.ASN1Decoder<UDMDeregReason> = $._decodeEnumerated;
export const _encode_UDMDeregReason: $.ASN1Encoder<UDMDeregReason> = $._encodeEnumerated;


/* eslint-enable */
