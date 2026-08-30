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
 * @summary SS_NotAvailableParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-NotAvailableParam ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SS_NotAvailableParam {
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
     * @summary Restructures an object into a SS_NotAvailableParam
     * @description
     * 
     * This takes an `object` and converts it to a `SS_NotAvailableParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SS_NotAvailableParam`.
     * @returns {SS_NotAvailableParam}
     */
    public static _from_object (_o: { [_K in keyof (SS_NotAvailableParam)]: (SS_NotAvailableParam)[_K] }): SS_NotAvailableParam {
        return new SS_NotAvailableParam(_o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SS_NotAvailableParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SS_NotAvailableParam: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SS_NotAvailableParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SS_NotAvailableParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SS_NotAvailableParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SS_NotAvailableParam: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SS_NotAvailableParam: $.ASN1Decoder<SS_NotAvailableParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_NotAvailableParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_NotAvailableParam (el: _Element): SS_NotAvailableParam {
    if (!_cached_decoder_for_SS_NotAvailableParam) { _cached_decoder_for_SS_NotAvailableParam = function (el: _Element): SS_NotAvailableParam {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SS_NotAvailableParam,
        _extension_additions_list_spec_for_SS_NotAvailableParam,
        _root_component_type_list_2_spec_for_SS_NotAvailableParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SS_NotAvailableParam(
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SS_NotAvailableParam(el);
}

let _cached_encoder_for_SS_NotAvailableParam: $.ASN1Encoder<SS_NotAvailableParam> | null = null;

/**
 * @summary Encodes a(n) SS_NotAvailableParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_NotAvailableParam, encoded as an ASN.1 Element.
 */
export
function _encode_SS_NotAvailableParam (value: SS_NotAvailableParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_NotAvailableParam) { _cached_encoder_for_SS_NotAvailableParam = function (value: SS_NotAvailableParam, elGetter: $.ASN1Encoder<SS_NotAvailableParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SS_NotAvailableParam(value, elGetter);
}


/* eslint-enable */
