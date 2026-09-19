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
 * @summary StoreMetadataRequest_iotSpecificMetadata
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StoreMetadataRequest-iotSpecificMetadata ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class StoreMetadataRequest_iotSpecificMetadata {
    constructor (

    ) {}

    /**
     * @summary Restructures an object into a StoreMetadataRequest_iotSpecificMetadata
     * @description
     * 
     * This takes an `object` and converts it to a `StoreMetadataRequest_iotSpecificMetadata`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StoreMetadataRequest_iotSpecificMetadata`.
     * @returns {StoreMetadataRequest_iotSpecificMetadata}
     */
    public static _from_object (_o: { [_K in keyof (StoreMetadataRequest_iotSpecificMetadata)]: (StoreMetadataRequest_iotSpecificMetadata)[_K] }): StoreMetadataRequest_iotSpecificMetadata {
        return new StoreMetadataRequest_iotSpecificMetadata();
    }


}

/**
 * @summary The Leading Root Component Types of StoreMetadataRequest_iotSpecificMetadata
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StoreMetadataRequest_iotSpecificMetadata: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of StoreMetadataRequest_iotSpecificMetadata
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StoreMetadataRequest_iotSpecificMetadata: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StoreMetadataRequest_iotSpecificMetadata
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StoreMetadataRequest_iotSpecificMetadata: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StoreMetadataRequest_iotSpecificMetadata: $.ASN1Decoder<StoreMetadataRequest_iotSpecificMetadata> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StoreMetadataRequest_iotSpecificMetadata
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StoreMetadataRequest_iotSpecificMetadata (el: _Element): StoreMetadataRequest_iotSpecificMetadata {
    if (!_cached_decoder_for_StoreMetadataRequest_iotSpecificMetadata) { _cached_decoder_for_StoreMetadataRequest_iotSpecificMetadata = function (el: _Element): StoreMetadataRequest_iotSpecificMetadata {
    
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StoreMetadataRequest_iotSpecificMetadata,
        _extension_additions_list_spec_for_StoreMetadataRequest_iotSpecificMetadata,
        _root_component_type_list_2_spec_for_StoreMetadataRequest_iotSpecificMetadata,
        undefined,
    );
    return new StoreMetadataRequest_iotSpecificMetadata(
        
    );
}; }
    return _cached_decoder_for_StoreMetadataRequest_iotSpecificMetadata(el);
}

let _cached_encoder_for_StoreMetadataRequest_iotSpecificMetadata: $.ASN1Encoder<StoreMetadataRequest_iotSpecificMetadata> | null = null;

/**
 * @summary Encodes a(n) StoreMetadataRequest_iotSpecificMetadata into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StoreMetadataRequest_iotSpecificMetadata, encoded as an ASN.1 Element.
 */
export
function _encode_StoreMetadataRequest_iotSpecificMetadata (value: StoreMetadataRequest_iotSpecificMetadata, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StoreMetadataRequest_iotSpecificMetadata) { _cached_encoder_for_StoreMetadataRequest_iotSpecificMetadata = function (value: StoreMetadataRequest_iotSpecificMetadata, elGetter: $.ASN1Encoder<StoreMetadataRequest_iotSpecificMetadata>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StoreMetadataRequest_iotSpecificMetadata(value, elGetter);
}


/* eslint-enable */
