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
 * @summary ResourceLimitationParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceLimitationParam ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ResourceLimitationParam {
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
     * @summary Restructures an object into a ResourceLimitationParam
     * @description
     * 
     * This takes an `object` and converts it to a `ResourceLimitationParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResourceLimitationParam`.
     * @returns {ResourceLimitationParam}
     */
    public static _from_object (_o: { [_K in keyof (ResourceLimitationParam)]: (ResourceLimitationParam)[_K] }): ResourceLimitationParam {
        return new ResourceLimitationParam(_o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ResourceLimitationParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResourceLimitationParam: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ResourceLimitationParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResourceLimitationParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResourceLimitationParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResourceLimitationParam: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResourceLimitationParam: $.ASN1Decoder<ResourceLimitationParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceLimitationParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceLimitationParam (el: _Element): ResourceLimitationParam {
    if (!_cached_decoder_for_ResourceLimitationParam) { _cached_decoder_for_ResourceLimitationParam = function (el: _Element): ResourceLimitationParam {
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResourceLimitationParam,
        _extension_additions_list_spec_for_ResourceLimitationParam,
        _root_component_type_list_2_spec_for_ResourceLimitationParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ResourceLimitationParam(
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ResourceLimitationParam(el);
}

let _cached_encoder_for_ResourceLimitationParam: $.ASN1Encoder<ResourceLimitationParam> | null = null;

/**
 * @summary Encodes a(n) ResourceLimitationParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceLimitationParam, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceLimitationParam (value: ResourceLimitationParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceLimitationParam) { _cached_encoder_for_ResourceLimitationParam = function (value: ResourceLimitationParam, elGetter: $.ASN1Encoder<ResourceLimitationParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResourceLimitationParam(value, elGetter);
}


/* eslint-enable */
