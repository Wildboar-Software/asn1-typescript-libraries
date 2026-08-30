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
 * @summary InformationNotAvailableParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InformationNotAvailableParam ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class InformationNotAvailableParam {
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
     * @summary Restructures an object into a InformationNotAvailableParam
     * @description
     * 
     * This takes an `object` and converts it to a `InformationNotAvailableParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InformationNotAvailableParam`.
     * @returns {InformationNotAvailableParam}
     */
    public static _from_object (_o: { [_K in keyof (InformationNotAvailableParam)]: (InformationNotAvailableParam)[_K] }): InformationNotAvailableParam {
        return new InformationNotAvailableParam(_o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InformationNotAvailableParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InformationNotAvailableParam: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of InformationNotAvailableParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InformationNotAvailableParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InformationNotAvailableParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InformationNotAvailableParam: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InformationNotAvailableParam: $.ASN1Decoder<InformationNotAvailableParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformationNotAvailableParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InformationNotAvailableParam (el: _Element): InformationNotAvailableParam {
    if (!_cached_decoder_for_InformationNotAvailableParam) { _cached_decoder_for_InformationNotAvailableParam = function (el: _Element): InformationNotAvailableParam {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InformationNotAvailableParam,
        _extension_additions_list_spec_for_InformationNotAvailableParam,
        _root_component_type_list_2_spec_for_InformationNotAvailableParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InformationNotAvailableParam(
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InformationNotAvailableParam(el);
}

let _cached_encoder_for_InformationNotAvailableParam: $.ASN1Encoder<InformationNotAvailableParam> | null = null;

/**
 * @summary Encodes a(n) InformationNotAvailableParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationNotAvailableParam, encoded as an ASN.1 Element.
 */
export
function _encode_InformationNotAvailableParam (value: InformationNotAvailableParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InformationNotAvailableParam) { _cached_encoder_for_InformationNotAvailableParam = function (value: InformationNotAvailableParam, elGetter: $.ASN1Encoder<InformationNotAvailableParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InformationNotAvailableParam(value, elGetter);
}


/* eslint-enable */
