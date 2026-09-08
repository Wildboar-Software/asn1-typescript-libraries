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
import { RouteRegisterReqID, _decode_RouteRegisterReqID, _encode_RouteRegisterReqID } from "../CSTA-device-feature-types/RouteRegisterReqID.ta.mjs";
// export { RouteRegisterReqID, _decode_RouteRegisterReqID, _encode_RouteRegisterReqID } from "../CSTA-device-feature-types/RouteRegisterReqID.ta.mjs";
import { MediaClass, MediaClass_voice /* IMPORTED_LONG_NAMED_BIT */, voice /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_data /* IMPORTED_LONG_NAMED_BIT */, data /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_image /* IMPORTED_LONG_NAMED_BIT */, image /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_audio /* IMPORTED_LONG_NAMED_BIT */, audio /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_other /* IMPORTED_LONG_NAMED_BIT */, other /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_notKnown /* IMPORTED_LONG_NAMED_BIT */, notKnown /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_chat /* IMPORTED_LONG_NAMED_BIT */, chat /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_email /* IMPORTED_LONG_NAMED_BIT */, email /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_message /* IMPORTED_LONG_NAMED_BIT */, message /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_im /* IMPORTED_LONG_NAMED_BIT */, im /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_sms /* IMPORTED_LONG_NAMED_BIT */, sms /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_mms /* IMPORTED_LONG_NAMED_BIT */, mms /* IMPORTED_SHORT_NAMED_BIT */, _decode_MediaClass, _encode_MediaClass } from "../CSTA-media-services/MediaClass.ta.mjs";
// export { MediaClass, MediaClass_voice /* IMPORTED_LONG_NAMED_BIT */, voice /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_data /* IMPORTED_LONG_NAMED_BIT */, data /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_image /* IMPORTED_LONG_NAMED_BIT */, image /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_audio /* IMPORTED_LONG_NAMED_BIT */, audio /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_other /* IMPORTED_LONG_NAMED_BIT */, other /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_notKnown /* IMPORTED_LONG_NAMED_BIT */, notKnown /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_chat /* IMPORTED_LONG_NAMED_BIT */, chat /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_email /* IMPORTED_LONG_NAMED_BIT */, email /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_message /* IMPORTED_LONG_NAMED_BIT */, message /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_im /* IMPORTED_LONG_NAMED_BIT */, im /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_sms /* IMPORTED_LONG_NAMED_BIT */, sms /* IMPORTED_SHORT_NAMED_BIT */, MediaClass_mms /* IMPORTED_LONG_NAMED_BIT */, mms /* IMPORTED_SHORT_NAMED_BIT */, _decode_MediaClass, _encode_MediaClass } from "../CSTA-media-services/MediaClass.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary RouteRegisterResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteRegisterResult ::= SEQUENCE
 * {    routeRegisterReqID        RouteRegisterReqID,
 *     actualRouteingMediaClass    MediaClass                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RouteRegisterResult {
    constructor (
        /**
         * @summary `routeRegisterReqID`.
         * @public
         * @readonly
         */
        readonly routeRegisterReqID: RouteRegisterReqID,
        /**
         * @summary `actualRouteingMediaClass`.
         * @public
         * @readonly
         */
        readonly actualRouteingMediaClass: OPTIONAL<MediaClass>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RouteRegisterResult
     * @description
     * 
     * This takes an `object` and converts it to a `RouteRegisterResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteRegisterResult`.
     * @returns {RouteRegisterResult}
     */
    public static _from_object (_o: { [_K in keyof (RouteRegisterResult)]: (RouteRegisterResult)[_K] }): RouteRegisterResult {
        return new RouteRegisterResult(_o.routeRegisterReqID, _o.actualRouteingMediaClass, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RouteRegisterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteRegisterResult: $.ComponentSpec[] = [
    new $.ComponentSpec("routeRegisterReqID", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("actualRouteingMediaClass", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RouteRegisterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteRegisterResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteRegisterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteRegisterResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteRegisterResult: $.ASN1Decoder<RouteRegisterResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteRegisterResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteRegisterResult (el: _Element): RouteRegisterResult {
    if (!_cached_decoder_for_RouteRegisterResult) { _cached_decoder_for_RouteRegisterResult = function (el: _Element): RouteRegisterResult {
    let routeRegisterReqID!: RouteRegisterReqID;
    let actualRouteingMediaClass: OPTIONAL<MediaClass>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "routeRegisterReqID": (_el: _Element): void => { routeRegisterReqID = _decode_RouteRegisterReqID(_el); },
        "actualRouteingMediaClass": (_el: _Element): void => { actualRouteingMediaClass = _decode_MediaClass(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteRegisterResult,
        _extension_additions_list_spec_for_RouteRegisterResult,
        _root_component_type_list_2_spec_for_RouteRegisterResult,
        undefined,
    );
    return new RouteRegisterResult(
        routeRegisterReqID,
        actualRouteingMediaClass,
        extensions
    );
}; }
    return _cached_decoder_for_RouteRegisterResult(el);
}

let _cached_encoder_for_RouteRegisterResult: $.ASN1Encoder<RouteRegisterResult> | null = null;

/**
 * @summary Encodes a(n) RouteRegisterResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteRegisterResult, encoded as an ASN.1 Element.
 */
export
function _encode_RouteRegisterResult (value: RouteRegisterResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteRegisterResult) { _cached_encoder_for_RouteRegisterResult = function (value: RouteRegisterResult, elGetter: $.ASN1Encoder<RouteRegisterResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RouteRegisterReqID(value.routeRegisterReqID, $.BER),
            /* IF_ABSENT  */ ((value.actualRouteingMediaClass === undefined) ? undefined : _encode_MediaClass(value.actualRouteingMediaClass, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteRegisterResult(value, elGetter);
}


/* eslint-enable */
