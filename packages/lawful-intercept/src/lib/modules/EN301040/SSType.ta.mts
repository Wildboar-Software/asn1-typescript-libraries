/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SSType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSType  ::=  ENUMERATED {
 *     ambienceListening,
 *     adviceofCharge,
 *     accessPriority,
 *     areaSelection,
 *     barringofIncomingCalls,
 *     barringofOutgoingCalls,
 *     callAuthorizedbyDispatcher,
 *     callCompletiontoBusySubscriber,
 *     callCompletiononNoReply,
 *     callForwardingonBusy,
 *     callForwardingonNoReply,
 *     callForwardingonNotReachable,
 *     callForwardingUnconditional,
 *     callingLineIdentificationPresentation,
 *     callingConnectedLineIdentificationRestriction,
 *     connectedLineIdentificationPresentation,
 *     callReport,
 *     callRetention,
 *     callWaiting,
 *     dynamicGroupNumberAssignment,
 *     discreetListening,
 *     callHold,
 *     includeCall,
 *     lateEntry,
 *     listSearchCall,
 *     priorityCall,
 *     preemptivePriorityCall,
 *     shortNumberAddressing,
 *     transferofControl,
 *     talkingPartyIdentification
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SSType {
    ambienceListening = 0,
    adviceofCharge = 1,
    accessPriority = 2,
    areaSelection = 3,
    barringofIncomingCalls = 4,
    barringofOutgoingCalls = 5,
    callAuthorizedbyDispatcher = 6,
    callCompletiontoBusySubscriber = 7,
    callCompletiononNoReply = 8,
    callForwardingonBusy = 9,
    callForwardingonNoReply = 10,
    callForwardingonNotReachable = 11,
    callForwardingUnconditional = 12,
    callingLineIdentificationPresentation = 13,
    callingConnectedLineIdentificationRestriction = 14,
    connectedLineIdentificationPresentation = 15,
    callReport = 16,
    callRetention = 17,
    callWaiting = 18,
    dynamicGroupNumberAssignment = 19,
    discreetListening = 20,
    callHold = 21,
    includeCall = 22,
    lateEntry = 23,
    listSearchCall = 24,
    priorityCall = 25,
    preemptivePriorityCall = 26,
    shortNumberAddressing = 27,
    transferofControl = 28,
    talkingPartyIdentification = 29,
}

/**
 * @summary SSType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSType  ::=  ENUMERATED {
 *     ambienceListening,
 *     adviceofCharge,
 *     accessPriority,
 *     areaSelection,
 *     barringofIncomingCalls,
 *     barringofOutgoingCalls,
 *     callAuthorizedbyDispatcher,
 *     callCompletiontoBusySubscriber,
 *     callCompletiononNoReply,
 *     callForwardingonBusy,
 *     callForwardingonNoReply,
 *     callForwardingonNotReachable,
 *     callForwardingUnconditional,
 *     callingLineIdentificationPresentation,
 *     callingConnectedLineIdentificationRestriction,
 *     connectedLineIdentificationPresentation,
 *     callReport,
 *     callRetention,
 *     callWaiting,
 *     dynamicGroupNumberAssignment,
 *     discreetListening,
 *     callHold,
 *     includeCall,
 *     lateEntry,
 *     listSearchCall,
 *     priorityCall,
 *     preemptivePriorityCall,
 *     shortNumberAddressing,
 *     transferofControl,
 *     talkingPartyIdentification
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SSType = _enum_for_SSType;

/**
 * @summary SSType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSType  ::=  ENUMERATED {
 *     ambienceListening,
 *     adviceofCharge,
 *     accessPriority,
 *     areaSelection,
 *     barringofIncomingCalls,
 *     barringofOutgoingCalls,
 *     callAuthorizedbyDispatcher,
 *     callCompletiontoBusySubscriber,
 *     callCompletiononNoReply,
 *     callForwardingonBusy,
 *     callForwardingonNoReply,
 *     callForwardingonNotReachable,
 *     callForwardingUnconditional,
 *     callingLineIdentificationPresentation,
 *     callingConnectedLineIdentificationRestriction,
 *     connectedLineIdentificationPresentation,
 *     callReport,
 *     callRetention,
 *     callWaiting,
 *     dynamicGroupNumberAssignment,
 *     discreetListening,
 *     callHold,
 *     includeCall,
 *     lateEntry,
 *     listSearchCall,
 *     priorityCall,
 *     preemptivePriorityCall,
 *     shortNumberAddressing,
 *     transferofControl,
 *     talkingPartyIdentification
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SSType = _enum_for_SSType;

/**
 * @summary SSType_ambienceListening
 * @constant
 * @type {number}
 */
export
const SSType_ambienceListening: SSType = SSType.ambienceListening; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ambienceListening
 * @constant
 * @type {number}
 */
export
const ambienceListening: SSType = SSType.ambienceListening; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_adviceofCharge
 * @constant
 * @type {number}
 */
export
const SSType_adviceofCharge: SSType = SSType.adviceofCharge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary adviceofCharge
 * @constant
 * @type {number}
 */
export
const adviceofCharge: SSType = SSType.adviceofCharge; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_accessPriority
 * @constant
 * @type {number}
 */
export
const SSType_accessPriority: SSType = SSType.accessPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessPriority
 * @constant
 * @type {number}
 */
export
const accessPriority: SSType = SSType.accessPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_areaSelection
 * @constant
 * @type {number}
 */
export
const SSType_areaSelection: SSType = SSType.areaSelection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary areaSelection
 * @constant
 * @type {number}
 */
export
const areaSelection: SSType = SSType.areaSelection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_barringofIncomingCalls
 * @constant
 * @type {number}
 */
export
const SSType_barringofIncomingCalls: SSType = SSType.barringofIncomingCalls; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary barringofIncomingCalls
 * @constant
 * @type {number}
 */
export
const barringofIncomingCalls: SSType = SSType.barringofIncomingCalls; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_barringofOutgoingCalls
 * @constant
 * @type {number}
 */
export
const SSType_barringofOutgoingCalls: SSType = SSType.barringofOutgoingCalls; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary barringofOutgoingCalls
 * @constant
 * @type {number}
 */
export
const barringofOutgoingCalls: SSType = SSType.barringofOutgoingCalls; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callAuthorizedbyDispatcher
 * @constant
 * @type {number}
 */
export
const SSType_callAuthorizedbyDispatcher: SSType = SSType.callAuthorizedbyDispatcher; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callAuthorizedbyDispatcher
 * @constant
 * @type {number}
 */
export
const callAuthorizedbyDispatcher: SSType = SSType.callAuthorizedbyDispatcher; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callCompletiontoBusySubscriber
 * @constant
 * @type {number}
 */
export
const SSType_callCompletiontoBusySubscriber: SSType = SSType.callCompletiontoBusySubscriber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callCompletiontoBusySubscriber
 * @constant
 * @type {number}
 */
export
const callCompletiontoBusySubscriber: SSType = SSType.callCompletiontoBusySubscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callCompletiononNoReply
 * @constant
 * @type {number}
 */
export
const SSType_callCompletiononNoReply: SSType = SSType.callCompletiononNoReply; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callCompletiononNoReply
 * @constant
 * @type {number}
 */
export
const callCompletiononNoReply: SSType = SSType.callCompletiononNoReply; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callForwardingonBusy
 * @constant
 * @type {number}
 */
export
const SSType_callForwardingonBusy: SSType = SSType.callForwardingonBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingonBusy
 * @constant
 * @type {number}
 */
export
const callForwardingonBusy: SSType = SSType.callForwardingonBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callForwardingonNoReply
 * @constant
 * @type {number}
 */
export
const SSType_callForwardingonNoReply: SSType = SSType.callForwardingonNoReply; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingonNoReply
 * @constant
 * @type {number}
 */
export
const callForwardingonNoReply: SSType = SSType.callForwardingonNoReply; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callForwardingonNotReachable
 * @constant
 * @type {number}
 */
export
const SSType_callForwardingonNotReachable: SSType = SSType.callForwardingonNotReachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingonNotReachable
 * @constant
 * @type {number}
 */
export
const callForwardingonNotReachable: SSType = SSType.callForwardingonNotReachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callForwardingUnconditional
 * @constant
 * @type {number}
 */
export
const SSType_callForwardingUnconditional: SSType = SSType.callForwardingUnconditional; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingUnconditional
 * @constant
 * @type {number}
 */
export
const callForwardingUnconditional: SSType = SSType.callForwardingUnconditional; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callingLineIdentificationPresentation
 * @constant
 * @type {number}
 */
export
const SSType_callingLineIdentificationPresentation: SSType = SSType.callingLineIdentificationPresentation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingLineIdentificationPresentation
 * @constant
 * @type {number}
 */
export
const callingLineIdentificationPresentation: SSType = SSType.callingLineIdentificationPresentation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callingConnectedLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const SSType_callingConnectedLineIdentificationRestriction: SSType = SSType.callingConnectedLineIdentificationRestriction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingConnectedLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const callingConnectedLineIdentificationRestriction: SSType = SSType.callingConnectedLineIdentificationRestriction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_connectedLineIdentificationPresentation
 * @constant
 * @type {number}
 */
export
const SSType_connectedLineIdentificationPresentation: SSType = SSType.connectedLineIdentificationPresentation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectedLineIdentificationPresentation
 * @constant
 * @type {number}
 */
export
const connectedLineIdentificationPresentation: SSType = SSType.connectedLineIdentificationPresentation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callReport
 * @constant
 * @type {number}
 */
export
const SSType_callReport: SSType = SSType.callReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callReport
 * @constant
 * @type {number}
 */
export
const callReport: SSType = SSType.callReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callRetention
 * @constant
 * @type {number}
 */
export
const SSType_callRetention: SSType = SSType.callRetention; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callRetention
 * @constant
 * @type {number}
 */
export
const callRetention: SSType = SSType.callRetention; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callWaiting
 * @constant
 * @type {number}
 */
export
const SSType_callWaiting: SSType = SSType.callWaiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaiting
 * @constant
 * @type {number}
 */
export
const callWaiting: SSType = SSType.callWaiting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_dynamicGroupNumberAssignment
 * @constant
 * @type {number}
 */
export
const SSType_dynamicGroupNumberAssignment: SSType = SSType.dynamicGroupNumberAssignment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamicGroupNumberAssignment
 * @constant
 * @type {number}
 */
export
const dynamicGroupNumberAssignment: SSType = SSType.dynamicGroupNumberAssignment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_discreetListening
 * @constant
 * @type {number}
 */
export
const SSType_discreetListening: SSType = SSType.discreetListening; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary discreetListening
 * @constant
 * @type {number}
 */
export
const discreetListening: SSType = SSType.discreetListening; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_callHold
 * @constant
 * @type {number}
 */
export
const SSType_callHold: SSType = SSType.callHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callHold
 * @constant
 * @type {number}
 */
export
const callHold: SSType = SSType.callHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_includeCall
 * @constant
 * @type {number}
 */
export
const SSType_includeCall: SSType = SSType.includeCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary includeCall
 * @constant
 * @type {number}
 */
export
const includeCall: SSType = SSType.includeCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_lateEntry
 * @constant
 * @type {number}
 */
export
const SSType_lateEntry: SSType = SSType.lateEntry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lateEntry
 * @constant
 * @type {number}
 */
export
const lateEntry: SSType = SSType.lateEntry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_listSearchCall
 * @constant
 * @type {number}
 */
export
const SSType_listSearchCall: SSType = SSType.listSearchCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listSearchCall
 * @constant
 * @type {number}
 */
export
const listSearchCall: SSType = SSType.listSearchCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_priorityCall
 * @constant
 * @type {number}
 */
export
const SSType_priorityCall: SSType = SSType.priorityCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary priorityCall
 * @constant
 * @type {number}
 */
export
const priorityCall: SSType = SSType.priorityCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_preemptivePriorityCall
 * @constant
 * @type {number}
 */
export
const SSType_preemptivePriorityCall: SSType = SSType.preemptivePriorityCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preemptivePriorityCall
 * @constant
 * @type {number}
 */
export
const preemptivePriorityCall: SSType = SSType.preemptivePriorityCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_shortNumberAddressing
 * @constant
 * @type {number}
 */
export
const SSType_shortNumberAddressing: SSType = SSType.shortNumberAddressing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shortNumberAddressing
 * @constant
 * @type {number}
 */
export
const shortNumberAddressing: SSType = SSType.shortNumberAddressing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_transferofControl
 * @constant
 * @type {number}
 */
export
const SSType_transferofControl: SSType = SSType.transferofControl; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transferofControl
 * @constant
 * @type {number}
 */
export
const transferofControl: SSType = SSType.transferofControl; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SSType_talkingPartyIdentification
 * @constant
 * @type {number}
 */
export
const SSType_talkingPartyIdentification: SSType = SSType.talkingPartyIdentification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary talkingPartyIdentification
 * @constant
 * @type {number}
 */
export
const talkingPartyIdentification: SSType = SSType.talkingPartyIdentification; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SSType: $.ASN1Decoder<SSType> = $._decodeEnumerated;
export const _encode_SSType: $.ASN1Encoder<SSType> = $._encodeEnumerated;


/* eslint-enable */
