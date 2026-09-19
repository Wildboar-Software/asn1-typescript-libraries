/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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
const UDMDeregReason = _enum_for_UDMDeregReason;

/**
 * @summary UDMDeregReason_uEInitialRegistration
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_uEInitialRegistration: UDMDeregReason = UDMDeregReason.uEInitialRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEInitialRegistration
 * @constant
 * @type {number}
 */
export
const uEInitialRegistration: UDMDeregReason = UDMDeregReason.uEInitialRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_uERegistrationAreaChange
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_uERegistrationAreaChange: UDMDeregReason = UDMDeregReason.uERegistrationAreaChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uERegistrationAreaChange
 * @constant
 * @type {number}
 */
export
const uERegistrationAreaChange: UDMDeregReason = UDMDeregReason.uERegistrationAreaChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_subscriptionWithdrawn
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_subscriptionWithdrawn: UDMDeregReason = UDMDeregReason.subscriptionWithdrawn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionWithdrawn
 * @constant
 * @type {number}
 */
export
const subscriptionWithdrawn: UDMDeregReason = UDMDeregReason.subscriptionWithdrawn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_fiveGSToEPSMobility
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_fiveGSToEPSMobility: UDMDeregReason = UDMDeregReason.fiveGSToEPSMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGSToEPSMobility
 * @constant
 * @type {number}
 */
export
const fiveGSToEPSMobility: UDMDeregReason = UDMDeregReason.fiveGSToEPSMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_fiveGSToEPSMobilityUeInitialRegistration
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_fiveGSToEPSMobilityUeInitialRegistration: UDMDeregReason = UDMDeregReason.fiveGSToEPSMobilityUeInitialRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGSToEPSMobilityUeInitialRegistration
 * @constant
 * @type {number}
 */
export
const fiveGSToEPSMobilityUeInitialRegistration: UDMDeregReason = UDMDeregReason.fiveGSToEPSMobilityUeInitialRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_reregistrationRequired
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_reregistrationRequired: UDMDeregReason = UDMDeregReason.reregistrationRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reregistrationRequired
 * @constant
 * @type {number}
 */
export
const reregistrationRequired: UDMDeregReason = UDMDeregReason.reregistrationRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_sMFContextTransferred
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_sMFContextTransferred: UDMDeregReason = UDMDeregReason.sMFContextTransferred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMFContextTransferred
 * @constant
 * @type {number}
 */
export
const sMFContextTransferred: UDMDeregReason = UDMDeregReason.sMFContextTransferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_duplicatePDUSession
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_duplicatePDUSession: UDMDeregReason = UDMDeregReason.duplicatePDUSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicatePDUSession
 * @constant
 * @type {number}
 */
export
const duplicatePDUSession: UDMDeregReason = UDMDeregReason.duplicatePDUSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_fiveGSRVCCToUTRANMobility
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_fiveGSRVCCToUTRANMobility: UDMDeregReason = UDMDeregReason.fiveGSRVCCToUTRANMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiveGSRVCCToUTRANMobility
 * @constant
 * @type {number}
 */
export
const fiveGSRVCCToUTRANMobility: UDMDeregReason = UDMDeregReason.fiveGSRVCCToUTRANMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_pDUSessionReactivationRequired
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_pDUSessionReactivationRequired: UDMDeregReason = UDMDeregReason.pDUSessionReactivationRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionReactivationRequired
 * @constant
 * @type {number}
 */
export
const pDUSessionReactivationRequired: UDMDeregReason = UDMDeregReason.pDUSessionReactivationRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDeregReason_disasterConditionTerminated
 * @constant
 * @type {number}
 */
export
const UDMDeregReason_disasterConditionTerminated: UDMDeregReason = UDMDeregReason.disasterConditionTerminated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disasterConditionTerminated
 * @constant
 * @type {number}
 */
export
const disasterConditionTerminated: UDMDeregReason = UDMDeregReason.disasterConditionTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UDMDeregReason: $.ASN1Decoder<UDMDeregReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMDeregReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMDeregReason (el: _Element): UDMDeregReason {
    if (!_cached_decoder_for_UDMDeregReason) { _cached_decoder_for_UDMDeregReason = $._decodeEnumerated; }
    return _cached_decoder_for_UDMDeregReason(el);
}

let _cached_encoder_for_UDMDeregReason: $.ASN1Encoder<UDMDeregReason> | null = null;

/**
 * @summary Encodes a(n) UDMDeregReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMDeregReason, encoded as an ASN.1 Element.
 */
export
function _encode_UDMDeregReason (value: UDMDeregReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMDeregReason) { _cached_encoder_for_UDMDeregReason = $._encodeEnumerated; }
    return _cached_encoder_for_UDMDeregReason(value, elGetter);
}


/* eslint-enable */
