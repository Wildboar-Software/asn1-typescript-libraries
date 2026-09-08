/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { ReqAgentState, _enum_for_ReqAgentState, ReqAgentState_loggedOn /* IMPORTED_LONG_ENUMERATION_ITEM */, loggedOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqAgentState_loggedOff /* IMPORTED_LONG_ENUMERATION_ITEM */, loggedOff /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqAgentState_notReady /* IMPORTED_LONG_ENUMERATION_ITEM */, notReady /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqAgentState_ready /* IMPORTED_LONG_ENUMERATION_ITEM */, ready /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqAgentState_workingAfterCall /* IMPORTED_LONG_ENUMERATION_ITEM */, workingAfterCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReqAgentState, _encode_ReqAgentState } from "../CSTA-set-agent-state/ReqAgentState.ta.mjs";
// export { ReqAgentState, _enum_for_ReqAgentState, ReqAgentState_loggedOn /* IMPORTED_LONG_ENUMERATION_ITEM */, loggedOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqAgentState_loggedOff /* IMPORTED_LONG_ENUMERATION_ITEM */, loggedOff /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqAgentState_notReady /* IMPORTED_LONG_ENUMERATION_ITEM */, notReady /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqAgentState_ready /* IMPORTED_LONG_ENUMERATION_ITEM */, ready /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReqAgentState_workingAfterCall /* IMPORTED_LONG_ENUMERATION_ITEM */, workingAfterCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReqAgentState, _encode_ReqAgentState } from "../CSTA-set-agent-state/ReqAgentState.ta.mjs";
import { AgentID, _decode_AgentID, _encode_AgentID } from "../CSTA-device-feature-types/AgentID.ta.mjs";
// export { AgentID, _decode_AgentID, _encode_AgentID } from "../CSTA-device-feature-types/AgentID.ta.mjs";
import { AgentPassword, _decode_AgentPassword, _encode_AgentPassword } from "../CSTA-device-feature-types/AgentPassword.ta.mjs";
// export { AgentPassword, _decode_AgentPassword, _encode_AgentPassword } from "../CSTA-device-feature-types/AgentPassword.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


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
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("requestedAgentState", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("agentID", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("password", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("group", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
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
