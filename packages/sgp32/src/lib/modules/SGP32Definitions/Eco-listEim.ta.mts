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
 * @summary Eco_listEim
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Eco-listEim ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class Eco_listEim {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a Eco_listEim
     * @description
     * 
     * This takes an `object` and converts it to a `Eco_listEim`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Eco_listEim`.
     * @returns {Eco_listEim}
     */
    public static _from_object (_o: { [_K in keyof (Eco_listEim)]: (Eco_listEim)[_K] }): Eco_listEim {
        return new Eco_listEim();
    }


}

/**
 * @summary The Leading Root Component Types of Eco_listEim
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Eco_listEim: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of Eco_listEim
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Eco_listEim: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Eco_listEim
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Eco_listEim: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Eco_listEim: $.ASN1Decoder<Eco_listEim> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Eco_listEim
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Eco_listEim (el: _Element): Eco_listEim {
    if (!_cached_decoder_for_Eco_listEim) { _cached_decoder_for_Eco_listEim = function (el: _Element): Eco_listEim {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Eco_listEim,
        _extension_additions_list_spec_for_Eco_listEim,
        _root_component_type_list_2_spec_for_Eco_listEim,
        undefined,
    );
    return new Eco_listEim(
        
    );
}; }
    return _cached_decoder_for_Eco_listEim(el);
}

let _cached_encoder_for_Eco_listEim: $.ASN1Encoder<Eco_listEim> | null = null;

/**
 * @summary Encodes a(n) Eco_listEim into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Eco_listEim, encoded as an ASN.1 Element.
 */
export
function _encode_Eco_listEim (value: Eco_listEim, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Eco_listEim) { _cached_encoder_for_Eco_listEim = function (value: Eco_listEim, elGetter: $.ASN1Encoder<Eco_listEim>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Eco_listEim(value, elGetter);
}


/* eslint-enable */
