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
 * @summary Psmo_getRAT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Psmo-getRAT ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Psmo_getRAT {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a Psmo_getRAT
     * @description
     * 
     * This takes an `object` and converts it to a `Psmo_getRAT`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Psmo_getRAT`.
     * @returns {Psmo_getRAT}
     */
    public static _from_object (_o: { [_K in keyof (Psmo_getRAT)]: (Psmo_getRAT)[_K] }): Psmo_getRAT {
        return new Psmo_getRAT();
    }


}

/**
 * @summary The Leading Root Component Types of Psmo_getRAT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Psmo_getRAT: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of Psmo_getRAT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Psmo_getRAT: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Psmo_getRAT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Psmo_getRAT: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Psmo_getRAT: $.ASN1Decoder<Psmo_getRAT> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Psmo_getRAT
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Psmo_getRAT (el: _Element): Psmo_getRAT {
    if (!_cached_decoder_for_Psmo_getRAT) { _cached_decoder_for_Psmo_getRAT = function (el: _Element): Psmo_getRAT {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Psmo_getRAT,
        _extension_additions_list_spec_for_Psmo_getRAT,
        _root_component_type_list_2_spec_for_Psmo_getRAT,
        undefined,
    );
    return new Psmo_getRAT(
        
    );
}; }
    return _cached_decoder_for_Psmo_getRAT(el);
}

let _cached_encoder_for_Psmo_getRAT: $.ASN1Encoder<Psmo_getRAT> | null = null;

/**
 * @summary Encodes a(n) Psmo_getRAT into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Psmo_getRAT, encoded as an ASN.1 Element.
 */
export
function _encode_Psmo_getRAT (value: Psmo_getRAT, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Psmo_getRAT) { _cached_encoder_for_Psmo_getRAT = function (value: Psmo_getRAT, elGetter: $.ASN1Encoder<Psmo_getRAT>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Psmo_getRAT(value, elGetter);
}


/* eslint-enable */
