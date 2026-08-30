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
import { Reason, _enum_for_Reason, Reason_noReasonGiven /* IMPORTED_LONG_ENUMERATION_ITEM */, noReasonGiven /* IMPORTED_SHORT_ENUMERATION_ITEM */, Reason_invalidDestinationReference /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidDestinationReference /* IMPORTED_SHORT_ENUMERATION_ITEM */, Reason_invalidOriginatingReference /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidOriginatingReference /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Reason, _encode_Reason } from "../MAP-DialogueInformation/Reason.ta.mjs";
// export { Reason, _enum_for_Reason, Reason_noReasonGiven /* IMPORTED_LONG_ENUMERATION_ITEM */, noReasonGiven /* IMPORTED_SHORT_ENUMERATION_ITEM */, Reason_invalidDestinationReference /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidDestinationReference /* IMPORTED_SHORT_ENUMERATION_ITEM */, Reason_invalidOriginatingReference /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidOriginatingReference /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Reason, _encode_Reason } from "../MAP-DialogueInformation/Reason.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary MAP_RefuseInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-RefuseInfo ::= SEQUENCE {
 *     reason    Reason,
 *     ...,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     -- extensionContainer must not be used in version 2
 *     alternativeApplicationContext    OBJECT IDENTIFIER    OPTIONAL
 *     -- alternativeApplicationContext must not be used in version 2
 *     }
 * ```
 * 
 * @class
 */
export
class MAP_RefuseInfo {
    constructor (
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: Reason,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `alternativeApplicationContext`.
         * @public
         * @readonly
         */
        readonly alternativeApplicationContext: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MAP_RefuseInfo
     * @description
     * 
     * This takes an `object` and converts it to a `MAP_RefuseInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MAP_RefuseInfo`.
     * @returns {MAP_RefuseInfo}
     */
    public static _from_object (_o: { [_K in keyof (MAP_RefuseInfo)]: (MAP_RefuseInfo)[_K] }): MAP_RefuseInfo {
        return new MAP_RefuseInfo(_o.reason, _o.extensionContainer, _o.alternativeApplicationContext, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `reason`
         * @public
         * @static
         */

    public static _enum_for_reason = _enum_for_Reason;
}

/**
 * @summary The Leading Root Component Types of MAP_RefuseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MAP_RefuseInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("reason", false, $.hasTag(_TagClass.universal, 10), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MAP_RefuseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MAP_RefuseInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MAP_RefuseInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MAP_RefuseInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("alternativeApplicationContext", true, $.hasTag(_TagClass.universal, 6), undefined, undefined)
];

let _cached_decoder_for_MAP_RefuseInfo: $.ASN1Decoder<MAP_RefuseInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_RefuseInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MAP_RefuseInfo (el: _Element): MAP_RefuseInfo {
    if (!_cached_decoder_for_MAP_RefuseInfo) { _cached_decoder_for_MAP_RefuseInfo = function (el: _Element): MAP_RefuseInfo {
    let reason!: Reason;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let alternativeApplicationContext: OPTIONAL<OBJECT_IDENTIFIER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "reason": (_el: _Element): void => { reason = _decode_Reason(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "alternativeApplicationContext": (_el: _Element): void => { alternativeApplicationContext = $._decodeObjectIdentifier(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MAP_RefuseInfo,
        _extension_additions_list_spec_for_MAP_RefuseInfo,
        _root_component_type_list_2_spec_for_MAP_RefuseInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MAP_RefuseInfo(
        reason,
        extensionContainer,
        alternativeApplicationContext,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MAP_RefuseInfo(el);
}

let _cached_encoder_for_MAP_RefuseInfo: $.ASN1Encoder<MAP_RefuseInfo> | null = null;

/**
 * @summary Encodes a(n) MAP_RefuseInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_RefuseInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MAP_RefuseInfo (value: MAP_RefuseInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MAP_RefuseInfo) { _cached_encoder_for_MAP_RefuseInfo = function (value: MAP_RefuseInfo, elGetter: $.ASN1Encoder<MAP_RefuseInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Reason(value.reason, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER)),
            /* IF_ABSENT  */ ((value.alternativeApplicationContext === undefined) ? undefined : $._encodeObjectIdentifier(value.alternativeApplicationContext, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MAP_RefuseInfo(value, elGetter);
}


/* eslint-enable */
