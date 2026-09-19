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
 * @summary ProvideEimPackageResultResponse_emptyResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideEimPackageResultResponse-emptyResponse ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ProvideEimPackageResultResponse_emptyResponse {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a ProvideEimPackageResultResponse_emptyResponse
     * @description
     * 
     * This takes an `object` and converts it to a `ProvideEimPackageResultResponse_emptyResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProvideEimPackageResultResponse_emptyResponse`.
     * @returns {ProvideEimPackageResultResponse_emptyResponse}
     */
    public static _from_object (_o: { [_K in keyof (ProvideEimPackageResultResponse_emptyResponse)]: (ProvideEimPackageResultResponse_emptyResponse)[_K] }): ProvideEimPackageResultResponse_emptyResponse {
        return new ProvideEimPackageResultResponse_emptyResponse();
    }


}

/**
 * @summary The Leading Root Component Types of ProvideEimPackageResultResponse_emptyResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProvideEimPackageResultResponse_emptyResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of ProvideEimPackageResultResponse_emptyResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProvideEimPackageResultResponse_emptyResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProvideEimPackageResultResponse_emptyResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProvideEimPackageResultResponse_emptyResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProvideEimPackageResultResponse_emptyResponse: $.ASN1Decoder<ProvideEimPackageResultResponse_emptyResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProvideEimPackageResultResponse_emptyResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProvideEimPackageResultResponse_emptyResponse (el: _Element): ProvideEimPackageResultResponse_emptyResponse {
    if (!_cached_decoder_for_ProvideEimPackageResultResponse_emptyResponse) { _cached_decoder_for_ProvideEimPackageResultResponse_emptyResponse = function (el: _Element): ProvideEimPackageResultResponse_emptyResponse {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProvideEimPackageResultResponse_emptyResponse,
        _extension_additions_list_spec_for_ProvideEimPackageResultResponse_emptyResponse,
        _root_component_type_list_2_spec_for_ProvideEimPackageResultResponse_emptyResponse,
        undefined,
    );
    return new ProvideEimPackageResultResponse_emptyResponse(
        
    );
}; }
    return _cached_decoder_for_ProvideEimPackageResultResponse_emptyResponse(el);
}

let _cached_encoder_for_ProvideEimPackageResultResponse_emptyResponse: $.ASN1Encoder<ProvideEimPackageResultResponse_emptyResponse> | null = null;

/**
 * @summary Encodes a(n) ProvideEimPackageResultResponse_emptyResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProvideEimPackageResultResponse_emptyResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ProvideEimPackageResultResponse_emptyResponse (value: ProvideEimPackageResultResponse_emptyResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProvideEimPackageResultResponse_emptyResponse) { _cached_encoder_for_ProvideEimPackageResultResponse_emptyResponse = function (value: ProvideEimPackageResultResponse_emptyResponse, elGetter: $.ASN1Encoder<ProvideEimPackageResultResponse_emptyResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProvideEimPackageResultResponse_emptyResponse(value, elGetter);
}


/* eslint-enable */
