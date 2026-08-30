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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { ForwardingFeatureList, _decode_ForwardingFeatureList, _encode_ForwardingFeatureList } from "../MAP-SS-DataTypes/ForwardingFeatureList.ta.mjs";


/**
 * @summary ForwardingInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingInfo ::= SEQUENCE {
 *     ss-Code    SS-Code    OPTIONAL,
 *     forwardingFeatureList    ForwardingFeatureList,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ForwardingInfo {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: OPTIONAL<SS_Code>,
        /**
         * @summary `forwardingFeatureList`.
         * @public
         * @readonly
         */
        readonly forwardingFeatureList: ForwardingFeatureList,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ForwardingInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ForwardingInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardingInfo`.
     * @returns {ForwardingInfo}
     */
    public static _from_object (_o: { [_K in keyof (ForwardingInfo)]: (ForwardingInfo)[_K] }): ForwardingInfo {
        return new ForwardingInfo(_o.ss_Code, _o.forwardingFeatureList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ForwardingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForwardingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("forwardingFeatureList", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ForwardingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForwardingInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForwardingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForwardingInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ForwardingInfo: $.ASN1Decoder<ForwardingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardingInfo (el: _Element): ForwardingInfo {
    if (!_cached_decoder_for_ForwardingInfo) { _cached_decoder_for_ForwardingInfo = function (el: _Element): ForwardingInfo {
    let ss_Code: OPTIONAL<SS_Code> = undefined;
    let forwardingFeatureList!: ForwardingFeatureList;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = _decode_SS_Code(_el); },
        "forwardingFeatureList": (_el: _Element): void => { forwardingFeatureList = _decode_ForwardingFeatureList(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardingInfo,
        _extension_additions_list_spec_for_ForwardingInfo,
        _root_component_type_list_2_spec_for_ForwardingInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ForwardingInfo(
        ss_Code,
        forwardingFeatureList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ForwardingInfo(el);
}

let _cached_encoder_for_ForwardingInfo: $.ASN1Encoder<ForwardingInfo> | null = null;

/**
 * @summary Encodes a(n) ForwardingInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardingInfo (value: ForwardingInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardingInfo) { _cached_encoder_for_ForwardingInfo = function (value: ForwardingInfo, elGetter: $.ASN1Encoder<ForwardingInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ss_Code === undefined) ? undefined : _encode_SS_Code(value.ss_Code, $.BER)),
            /* REQUIRED   */ _encode_ForwardingFeatureList(value.forwardingFeatureList, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ForwardingInfo(value, elGetter);
}


/* eslint-enable */
