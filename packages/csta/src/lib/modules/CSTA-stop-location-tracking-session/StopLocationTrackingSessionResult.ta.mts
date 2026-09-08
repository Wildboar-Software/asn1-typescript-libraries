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
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary StopLocationTrackingSessionResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopLocationTrackingSessionResult ::= SEQUENCE 
 * {    extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StopLocationTrackingSessionResult {
    constructor (
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StopLocationTrackingSessionResult
     * @description
     * 
     * This takes an `object` and converts it to a `StopLocationTrackingSessionResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StopLocationTrackingSessionResult`.
     * @returns {StopLocationTrackingSessionResult}
     */
    public static _from_object (_o: { [_K in keyof (StopLocationTrackingSessionResult)]: (StopLocationTrackingSessionResult)[_K] }): StopLocationTrackingSessionResult {
        return new StopLocationTrackingSessionResult(_o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of StopLocationTrackingSessionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StopLocationTrackingSessionResult: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of StopLocationTrackingSessionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StopLocationTrackingSessionResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StopLocationTrackingSessionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StopLocationTrackingSessionResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StopLocationTrackingSessionResult: $.ASN1Decoder<StopLocationTrackingSessionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopLocationTrackingSessionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopLocationTrackingSessionResult (el: _Element): StopLocationTrackingSessionResult {
    if (!_cached_decoder_for_StopLocationTrackingSessionResult) { _cached_decoder_for_StopLocationTrackingSessionResult = function (el: _Element): StopLocationTrackingSessionResult {
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StopLocationTrackingSessionResult,
        _extension_additions_list_spec_for_StopLocationTrackingSessionResult,
        _root_component_type_list_2_spec_for_StopLocationTrackingSessionResult,
        undefined,
    );
    return new StopLocationTrackingSessionResult(
        extensions
    );
}; }
    return _cached_decoder_for_StopLocationTrackingSessionResult(el);
}

let _cached_encoder_for_StopLocationTrackingSessionResult: $.ASN1Encoder<StopLocationTrackingSessionResult> | null = null;

/**
 * @summary Encodes a(n) StopLocationTrackingSessionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopLocationTrackingSessionResult, encoded as an ASN.1 Element.
 */
export
function _encode_StopLocationTrackingSessionResult (value: StopLocationTrackingSessionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopLocationTrackingSessionResult) { _cached_encoder_for_StopLocationTrackingSessionResult = function (value: StopLocationTrackingSessionResult, elGetter: $.ASN1Encoder<StopLocationTrackingSessionResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StopLocationTrackingSessionResult(value, elGetter);
}


/* eslint-enable */
