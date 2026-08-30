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
 * @summary Ext_ForwardingInfoFor_CSE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-ForwardingInfoFor-CSE ::= SEQUENCE {
 *     ss-Code    [0]    SS-Code,
 *     forwardingFeatureList    [1]    Ext-ForwFeatureList,
 *     notificationToCSE    [2]    NULL    OPTIONAL,
 *     extensionContainer    [3]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class Ext_ForwardingInfoFor_CSE {
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
         * @summary `notificationToCSE`.
         * @public
         * @readonly
         */
        readonly notificationToCSE: OPTIONAL<NULL>,
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
     * @summary Restructures an object into a Ext_ForwardingInfoFor_CSE
     * @description
     * 
     * This takes an `object` and converts it to a `Ext_ForwardingInfoFor_CSE`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Ext_ForwardingInfoFor_CSE`.
     * @returns {Ext_ForwardingInfoFor_CSE}
     */
    public static _from_object (_o: { [_K in keyof (Ext_ForwardingInfoFor_CSE)]: (Ext_ForwardingInfoFor_CSE)[_K] }): Ext_ForwardingInfoFor_CSE {
        return new Ext_ForwardingInfoFor_CSE(_o.ss_Code, _o.forwardingFeatureList, _o.notificationToCSE, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Ext_ForwardingInfoFor_CSE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Ext_ForwardingInfoFor_CSE: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("forwardingFeatureList", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Ext_ForwardingInfoFor_CSE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Ext_ForwardingInfoFor_CSE: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Ext_ForwardingInfoFor_CSE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Ext_ForwardingInfoFor_CSE: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Ext_ForwardingInfoFor_CSE: $.ASN1Decoder<Ext_ForwardingInfoFor_CSE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_ForwardingInfoFor_CSE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_ForwardingInfoFor_CSE (el: _Element): Ext_ForwardingInfoFor_CSE {
    if (!_cached_decoder_for_Ext_ForwardingInfoFor_CSE) { _cached_decoder_for_Ext_ForwardingInfoFor_CSE = function (el: _Element): Ext_ForwardingInfoFor_CSE {
    let ss_Code!: SS_Code;
    let forwardingFeatureList!: Ext_ForwFeatureList;
    let notificationToCSE: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = $._decode_implicit<SS_Code>(() => _decode_SS_Code)(_el); },
        "forwardingFeatureList": (_el: _Element): void => { forwardingFeatureList = $._decode_implicit<Ext_ForwFeatureList>(() => _decode_Ext_ForwFeatureList)(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Ext_ForwardingInfoFor_CSE,
        _extension_additions_list_spec_for_Ext_ForwardingInfoFor_CSE,
        _root_component_type_list_2_spec_for_Ext_ForwardingInfoFor_CSE,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Ext_ForwardingInfoFor_CSE(
        ss_Code,
        forwardingFeatureList,
        notificationToCSE,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Ext_ForwardingInfoFor_CSE(el);
}

let _cached_encoder_for_Ext_ForwardingInfoFor_CSE: $.ASN1Encoder<Ext_ForwardingInfoFor_CSE> | null = null;

/**
 * @summary Encodes a(n) Ext_ForwardingInfoFor_CSE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_ForwardingInfoFor_CSE, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_ForwardingInfoFor_CSE (value: Ext_ForwardingInfoFor_CSE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_ForwardingInfoFor_CSE) { _cached_encoder_for_Ext_ForwardingInfoFor_CSE = function (value: Ext_ForwardingInfoFor_CSE, elGetter: $.ASN1Encoder<Ext_ForwardingInfoFor_CSE>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SS_Code, $.BER)(value.ss_Code, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Ext_ForwFeatureList, $.BER)(value.forwardingFeatureList, $.BER),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.notificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Ext_ForwardingInfoFor_CSE(value, elGetter);
}


/* eslint-enable */
