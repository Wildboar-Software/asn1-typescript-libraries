/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { AgentBusy, _decode_AgentBusy, _encode_AgentBusy } from "../CSTA-capability-exchange/AgentBusy.ta.mjs";

import { AgentLoggedOff, _decode_AgentLoggedOff, _encode_AgentLoggedOff } from "../CSTA-capability-exchange/AgentLoggedOff.ta.mjs";

import { AgentLoggedOn, _decode_AgentLoggedOn, _encode_AgentLoggedOn } from "../CSTA-capability-exchange/AgentLoggedOn.ta.mjs";

import { AgentNotReady, _decode_AgentNotReady, _encode_AgentNotReady } from "../CSTA-capability-exchange/AgentNotReady.ta.mjs";

import { AgentReady, _decode_AgentReady, _encode_AgentReady } from "../CSTA-capability-exchange/AgentReady.ta.mjs";

import { AgentWorkingAfterCall, _decode_AgentWorkingAfterCall, _encode_AgentWorkingAfterCall } from "../CSTA-capability-exchange/AgentWorkingAfterCall.ta.mjs";

import { AutoAnswer, _decode_AutoAnswer, _encode_AutoAnswer } from "../CSTA-capability-exchange/AutoAnswer.ta.mjs";

import { AutoWorkMode, _decode_AutoWorkMode, _encode_AutoWorkMode } from "../CSTA-capability-exchange/AutoWorkMode.ta.mjs";

import { CallBackEvent, _decode_CallBackEvent, _encode_CallBackEvent } from "../CSTA-capability-exchange/CallBackEvent.ta.mjs";

import { CallBackMessageEvent, _decode_CallBackMessageEvent, _encode_CallBackMessageEvent } from "../CSTA-capability-exchange/CallBackMessageEvent.ta.mjs";

import { CallerIDStatus, _decode_CallerIDStatus, _encode_CallerIDStatus } from "../CSTA-capability-exchange/CallerIDStatus.ta.mjs";

import { DoNotDisturb, _decode_DoNotDisturb, _encode_DoNotDisturb } from "../CSTA-capability-exchange/DoNotDisturb.ta.mjs";

import { Forwarding, _decode_Forwarding, _encode_Forwarding } from "../CSTA-capability-exchange/Forwarding.ta.mjs";

import { PresenceStateEvent, _decode_PresenceStateEvent, _encode_PresenceStateEvent } from "../CSTA-capability-exchange/PresenceStateEvent.ta.mjs";

import { RouteingMode, _decode_RouteingMode, _encode_RouteingMode } from "../CSTA-capability-exchange/RouteingMode.ta.mjs";



