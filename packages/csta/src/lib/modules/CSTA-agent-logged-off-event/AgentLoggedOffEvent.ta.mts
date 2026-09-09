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

import { AgentPassword, _decode_AgentPassword, _encode_AgentPassword } from "../CSTA-device-feature-types/AgentPassword.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary AgentLoggedOffEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentLoggedOffEvent ::= SEQUENCE
 * {    agentDevice             SubjectDeviceID,
 *     agentID                [2] IMPLICIT AgentID            OPTIONAL,
 *     acdGroup            DeviceID                OPTIONAL,
 *     agentPassword            [3] IMPLICIT AgentPassword        OPTIONAL,
 *     cause                EventCause                OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AgentLoggedOffEvent {
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
         * @summary `agentPassword`.
         * @public
         * @readonly
         */
        readonly agentPassword: OPTIONAL<AgentPassword>,
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
     * @summary Restructures an object into a AgentLoggedOffEvent
     * @description
     * 
     * This takes an `object` and converts it to a `AgentLoggedOffEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AgentLoggedOffEvent`.
     * @returns {AgentLoggedOffEvent}
     */
    public static _from_object (_o: { [_K in keyof (AgentLoggedOffEvent)]: (AgentLoggedOffEvent)[_K] }): AgentLoggedOffEvent {
        return new AgentLoggedOffEvent(_o.agentDevice, _o.agentID, _o.acdGroup, _o.agentPassword, _o.cause, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of AgentLoggedOffEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AgentLoggedOffEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("agentDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("agentID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("acdGroup", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("agentPassword", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of AgentLoggedOffEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AgentLoggedOffEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AgentLoggedOffEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AgentLoggedOffEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AgentLoggedOffEvent: $.ASN1Decoder<AgentLoggedOffEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentLoggedOffEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentLoggedOffEvent (el: _Element): AgentLoggedOffEvent {
    if (!_cached_decoder_for_AgentLoggedOffEvent) { _cached_decoder_for_AgentLoggedOffEvent = function (el: _Element): AgentLoggedOffEvent {
    let agentDevice!: SubjectDeviceID;
    let agentID: OPTIONAL<AgentID>;
    let acdGroup: OPTIONAL<DeviceID>;
    let agentPassword: OPTIONAL<AgentPassword>;
    let cause: OPTIONAL<EventCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "agentDevice": (_el: _Element): void => { agentDevice = _decode_SubjectDeviceID(_el); },
        "agentID": (_el: _Element): void => { agentID = $._decode_implicit<AgentID>(() => _decode_AgentID)(_el); },
        "acdGroup": (_el: _Element): void => { acdGroup = _decode_DeviceID(_el); },
        "agentPassword": (_el: _Element): void => { agentPassword = $._decode_implicit<AgentPassword>(() => _decode_AgentPassword)(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AgentLoggedOffEvent,
        _extension_additions_list_spec_for_AgentLoggedOffEvent,
        _root_component_type_list_2_spec_for_AgentLoggedOffEvent,
        undefined,
    );
    return new AgentLoggedOffEvent(
        agentDevice,
        agentID,
        acdGroup,
        agentPassword,
        cause,
        extensions
    );
}; }
    return _cached_decoder_for_AgentLoggedOffEvent(el);
}

let _cached_encoder_for_AgentLoggedOffEvent: $.ASN1Encoder<AgentLoggedOffEvent> | null = null;

/**
 * @summary Encodes a(n) AgentLoggedOffEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentLoggedOffEvent, encoded as an ASN.1 Element.
 */
export
function _encode_AgentLoggedOffEvent (value: AgentLoggedOffEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentLoggedOffEvent) { _cached_encoder_for_AgentLoggedOffEvent = function (value: AgentLoggedOffEvent, elGetter: $.ASN1Encoder<AgentLoggedOffEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.agentDevice, $.BER),
            /* IF_ABSENT  */ ((value.agentID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AgentID, $.BER)(value.agentID, $.BER)),
            /* IF_ABSENT  */ ((value.acdGroup === undefined) ? undefined : _encode_DeviceID(value.acdGroup, $.BER)),
            /* IF_ABSENT  */ ((value.agentPassword === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AgentPassword, $.BER)(value.agentPassword, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : _encode_EventCause(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AgentLoggedOffEvent(value, elGetter);
}


/* eslint-enable */
