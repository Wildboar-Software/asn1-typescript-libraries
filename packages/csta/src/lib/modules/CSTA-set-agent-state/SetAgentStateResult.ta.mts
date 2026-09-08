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
import { PendingAgentState, _enum_for_PendingAgentState, PendingAgentState_agentNotReady /* IMPORTED_LONG_ENUMERATION_ITEM */, agentNotReady /* IMPORTED_SHORT_ENUMERATION_ITEM */, PendingAgentState_agentNull /* IMPORTED_LONG_ENUMERATION_ITEM */, agentNull /* IMPORTED_SHORT_ENUMERATION_ITEM */, PendingAgentState_agentReady /* IMPORTED_LONG_ENUMERATION_ITEM */, agentReady /* IMPORTED_SHORT_ENUMERATION_ITEM */, PendingAgentState_agentWorkingAfterCall /* IMPORTED_LONG_ENUMERATION_ITEM */, agentWorkingAfterCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PendingAgentState, _encode_PendingAgentState } from "../CSTA-device-feature-types/PendingAgentState.ta.mjs";
// export { PendingAgentState, _enum_for_PendingAgentState, PendingAgentState_agentNotReady /* IMPORTED_LONG_ENUMERATION_ITEM */, agentNotReady /* IMPORTED_SHORT_ENUMERATION_ITEM */, PendingAgentState_agentNull /* IMPORTED_LONG_ENUMERATION_ITEM */, agentNull /* IMPORTED_SHORT_ENUMERATION_ITEM */, PendingAgentState_agentReady /* IMPORTED_LONG_ENUMERATION_ITEM */, agentReady /* IMPORTED_SHORT_ENUMERATION_ITEM */, PendingAgentState_agentWorkingAfterCall /* IMPORTED_LONG_ENUMERATION_ITEM */, agentWorkingAfterCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PendingAgentState, _encode_PendingAgentState } from "../CSTA-device-feature-types/PendingAgentState.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary SetAgentStateResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetAgentStateResult ::= SEQUENCE
 * {    pendingAgentState        PendingAgentState            OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetAgentStateResult {
    constructor (
        /**
         * @summary `pendingAgentState`.
         * @public
         * @readonly
         */
        readonly pendingAgentState: OPTIONAL<PendingAgentState>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetAgentStateResult
     * @description
     * 
     * This takes an `object` and converts it to a `SetAgentStateResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetAgentStateResult`.
     * @returns {SetAgentStateResult}
     */
    public static _from_object (_o: { [_K in keyof (SetAgentStateResult)]: (SetAgentStateResult)[_K] }): SetAgentStateResult {
        return new SetAgentStateResult(_o.pendingAgentState, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `pendingAgentState`
         * @public
         * @static
         */

    public static _enum_for_pendingAgentState = _enum_for_PendingAgentState;
}

/**
 * @summary The Leading Root Component Types of SetAgentStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetAgentStateResult: $.ComponentSpec[] = [
    new $.ComponentSpec("pendingAgentState", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SetAgentStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetAgentStateResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetAgentStateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetAgentStateResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetAgentStateResult: $.ASN1Decoder<SetAgentStateResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetAgentStateResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetAgentStateResult (el: _Element): SetAgentStateResult {
    if (!_cached_decoder_for_SetAgentStateResult) { _cached_decoder_for_SetAgentStateResult = function (el: _Element): SetAgentStateResult {
    let pendingAgentState: OPTIONAL<PendingAgentState>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "pendingAgentState": (_el: _Element): void => { pendingAgentState = _decode_PendingAgentState(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetAgentStateResult,
        _extension_additions_list_spec_for_SetAgentStateResult,
        _root_component_type_list_2_spec_for_SetAgentStateResult,
        undefined,
    );
    return new SetAgentStateResult(
        pendingAgentState,
        extensions
    );
}; }
    return _cached_decoder_for_SetAgentStateResult(el);
}

let _cached_encoder_for_SetAgentStateResult: $.ASN1Encoder<SetAgentStateResult> | null = null;

/**
 * @summary Encodes a(n) SetAgentStateResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetAgentStateResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetAgentStateResult (value: SetAgentStateResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetAgentStateResult) { _cached_encoder_for_SetAgentStateResult = function (value: SetAgentStateResult, elGetter: $.ASN1Encoder<SetAgentStateResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pendingAgentState === undefined) ? undefined : _encode_PendingAgentState(value.pendingAgentState, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetAgentStateResult(value, elGetter);
}


/* eslint-enable */
