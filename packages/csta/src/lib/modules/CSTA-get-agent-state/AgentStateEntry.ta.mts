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
import { AgentID, _decode_AgentID, _encode_AgentID } from "../CSTA-device-feature-types/AgentID.ta.mjs";
// export { AgentID, _decode_AgentID, _encode_AgentID } from "../CSTA-device-feature-types/AgentID.ta.mjs";
import { AgentInfo, _decode_AgentInfo, _encode_AgentInfo } from "../CSTA-get-agent-state/AgentInfo.ta.mjs";
// export { AgentInfo, _decode_AgentInfo, _encode_AgentInfo } from "../CSTA-get-agent-state/AgentInfo.ta.mjs";


/**
 * @summary AgentStateEntry
 * @description
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
         * @public
         * @readonly
         */
        readonly agentID: OPTIONAL<AgentID>,
        /**
         * @summary `loggedOn`.
         * @public
         * @readonly
         */
        readonly loggedOn: BOOLEAN,
        /**
         * @summary `agentInfo`.
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
    new $.ComponentSpec("agentID", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("loggedOn", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("agentInfo", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
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
