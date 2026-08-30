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


/**
 * @summary MM_EventNotSupported_Param
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MM-EventNotSupported-Param ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class MM_EventNotSupported_Param {
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
     * @summary Restructures an object into a MM_EventNotSupported_Param
     * @description
     * 
     * This takes an `object` and converts it to a `MM_EventNotSupported_Param`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MM_EventNotSupported_Param`.
     * @returns {MM_EventNotSupported_Param}
     */
    public static _from_object (_o: { [_K in keyof (MM_EventNotSupported_Param)]: (MM_EventNotSupported_Param)[_K] }): MM_EventNotSupported_Param {
        return new MM_EventNotSupported_Param(_o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MM_EventNotSupported_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MM_EventNotSupported_Param: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MM_EventNotSupported_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MM_EventNotSupported_Param: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MM_EventNotSupported_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MM_EventNotSupported_Param: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MM_EventNotSupported_Param: $.ASN1Decoder<MM_EventNotSupported_Param> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MM_EventNotSupported_Param
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MM_EventNotSupported_Param (el: _Element): MM_EventNotSupported_Param {
    if (!_cached_decoder_for_MM_EventNotSupported_Param) { _cached_decoder_for_MM_EventNotSupported_Param = function (el: _Element): MM_EventNotSupported_Param {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MM_EventNotSupported_Param,
        _extension_additions_list_spec_for_MM_EventNotSupported_Param,
        _root_component_type_list_2_spec_for_MM_EventNotSupported_Param,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MM_EventNotSupported_Param(
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MM_EventNotSupported_Param(el);
}

let _cached_encoder_for_MM_EventNotSupported_Param: $.ASN1Encoder<MM_EventNotSupported_Param> | null = null;

/**
 * @summary Encodes a(n) MM_EventNotSupported_Param into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MM_EventNotSupported_Param, encoded as an ASN.1 Element.
 */
export
function _encode_MM_EventNotSupported_Param (value: MM_EventNotSupported_Param, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MM_EventNotSupported_Param) { _cached_encoder_for_MM_EventNotSupported_Param = function (value: MM_EventNotSupported_Param, elGetter: $.ASN1Encoder<MM_EventNotSupported_Param>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MM_EventNotSupported_Param(value, elGetter);
}


/* eslint-enable */
