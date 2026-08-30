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



/**
 * @summary ShortTermDenialParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ShortTermDenialParam ::= SEQUENCE {
 *     ...}
 * ```
 * 
 * @class
 */
export
class ShortTermDenialParam {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ShortTermDenialParam
     * @description
     * 
     * This takes an `object` and converts it to a `ShortTermDenialParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ShortTermDenialParam`.
     * @returns {ShortTermDenialParam}
     */
    public static _from_object (_o: { [_K in keyof (ShortTermDenialParam)]: (ShortTermDenialParam)[_K] }): ShortTermDenialParam {
        return new ShortTermDenialParam(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ShortTermDenialParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ShortTermDenialParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of ShortTermDenialParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ShortTermDenialParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ShortTermDenialParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ShortTermDenialParam: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ShortTermDenialParam: $.ASN1Decoder<ShortTermDenialParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ShortTermDenialParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ShortTermDenialParam (el: _Element): ShortTermDenialParam {
    if (!_cached_decoder_for_ShortTermDenialParam) { _cached_decoder_for_ShortTermDenialParam = function (el: _Element): ShortTermDenialParam {
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ShortTermDenialParam,
        _extension_additions_list_spec_for_ShortTermDenialParam,
        _root_component_type_list_2_spec_for_ShortTermDenialParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ShortTermDenialParam(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ShortTermDenialParam(el);
}

let _cached_encoder_for_ShortTermDenialParam: $.ASN1Encoder<ShortTermDenialParam> | null = null;

/**
 * @summary Encodes a(n) ShortTermDenialParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShortTermDenialParam, encoded as an ASN.1 Element.
 */
export
function _encode_ShortTermDenialParam (value: ShortTermDenialParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ShortTermDenialParam) { _cached_encoder_for_ShortTermDenialParam = function (value: ShortTermDenialParam, elGetter: $.ASN1Encoder<ShortTermDenialParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ShortTermDenialParam(value, elGetter);
}


/* eslint-enable */