/**
 * @summary LogicalEvtsList
 * @description
 * Logical Device Feature events the SF supports (ECMA-269 Annex C.15, ECMA-285
 * §9.10). Omit unsupported events.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogicalEvtsList ::= SEQUENCE
 * {     agentBusy             [ 0] IMPLICIT     AgentBusy             OPTIONAL,
 *     agentLoggedOff             [ 1] IMPLICIT     AgentLoggedOff             OPTIONAL,
 *     agentLoggedOn             [ 2] IMPLICIT     AgentLoggedOn             OPTIONAL,
 *     agentNotReady             [ 3] IMPLICIT     AgentNotReady             OPTIONAL,
 *     agentReady             [ 4] IMPLICIT     AgentReady             OPTIONAL,
 *     agentWorkingAfterCall         [ 5] IMPLICIT     AgentWorkingAfterCall         OPTIONAL,
 *     autoAnswer             [ 6] IMPLICIT     AutoAnswer             OPTIONAL,
 *     autoWorkMode             [ 7] IMPLICIT     AutoWorkMode             OPTIONAL,
 *     callBack             [ 8] IMPLICIT     CallBackEvent             OPTIONAL,
 *     callBackMessage         [ 9] IMPLICIT     CallBackMessageEvent         OPTIONAL,
 *     callerIDStatus             [10] IMPLICIT     CallerIDStatus             OPTIONAL,
 *     doNotDisturb             [11] IMPLICIT     DoNotDisturb             OPTIONAL,
 *     forwarding             [12] IMPLICIT     Forwarding             OPTIONAL,
 *     presenceState            [14] IMPLICIT     PresenceStateEvent        OPTIONAL,
 *     routeingMode             [13] IMPLICIT     RouteingMode             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogicalEvtsList {
    constructor (
        /**
         * @summary `agentBusy`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly agentBusy: OPTIONAL<AgentBusy>,
        /**
         * @summary `agentLoggedOff`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly agentLoggedOff: OPTIONAL<AgentLoggedOff>,
        /**
         * @summary `agentLoggedOn`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly agentLoggedOn: OPTIONAL<AgentLoggedOn>,
        /**
         * @summary `agentNotReady`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly agentNotReady: OPTIONAL<AgentNotReady>,
        /**
         * @summary `agentReady`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly agentReady: OPTIONAL<AgentReady>,
        /**
         * @summary `agentWorkingAfterCall`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly agentWorkingAfterCall: OPTIONAL<AgentWorkingAfterCall>,
        /**
         * @summary `autoAnswer`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly autoAnswer: OPTIONAL<AutoAnswer>,
        /**
         * @summary `autoWorkMode`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly autoWorkMode: OPTIONAL<AutoWorkMode>,
        /**
         * @summary `callBack`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly callBack: OPTIONAL<CallBackEvent>,
        /**
         * @summary `callBackMessage`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly callBackMessage: OPTIONAL<CallBackMessageEvent>,
        /**
         * @summary `callerIDStatus`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly callerIDStatus: OPTIONAL<CallerIDStatus>,
        /**
         * @summary `doNotDisturb`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly doNotDisturb: OPTIONAL<DoNotDisturb>,
        /**
         * @summary `forwarding`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly forwarding: OPTIONAL<Forwarding>,
        /**
         * @summary `presenceState`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly presenceState: OPTIONAL<PresenceStateEvent>,
        /**
         * @summary `routeingMode`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly routeingMode: OPTIONAL<RouteingMode>
    ) {}

    /**
     * @summary Restructures an object into a LogicalEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `LogicalEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogicalEvtsList`.
     * @returns {LogicalEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (LogicalEvtsList)]: (LogicalEvtsList)[_K] }): LogicalEvtsList {
        return new LogicalEvtsList(_o.agentBusy, _o.agentLoggedOff, _o.agentLoggedOn, _o.agentNotReady, _o.agentReady, _o.agentWorkingAfterCall, _o.autoAnswer, _o.autoWorkMode, _o.callBack, _o.callBackMessage, _o.callerIDStatus, _o.doNotDisturb, _o.forwarding, _o.presenceState, _o.routeingMode);
    }


}

/**
 * @summary The Leading Root Component Types of LogicalEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogicalEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("agentBusy", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("agentLoggedOff", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("agentLoggedOn", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("agentNotReady", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("agentReady", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("agentWorkingAfterCall", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("autoAnswer", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("autoWorkMode", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("callBack", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("callBackMessage", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("callerIDStatus", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("doNotDisturb", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("forwarding", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("presenceState", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("routeingMode", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of LogicalEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogicalEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogicalEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogicalEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogicalEvtsList: $.ASN1Decoder<LogicalEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogicalEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogicalEvtsList (el: _Element): LogicalEvtsList {
    if (!_cached_decoder_for_LogicalEvtsList) { _cached_decoder_for_LogicalEvtsList = function (el: _Element): LogicalEvtsList {
    let agentBusy: OPTIONAL<AgentBusy>;
    let agentLoggedOff: OPTIONAL<AgentLoggedOff>;
    let agentLoggedOn: OPTIONAL<AgentLoggedOn>;
    let agentNotReady: OPTIONAL<AgentNotReady>;
    let agentReady: OPTIONAL<AgentReady>;
    let agentWorkingAfterCall: OPTIONAL<AgentWorkingAfterCall>;
    let autoAnswer: OPTIONAL<AutoAnswer>;
    let autoWorkMode: OPTIONAL<AutoWorkMode>;
    let callBack: OPTIONAL<CallBackEvent>;
    let callBackMessage: OPTIONAL<CallBackMessageEvent>;
    let callerIDStatus: OPTIONAL<CallerIDStatus>;
    let doNotDisturb: OPTIONAL<DoNotDisturb>;
    let forwarding: OPTIONAL<Forwarding>;
    let presenceState: OPTIONAL<PresenceStateEvent>;
    let routeingMode: OPTIONAL<RouteingMode>;
    const callbacks: $.DecodingMap = {
        "agentBusy": (_el: _Element): void => { agentBusy = $._decode_implicit<AgentBusy>(() => _decode_AgentBusy)(_el); },
        "agentLoggedOff": (_el: _Element): void => { agentLoggedOff = $._decode_implicit<AgentLoggedOff>(() => _decode_AgentLoggedOff)(_el); },
        "agentLoggedOn": (_el: _Element): void => { agentLoggedOn = $._decode_implicit<AgentLoggedOn>(() => _decode_AgentLoggedOn)(_el); },
        "agentNotReady": (_el: _Element): void => { agentNotReady = $._decode_implicit<AgentNotReady>(() => _decode_AgentNotReady)(_el); },
        "agentReady": (_el: _Element): void => { agentReady = $._decode_implicit<AgentReady>(() => _decode_AgentReady)(_el); },
        "agentWorkingAfterCall": (_el: _Element): void => { agentWorkingAfterCall = $._decode_implicit<AgentWorkingAfterCall>(() => _decode_AgentWorkingAfterCall)(_el); },
        "autoAnswer": (_el: _Element): void => { autoAnswer = $._decode_implicit<AutoAnswer>(() => _decode_AutoAnswer)(_el); },
        "autoWorkMode": (_el: _Element): void => { autoWorkMode = $._decode_implicit<AutoWorkMode>(() => _decode_AutoWorkMode)(_el); },
        "callBack": (_el: _Element): void => { callBack = $._decode_implicit<CallBackEvent>(() => _decode_CallBackEvent)(_el); },
        "callBackMessage": (_el: _Element): void => { callBackMessage = $._decode_implicit<CallBackMessageEvent>(() => _decode_CallBackMessageEvent)(_el); },
        "callerIDStatus": (_el: _Element): void => { callerIDStatus = $._decode_implicit<CallerIDStatus>(() => _decode_CallerIDStatus)(_el); },
        "doNotDisturb": (_el: _Element): void => { doNotDisturb = $._decode_implicit<DoNotDisturb>(() => _decode_DoNotDisturb)(_el); },
        "forwarding": (_el: _Element): void => { forwarding = $._decode_implicit<Forwarding>(() => _decode_Forwarding)(_el); },
        "presenceState": (_el: _Element): void => { presenceState = $._decode_implicit<PresenceStateEvent>(() => _decode_PresenceStateEvent)(_el); },
        "routeingMode": (_el: _Element): void => { routeingMode = $._decode_implicit<RouteingMode>(() => _decode_RouteingMode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogicalEvtsList,
        _extension_additions_list_spec_for_LogicalEvtsList,
        _root_component_type_list_2_spec_for_LogicalEvtsList,
        undefined,
    );
    return new LogicalEvtsList(
        agentBusy,
        agentLoggedOff,
        agentLoggedOn,
        agentNotReady,
        agentReady,
        agentWorkingAfterCall,
        autoAnswer,
        autoWorkMode,
        callBack,
        callBackMessage,
        callerIDStatus,
        doNotDisturb,
        forwarding,
        presenceState,
        routeingMode
    );
}; }
    return _cached_decoder_for_LogicalEvtsList(el);
}

let _cached_encoder_for_LogicalEvtsList: $.ASN1Encoder<LogicalEvtsList> | null = null;

/**
 * @summary Encodes a(n) LogicalEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_LogicalEvtsList (value: LogicalEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogicalEvtsList) { _cached_encoder_for_LogicalEvtsList = function (value: LogicalEvtsList, elGetter: $.ASN1Encoder<LogicalEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.agentBusy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AgentBusy, $.BER)(value.agentBusy, $.BER)),
            /* IF_ABSENT  */ ((value.agentLoggedOff === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AgentLoggedOff, $.BER)(value.agentLoggedOff, $.BER)),
            /* IF_ABSENT  */ ((value.agentLoggedOn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AgentLoggedOn, $.BER)(value.agentLoggedOn, $.BER)),
            /* IF_ABSENT  */ ((value.agentNotReady === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AgentNotReady, $.BER)(value.agentNotReady, $.BER)),
            /* IF_ABSENT  */ ((value.agentReady === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AgentReady, $.BER)(value.agentReady, $.BER)),
            /* IF_ABSENT  */ ((value.agentWorkingAfterCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_AgentWorkingAfterCall, $.BER)(value.agentWorkingAfterCall, $.BER)),
            /* IF_ABSENT  */ ((value.autoAnswer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_AutoAnswer, $.BER)(value.autoAnswer, $.BER)),
            /* IF_ABSENT  */ ((value.autoWorkMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_AutoWorkMode, $.BER)(value.autoWorkMode, $.BER)),
            /* IF_ABSENT  */ ((value.callBack === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_CallBackEvent, $.BER)(value.callBack, $.BER)),
            /* IF_ABSENT  */ ((value.callBackMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_CallBackMessageEvent, $.BER)(value.callBackMessage, $.BER)),
            /* IF_ABSENT  */ ((value.callerIDStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_CallerIDStatus, $.BER)(value.callerIDStatus, $.BER)),
            /* IF_ABSENT  */ ((value.doNotDisturb === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_DoNotDisturb, $.BER)(value.doNotDisturb, $.BER)),
            /* IF_ABSENT  */ ((value.forwarding === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_Forwarding, $.BER)(value.forwarding, $.BER)),
            /* IF_ABSENT  */ ((value.presenceState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_PresenceStateEvent, $.BER)(value.presenceState, $.BER)),
            /* IF_ABSENT  */ ((value.routeingMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_RouteingMode, $.BER)(value.routeingMode, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogicalEvtsList(value, elGetter);
}


/* eslint-enable */
