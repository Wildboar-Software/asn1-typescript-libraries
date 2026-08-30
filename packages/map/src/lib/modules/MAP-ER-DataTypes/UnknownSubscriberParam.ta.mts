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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { UnknownSubscriberDiagnostic, _enum_for_UnknownSubscriberDiagnostic, UnknownSubscriberDiagnostic_imsiUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, imsiUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnknownSubscriberDiagnostic_gprs_eps_SubscriptionUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, gprs_eps_SubscriptionUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnknownSubscriberDiagnostic_npdbMismatch /* IMPORTED_LONG_ENUMERATION_ITEM */, npdbMismatch /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UnknownSubscriberDiagnostic, _encode_UnknownSubscriberDiagnostic } from "../MAP-ER-DataTypes/UnknownSubscriberDiagnostic.ta.mjs";
// export { UnknownSubscriberDiagnostic, _enum_for_UnknownSubscriberDiagnostic, UnknownSubscriberDiagnostic_imsiUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, imsiUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnknownSubscriberDiagnostic_gprs_eps_SubscriptionUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, gprs_eps_SubscriptionUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnknownSubscriberDiagnostic_npdbMismatch /* IMPORTED_LONG_ENUMERATION_ITEM */, npdbMismatch /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UnknownSubscriberDiagnostic, _encode_UnknownSubscriberDiagnostic } from "../MAP-ER-DataTypes/UnknownSubscriberDiagnostic.ta.mjs";


/**
 * @summary UnknownSubscriberParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnknownSubscriberParam ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     unknownSubscriberDiagnostic    UnknownSubscriberDiagnostic    OPTIONAL}
 * ```
 * 
 * @class
 */
export
class UnknownSubscriberParam {
    constructor (
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `unknownSubscriberDiagnostic`.
         * @public
         * @readonly
         */
        readonly unknownSubscriberDiagnostic: OPTIONAL<UnknownSubscriberDiagnostic>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UnknownSubscriberParam
     * @description
     * 
     * This takes an `object` and converts it to a `UnknownSubscriberParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnknownSubscriberParam`.
     * @returns {UnknownSubscriberParam}
     */
    public static _from_object (_o: { [_K in keyof (UnknownSubscriberParam)]: (UnknownSubscriberParam)[_K] }): UnknownSubscriberParam {
        return new UnknownSubscriberParam(_o.extensionContainer, _o.unknownSubscriberDiagnostic, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `unknownSubscriberDiagnostic`
         * @public
         * @static
         */

    public static _enum_for_unknownSubscriberDiagnostic = _enum_for_UnknownSubscriberDiagnostic;
}

/**
 * @summary The Leading Root Component Types of UnknownSubscriberParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UnknownSubscriberParam: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of UnknownSubscriberParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UnknownSubscriberParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UnknownSubscriberParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UnknownSubscriberParam: $.ComponentSpec[] = [
    new $.ComponentSpec("unknownSubscriberDiagnostic", true, $.hasTag(_TagClass.universal, 10), undefined, undefined)
];

let _cached_decoder_for_UnknownSubscriberParam: $.ASN1Decoder<UnknownSubscriberParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnknownSubscriberParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnknownSubscriberParam (el: _Element): UnknownSubscriberParam {
    if (!_cached_decoder_for_UnknownSubscriberParam) { _cached_decoder_for_UnknownSubscriberParam = function (el: _Element): UnknownSubscriberParam {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let unknownSubscriberDiagnostic: OPTIONAL<UnknownSubscriberDiagnostic>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "unknownSubscriberDiagnostic": (_el: _Element): void => { unknownSubscriberDiagnostic = _decode_UnknownSubscriberDiagnostic(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UnknownSubscriberParam,
        _extension_additions_list_spec_for_UnknownSubscriberParam,
        _root_component_type_list_2_spec_for_UnknownSubscriberParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UnknownSubscriberParam(
        extensionContainer,
        unknownSubscriberDiagnostic,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UnknownSubscriberParam(el);
}

let _cached_encoder_for_UnknownSubscriberParam: $.ASN1Encoder<UnknownSubscriberParam> | null = null;

/**
 * @summary Encodes a(n) UnknownSubscriberParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnknownSubscriberParam, encoded as an ASN.1 Element.
 */
export
function _encode_UnknownSubscriberParam (value: UnknownSubscriberParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnknownSubscriberParam) { _cached_encoder_for_UnknownSubscriberParam = function (value: UnknownSubscriberParam, elGetter: $.ASN1Encoder<UnknownSubscriberParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.unknownSubscriberDiagnostic === undefined) ? undefined : _encode_UnknownSubscriberDiagnostic(value.unknownSubscriberDiagnostic, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UnknownSubscriberParam(value, elGetter);
}


/* eslint-enable */
