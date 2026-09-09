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
    ReqAgentState,
    _enum_for_ReqAgentState,
    _decode_ReqAgentState,
    _encode_ReqAgentState
} from "../CSTA-set-agent-state/ReqAgentState.ta.mjs";

import { AgentID, _decode_AgentID, _encode_AgentID } from "../CSTA-device-feature-types/AgentID.ta.mjs";

import { AgentPassword, _decode_AgentPassword, _encode_AgentPassword } from "../CSTA-device-feature-types/AgentPassword.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetAgentStateArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetAgentStateArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     requestedAgentState        ReqAgentState,
 *     agentID                [2] IMPLICIT AgentID            OPTIONAL,
 *     password            [3] IMPLICIT AgentPassword        OPTIONAL,
 *     group                DeviceID                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetAgentStateArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `requestedAgentState`.
         * @public
         * @readonly
         */
        readonly requestedAgentState: ReqAgentState,
        /**
         * @summary `agentID`.
         * @public
         * @readonly
         */
        readonly agentID: OPTIONAL<AgentID>,
        /**
         * @summary `password`.
         * @public
         * @readonly
         */
        readonly password: OPTIONAL<AgentPassword>,
        /**
         * @summary `group`.
         * @public
         * @readonly
         */
        readonly group: OPTIONAL<DeviceID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetAgentStateArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetAgentStateArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetAgentStateArgument`.
     * @returns {SetAgentStateArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetAgentStateArgument)]: (SetAgentStateArgument)[_K] }): SetAgentStateArgument {
        return new SetAgentStateArgument(_o.device, _o.requestedAgentState, _o.agentID, _o.password, _o.group, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `requestedAgentState`
         * @public
         * @static
         */

    public static _enum_for_requestedAgentState = _enum_for_ReqAgentState;
}

/**
 * @summary The Leading Root Component Types of SetAgentStateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetAgentStateArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("requestedAgentState", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("agentID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("password", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("group", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SetAgentStateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetAgentStateArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetAgentStateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetAgentStateArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetAgentStateArgument: $.ASN1Decoder<SetAgentStateArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetAgentStateArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetAgentStateArgument (el: _Element): SetAgentStateArgument {
    if (!_cached_decoder_for_SetAgentStateArgument) { _cached_decoder_for_SetAgentStateArgument = function (el: _Element): SetAgentStateArgument {
    let device!: DeviceID;
    let requestedAgentState!: ReqAgentState;
    let agentID: OPTIONAL<AgentID>;
    let password: OPTIONAL<AgentPassword>;
    let group: OPTIONAL<DeviceID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "requestedAgentState": (_el: _Element): void => { requestedAgentState = _decode_ReqAgentState(_el); },
        "agentID": (_el: _Element): void => { agentID = $._decode_implicit<AgentID>(() => _decode_AgentID)(_el); },
        "password": (_el: _Element): void => { password = $._decode_implicit<AgentPassword>(() => _decode_AgentPassword)(_el); },
        "group": (_el: _Element): void => { group = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetAgentStateArgument,
        _extension_additions_list_spec_for_SetAgentStateArgument,
        _root_component_type_list_2_spec_for_SetAgentStateArgument,
        undefined,
    );
    return new SetAgentStateArgument(
        device,
        requestedAgentState,
        agentID,
        password,
        group,
        extensions
    );
}; }
    return _cached_decoder_for_SetAgentStateArgument(el);
}

let _cached_encoder_for_SetAgentStateArgument: $.ASN1Encoder<SetAgentStateArgument> | null = null;

/**
 * @summary Encodes a(n) SetAgentStateArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetAgentStateArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetAgentStateArgument (value: SetAgentStateArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetAgentStateArgument) { _cached_encoder_for_SetAgentStateArgument = function (value: SetAgentStateArgument, elGetter: $.ASN1Encoder<SetAgentStateArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* REQUIRED   */ _encode_ReqAgentState(value.requestedAgentState, $.BER),
            /* IF_ABSENT  */ ((value.agentID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AgentID, $.BER)(value.agentID, $.BER)),
            /* IF_ABSENT  */ ((value.password === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AgentPassword, $.BER)(value.password, $.BER)),
            /* IF_ABSENT  */ ((value.group === undefined) ? undefined : _encode_DeviceID(value.group, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetAgentStateArgument(value, elGetter);
}


/* eslint-enable */
