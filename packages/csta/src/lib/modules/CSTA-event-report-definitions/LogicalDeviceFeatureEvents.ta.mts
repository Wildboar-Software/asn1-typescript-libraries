/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { AgentBusyEvent, _decode_AgentBusyEvent, _encode_AgentBusyEvent } from "../CSTA-agent-busy-event/AgentBusyEvent.ta.mjs";

import { AgentLoggedOnEvent, _decode_AgentLoggedOnEvent, _encode_AgentLoggedOnEvent } from "../CSTA-agent-logged-on-event/AgentLoggedOnEvent.ta.mjs";

import { AgentLoggedOffEvent, _decode_AgentLoggedOffEvent, _encode_AgentLoggedOffEvent } from "../CSTA-agent-logged-off-event/AgentLoggedOffEvent.ta.mjs";

import { AgentNotReadyEvent, _decode_AgentNotReadyEvent, _encode_AgentNotReadyEvent } from "../CSTA-agent-not-ready-event/AgentNotReadyEvent.ta.mjs";

import { AgentReadyEvent, _decode_AgentReadyEvent, _encode_AgentReadyEvent } from "../CSTA-agent-ready-event/AgentReadyEvent.ta.mjs";

import { AgentWorkingAfterCallEvent, _decode_AgentWorkingAfterCallEvent, _encode_AgentWorkingAfterCallEvent } from "../CSTA-agent-working-after-call-event/AgentWorkingAfterCallEvent.ta.mjs";

import { AutoAnswerEvent, _decode_AutoAnswerEvent, _encode_AutoAnswerEvent } from "../CSTA-auto-answer-event/AutoAnswerEvent.ta.mjs";

import { AutoWorkModeEvent, _decode_AutoWorkModeEvent, _encode_AutoWorkModeEvent } from "../CSTA-auto-work-mode-event/AutoWorkModeEvent.ta.mjs";

import { CallBackEvent, _decode_CallBackEvent, _encode_CallBackEvent } from "../CSTA-call-back-event/CallBackEvent.ta.mjs";

import { CallBackMessageEvent, _decode_CallBackMessageEvent, _encode_CallBackMessageEvent } from "../CSTA-call-back-message-event/CallBackMessageEvent.ta.mjs";

import { CallerIDStatusEvent, _decode_CallerIDStatusEvent, _encode_CallerIDStatusEvent } from "../CSTA-caller-id-status-event/CallerIDStatusEvent.ta.mjs";

import { DoNotDisturbEvent, _decode_DoNotDisturbEvent, _encode_DoNotDisturbEvent } from "../CSTA-do-not-disturb-event/DoNotDisturbEvent.ta.mjs";

import { ForwardingEvent, _decode_ForwardingEvent, _encode_ForwardingEvent } from "../CSTA-forwarding-event/ForwardingEvent.ta.mjs";

import { PresenceStateEvent, _decode_PresenceStateEvent, _encode_PresenceStateEvent } from "../CSTA-presence-state-event/PresenceStateEvent.ta.mjs";

import { RouteingModeEvent, _decode_RouteingModeEvent, _encode_RouteingModeEvent } from "../CSTA-routeing-mode-event/RouteingModeEvent.ta.mjs";



