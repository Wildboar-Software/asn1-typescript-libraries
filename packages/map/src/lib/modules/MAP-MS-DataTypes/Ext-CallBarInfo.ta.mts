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
import { Ext_CallBarFeatureList, _decode_Ext_CallBarFeatureList, _encode_Ext_CallBarFeatureList } from "../MAP-MS-DataTypes/Ext-CallBarFeatureList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary Ext_CallBarInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-CallBarInfo ::= SEQUENCE {
 *     ss-Code    SS-Code,
 *     callBarringFeatureList    Ext-CallBarFeatureList,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class Ext_CallBarInfo {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: SS_Code,
        /**
         * @summary `callBarringFeatureList`.
         * @public
         * @readonly
         */
        readonly callBarringFeatureList: Ext_CallBarFeatureList,
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
     * @summary Restructures an object into a Ext_CallBarInfo
     * @description
     * 
     * This takes an `object` and converts it to a `Ext_CallBarInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Ext_CallBarInfo`.
     * @returns {Ext_CallBarInfo}
     */
    public static _from_object (_o: { [_K in keyof (Ext_CallBarInfo)]: (Ext_CallBarInfo)[_K] }): Ext_CallBarInfo {
        return new Ext_CallBarInfo(_o.ss_Code, _o.callBarringFeatureList, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Ext_CallBarInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Ext_CallBarInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("callBarringFeatureList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of Ext_CallBarInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Ext_CallBarInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Ext_CallBarInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Ext_CallBarInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Ext_CallBarInfo: $.ASN1Decoder<Ext_CallBarInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_CallBarInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_CallBarInfo (el: _Element): Ext_CallBarInfo {
    if (!_cached_decoder_for_Ext_CallBarInfo) { _cached_decoder_for_Ext_CallBarInfo = function (el: _Element): Ext_CallBarInfo {
    let ss_Code!: SS_Code;
    let callBarringFeatureList!: Ext_CallBarFeatureList;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = _decode_SS_Code(_el); },
        "callBarringFeatureList": (_el: _Element): void => { callBarringFeatureList = _decode_Ext_CallBarFeatureList(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Ext_CallBarInfo,
        _extension_additions_list_spec_for_Ext_CallBarInfo,
        _root_component_type_list_2_spec_for_Ext_CallBarInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Ext_CallBarInfo(
        ss_Code,
        callBarringFeatureList,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Ext_CallBarInfo(el);
}

let _cached_encoder_for_Ext_CallBarInfo: $.ASN1Encoder<Ext_CallBarInfo> | null = null;

/**
 * @summary Encodes a(n) Ext_CallBarInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_CallBarInfo, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_CallBarInfo (value: Ext_CallBarInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_CallBarInfo) { _cached_encoder_for_Ext_CallBarInfo = function (value: Ext_CallBarInfo, elGetter: $.ASN1Encoder<Ext_CallBarInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SS_Code(value.ss_Code, $.BER),
            /* REQUIRED   */ _encode_Ext_CallBarFeatureList(value.callBarringFeatureList, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Ext_CallBarInfo(value, elGetter);
}


/* eslint-enable */
