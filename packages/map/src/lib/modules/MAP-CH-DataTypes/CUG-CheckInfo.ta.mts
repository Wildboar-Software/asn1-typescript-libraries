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
import { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../MAP-MS-DataTypes/CUG-Interlock.ta.mjs";
// export { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../MAP-MS-DataTypes/CUG-Interlock.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CUG_CheckInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-CheckInfo ::= SEQUENCE {
 *     cug-Interlock    CUG-Interlock,
 *     cug-OutgoingAccess    NULL    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CUG_CheckInfo {
    constructor (
        /**
         * @summary `cug_Interlock`.
         * @public
         * @readonly
         */
        readonly cug_Interlock: CUG_Interlock,
        /**
         * @summary `cug_OutgoingAccess`.
         * @public
         * @readonly
         */
        readonly cug_OutgoingAccess: OPTIONAL<NULL>,
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
     * @summary Restructures an object into a CUG_CheckInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CUG_CheckInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CUG_CheckInfo`.
     * @returns {CUG_CheckInfo}
     */
    public static _from_object (_o: { [_K in keyof (CUG_CheckInfo)]: (CUG_CheckInfo)[_K] }): CUG_CheckInfo {
        return new CUG_CheckInfo(_o.cug_Interlock, _o.cug_OutgoingAccess, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CUG_CheckInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CUG_CheckInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("cug-Interlock", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("cug-OutgoingAccess", true, $.hasTag(_TagClass.universal, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CUG_CheckInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CUG_CheckInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CUG_CheckInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CUG_CheckInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CUG_CheckInfo: $.ASN1Decoder<CUG_CheckInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CUG_CheckInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CUG_CheckInfo (el: _Element): CUG_CheckInfo {
    if (!_cached_decoder_for_CUG_CheckInfo) { _cached_decoder_for_CUG_CheckInfo = function (el: _Element): CUG_CheckInfo {
    let cug_Interlock!: CUG_Interlock;
    let cug_OutgoingAccess: OPTIONAL<NULL>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cug-Interlock": (_el: _Element): void => { cug_Interlock = _decode_CUG_Interlock(_el); },
        "cug-OutgoingAccess": (_el: _Element): void => { cug_OutgoingAccess = $._decodeNull(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CUG_CheckInfo,
        _extension_additions_list_spec_for_CUG_CheckInfo,
        _root_component_type_list_2_spec_for_CUG_CheckInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CUG_CheckInfo(
        cug_Interlock,
        cug_OutgoingAccess,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CUG_CheckInfo(el);
}

let _cached_encoder_for_CUG_CheckInfo: $.ASN1Encoder<CUG_CheckInfo> | null = null;

/**
 * @summary Encodes a(n) CUG_CheckInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUG_CheckInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CUG_CheckInfo (value: CUG_CheckInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CUG_CheckInfo) { _cached_encoder_for_CUG_CheckInfo = function (value: CUG_CheckInfo, elGetter: $.ASN1Encoder<CUG_CheckInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CUG_Interlock(value.cug_Interlock, $.BER),
            /* IF_ABSENT  */ ((value.cug_OutgoingAccess === undefined) ? undefined : $._encodeNull(value.cug_OutgoingAccess, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CUG_CheckInfo(value, elGetter);
}


/* eslint-enable */
