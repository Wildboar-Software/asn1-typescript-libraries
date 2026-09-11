/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    ENUMERATED,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { AgentID, _decode_AgentID, _encode_AgentID } from "../CSTA-device-feature-types/AgentID.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import {
    AgentWorkingAfterCallEvent_pendingAgentState,
    _enum_for_AgentWorkingAfterCallEvent_pendingAgentState,
    notReady /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ready /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AgentWorkingAfterCallEvent_pendingAgentState,
    _encode_AgentWorkingAfterCallEvent_pendingAgentState
} from "../CSTA-agent-working-after-call-event/AgentWorkingAfterCallEvent-pendingAgentState.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary AgentWorkingAfterCallEvent
 * @description
 *
 * Agent Working After Call event (ECMA-269 §22.2.6 / ECMA-285 §20.2.6).
 * Direction: SF→CF via Event Report. After-call work or a non-ACD call. May be
 * reported for a monitor on the ACD device, ACD group, or agent device
 * (§6.1.1.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentWorkingAfterCallEvent ::= SEQUENCE
 * {    agentDevice             SubjectDeviceID,
 *     agentID                AgentID                    OPTIONAL,
 *     acdGroup            DeviceID                OPTIONAL,
 *     pendingAgentState        [2] IMPLICIT ENUMERATED
 *     {    notReady        (0),
 *         ready            (1),
 *         null            (2) }                    OPTIONAL,
 *     cause                [3] IMPLICIT EventCause            OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AgentWorkingAfterCallEvent {
    constructor (
        /**
         * @summary `agentDevice`.
         * @description
         *
         * Device at which the agent entered workingAfterCall.
         * @public
         * @readonly
         */
        readonly agentDevice: SubjectDeviceID,
        /**
         * @summary `agentID`.
         * @description
         *
         * Required if multiple agentIDs exist at the agent device.
         * @public
         * @readonly
         */
        readonly agentID: OPTIONAL<AgentID>,
        /**
         * @summary `acdGroup`.
         * @description
         *
         * Present iff the event is associated with ACD group activity
         * (§6.1.1.6.5); otherwise absent.
         * @public
         * @readonly
         */
        readonly acdGroup: OPTIONAL<DeviceID>,
        /**
         * @summary `pendingAgentState`.
         * @description
         *
         * Next state after Working After Call ends: Not Ready, Ready, or Null.
         * Required if the SF delays that transition.
         * @public
         * @readonly
         */
        readonly pendingAgentState: OPTIONAL<AgentWorkingAfterCallEvent_pendingAgentState>,
        /**
         * @summary `cause`.
         * @description
         *
         * Reason for the event.
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<EventCause>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a AgentWorkingAfterCallEvent
     * @description
     * 
     * This takes an `object` and converts it to a `AgentWorkingAfterCallEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AgentWorkingAfterCallEvent`.
     * @returns {AgentWorkingAfterCallEvent}
     */
    public static _from_object (_o: { [_K in keyof (AgentWorkingAfterCallEvent)]: (AgentWorkingAfterCallEvent)[_K] }): AgentWorkingAfterCallEvent {
        return new AgentWorkingAfterCallEvent(_o.agentDevice, _o.agentID, _o.acdGroup, _o.pendingAgentState, _o.cause, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `pendingAgentState`
         * @public
         * @static
         */

    public static _enum_for_pendingAgentState = _enum_for_AgentWorkingAfterCallEvent_pendingAgentState;        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of AgentWorkingAfterCallEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AgentWorkingAfterCallEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("agentDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("agentID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("acdGroup", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("pendingAgentState", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of AgentWorkingAfterCallEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AgentWorkingAfterCallEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AgentWorkingAfterCallEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AgentWorkingAfterCallEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AgentWorkingAfterCallEvent: $.ASN1Decoder<AgentWorkingAfterCallEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentWorkingAfterCallEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentWorkingAfterCallEvent (el: _Element): AgentWorkingAfterCallEvent {
    if (!_cached_decoder_for_AgentWorkingAfterCallEvent) { _cached_decoder_for_AgentWorkingAfterCallEvent = function (el: _Element): AgentWorkingAfterCallEvent {
    let agentDevice!: SubjectDeviceID;
    let agentID: OPTIONAL<AgentID>;
    let acdGroup: OPTIONAL<DeviceID>;
    let pendingAgentState: OPTIONAL<AgentWorkingAfterCallEvent_pendingAgentState>;
    let cause: OPTIONAL<EventCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "agentDevice": (_el: _Element): void => { agentDevice = _decode_SubjectDeviceID(_el); },
        "agentID": (_el: _Element): void => { agentID = _decode_AgentID(_el); },
        "acdGroup": (_el: _Element): void => { acdGroup = _decode_DeviceID(_el); },
        "pendingAgentState": (_el: _Element): void => { pendingAgentState = $._decode_implicit<AgentWorkingAfterCallEvent_pendingAgentState>(() => _decode_AgentWorkingAfterCallEvent_pendingAgentState)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<EventCause>(() => _decode_EventCause)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AgentWorkingAfterCallEvent,
        _extension_additions_list_spec_for_AgentWorkingAfterCallEvent,
        _root_component_type_list_2_spec_for_AgentWorkingAfterCallEvent,
        undefined,
    );
    return new AgentWorkingAfterCallEvent(
        agentDevice,
        agentID,
        acdGroup,
        pendingAgentState,
        cause,
        extensions
    );
}; }
    return _cached_decoder_for_AgentWorkingAfterCallEvent(el);
}

let _cached_encoder_for_AgentWorkingAfterCallEvent: $.ASN1Encoder<AgentWorkingAfterCallEvent> | null = null;

/**
 * @summary Encodes a(n) AgentWorkingAfterCallEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentWorkingAfterCallEvent, encoded as an ASN.1 Element.
 */
export
function _encode_AgentWorkingAfterCallEvent (value: AgentWorkingAfterCallEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentWorkingAfterCallEvent) { _cached_encoder_for_AgentWorkingAfterCallEvent = function (value: AgentWorkingAfterCallEvent, elGetter: $.ASN1Encoder<AgentWorkingAfterCallEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.agentDevice, $.BER),
            /* IF_ABSENT  */ ((value.agentID === undefined) ? undefined : _encode_AgentID(value.agentID, $.BER)),
            /* IF_ABSENT  */ ((value.acdGroup === undefined) ? undefined : _encode_DeviceID(value.acdGroup, $.BER)),
            /* IF_ABSENT  */ ((value.pendingAgentState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AgentWorkingAfterCallEvent_pendingAgentState, $.BER)(value.pendingAgentState, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_EventCause, $.BER)(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AgentWorkingAfterCallEvent(value, elGetter);
}


/* eslint-enable */
