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
import { MAP_ProviderAbortReason, _enum_for_MAP_ProviderAbortReason, MAP_ProviderAbortReason_abnormalDialogue /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalDialogue /* IMPORTED_SHORT_ENUMERATION_ITEM */, MAP_ProviderAbortReason_invalidPDU /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidPDU /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MAP_ProviderAbortReason, _encode_MAP_ProviderAbortReason } from "../MAP-DialogueInformation/MAP-ProviderAbortReason.ta.mjs";
// export { MAP_ProviderAbortReason, _enum_for_MAP_ProviderAbortReason, MAP_ProviderAbortReason_abnormalDialogue /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalDialogue /* IMPORTED_SHORT_ENUMERATION_ITEM */, MAP_ProviderAbortReason_invalidPDU /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidPDU /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MAP_ProviderAbortReason, _encode_MAP_ProviderAbortReason } from "../MAP-DialogueInformation/MAP-ProviderAbortReason.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary MAP_ProviderAbortInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-ProviderAbortInfo ::= SEQUENCE {
 *     map-ProviderAbortReason    MAP-ProviderAbortReason,
 *     ...,
 *     extensionContainer    ExtensionContainer    OPTIONAL
 *     -- extensionContainer must not be used in version 2
 *     }
 * ```
 * 
 * @class
 */
export
class MAP_ProviderAbortInfo {
    constructor (
        /**
         * @summary `map_ProviderAbortReason`.
         * @public
         * @readonly
         */
        readonly map_ProviderAbortReason: MAP_ProviderAbortReason,
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
     * @summary Restructures an object into a MAP_ProviderAbortInfo
     * @description
     * 
     * This takes an `object` and converts it to a `MAP_ProviderAbortInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MAP_ProviderAbortInfo`.
     * @returns {MAP_ProviderAbortInfo}
     */
    public static _from_object (_o: { [_K in keyof (MAP_ProviderAbortInfo)]: (MAP_ProviderAbortInfo)[_K] }): MAP_ProviderAbortInfo {
        return new MAP_ProviderAbortInfo(_o.map_ProviderAbortReason, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `map_ProviderAbortReason`
         * @public
         * @static
         */

    public static _enum_for_map_ProviderAbortReason = _enum_for_MAP_ProviderAbortReason;
}

/**
 * @summary The Leading Root Component Types of MAP_ProviderAbortInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MAP_ProviderAbortInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("map-ProviderAbortReason", false, $.hasTag(_TagClass.universal, 10), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MAP_ProviderAbortInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MAP_ProviderAbortInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MAP_ProviderAbortInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MAP_ProviderAbortInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

let _cached_decoder_for_MAP_ProviderAbortInfo: $.ASN1Decoder<MAP_ProviderAbortInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_ProviderAbortInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MAP_ProviderAbortInfo (el: _Element): MAP_ProviderAbortInfo {
    if (!_cached_decoder_for_MAP_ProviderAbortInfo) { _cached_decoder_for_MAP_ProviderAbortInfo = function (el: _Element): MAP_ProviderAbortInfo {
    let map_ProviderAbortReason!: MAP_ProviderAbortReason;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "map-ProviderAbortReason": (_el: _Element): void => { map_ProviderAbortReason = _decode_MAP_ProviderAbortReason(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MAP_ProviderAbortInfo,
        _extension_additions_list_spec_for_MAP_ProviderAbortInfo,
        _root_component_type_list_2_spec_for_MAP_ProviderAbortInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MAP_ProviderAbortInfo(
        map_ProviderAbortReason,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MAP_ProviderAbortInfo(el);
}

let _cached_encoder_for_MAP_ProviderAbortInfo: $.ASN1Encoder<MAP_ProviderAbortInfo> | null = null;

/**
 * @summary Encodes a(n) MAP_ProviderAbortInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_ProviderAbortInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MAP_ProviderAbortInfo (value: MAP_ProviderAbortInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MAP_ProviderAbortInfo) { _cached_encoder_for_MAP_ProviderAbortInfo = function (value: MAP_ProviderAbortInfo, elGetter: $.ASN1Encoder<MAP_ProviderAbortInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MAP_ProviderAbortReason(value.map_ProviderAbortReason, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MAP_ProviderAbortInfo(value, elGetter);
}


/* eslint-enable */
