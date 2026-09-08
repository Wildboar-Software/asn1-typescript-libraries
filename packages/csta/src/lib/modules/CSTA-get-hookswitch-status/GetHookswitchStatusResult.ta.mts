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
import { HookswitchStatusList, _decode_HookswitchStatusList, _encode_HookswitchStatusList } from "../CSTA-get-hookswitch-status/HookswitchStatusList.ta.mjs";
// export { HookswitchStatusList, _decode_HookswitchStatusList, _encode_HookswitchStatusList } from "../CSTA-get-hookswitch-status/HookswitchStatusList.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary GetHookswitchStatusResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetHookswitchStatusResult ::= SEQUENCE
 * {    hookswitchStatusList         HookswitchStatusList,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetHookswitchStatusResult {
    constructor (
        /**
         * @summary `hookswitchStatusList`.
         * @public
         * @readonly
         */
        readonly hookswitchStatusList: HookswitchStatusList,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetHookswitchStatusResult
     * @description
     * 
     * This takes an `object` and converts it to a `GetHookswitchStatusResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetHookswitchStatusResult`.
     * @returns {GetHookswitchStatusResult}
     */
    public static _from_object (_o: { [_K in keyof (GetHookswitchStatusResult)]: (GetHookswitchStatusResult)[_K] }): GetHookswitchStatusResult {
        return new GetHookswitchStatusResult(_o.hookswitchStatusList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetHookswitchStatusResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetHookswitchStatusResult: $.ComponentSpec[] = [
    new $.ComponentSpec("hookswitchStatusList", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GetHookswitchStatusResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetHookswitchStatusResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetHookswitchStatusResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetHookswitchStatusResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetHookswitchStatusResult: $.ASN1Decoder<GetHookswitchStatusResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetHookswitchStatusResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetHookswitchStatusResult (el: _Element): GetHookswitchStatusResult {
    if (!_cached_decoder_for_GetHookswitchStatusResult) { _cached_decoder_for_GetHookswitchStatusResult = function (el: _Element): GetHookswitchStatusResult {
    let hookswitchStatusList!: HookswitchStatusList;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "hookswitchStatusList": (_el: _Element): void => { hookswitchStatusList = _decode_HookswitchStatusList(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetHookswitchStatusResult,
        _extension_additions_list_spec_for_GetHookswitchStatusResult,
        _root_component_type_list_2_spec_for_GetHookswitchStatusResult,
        undefined,
    );
    return new GetHookswitchStatusResult(
        hookswitchStatusList,
        extensions
    );
}; }
    return _cached_decoder_for_GetHookswitchStatusResult(el);
}

let _cached_encoder_for_GetHookswitchStatusResult: $.ASN1Encoder<GetHookswitchStatusResult> | null = null;

/**
 * @summary Encodes a(n) GetHookswitchStatusResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetHookswitchStatusResult, encoded as an ASN.1 Element.
 */
export
function _encode_GetHookswitchStatusResult (value: GetHookswitchStatusResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetHookswitchStatusResult) { _cached_encoder_for_GetHookswitchStatusResult = function (value: GetHookswitchStatusResult, elGetter: $.ASN1Encoder<GetHookswitchStatusResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_HookswitchStatusList(value.hookswitchStatusList, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetHookswitchStatusResult(value, elGetter);
}


/* eslint-enable */