/**
 * @summary LogicalDeviceFeatureEvents
 * @description
 *
 * Logical device-feature event body of `cSTAEventReport` (ECMA-285 §10).
 * Alternatives: Agent Busy/Logged On/Logged Off/Not Ready/Ready/Working After
 * Call, Auto Answer, Auto Work Mode, Call Back, Call Back Message, Caller ID
 * Status, Do Not Disturb, Forwarding, Presence State, Routeing Mode.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogicalDeviceFeatureEvents  ::=  CHOICE
 * {    agentBusy            [ 0] IMPLICIT AgentBusyEvent,
 *     agentLoggedOn            [ 1] IMPLICIT AgentLoggedOnEvent,
 *     agentLoggedOff            [ 2] IMPLICIT AgentLoggedOffEvent,
 *     agentNotReady            [ 3] IMPLICIT AgentNotReadyEvent,
 *     agentReady            [ 4] IMPLICIT AgentReadyEvent,
 *     agentWorkingAfterCall        [ 5] IMPLICIT AgentWorkingAfterCallEvent,
 *     autoAnswer            [ 6] IMPLICIT AutoAnswerEvent,
 *     autoWorkMode            [ 7] IMPLICIT AutoWorkModeEvent,
 *     callBack            [ 8] IMPLICIT CallBackEvent,
 *     callBackMessage            [ 9] IMPLICIT CallBackMessageEvent,
 *     callerIDStatus            [10] IMPLICIT CallerIDStatusEvent,
 *     doNotDisturb            [11] IMPLICIT DoNotDisturbEvent,
 *     forwarding            [12] IMPLICIT ForwardingEvent,
 *     presenceState            [14] IMPLICIT PresenceStateEvent,
 *     routeingMode            [13] IMPLICIT RouteingModeEvent }
 * ```
 */
