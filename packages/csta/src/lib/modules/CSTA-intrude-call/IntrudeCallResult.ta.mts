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
 * @summary IntrudeCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntrudeCallResult ::= SEQUENCE
 * {     conferencedCall         ConnectionID                 OPTIONAL,
 *     conferencedCallInfo         ConnectionInformation             OPTIONAL,
 *     callLinkageDataList        [1] IMPLICIT CallLinkageDataList    OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class IntrudeCallResult {
    constructor (
        /**
         * @summary `conferencedCall`.
         * @public
         * @readonly
         */
        readonly conferencedCall: OPTIONAL<ConnectionID>,
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
     * @summary Restructures an object into a IntrudeCallResult
     * @description
     * 
     * This takes an `object` and converts it to a `IntrudeCallResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntrudeCallResult`.
     * @returns {IntrudeCallResult}
     */
    public static _from_object (_o: { [_K in keyof (IntrudeCallResult)]: (IntrudeCallResult)[_K] }): IntrudeCallResult {
        return new IntrudeCallResult(_o.conferencedCall, _o.conferencedCallInfo, _o.callLinkageDataList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of IntrudeCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IntrudeCallResult: $.ComponentSpec[] = [
    new $.ComponentSpec("conferencedCall", true, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("conferencedCallInfo", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("callLinkageDataList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of IntrudeCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IntrudeCallResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IntrudeCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IntrudeCallResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IntrudeCallResult: $.ASN1Decoder<IntrudeCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntrudeCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntrudeCallResult (el: _Element): IntrudeCallResult {
    if (!_cached_decoder_for_IntrudeCallResult) { _cached_decoder_for_IntrudeCallResult = function (el: _Element): IntrudeCallResult {
    let conferencedCall: OPTIONAL<ConnectionID>;
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
        _root_component_type_list_1_spec_for_IntrudeCallResult,
        _extension_additions_list_spec_for_IntrudeCallResult,
        _root_component_type_list_2_spec_for_IntrudeCallResult,
        undefined,
    );
    return new IntrudeCallResult(
        conferencedCall,
        conferencedCallInfo,
        callLinkageDataList,
        extensions
    );
}; }
    return _cached_decoder_for_IntrudeCallResult(el);
}

let _cached_encoder_for_IntrudeCallResult: $.ASN1Encoder<IntrudeCallResult> | null = null;

/**
 * @summary Encodes a(n) IntrudeCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntrudeCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_IntrudeCallResult (value: IntrudeCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntrudeCallResult) { _cached_encoder_for_IntrudeCallResult = function (value: IntrudeCallResult, elGetter: $.ASN1Encoder<IntrudeCallResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.conferencedCall === undefined) ? undefined : _encode_ConnectionID(value.conferencedCall, $.BER)),
            /* IF_ABSENT  */ ((value.conferencedCallInfo === undefined) ? undefined : _encode_ConnectionInformation(value.conferencedCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallLinkageDataList, $.BER)(value.callLinkageDataList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IntrudeCallResult(value, elGetter);
}


/* eslint-enable */
