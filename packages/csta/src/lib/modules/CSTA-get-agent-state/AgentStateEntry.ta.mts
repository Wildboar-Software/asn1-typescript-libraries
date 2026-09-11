/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { AgentID, _decode_AgentID, _encode_AgentID } from "../CSTA-device-feature-types/AgentID.ta.mjs";

import { AgentInfo, _decode_AgentInfo, _encode_AgentInfo } from "../CSTA-get-agent-state/AgentInfo.ta.mjs";



/**
 * @summary AgentStateEntry
 * @description
 *
 * One agent at the device (ECMA-269 §22.1.5.2.1). ASN.1 `loggedOn` is spec
 * `loggedOnState`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentStateEntry ::= SEQUENCE
 * {    agentID                AgentID                    OPTIONAL,
 *     loggedOn            BOOLEAN,
 *     agentInfo            SEQUENCE OF AgentInfo             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AgentStateEntry {
    constructor (
        /**
         * @summary `agentID`.
         * @description
         *
         * Required if multiple agentIDs are associated with the device.
         * @public
         * @readonly
         */
        readonly agentID: OPTIONAL<AgentID>,
        /**
         * @summary `loggedOn`.
         * @description
         *
         * TRUE = logged on; FALSE = not logged on.
         * @public
         * @readonly
         */
        readonly loggedOn: BOOLEAN,
        /**
         * @summary `agentInfo`.
         * @description
         *
         * Per-group/state rows. A specific agent may have more than one state
         * association.
         * @public
         * @readonly
         */
        readonly agentInfo: OPTIONAL<AgentInfo[]>
    ) {}

    /**
     * @summary Restructures an object into a AgentStateEntry
     * @description
     * 
     * This takes an `object` and converts it to a `AgentStateEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AgentStateEntry`.
     * @returns {AgentStateEntry}
     */
    public static _from_object (_o: { [_K in keyof (AgentStateEntry)]: (AgentStateEntry)[_K] }): AgentStateEntry {
        return new AgentStateEntry(_o.agentID, _o.loggedOn, _o.agentInfo);
    }


}

/**
 * @summary The Leading Root Component Types of AgentStateEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AgentStateEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("agentID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("loggedOn", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("agentInfo", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of AgentStateEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AgentStateEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AgentStateEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AgentStateEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AgentStateEntry: $.ASN1Decoder<AgentStateEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentStateEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentStateEntry (el: _Element): AgentStateEntry {
    if (!_cached_decoder_for_AgentStateEntry) { _cached_decoder_for_AgentStateEntry = function (el: _Element): AgentStateEntry {
    let agentID: OPTIONAL<AgentID>;
    let loggedOn!: BOOLEAN;
    let agentInfo: OPTIONAL<AgentInfo[]>;
    const callbacks: $.DecodingMap = {
        "agentID": (_el: _Element): void => { agentID = _decode_AgentID(_el); },
        "loggedOn": (_el: _Element): void => { loggedOn = $._decodeBoolean(_el); },
        "agentInfo": (_el: _Element): void => { agentInfo = $._decodeSequenceOf<AgentInfo>(() => _decode_AgentInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AgentStateEntry,
        _extension_additions_list_spec_for_AgentStateEntry,
        _root_component_type_list_2_spec_for_AgentStateEntry,
        undefined,
    );
    return new AgentStateEntry(
        agentID,
        loggedOn,
        agentInfo
    );
}; }
    return _cached_decoder_for_AgentStateEntry(el);
}

let _cached_encoder_for_AgentStateEntry: $.ASN1Encoder<AgentStateEntry> | null = null;

/**
 * @summary Encodes a(n) AgentStateEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentStateEntry, encoded as an ASN.1 Element.
 */
export
function _encode_AgentStateEntry (value: AgentStateEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentStateEntry) { _cached_encoder_for_AgentStateEntry = function (value: AgentStateEntry, elGetter: $.ASN1Encoder<AgentStateEntry>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.agentID === undefined) ? undefined : _encode_AgentID(value.agentID, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.loggedOn, $.BER),
            /* IF_ABSENT  */ ((value.agentInfo === undefined) ? undefined : $._encodeSequenceOf<AgentInfo>(() => _encode_AgentInfo, $.BER)(value.agentInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AgentStateEntry(value, elGetter);
}


/* eslint-enable */
