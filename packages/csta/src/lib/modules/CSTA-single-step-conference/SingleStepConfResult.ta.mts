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
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
import { CallLinkageDataList, _decode_CallLinkageDataList, _encode_CallLinkageDataList } from "../CSTA-call-control/CallLinkageDataList.ta.mjs";
// export { CallLinkageDataList, _decode_CallLinkageDataList, _encode_CallLinkageDataList } from "../CSTA-call-control/CallLinkageDataList.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary SingleStepConfResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SingleStepConfResult ::= SEQUENCE
 * {     conferencedCall         ConnectionID,
 *     conferencedCallInfo         ConnectionInformation             OPTIONAL,
 *     callLinkageDataList        [1] IMPLICIT CallLinkageDataList    OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SingleStepConfResult {
    constructor (
        /**
         * @summary `conferencedCall`.
         * @public
         * @readonly
         */
        readonly conferencedCall: ConnectionID,
        /**
         * @summary `conferencedCallInfo`.
         * @public
         * @readonly
         */
        readonly conferencedCallInfo: OPTIONAL<ConnectionInformation>,
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
     * @summary Restructures an object into a SingleStepConfResult
     * @description
     * 
     * This takes an `object` and converts it to a `SingleStepConfResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SingleStepConfResult`.
     * @returns {SingleStepConfResult}
     */
    public static _from_object (_o: { [_K in keyof (SingleStepConfResult)]: (SingleStepConfResult)[_K] }): SingleStepConfResult {
        return new SingleStepConfResult(_o.conferencedCall, _o.conferencedCallInfo, _o.callLinkageDataList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SingleStepConfResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SingleStepConfResult: $.ComponentSpec[] = [
    new $.ComponentSpec("conferencedCall", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("conferencedCallInfo", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("callLinkageDataList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SingleStepConfResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SingleStepConfResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SingleStepConfResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SingleStepConfResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SingleStepConfResult: $.ASN1Decoder<SingleStepConfResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SingleStepConfResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SingleStepConfResult (el: _Element): SingleStepConfResult {
    if (!_cached_decoder_for_SingleStepConfResult) { _cached_decoder_for_SingleStepConfResult = function (el: _Element): SingleStepConfResult {
    let conferencedCall!: ConnectionID;
    let conferencedCallInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageDataList: OPTIONAL<CallLinkageDataList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "conferencedCall": (_el: _Element): void => { conferencedCall = _decode_ConnectionID(_el); },
        "conferencedCallInfo": (_el: _Element): void => { conferencedCallInfo = _decode_ConnectionInformation(_el); },
        "callLinkageDataList": (_el: _Element): void => { callLinkageDataList = $._decode_implicit<CallLinkageDataList>(() => _decode_CallLinkageDataList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SingleStepConfResult,
        _extension_additions_list_spec_for_SingleStepConfResult,
        _root_component_type_list_2_spec_for_SingleStepConfResult,
        undefined,
    );
    return new SingleStepConfResult(
        conferencedCall,
        conferencedCallInfo,
        callLinkageDataList,
        extensions
    );
}; }
    return _cached_decoder_for_SingleStepConfResult(el);
}

let _cached_encoder_for_SingleStepConfResult: $.ASN1Encoder<SingleStepConfResult> | null = null;

/**
 * @summary Encodes a(n) SingleStepConfResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SingleStepConfResult, encoded as an ASN.1 Element.
 */
export
function _encode_SingleStepConfResult (value: SingleStepConfResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SingleStepConfResult) { _cached_encoder_for_SingleStepConfResult = function (value: SingleStepConfResult, elGetter: $.ASN1Encoder<SingleStepConfResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.conferencedCall, $.BER),
            /* IF_ABSENT  */ ((value.conferencedCallInfo === undefined) ? undefined : _encode_ConnectionInformation(value.conferencedCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallLinkageDataList, $.BER)(value.callLinkageDataList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SingleStepConfResult(value, elGetter);
}


/* eslint-enable */
