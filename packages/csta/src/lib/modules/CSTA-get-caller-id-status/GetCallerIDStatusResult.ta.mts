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
 * @summary GetCallerIDStatusResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCallerIDStatusResult ::= SEQUENCE
 * {    callerIDProvided        BOOLEAN,
 *     extensions            CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetCallerIDStatusResult {
    constructor (
        /**
         * @summary `callerIDProvided`.
         * @public
         * @readonly
         */
        readonly callerIDProvided: BOOLEAN,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetCallerIDStatusResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetCallerIDStatusResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetCallerIDStatusResult`.
     * @returns {GetCallerIDStatusResult}
     */
    public static _from_object (_o: { [_K in keyof (GetCallerIDStatusResult)]: (GetCallerIDStatusResult)[_K] }): GetCallerIDStatusResult {
        return new GetCallerIDStatusResult(_o.callerIDProvided, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetCallerIDStatusResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetCallerIDStatusResult: $.ComponentSpec[] = [
    new $.ComponentSpec("callerIDProvided", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GetCallerIDStatusResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetCallerIDStatusResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetCallerIDStatusResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetCallerIDStatusResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetCallerIDStatusResult: $.ASN1Decoder<GetCallerIDStatusResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCallerIDStatusResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCallerIDStatusResult (el: _Element): GetCallerIDStatusResult {
    if (!_cached_decoder_for_GetCallerIDStatusResult) { _cached_decoder_for_GetCallerIDStatusResult = function (el: _Element): GetCallerIDStatusResult {
    let callerIDProvided!: BOOLEAN;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callerIDProvided": (_el: _Element): void => { callerIDProvided = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetCallerIDStatusResult,
        _extension_additions_list_spec_for_GetCallerIDStatusResult,
        _root_component_type_list_2_spec_for_GetCallerIDStatusResult,
        undefined,
    );
    return new GetCallerIDStatusResult(
        callerIDProvided,
        extensions
    );
}; }
    return _cached_decoder_for_GetCallerIDStatusResult(el);
}

let _cached_encoder_for_GetCallerIDStatusResult: $.ASN1Encoder<GetCallerIDStatusResult> | null = null;

/**
 * @summary Encodes a(n) GetCallerIDStatusResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCallerIDStatusResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetCallerIDStatusResult (value: GetCallerIDStatusResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCallerIDStatusResult) { _cached_encoder_for_GetCallerIDStatusResult = function (value: GetCallerIDStatusResult, elGetter: $.ASN1Encoder<GetCallerIDStatusResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.callerIDProvided, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetCallerIDStatusResult(value, elGetter);
}


/* eslint-enable */
