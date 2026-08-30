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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary UnidentifiedSubParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnidentifiedSubParam ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class UnidentifiedSubParam {
    constructor (
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
     * @summary Restructures an object into a UnidentifiedSubParam
     * @description
     * 
     * This takes an `object` and converts it to a `UnidentifiedSubParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnidentifiedSubParam`.
     * @returns {UnidentifiedSubParam}
     */
    public static _from_object (_o: { [_K in keyof (UnidentifiedSubParam)]: (UnidentifiedSubParam)[_K] }): UnidentifiedSubParam {
        return new UnidentifiedSubParam(_o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UnidentifiedSubParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UnidentifiedSubParam: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of UnidentifiedSubParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UnidentifiedSubParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UnidentifiedSubParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UnidentifiedSubParam: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UnidentifiedSubParam: $.ASN1Decoder<UnidentifiedSubParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnidentifiedSubParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnidentifiedSubParam (el: _Element): UnidentifiedSubParam {
    if (!_cached_decoder_for_UnidentifiedSubParam) { _cached_decoder_for_UnidentifiedSubParam = function (el: _Element): UnidentifiedSubParam {
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UnidentifiedSubParam,
        _extension_additions_list_spec_for_UnidentifiedSubParam,
        _root_component_type_list_2_spec_for_UnidentifiedSubParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UnidentifiedSubParam(
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UnidentifiedSubParam(el);
}

let _cached_encoder_for_UnidentifiedSubParam: $.ASN1Encoder<UnidentifiedSubParam> | null = null;

/**
 * @summary Encodes a(n) UnidentifiedSubParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnidentifiedSubParam, encoded as an ASN.1 Element.
 */
export
function _encode_UnidentifiedSubParam (value: UnidentifiedSubParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnidentifiedSubParam) { _cached_encoder_for_UnidentifiedSubParam = function (value: UnidentifiedSubParam, elGetter: $.ASN1Encoder<UnidentifiedSubParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UnidentifiedSubParam(value, elGetter);
}


/* eslint-enable */
