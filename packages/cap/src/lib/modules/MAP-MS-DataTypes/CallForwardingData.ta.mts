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
import { Ext_ForwFeatureList, _decode_Ext_ForwFeatureList, _encode_Ext_ForwFeatureList } from "../MAP-MS-DataTypes/Ext-ForwFeatureList.ta.mjs";
// export { Ext_ForwFeatureList, _decode_Ext_ForwFeatureList, _encode_Ext_ForwFeatureList } from "../MAP-MS-DataTypes/Ext-ForwFeatureList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CallForwardingData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallForwardingData ::= SEQUENCE {
 *     forwardingFeatureList    Ext-ForwFeatureList,
 *     notificationToCSE    NULL    OPTIONAL,
 *     extensionContainer    [0] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CallForwardingData {
    constructor (
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
     * @summary Restructures an object into a CallForwardingData
     * @description
     * 
     * This takes an `object` and converts it to a `CallForwardingData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallForwardingData`.
     * @returns {CallForwardingData}
     */
    public static _from_object (_o: { [_K in keyof (CallForwardingData)]: (CallForwardingData)[_K] }): CallForwardingData {
        return new CallForwardingData(_o.forwardingFeatureList, _o.notificationToCSE, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CallForwardingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallForwardingData: $.ComponentSpec[] = [
    new $.ComponentSpec("forwardingFeatureList", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.universal, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallForwardingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallForwardingData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallForwardingData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallForwardingData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallForwardingData: $.ASN1Decoder<CallForwardingData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallForwardingData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallForwardingData (el: _Element): CallForwardingData {
    if (!_cached_decoder_for_CallForwardingData) { _cached_decoder_for_CallForwardingData = function (el: _Element): CallForwardingData {
    let forwardingFeatureList!: Ext_ForwFeatureList;
    let notificationToCSE: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "forwardingFeatureList": (_el: _Element): void => { forwardingFeatureList = _decode_Ext_ForwFeatureList(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decodeNull(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallForwardingData,
        _extension_additions_list_spec_for_CallForwardingData,
        _root_component_type_list_2_spec_for_CallForwardingData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallForwardingData(
        forwardingFeatureList,
        notificationToCSE,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallForwardingData(el);
}

let _cached_encoder_for_CallForwardingData: $.ASN1Encoder<CallForwardingData> | null = null;

/**
 * @summary Encodes a(n) CallForwardingData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallForwardingData, encoded as an ASN.1 Element.
 */
export
function _encode_CallForwardingData (value: CallForwardingData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallForwardingData) { _cached_encoder_for_CallForwardingData = function (value: CallForwardingData, elGetter: $.ASN1Encoder<CallForwardingData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Ext_ForwFeatureList(value.forwardingFeatureList, $.BER),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encodeNull(value.notificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallForwardingData(value, elGetter);
}


/* eslint-enable */
