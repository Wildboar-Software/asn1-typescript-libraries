/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { AgentID, _decode_AgentID, _encode_AgentID } from "../CSTA-device-feature-types/AgentID.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import {
    PendingAgentState,
    _enum_for_PendingAgentState,
    _decode_PendingAgentState,
    _encode_PendingAgentState
} from "../CSTA-device-feature-types/PendingAgentState.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary AgentBusyEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentBusyEvent ::= SEQUENCE
 * {    agentDevice             SubjectDeviceID,
 *     agentID                AgentID                    OPTIONAL,
 *     acdGroup            DeviceID                OPTIONAL,
 *     pendingAgentState        [2] IMPLICIT PendingAgentState        OPTIONAL,
 *     cause                [3] IMPLICIT EventCause            OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AgentBusyEvent {
    constructor (
        /**
         * @summary `agentDevice`.
         * @public
         * @readonly
         */
        readonly agentDevice: SubjectDeviceID,
        /**
         * @summary `agentID`.
         * @public
         * @readonly
         */
        readonly agentID: OPTIONAL<AgentID>,
        /**
         * @summary `acdGroup`.
         * @public
         * @readonly
         */
        readonly acdGroup: OPTIONAL<DeviceID>,
        /**
         * @summary `pendingAgentState`.
         * @public
         * @readonly
         */
        readonly pendingAgentState: OPTIONAL<PendingAgentState>,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<EventCause>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a AgentBusyEvent
     * @description
     * 
     * This takes an `object` and converts it to a `AgentBusyEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AgentBusyEvent`.
     * @returns {AgentBusyEvent}
     */
    public static _from_object (_o: { [_K in keyof (AgentBusyEvent)]: (AgentBusyEvent)[_K] }): AgentBusyEvent {
        return new AgentBusyEvent(_o.agentDevice, _o.agentID, _o.acdGroup, _o.pendingAgentState, _o.cause, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `pendingAgentState`
         * @public
         * @static
         */

    public static _enum_for_pendingAgentState = _enum_for_PendingAgentState;        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of AgentBusyEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AgentBusyEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("agentDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("agentID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("acdGroup", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pendingAgentState", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of AgentBusyEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AgentBusyEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AgentBusyEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AgentBusyEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AgentBusyEvent: $.ASN1Decoder<AgentBusyEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentBusyEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentBusyEvent (el: _Element): AgentBusyEvent {
    if (!_cached_decoder_for_AgentBusyEvent) { _cached_decoder_for_AgentBusyEvent = function (el: _Element): AgentBusyEvent {
    let agentDevice!: SubjectDeviceID;
    let agentID: OPTIONAL<AgentID>;
    let acdGroup: OPTIONAL<DeviceID>;
    let pendingAgentState: OPTIONAL<PendingAgentState>;
    let cause: OPTIONAL<EventCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "agentDevice": (_el: _Element): void => { agentDevice = _decode_SubjectDeviceID(_el); },
        "agentID": (_el: _Element): void => { agentID = _decode_AgentID(_el); },
        "acdGroup": (_el: _Element): void => { acdGroup = _decode_DeviceID(_el); },
        "pendingAgentState": (_el: _Element): void => { pendingAgentState = $._decode_implicit<PendingAgentState>(() => _decode_PendingAgentState)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<EventCause>(() => _decode_EventCause)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AgentBusyEvent,
        _extension_additions_list_spec_for_AgentBusyEvent,
        _root_component_type_list_2_spec_for_AgentBusyEvent,
        undefined,
    );
    return new AgentBusyEvent(
        agentDevice,
        agentID,
        acdGroup,
        pendingAgentState,
        cause,
        extensions
    );
}; }
    return _cached_decoder_for_AgentBusyEvent(el);
}

let _cached_encoder_for_AgentBusyEvent: $.ASN1Encoder<AgentBusyEvent> | null = null;

/**
 * @summary Encodes a(n) AgentBusyEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentBusyEvent, encoded as an ASN.1 Element.
 */
export
function _encode_AgentBusyEvent (value: AgentBusyEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentBusyEvent) { _cached_encoder_for_AgentBusyEvent = function (value: AgentBusyEvent, elGetter: $.ASN1Encoder<AgentBusyEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.agentDevice, $.BER),
            /* IF_ABSENT  */ ((value.agentID === undefined) ? undefined : _encode_AgentID(value.agentID, $.BER)),
            /* IF_ABSENT  */ ((value.acdGroup === undefined) ? undefined : _encode_DeviceID(value.acdGroup, $.BER)),
            /* IF_ABSENT  */ ((value.pendingAgentState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PendingAgentState, $.BER)(value.pendingAgentState, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_EventCause, $.BER)(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AgentBusyEvent(value, elGetter);
}


/* eslint-enable */
