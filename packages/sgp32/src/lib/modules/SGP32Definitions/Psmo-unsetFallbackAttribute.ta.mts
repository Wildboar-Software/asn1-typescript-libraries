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
 * @summary Psmo_unsetFallbackAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Psmo-unsetFallbackAttribute ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Psmo_unsetFallbackAttribute {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a Psmo_unsetFallbackAttribute
     * @description
     * 
     * This takes an `object` and converts it to a `Psmo_unsetFallbackAttribute`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Psmo_unsetFallbackAttribute`.
     * @returns {Psmo_unsetFallbackAttribute}
     */
    public static _from_object (_o: { [_K in keyof (Psmo_unsetFallbackAttribute)]: (Psmo_unsetFallbackAttribute)[_K] }): Psmo_unsetFallbackAttribute {
        return new Psmo_unsetFallbackAttribute();
    }


}

/**
 * @summary The Leading Root Component Types of Psmo_unsetFallbackAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Psmo_unsetFallbackAttribute: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of Psmo_unsetFallbackAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Psmo_unsetFallbackAttribute: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Psmo_unsetFallbackAttribute
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Psmo_unsetFallbackAttribute: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Psmo_unsetFallbackAttribute: $.ASN1Decoder<Psmo_unsetFallbackAttribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Psmo_unsetFallbackAttribute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Psmo_unsetFallbackAttribute (el: _Element): Psmo_unsetFallbackAttribute {
    if (!_cached_decoder_for_Psmo_unsetFallbackAttribute) { _cached_decoder_for_Psmo_unsetFallbackAttribute = function (el: _Element): Psmo_unsetFallbackAttribute {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Psmo_unsetFallbackAttribute,
        _extension_additions_list_spec_for_Psmo_unsetFallbackAttribute,
        _root_component_type_list_2_spec_for_Psmo_unsetFallbackAttribute,
        undefined,
    );
    return new Psmo_unsetFallbackAttribute(
        
    );
}; }
    return _cached_decoder_for_Psmo_unsetFallbackAttribute(el);
}

let _cached_encoder_for_Psmo_unsetFallbackAttribute: $.ASN1Encoder<Psmo_unsetFallbackAttribute> | null = null;

/**
 * @summary Encodes a(n) Psmo_unsetFallbackAttribute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Psmo_unsetFallbackAttribute, encoded as an ASN.1 Element.
 */
export
function _encode_Psmo_unsetFallbackAttribute (value: Psmo_unsetFallbackAttribute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Psmo_unsetFallbackAttribute) { _cached_encoder_for_Psmo_unsetFallbackAttribute = function (value: Psmo_unsetFallbackAttribute, elGetter: $.ASN1Encoder<Psmo_unsetFallbackAttribute>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Psmo_unsetFallbackAttribute(value, elGetter);
}


/* eslint-enable */
