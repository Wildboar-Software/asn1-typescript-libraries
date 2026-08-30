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



/**
 * @summary LongTermDenialParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LongTermDenialParam ::= SEQUENCE {
 *     ...}
 * ```
 * 
 * @class
 */
export
class LongTermDenialParam {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LongTermDenialParam
     * @description
     * 
     * This takes an `object` and converts it to a `LongTermDenialParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LongTermDenialParam`.
     * @returns {LongTermDenialParam}
     */
    public static _from_object (_o: { [_K in keyof (LongTermDenialParam)]: (LongTermDenialParam)[_K] }): LongTermDenialParam {
        return new LongTermDenialParam(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LongTermDenialParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LongTermDenialParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of LongTermDenialParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LongTermDenialParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LongTermDenialParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LongTermDenialParam: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LongTermDenialParam: $.ASN1Decoder<LongTermDenialParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LongTermDenialParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LongTermDenialParam (el: _Element): LongTermDenialParam {
    if (!_cached_decoder_for_LongTermDenialParam) { _cached_decoder_for_LongTermDenialParam = function (el: _Element): LongTermDenialParam {
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LongTermDenialParam,
        _extension_additions_list_spec_for_LongTermDenialParam,
        _root_component_type_list_2_spec_for_LongTermDenialParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LongTermDenialParam(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LongTermDenialParam(el);
}

let _cached_encoder_for_LongTermDenialParam: $.ASN1Encoder<LongTermDenialParam> | null = null;

/**
 * @summary Encodes a(n) LongTermDenialParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LongTermDenialParam, encoded as an ASN.1 Element.
 */
export
function _encode_LongTermDenialParam (value: LongTermDenialParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LongTermDenialParam) { _cached_encoder_for_LongTermDenialParam = function (value: LongTermDenialParam, elGetter: $.ASN1Encoder<LongTermDenialParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LongTermDenialParam(value, elGetter);
}


/* eslint-enable */
