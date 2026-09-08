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
import { MonitorFilter, _decode_MonitorFilter, _encode_MonitorFilter } from "../CSTA-status-reporting/MonitorFilter.ta.mjs";
// export { MonitorFilter, _decode_MonitorFilter, _encode_MonitorFilter } from "../CSTA-status-reporting/MonitorFilter.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary ChangeMonitorFilterResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeMonitorFilterResult ::= SEQUENCE
 * {    actualFilterList         MonitorFilter             OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ChangeMonitorFilterResult {
    constructor (
        /**
         * @summary `actualFilterList`.
         * @public
         * @readonly
         */
        readonly actualFilterList: OPTIONAL<MonitorFilter>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ChangeMonitorFilterResult
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeMonitorFilterResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeMonitorFilterResult`.
     * @returns {ChangeMonitorFilterResult}
     */
    public static _from_object (_o: { [_K in keyof (ChangeMonitorFilterResult)]: (ChangeMonitorFilterResult)[_K] }): ChangeMonitorFilterResult {
        return new ChangeMonitorFilterResult(_o.actualFilterList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeMonitorFilterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeMonitorFilterResult: $.ComponentSpec[] = [
    new $.ComponentSpec("actualFilterList", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ChangeMonitorFilterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeMonitorFilterResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeMonitorFilterResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeMonitorFilterResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeMonitorFilterResult: $.ASN1Decoder<ChangeMonitorFilterResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeMonitorFilterResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeMonitorFilterResult (el: _Element): ChangeMonitorFilterResult {
    if (!_cached_decoder_for_ChangeMonitorFilterResult) { _cached_decoder_for_ChangeMonitorFilterResult = function (el: _Element): ChangeMonitorFilterResult {
    let actualFilterList: OPTIONAL<MonitorFilter>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "actualFilterList": (_el: _Element): void => { actualFilterList = _decode_MonitorFilter(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeMonitorFilterResult,
        _extension_additions_list_spec_for_ChangeMonitorFilterResult,
        _root_component_type_list_2_spec_for_ChangeMonitorFilterResult,
        undefined,
    );
    return new ChangeMonitorFilterResult(
        actualFilterList,
        extensions
    );
}; }
    return _cached_decoder_for_ChangeMonitorFilterResult(el);
}

let _cached_encoder_for_ChangeMonitorFilterResult: $.ASN1Encoder<ChangeMonitorFilterResult> | null = null;

/**
 * @summary Encodes a(n) ChangeMonitorFilterResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeMonitorFilterResult, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeMonitorFilterResult (value: ChangeMonitorFilterResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeMonitorFilterResult) { _cached_encoder_for_ChangeMonitorFilterResult = function (value: ChangeMonitorFilterResult, elGetter: $.ASN1Encoder<ChangeMonitorFilterResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.actualFilterList === undefined) ? undefined : _encode_MonitorFilter(value.actualFilterList, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeMonitorFilterResult(value, elGetter);
}


/* eslint-enable */
