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
import { AgentStateList, _decode_AgentStateList, _encode_AgentStateList } from "../CSTA-get-agent-state/AgentStateList.ta.mjs";
// export { AgentStateList, _decode_AgentStateList, _encode_AgentStateList } from "../CSTA-get-agent-state/AgentStateList.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary GetAgentStateResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAgentStateResult ::= SEQUENCE
 * {    agentStateList             AgentStateList,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetAgentStateResult {
    constructor (
        /**
         * @summary `agentStateList`.
         * @public
         * @readonly
         */
        readonly agentStateList: AgentStateList,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetAgentStateResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetAgentStateResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAgentStateResult`.
     * @returns {GetAgentStateResult}
     */
    public static _from_object (_o: { [_K in keyof (GetAgentStateResult)]: (GetAgentStateResult)[_K] }): GetAgentStateResult {
        return new GetAgentStateResult(_o.agentStateList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetAgentStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAgentStateResult: $.ComponentSpec[] = [
    new $.ComponentSpec("agentStateList", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GetAgentStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAgentStateResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAgentStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAgentStateResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAgentStateResult: $.ASN1Decoder<GetAgentStateResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAgentStateResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAgentStateResult (el: _Element): GetAgentStateResult {
    if (!_cached_decoder_for_GetAgentStateResult) { _cached_decoder_for_GetAgentStateResult = function (el: _Element): GetAgentStateResult {
    let agentStateList!: AgentStateList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "agentStateList": (_el: _Element): void => { agentStateList = _decode_AgentStateList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetAgentStateResult,
        _extension_additions_list_spec_for_GetAgentStateResult,
        _root_component_type_list_2_spec_for_GetAgentStateResult,
        undefined,
    );
    return new GetAgentStateResult(
        agentStateList,
        extensions
    );
}; }
    return _cached_decoder_for_GetAgentStateResult(el);
}

let _cached_encoder_for_GetAgentStateResult: $.ASN1Encoder<GetAgentStateResult> | null = null;

/**
 * @summary Encodes a(n) GetAgentStateResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAgentStateResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetAgentStateResult (value: GetAgentStateResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAgentStateResult) { _cached_encoder_for_GetAgentStateResult = function (value: GetAgentStateResult, elGetter: $.ASN1Encoder<GetAgentStateResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AgentStateList(value.agentStateList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAgentStateResult(value, elGetter);
}


/* eslint-enable */