export
type LogicalDeviceFeatureEvents =
    { agentBusy: AgentBusyEvent } /* CHOICE_ALT_ROOT */
    | { agentLoggedOn: AgentLoggedOnEvent } /* CHOICE_ALT_ROOT */
    | { agentLoggedOff: AgentLoggedOffEvent } /* CHOICE_ALT_ROOT */
    | { agentNotReady: AgentNotReadyEvent } /* CHOICE_ALT_ROOT */
    | { agentReady: AgentReadyEvent } /* CHOICE_ALT_ROOT */
    | { agentWorkingAfterCall: AgentWorkingAfterCallEvent } /* CHOICE_ALT_ROOT */
    | { autoAnswer: AutoAnswerEvent } /* CHOICE_ALT_ROOT */
    | { autoWorkMode: AutoWorkModeEvent } /* CHOICE_ALT_ROOT */
    | { callBack: CallBackEvent } /* CHOICE_ALT_ROOT */
    | { callBackMessage: CallBackMessageEvent } /* CHOICE_ALT_ROOT */
    | { callerIDStatus: CallerIDStatusEvent } /* CHOICE_ALT_ROOT */
    | { doNotDisturb: DoNotDisturbEvent } /* CHOICE_ALT_ROOT */
    | { forwarding: ForwardingEvent } /* CHOICE_ALT_ROOT */
    | { presenceState: PresenceStateEvent } /* CHOICE_ALT_ROOT */
    | { routeingMode: RouteingModeEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LogicalDeviceFeatureEvents: $.ASN1Decoder<LogicalDeviceFeatureEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogicalDeviceFeatureEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogicalDeviceFeatureEvents (el: _Element): LogicalDeviceFeatureEvents {
    if (!_cached_decoder_for_LogicalDeviceFeatureEvents) { _cached_decoder_for_LogicalDeviceFeatureEvents = $._decode_inextensible_choice<LogicalDeviceFeatureEvents>({
    "CONTEXT 0": [ "agentBusy", $._decode_implicit<AgentBusyEvent>(() => _decode_AgentBusyEvent) ],
    "CONTEXT 1": [ "agentLoggedOn", $._decode_implicit<AgentLoggedOnEvent>(() => _decode_AgentLoggedOnEvent) ],
    "CONTEXT 2": [ "agentLoggedOff", $._decode_implicit<AgentLoggedOffEvent>(() => _decode_AgentLoggedOffEvent) ],
    "CONTEXT 3": [ "agentNotReady", $._decode_implicit<AgentNotReadyEvent>(() => _decode_AgentNotReadyEvent) ],
    "CONTEXT 4": [ "agentReady", $._decode_implicit<AgentReadyEvent>(() => _decode_AgentReadyEvent) ],
    "CONTEXT 5": [ "agentWorkingAfterCall", $._decode_implicit<AgentWorkingAfterCallEvent>(() => _decode_AgentWorkingAfterCallEvent) ],
    "CONTEXT 6": [ "autoAnswer", $._decode_implicit<AutoAnswerEvent>(() => _decode_AutoAnswerEvent) ],
    "CONTEXT 7": [ "autoWorkMode", $._decode_implicit<AutoWorkModeEvent>(() => _decode_AutoWorkModeEvent) ],
    "CONTEXT 8": [ "callBack", $._decode_implicit<CallBackEvent>(() => _decode_CallBackEvent) ],
    "CONTEXT 9": [ "callBackMessage", $._decode_implicit<CallBackMessageEvent>(() => _decode_CallBackMessageEvent) ],
    "CONTEXT 10": [ "callerIDStatus", $._decode_implicit<CallerIDStatusEvent>(() => _decode_CallerIDStatusEvent) ],
    "CONTEXT 11": [ "doNotDisturb", $._decode_implicit<DoNotDisturbEvent>(() => _decode_DoNotDisturbEvent) ],
    "CONTEXT 12": [ "forwarding", $._decode_implicit<ForwardingEvent>(() => _decode_ForwardingEvent) ],
    "CONTEXT 14": [ "presenceState", $._decode_implicit<PresenceStateEvent>(() => _decode_PresenceStateEvent) ],
    "CONTEXT 13": [ "routeingMode", $._decode_implicit<RouteingModeEvent>(() => _decode_RouteingModeEvent) ]
}); }
    return _cached_decoder_for_LogicalDeviceFeatureEvents(el);
}

let _cached_encoder_for_LogicalDeviceFeatureEvents: $.ASN1Encoder<LogicalDeviceFeatureEvents> | null = null;

/**
 * @summary Encodes a(n) LogicalDeviceFeatureEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalDeviceFeatureEvents, encoded as an ASN.1 Element.
 */
export
function _encode_LogicalDeviceFeatureEvents (value: LogicalDeviceFeatureEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogicalDeviceFeatureEvents) { _cached_encoder_for_LogicalDeviceFeatureEvents = $._encode_choice<LogicalDeviceFeatureEvents>({
    "agentBusy": $._encode_implicit(_TagClass.context, 0, () => _encode_AgentBusyEvent, $.BER),
    "agentLoggedOn": $._encode_implicit(_TagClass.context, 1, () => _encode_AgentLoggedOnEvent, $.BER),
    "agentLoggedOff": $._encode_implicit(_TagClass.context, 2, () => _encode_AgentLoggedOffEvent, $.BER),
    "agentNotReady": $._encode_implicit(_TagClass.context, 3, () => _encode_AgentNotReadyEvent, $.BER),
    "agentReady": $._encode_implicit(_TagClass.context, 4, () => _encode_AgentReadyEvent, $.BER),
    "agentWorkingAfterCall": $._encode_implicit(_TagClass.context, 5, () => _encode_AgentWorkingAfterCallEvent, $.BER),
    "autoAnswer": $._encode_implicit(_TagClass.context, 6, () => _encode_AutoAnswerEvent, $.BER),
    "autoWorkMode": $._encode_implicit(_TagClass.context, 7, () => _encode_AutoWorkModeEvent, $.BER),
    "callBack": $._encode_implicit(_TagClass.context, 8, () => _encode_CallBackEvent, $.BER),
    "callBackMessage": $._encode_implicit(_TagClass.context, 9, () => _encode_CallBackMessageEvent, $.BER),
    "callerIDStatus": $._encode_implicit(_TagClass.context, 10, () => _encode_CallerIDStatusEvent, $.BER),
    "doNotDisturb": $._encode_implicit(_TagClass.context, 11, () => _encode_DoNotDisturbEvent, $.BER),
    "forwarding": $._encode_implicit(_TagClass.context, 12, () => _encode_ForwardingEvent, $.BER),
    "presenceState": $._encode_implicit(_TagClass.context, 14, () => _encode_PresenceStateEvent, $.BER),
    "routeingMode": $._encode_implicit(_TagClass.context, 13, () => _encode_RouteingModeEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_LogicalDeviceFeatureEvents(value, elGetter);
}


/* eslint-enable */
