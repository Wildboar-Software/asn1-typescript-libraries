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
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
// export { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { Ext_ForwFeatureList, _decode_Ext_ForwFeatureList, _encode_Ext_ForwFeatureList } from "../MAP-MS-DataTypes/Ext-ForwFeatureList.ta.mjs";
// export { Ext_ForwFeatureList, _decode_Ext_ForwFeatureList, _encode_Ext_ForwFeatureList } from "../MAP-MS-DataTypes/Ext-ForwFeatureList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary Ext_ForwInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-ForwInfo ::= SEQUENCE {
 *     ss-Code    SS-Code,
 *     forwardingFeatureList    Ext-ForwFeatureList,
 *     extensionContainer    [0] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class Ext_ForwInfo {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: SS_Code,
        /**
         * @summary `forwardingFeatureList`.
         * @public
         * @readonly
         */
        readonly forwardingFeatureList: Ext_ForwFeatureList,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Ext_ForwInfo
     * @description
     * 
     * This takes an `object` and converts it to a `Ext_ForwInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Ext_ForwInfo`.
     * @returns {Ext_ForwInfo}
     */
    public static _from_object (_o: { [_K in keyof (Ext_ForwInfo)]: (Ext_ForwInfo)[_K] }): Ext_ForwInfo {
        return new Ext_ForwInfo(_o.ss_Code, _o.forwardingFeatureList, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Ext_ForwInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Ext_ForwInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("forwardingFeatureList", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Ext_ForwInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Ext_ForwInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Ext_ForwInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Ext_ForwInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Ext_ForwInfo: $.ASN1Decoder<Ext_ForwInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_ForwInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_ForwInfo (el: _Element): Ext_ForwInfo {
    if (!_cached_decoder_for_Ext_ForwInfo) { _cached_decoder_for_Ext_ForwInfo = function (el: _Element): Ext_ForwInfo {
    let ss_Code!: SS_Code;
    let forwardingFeatureList!: Ext_ForwFeatureList;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = _decode_SS_Code(_el); },
        "forwardingFeatureList": (_el: _Element): void => { forwardingFeatureList = _decode_Ext_ForwFeatureList(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Ext_ForwInfo,
        _extension_additions_list_spec_for_Ext_ForwInfo,
        _root_component_type_list_2_spec_for_Ext_ForwInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Ext_ForwInfo(
        ss_Code,
        forwardingFeatureList,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Ext_ForwInfo(el);
}

let _cached_encoder_for_Ext_ForwInfo: $.ASN1Encoder<Ext_ForwInfo> | null = null;

/**
 * @summary Encodes a(n) Ext_ForwInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_ForwInfo, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_ForwInfo (value: Ext_ForwInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_ForwInfo) { _cached_encoder_for_Ext_ForwInfo = function (value: Ext_ForwInfo, elGetter: $.ASN1Encoder<Ext_ForwInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SS_Code(value.ss_Code, $.BER),
            /* REQUIRED   */ _encode_Ext_ForwFeatureList(value.forwardingFeatureList, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Ext_ForwInfo(value, elGetter);
}


/* eslint-enable */
