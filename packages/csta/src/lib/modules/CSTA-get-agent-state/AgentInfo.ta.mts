/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import {
    AgentState,
    _enum_for_AgentState,
    _decode_AgentState,
    _encode_AgentState
} from "../CSTA-device-feature-types/AgentState.ta.mjs";

import {
    PendingAgentState,
    _enum_for_PendingAgentState,
    _decode_PendingAgentState,
    _encode_PendingAgentState
} from "../CSTA-device-feature-types/PendingAgentState.ta.mjs";

import {
    AgentStateCondition,
    _enum_for_AgentStateCondition,
    _decode_AgentStateCondition,
    _encode_AgentStateCondition
} from "../CSTA-get-agent-state/AgentStateCondition.ta.mjs";



/**
 * @summary AgentInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentInfo ::= SEQUENCE
 * {    acdGroup            DeviceID                OPTIONAL,
 *     agentState            AgentState,
 *     pendingAgentState        [0] IMPLICIT PendingAgentState        OPTIONAL,
 *     agentStateCondition        [1] IMPLICIT AgentStateCondition    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AgentInfo {
    constructor (
        /**
         * @summary `acdGroup`.
         * @public
         * @readonly
         */
        readonly acdGroup: OPTIONAL<DeviceID>,
        /**
         * @summary `agentState`.
         * @public
         * @readonly
         */
        readonly agentState: AgentState,
        /**
         * @summary `pendingAgentState`.
         * @public
         * @readonly
         */
        readonly pendingAgentState: OPTIONAL<PendingAgentState>,
        /**
         * @summary `agentStateCondition`.
         * @public
         * @readonly
         */
        readonly agentStateCondition: OPTIONAL<AgentStateCondition>
    ) {}

    /**
     * @summary Restructures an object into a AgentInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AgentInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AgentInfo`.
     * @returns {AgentInfo}
     */
    public static _from_object (_o: { [_K in keyof (AgentInfo)]: (AgentInfo)[_K] }): AgentInfo {
        return new AgentInfo(_o.acdGroup, _o.agentState, _o.pendingAgentState, _o.agentStateCondition);
    }

        /**
         * @summary The enum used as the type of the component `agentState`
         * @public
         * @static
         */

    public static _enum_for_agentState = _enum_for_AgentState;        /**
         * @summary The enum used as the type of the component `pendingAgentState`
         * @public
         * @static
         */

    public static _enum_for_pendingAgentState = _enum_for_PendingAgentState;        /**
         * @summary The enum used as the type of the component `agentStateCondition`
         * @public
         * @static
         */

    public static _enum_for_agentStateCondition = _enum_for_AgentStateCondition;
}

/**
 * @summary The Leading Root Component Types of AgentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AgentInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("acdGroup", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("agentState", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("pendingAgentState", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("agentStateCondition", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AgentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AgentInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AgentInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AgentInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AgentInfo: $.ASN1Decoder<AgentInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentInfo (el: _Element): AgentInfo {
    if (!_cached_decoder_for_AgentInfo) { _cached_decoder_for_AgentInfo = function (el: _Element): AgentInfo {
    let acdGroup: OPTIONAL<DeviceID>;
    let agentState!: AgentState;
    let pendingAgentState: OPTIONAL<PendingAgentState>;
    let agentStateCondition: OPTIONAL<AgentStateCondition>;
    const callbacks: $.DecodingMap = {
        "acdGroup": (_el: _Element): void => { acdGroup = _decode_DeviceID(_el); },
        "agentState": (_el: _Element): void => { agentState = _decode_AgentState(_el); },
        "pendingAgentState": (_el: _Element): void => { pendingAgentState = $._decode_implicit<PendingAgentState>(() => _decode_PendingAgentState)(_el); },
        "agentStateCondition": (_el: _Element): void => { agentStateCondition = $._decode_implicit<AgentStateCondition>(() => _decode_AgentStateCondition)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AgentInfo,
        _extension_additions_list_spec_for_AgentInfo,
        _root_component_type_list_2_spec_for_AgentInfo,
        undefined,
    );
    return new AgentInfo(
        acdGroup,
        agentState,
        pendingAgentState,
        agentStateCondition
    );
}; }
    return _cached_decoder_for_AgentInfo(el);
}

let _cached_encoder_for_AgentInfo: $.ASN1Encoder<AgentInfo> | null = null;

/**
 * @summary Encodes a(n) AgentInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AgentInfo (value: AgentInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentInfo) { _cached_encoder_for_AgentInfo = function (value: AgentInfo, elGetter: $.ASN1Encoder<AgentInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.acdGroup === undefined) ? undefined : _encode_DeviceID(value.acdGroup, $.BER)),
            /* REQUIRED   */ _encode_AgentState(value.agentState, $.BER),
            /* IF_ABSENT  */ ((value.pendingAgentState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PendingAgentState, $.BER)(value.pendingAgentState, $.BER)),
            /* IF_ABSENT  */ ((value.agentStateCondition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AgentStateCondition, $.BER)(value.agentStateCondition, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AgentInfo(value, elGetter);
}


/* eslint-enable */
