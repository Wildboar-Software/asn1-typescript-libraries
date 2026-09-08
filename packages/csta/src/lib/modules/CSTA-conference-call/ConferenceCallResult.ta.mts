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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { ConnectionList, _decode_ConnectionList, _encode_ConnectionList } from "../CSTA-connection-states/ConnectionList.ta.mjs";
// export { ConnectionList, _decode_ConnectionList, _encode_ConnectionList } from "../CSTA-connection-states/ConnectionList.ta.mjs";
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
import { CallLinkageDataList, _decode_CallLinkageDataList, _encode_CallLinkageDataList } from "../CSTA-call-control/CallLinkageDataList.ta.mjs";
// export { CallLinkageDataList, _decode_CallLinkageDataList, _encode_CallLinkageDataList } from "../CSTA-call-control/CallLinkageDataList.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary ConferenceCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConferenceCallResult ::= SEQUENCE
 * {     conferenceCall             ConnectionID,
 *     connections             [0] IMPLICIT ConnectionList         OPTIONAL,
 *     conferenceCallInfo         [1] IMPLICIT ConnectionInformation     OPTIONAL,
 *     callLinkageDataList        [2] IMPLICIT CallLinkageDataList    OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ConferenceCallResult {
    constructor (
        /**
         * @summary `conferenceCall`.
         * @public
         * @readonly
         */
        readonly conferenceCall: ConnectionID,
        /**
         * @summary `connections`.
         * @public
         * @readonly
         */
        readonly connections: OPTIONAL<ConnectionList>,
        /**
         * @summary `conferenceCallInfo`.
         * @public
         * @readonly
         */
        readonly conferenceCallInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageDataList`.
         * @public
         * @readonly
         */
        readonly callLinkageDataList: OPTIONAL<CallLinkageDataList>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ConferenceCallResult
     * @description
     * 
     * This takes an `object` and converts it to a `ConferenceCallResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConferenceCallResult`.
     * @returns {ConferenceCallResult}
     */
    public static _from_object (_o: { [_K in keyof (ConferenceCallResult)]: (ConferenceCallResult)[_K] }): ConferenceCallResult {
        return new ConferenceCallResult(_o.conferenceCall, _o.connections, _o.conferenceCallInfo, _o.callLinkageDataList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ConferenceCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConferenceCallResult: $.ComponentSpec[] = [
    new $.ComponentSpec("conferenceCall", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("connections", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("conferenceCallInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("callLinkageDataList", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ConferenceCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConferenceCallResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConferenceCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConferenceCallResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConferenceCallResult: $.ASN1Decoder<ConferenceCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConferenceCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConferenceCallResult (el: _Element): ConferenceCallResult {
    if (!_cached_decoder_for_ConferenceCallResult) { _cached_decoder_for_ConferenceCallResult = function (el: _Element): ConferenceCallResult {
    let conferenceCall!: ConnectionID;
    let connections: OPTIONAL<ConnectionList>;
    let conferenceCallInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageDataList: OPTIONAL<CallLinkageDataList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "conferenceCall": (_el: _Element): void => { conferenceCall = _decode_ConnectionID(_el); },
        "connections": (_el: _Element): void => { connections = $._decode_implicit<ConnectionList>(() => _decode_ConnectionList)(_el); },
        "conferenceCallInfo": (_el: _Element): void => { conferenceCallInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "callLinkageDataList": (_el: _Element): void => { callLinkageDataList = $._decode_implicit<CallLinkageDataList>(() => _decode_CallLinkageDataList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConferenceCallResult,
        _extension_additions_list_spec_for_ConferenceCallResult,
        _root_component_type_list_2_spec_for_ConferenceCallResult,
        undefined,
    );
    return new ConferenceCallResult(
        conferenceCall,
        connections,
        conferenceCallInfo,
        callLinkageDataList,
        extensions
    );
}; }
    return _cached_decoder_for_ConferenceCallResult(el);
}

let _cached_encoder_for_ConferenceCallResult: $.ASN1Encoder<ConferenceCallResult> | null = null;

/**
 * @summary Encodes a(n) ConferenceCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConferenceCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_ConferenceCallResult (value: ConferenceCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConferenceCallResult) { _cached_encoder_for_ConferenceCallResult = function (value: ConferenceCallResult, elGetter: $.ASN1Encoder<ConferenceCallResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.conferenceCall, $.BER),
            /* IF_ABSENT  */ ((value.connections === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ConnectionList, $.BER)(value.connections, $.BER)),
            /* IF_ABSENT  */ ((value.conferenceCallInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ConnectionInformation, $.BER)(value.conferenceCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallLinkageDataList, $.BER)(value.callLinkageDataList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConferenceCallResult(value, elGetter);
}


/* eslint-enable */
