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
import { Ext_ProtocolId, _enum_for_Ext_ProtocolId, Ext_ProtocolId_ets_300356 /* IMPORTED_LONG_ENUMERATION_ITEM */, ets_300356 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Ext_ProtocolId, _encode_Ext_ProtocolId } from "../MAP-CommonDataTypes/Ext-ProtocolId.ta.mjs";
// export { Ext_ProtocolId, _enum_for_Ext_ProtocolId, Ext_ProtocolId_ets_300356 /* IMPORTED_LONG_ENUMERATION_ITEM */, ets_300356 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Ext_ProtocolId, _encode_Ext_ProtocolId } from "../MAP-CommonDataTypes/Ext-ProtocolId.ta.mjs";
import { SignalInfo, _decode_SignalInfo, _encode_SignalInfo } from "../MAP-CommonDataTypes/SignalInfo.ta.mjs";
// export { SignalInfo, _decode_SignalInfo, _encode_SignalInfo } from "../MAP-CommonDataTypes/SignalInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary Ext_ExternalSignalInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-ExternalSignalInfo ::= SEQUENCE {
 *     ext-ProtocolId    Ext-ProtocolId,
 *     signalInfo    SignalInfo,
 *     -- Information about the internal structure is given in
 *     -- clause 7.6.9.10
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class Ext_ExternalSignalInfo {
    constructor (
        /**
         * @summary `ext_ProtocolId`.
         * @public
         * @readonly
         */
        readonly ext_ProtocolId: Ext_ProtocolId,
        /**
         * @summary `signalInfo`.
         * @public
         * @readonly
         */
        readonly signalInfo: SignalInfo,
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
     * @summary Restructures an object into a Ext_ExternalSignalInfo
     * @description
     * 
     * This takes an `object` and converts it to a `Ext_ExternalSignalInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Ext_ExternalSignalInfo`.
     * @returns {Ext_ExternalSignalInfo}
     */
    public static _from_object (_o: { [_K in keyof (Ext_ExternalSignalInfo)]: (Ext_ExternalSignalInfo)[_K] }): Ext_ExternalSignalInfo {
        return new Ext_ExternalSignalInfo(_o.ext_ProtocolId, _o.signalInfo, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `ext_ProtocolId`
         * @public
         * @static
         */

    public static _enum_for_ext_ProtocolId = _enum_for_Ext_ProtocolId;
}

/**
 * @summary The Leading Root Component Types of Ext_ExternalSignalInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Ext_ExternalSignalInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("ext-ProtocolId", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("signalInfo", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Ext_ExternalSignalInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Ext_ExternalSignalInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Ext_ExternalSignalInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Ext_ExternalSignalInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Ext_ExternalSignalInfo: $.ASN1Decoder<Ext_ExternalSignalInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_ExternalSignalInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_ExternalSignalInfo (el: _Element): Ext_ExternalSignalInfo {
    if (!_cached_decoder_for_Ext_ExternalSignalInfo) { _cached_decoder_for_Ext_ExternalSignalInfo = function (el: _Element): Ext_ExternalSignalInfo {
    let ext_ProtocolId!: Ext_ProtocolId;
    let signalInfo!: SignalInfo;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ext-ProtocolId": (_el: _Element): void => { ext_ProtocolId = _decode_Ext_ProtocolId(_el); },
        "signalInfo": (_el: _Element): void => { signalInfo = _decode_SignalInfo(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Ext_ExternalSignalInfo,
        _extension_additions_list_spec_for_Ext_ExternalSignalInfo,
        _root_component_type_list_2_spec_for_Ext_ExternalSignalInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Ext_ExternalSignalInfo(
        ext_ProtocolId,
        signalInfo,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Ext_ExternalSignalInfo(el);
}

let _cached_encoder_for_Ext_ExternalSignalInfo: $.ASN1Encoder<Ext_ExternalSignalInfo> | null = null;

/**
 * @summary Encodes a(n) Ext_ExternalSignalInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_ExternalSignalInfo, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_ExternalSignalInfo (value: Ext_ExternalSignalInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_ExternalSignalInfo) { _cached_encoder_for_Ext_ExternalSignalInfo = function (value: Ext_ExternalSignalInfo, elGetter: $.ASN1Encoder<Ext_ExternalSignalInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Ext_ProtocolId(value.ext_ProtocolId, $.BER),
            /* REQUIRED   */ _encode_SignalInfo(value.signalInfo, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Ext_ExternalSignalInfo(value, elGetter);
}


/* eslint-enable */
