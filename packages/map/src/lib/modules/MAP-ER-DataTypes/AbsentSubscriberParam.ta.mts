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
import { AbsentSubscriberReason, _enum_for_AbsentSubscriberReason, AbsentSubscriberReason_imsiDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, imsiDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbsentSubscriberReason_restrictedArea /* IMPORTED_LONG_ENUMERATION_ITEM */, restrictedArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbsentSubscriberReason_noPageResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, noPageResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbsentSubscriberReason_purgedMS /* IMPORTED_LONG_ENUMERATION_ITEM */, purgedMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbsentSubscriberReason_mtRoamingRetry /* IMPORTED_LONG_ENUMERATION_ITEM */, mtRoamingRetry /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbsentSubscriberReason_busySubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, busySubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AbsentSubscriberReason, _encode_AbsentSubscriberReason } from "../MAP-ER-DataTypes/AbsentSubscriberReason.ta.mjs";
// export { AbsentSubscriberReason, _enum_for_AbsentSubscriberReason, AbsentSubscriberReason_imsiDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, imsiDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbsentSubscriberReason_restrictedArea /* IMPORTED_LONG_ENUMERATION_ITEM */, restrictedArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbsentSubscriberReason_noPageResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, noPageResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbsentSubscriberReason_purgedMS /* IMPORTED_LONG_ENUMERATION_ITEM */, purgedMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbsentSubscriberReason_mtRoamingRetry /* IMPORTED_LONG_ENUMERATION_ITEM */, mtRoamingRetry /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbsentSubscriberReason_busySubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, busySubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AbsentSubscriberReason, _encode_AbsentSubscriberReason } from "../MAP-ER-DataTypes/AbsentSubscriberReason.ta.mjs";


/**
 * @summary AbsentSubscriberParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbsentSubscriberParam ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     absentSubscriberReason    [0] AbsentSubscriberReason    OPTIONAL}
 * ```
 * 
 * @class
 */
export
class AbsentSubscriberParam {
    constructor (
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `absentSubscriberReason`.
         * @public
         * @readonly
         */
        readonly absentSubscriberReason: OPTIONAL<AbsentSubscriberReason>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AbsentSubscriberParam
     * @description
     * 
     * This takes an `object` and converts it to a `AbsentSubscriberParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AbsentSubscriberParam`.
     * @returns {AbsentSubscriberParam}
     */
    public static _from_object (_o: { [_K in keyof (AbsentSubscriberParam)]: (AbsentSubscriberParam)[_K] }): AbsentSubscriberParam {
        return new AbsentSubscriberParam(_o.extensionContainer, _o.absentSubscriberReason, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `absentSubscriberReason`
         * @public
         * @static
         */

    public static _enum_for_absentSubscriberReason = _enum_for_AbsentSubscriberReason;
}

/**
 * @summary The Leading Root Component Types of AbsentSubscriberParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AbsentSubscriberParam: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AbsentSubscriberParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AbsentSubscriberParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AbsentSubscriberParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AbsentSubscriberParam: $.ComponentSpec[] = [
    new $.ComponentSpec("absentSubscriberReason", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

let _cached_decoder_for_AbsentSubscriberParam: $.ASN1Decoder<AbsentSubscriberParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AbsentSubscriberParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AbsentSubscriberParam (el: _Element): AbsentSubscriberParam {
    if (!_cached_decoder_for_AbsentSubscriberParam) { _cached_decoder_for_AbsentSubscriberParam = function (el: _Element): AbsentSubscriberParam {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let absentSubscriberReason: OPTIONAL<AbsentSubscriberReason>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "absentSubscriberReason": (_el: _Element): void => { absentSubscriberReason = $._decode_implicit<AbsentSubscriberReason>(() => _decode_AbsentSubscriberReason)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AbsentSubscriberParam,
        _extension_additions_list_spec_for_AbsentSubscriberParam,
        _root_component_type_list_2_spec_for_AbsentSubscriberParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AbsentSubscriberParam(
        extensionContainer,
        absentSubscriberReason,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AbsentSubscriberParam(el);
}

let _cached_encoder_for_AbsentSubscriberParam: $.ASN1Encoder<AbsentSubscriberParam> | null = null;

/**
 * @summary Encodes a(n) AbsentSubscriberParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbsentSubscriberParam, encoded as an ASN.1 Element.
 */
export
function _encode_AbsentSubscriberParam (value: AbsentSubscriberParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AbsentSubscriberParam) { _cached_encoder_for_AbsentSubscriberParam = function (value: AbsentSubscriberParam, elGetter: $.ASN1Encoder<AbsentSubscriberParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.absentSubscriberReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AbsentSubscriberReason, $.BER)(value.absentSubscriberReason, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AbsentSubscriberParam(value, elGetter);
}


/* eslint-enable */
