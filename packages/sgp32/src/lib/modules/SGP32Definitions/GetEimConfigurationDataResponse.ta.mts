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
import { EimConfigurationData, _decode_EimConfigurationData, _encode_EimConfigurationData } from "../SGP32Definitions/EimConfigurationData.ta.mjs";
// export { EimConfigurationData, _decode_EimConfigurationData, _encode_EimConfigurationData } from "../SGP32Definitions/EimConfigurationData.ta.mjs";


/**
 * @summary GetEimConfigurationDataResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEimConfigurationDataResponse ::= [85] SEQUENCE { -- Tag 'BF55'
 *     eimConfigurationDataList [0] SEQUENCE OF EimConfigurationData
 * }
 * ```
 * 
 * @class
 */
export
class GetEimConfigurationDataResponse {
    constructor (
        /**
         * @summary `eimConfigurationDataList`.
         * @public
         * @readonly
         */
        readonly eimConfigurationDataList: EimConfigurationData[]
    ) {}

    /**
     * @summary Restructures an object into a GetEimConfigurationDataResponse
     * @description
     * 
     * This takes an `object` and converts it to a `GetEimConfigurationDataResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEimConfigurationDataResponse`.
     * @returns {GetEimConfigurationDataResponse}
     */
    public static _from_object (_o: { [_K in keyof (GetEimConfigurationDataResponse)]: (GetEimConfigurationDataResponse)[_K] }): GetEimConfigurationDataResponse {
        return new GetEimConfigurationDataResponse(_o.eimConfigurationDataList);
    }


}

/**
 * @summary The Leading Root Component Types of GetEimConfigurationDataResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEimConfigurationDataResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("eimConfigurationDataList", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of GetEimConfigurationDataResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEimConfigurationDataResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEimConfigurationDataResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEimConfigurationDataResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEimConfigurationDataResponse: $.ASN1Decoder<GetEimConfigurationDataResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEimConfigurationDataResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEimConfigurationDataResponse (el: _Element): GetEimConfigurationDataResponse {
    if (!_cached_decoder_for_GetEimConfigurationDataResponse) { _cached_decoder_for_GetEimConfigurationDataResponse = $._decode_implicit<GetEimConfigurationDataResponse>(() => function (el: _Element): GetEimConfigurationDataResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("GetEimConfigurationDataResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eimConfigurationDataList";
    let eimConfigurationDataList!: EimConfigurationData[];
    eimConfigurationDataList = $._decode_implicit<EimConfigurationData[]>(() => $._decodeSequenceOf<EimConfigurationData>(() => _decode_EimConfigurationData))(sequence[0]);
    return new GetEimConfigurationDataResponse(
        eimConfigurationDataList,

    );
}); }
    return _cached_decoder_for_GetEimConfigurationDataResponse(el);
}

let _cached_encoder_for_GetEimConfigurationDataResponse: $.ASN1Encoder<GetEimConfigurationDataResponse> | null = null;

/**
 * @summary Encodes a(n) GetEimConfigurationDataResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEimConfigurationDataResponse, encoded as an ASN.1 Element.
 */
export
function _encode_GetEimConfigurationDataResponse (value: GetEimConfigurationDataResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEimConfigurationDataResponse) { _cached_encoder_for_GetEimConfigurationDataResponse = $._encode_implicit(_TagClass.context, 85, () => function (value: GetEimConfigurationDataResponse, elGetter: $.ASN1Encoder<GetEimConfigurationDataResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<EimConfigurationData>(() => _encode_EimConfigurationData, $.BER), $.BER)(value.eimConfigurationDataList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetEimConfigurationDataResponse(value, elGetter);
}


/* eslint-enable */
