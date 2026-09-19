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
 * @summary GetEuiccInfo2Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEuiccInfo2Request ::= [34] SEQUENCE { -- Tag 'BF22'
 * }
 * ```
 * 
 * @class
 */
export
class GetEuiccInfo2Request {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a GetEuiccInfo2Request
     * @description
     * 
     * This takes an `object` and converts it to a `GetEuiccInfo2Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEuiccInfo2Request`.
     * @returns {GetEuiccInfo2Request}
     */
    public static _from_object (_o: { [_K in keyof (GetEuiccInfo2Request)]: (GetEuiccInfo2Request)[_K] }): GetEuiccInfo2Request {
        return new GetEuiccInfo2Request();
    }


}

/**
 * @summary The Leading Root Component Types of GetEuiccInfo2Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEuiccInfo2Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of GetEuiccInfo2Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEuiccInfo2Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEuiccInfo2Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEuiccInfo2Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEuiccInfo2Request: $.ASN1Decoder<GetEuiccInfo2Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEuiccInfo2Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEuiccInfo2Request (el: _Element): GetEuiccInfo2Request {
    if (!_cached_decoder_for_GetEuiccInfo2Request) { _cached_decoder_for_GetEuiccInfo2Request = $._decode_implicit<GetEuiccInfo2Request>(() => function (el: _Element): GetEuiccInfo2Request {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetEuiccInfo2Request,
        _extension_additions_list_spec_for_GetEuiccInfo2Request,
        _root_component_type_list_2_spec_for_GetEuiccInfo2Request,
        undefined,
    );
    return new GetEuiccInfo2Request(
        
    );
}); }
    return _cached_decoder_for_GetEuiccInfo2Request(el);
}

let _cached_encoder_for_GetEuiccInfo2Request: $.ASN1Encoder<GetEuiccInfo2Request> | null = null;

/**
 * @summary Encodes a(n) GetEuiccInfo2Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEuiccInfo2Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetEuiccInfo2Request (value: GetEuiccInfo2Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEuiccInfo2Request) { _cached_encoder_for_GetEuiccInfo2Request = $._encode_implicit(_TagClass.context, 34, () => function (value: GetEuiccInfo2Request, elGetter: $.ASN1Encoder<GetEuiccInfo2Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetEuiccInfo2Request(value, elGetter);
}


/* eslint-enable */
