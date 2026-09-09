/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SupplementaryServices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupplementaryServices  ::=  BIT STRING {
 *   callingLineIdentificationPresentation(1),
 *   callingLineIdentificationRestriction(2),
 *   connectedLineIdentificationPresentation(3),
 *   connectedLineIdentificationRestriction(4), callForwardingOnNoReply(5),
 *   callForwardingUnconditional(6), callForwardingOnBusy(7),
 *   callForwardingOnNotReachable(8), callWaiting(9), callHold(10),
 *   reverseCharging(11), explicitCallTransfer(12),
 *   callCompletionOnBusySubscriber(13), adviceOfChargeOnStart(14),
 *   adviceOfChargeAtEnd(15), adviceOfChargeDuringCall(16),
 *   timeDependentRouting(17), callingPartingDependentRouting(18),
 *   outgoingCallBarring(19), incomingCallBarring(20)}
 * ```
 */
export
type SupplementaryServices = BIT_STRING;

/**
 * @summary SupplementaryServices_callingLineIdentificationPresentation
 * @constant
 */
export
const SupplementaryServices_callingLineIdentificationPresentation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callingLineIdentificationPresentation
 * @constant
 */
export
const callingLineIdentificationPresentation: number = SupplementaryServices_callingLineIdentificationPresentation; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_callingLineIdentificationRestriction
 * @constant
 */
export
const SupplementaryServices_callingLineIdentificationRestriction: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary callingLineIdentificationRestriction
 * @constant
 */
export
const callingLineIdentificationRestriction: number = SupplementaryServices_callingLineIdentificationRestriction; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_connectedLineIdentificationPresentation
 * @constant
 */
export
const SupplementaryServices_connectedLineIdentificationPresentation: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary connectedLineIdentificationPresentation
 * @constant
 */
export
const connectedLineIdentificationPresentation: number = SupplementaryServices_connectedLineIdentificationPresentation; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_connectedLineIdentificationRestriction
 * @constant
 */
export
const SupplementaryServices_connectedLineIdentificationRestriction: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary connectedLineIdentificationRestriction
 * @constant
 */
export
const connectedLineIdentificationRestriction: number = SupplementaryServices_connectedLineIdentificationRestriction; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_callForwardingOnNoReply
 * @constant
 */
export
const SupplementaryServices_callForwardingOnNoReply: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callForwardingOnNoReply
 * @constant
 */
export
const callForwardingOnNoReply: number = SupplementaryServices_callForwardingOnNoReply; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_callForwardingUnconditional
 * @constant
 */
export
const SupplementaryServices_callForwardingUnconditional: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callForwardingUnconditional
 * @constant
 */
export
const callForwardingUnconditional: number = SupplementaryServices_callForwardingUnconditional; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_callForwardingOnBusy
 * @constant
 */
export
const SupplementaryServices_callForwardingOnBusy: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary callForwardingOnBusy
 * @constant
 */
export
const callForwardingOnBusy: number = SupplementaryServices_callForwardingOnBusy; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_callForwardingOnNotReachable
 * @constant
 */
export
const SupplementaryServices_callForwardingOnNotReachable: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary callForwardingOnNotReachable
 * @constant
 */
export
const callForwardingOnNotReachable: number = SupplementaryServices_callForwardingOnNotReachable; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_callWaiting
 * @constant
 */
export
const SupplementaryServices_callWaiting: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary callWaiting
 * @constant
 */
export
const callWaiting: number = SupplementaryServices_callWaiting; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_callHold
 * @constant
 */
export
const SupplementaryServices_callHold: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary callHold
 * @constant
 */
export
const callHold: number = SupplementaryServices_callHold; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_reverseCharging
 * @constant
 */
export
const SupplementaryServices_reverseCharging: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary reverseCharging
 * @constant
 */
export
const reverseCharging: number = SupplementaryServices_reverseCharging; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_explicitCallTransfer
 * @constant
 */
export
const SupplementaryServices_explicitCallTransfer: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary explicitCallTransfer
 * @constant
 */
export
const explicitCallTransfer: number = SupplementaryServices_explicitCallTransfer; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_callCompletionOnBusySubscriber
 * @constant
 */
export
const SupplementaryServices_callCompletionOnBusySubscriber: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary callCompletionOnBusySubscriber
 * @constant
 */
export
const callCompletionOnBusySubscriber: number = SupplementaryServices_callCompletionOnBusySubscriber; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_adviceOfChargeOnStart
 * @constant
 */
export
const SupplementaryServices_adviceOfChargeOnStart: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary adviceOfChargeOnStart
 * @constant
 */
export
const adviceOfChargeOnStart: number = SupplementaryServices_adviceOfChargeOnStart; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_adviceOfChargeAtEnd
 * @constant
 */
export
const SupplementaryServices_adviceOfChargeAtEnd: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary adviceOfChargeAtEnd
 * @constant
 */
export
const adviceOfChargeAtEnd: number = SupplementaryServices_adviceOfChargeAtEnd; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_adviceOfChargeDuringCall
 * @constant
 */
export
const SupplementaryServices_adviceOfChargeDuringCall: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary adviceOfChargeDuringCall
 * @constant
 */
export
const adviceOfChargeDuringCall: number = SupplementaryServices_adviceOfChargeDuringCall; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_timeDependentRouting
 * @constant
 */
export
const SupplementaryServices_timeDependentRouting: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary timeDependentRouting
 * @constant
 */
export
const timeDependentRouting: number = SupplementaryServices_timeDependentRouting; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_callingPartingDependentRouting
 * @constant
 */
export
const SupplementaryServices_callingPartingDependentRouting: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary callingPartingDependentRouting
 * @constant
 */
export
const callingPartingDependentRouting: number = SupplementaryServices_callingPartingDependentRouting; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_outgoingCallBarring
 * @constant
 */
export
const SupplementaryServices_outgoingCallBarring: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary outgoingCallBarring
 * @constant
 */
export
const outgoingCallBarring: number = SupplementaryServices_outgoingCallBarring; /* SHORT_NAMED_BIT */

/**
 * @summary SupplementaryServices_incomingCallBarring
 * @constant
 */
export
const SupplementaryServices_incomingCallBarring: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary incomingCallBarring
 * @constant
 */
export
const incomingCallBarring: number = SupplementaryServices_incomingCallBarring; /* SHORT_NAMED_BIT */
export const _decode_SupplementaryServices = $._decodeBitString;
export const _encode_SupplementaryServices = $._encodeBitString;


/* eslint-enable */
