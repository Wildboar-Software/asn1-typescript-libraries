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
import { AccessNetworkProtocolId, _enum_for_AccessNetworkProtocolId, AccessNetworkProtocolId_ts3G_48006 /* IMPORTED_LONG_ENUMERATION_ITEM */, ts3G_48006 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessNetworkProtocolId_ts3G_25413 /* IMPORTED_LONG_ENUMERATION_ITEM */, ts3G_25413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessNetworkProtocolId, _encode_AccessNetworkProtocolId } from "../MAP-CommonDataTypes/AccessNetworkProtocolId.ta.mjs";
// export { AccessNetworkProtocolId, _enum_for_AccessNetworkProtocolId, AccessNetworkProtocolId_ts3G_48006 /* IMPORTED_LONG_ENUMERATION_ITEM */, ts3G_48006 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessNetworkProtocolId_ts3G_25413 /* IMPORTED_LONG_ENUMERATION_ITEM */, ts3G_25413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessNetworkProtocolId, _encode_AccessNetworkProtocolId } from "../MAP-CommonDataTypes/AccessNetworkProtocolId.ta.mjs";
import { LongSignalInfo, _decode_LongSignalInfo, _encode_LongSignalInfo } from "../MAP-CommonDataTypes/LongSignalInfo.ta.mjs";
// export { LongSignalInfo, _decode_LongSignalInfo, _encode_LongSignalInfo } from "../MAP-CommonDataTypes/LongSignalInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary AccessNetworkSignalInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessNetworkSignalInfo ::= SEQUENCE {
 *     accessNetworkProtocolId    AccessNetworkProtocolId,
 *     signalInfo    LongSignalInfo,
 *     -- Information about the internal structure is given in clause 7.6.9.1
 *     
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class AccessNetworkSignalInfo {
    constructor (
        /**
         * @summary `accessNetworkProtocolId`.
         * @public
         * @readonly
         */
        readonly accessNetworkProtocolId: AccessNetworkProtocolId,
        /**
         * @summary `signalInfo`.
         * @public
         * @readonly
         */
        readonly signalInfo: LongSignalInfo,
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
     * @summary Restructures an object into a AccessNetworkSignalInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AccessNetworkSignalInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessNetworkSignalInfo`.
     * @returns {AccessNetworkSignalInfo}
     */
    public static _from_object (_o: { [_K in keyof (AccessNetworkSignalInfo)]: (AccessNetworkSignalInfo)[_K] }): AccessNetworkSignalInfo {
        return new AccessNetworkSignalInfo(_o.accessNetworkProtocolId, _o.signalInfo, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `accessNetworkProtocolId`
         * @public
         * @static
         */

    public static _enum_for_accessNetworkProtocolId = _enum_for_AccessNetworkProtocolId;
}

/**
 * @summary The Leading Root Component Types of AccessNetworkSignalInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessNetworkSignalInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("accessNetworkProtocolId", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("signalInfo", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AccessNetworkSignalInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessNetworkSignalInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessNetworkSignalInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessNetworkSignalInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessNetworkSignalInfo: $.ASN1Decoder<AccessNetworkSignalInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessNetworkSignalInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessNetworkSignalInfo (el: _Element): AccessNetworkSignalInfo {
    if (!_cached_decoder_for_AccessNetworkSignalInfo) { _cached_decoder_for_AccessNetworkSignalInfo = function (el: _Element): AccessNetworkSignalInfo {
    let accessNetworkProtocolId!: AccessNetworkProtocolId;
    let signalInfo!: LongSignalInfo;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessNetworkProtocolId": (_el: _Element): void => { accessNetworkProtocolId = _decode_AccessNetworkProtocolId(_el); },
        "signalInfo": (_el: _Element): void => { signalInfo = _decode_LongSignalInfo(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccessNetworkSignalInfo,
        _extension_additions_list_spec_for_AccessNetworkSignalInfo,
        _root_component_type_list_2_spec_for_AccessNetworkSignalInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AccessNetworkSignalInfo(
        accessNetworkProtocolId,
        signalInfo,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AccessNetworkSignalInfo(el);
}

let _cached_encoder_for_AccessNetworkSignalInfo: $.ASN1Encoder<AccessNetworkSignalInfo> | null = null;

/**
 * @summary Encodes a(n) AccessNetworkSignalInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessNetworkSignalInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AccessNetworkSignalInfo (value: AccessNetworkSignalInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessNetworkSignalInfo) { _cached_encoder_for_AccessNetworkSignalInfo = function (value: AccessNetworkSignalInfo, elGetter: $.ASN1Encoder<AccessNetworkSignalInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AccessNetworkProtocolId(value.accessNetworkProtocolId, $.BER),
            /* REQUIRED   */ _encode_LongSignalInfo(value.signalInfo, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AccessNetworkSignalInfo(value, elGetter);
}


/* eslint-enable */
