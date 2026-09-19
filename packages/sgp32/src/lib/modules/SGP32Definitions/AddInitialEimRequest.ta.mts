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
 * @summary AddInitialEimRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddInitialEimRequest ::= [87] SEQUENCE { -- Tag 'BF57' 
 *     eimConfigurationDataList [0] SEQUENCE OF EimConfigurationData
 * }
 * ```
 * 
 * @class
 */
export
class AddInitialEimRequest {
    constructor (
        /**
         * @summary `eimConfigurationDataList`.
         * @public
         * @readonly
         */
        readonly eimConfigurationDataList: EimConfigurationData[]
    ) {}

    /**
     * @summary Restructures an object into a AddInitialEimRequest
     * @description
     * 
     * This takes an `object` and converts it to a `AddInitialEimRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddInitialEimRequest`.
     * @returns {AddInitialEimRequest}
     */
    public static _from_object (_o: { [_K in keyof (AddInitialEimRequest)]: (AddInitialEimRequest)[_K] }): AddInitialEimRequest {
        return new AddInitialEimRequest(_o.eimConfigurationDataList);
    }


}

/**
 * @summary The Leading Root Component Types of AddInitialEimRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AddInitialEimRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("eimConfigurationDataList", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of AddInitialEimRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AddInitialEimRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AddInitialEimRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AddInitialEimRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AddInitialEimRequest: $.ASN1Decoder<AddInitialEimRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddInitialEimRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddInitialEimRequest (el: _Element): AddInitialEimRequest {
    if (!_cached_decoder_for_AddInitialEimRequest) { _cached_decoder_for_AddInitialEimRequest = $._decode_implicit<AddInitialEimRequest>(() => function (el: _Element): AddInitialEimRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("AddInitialEimRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eimConfigurationDataList";
    let eimConfigurationDataList!: EimConfigurationData[];
    eimConfigurationDataList = $._decode_implicit<EimConfigurationData[]>(() => $._decodeSequenceOf<EimConfigurationData>(() => _decode_EimConfigurationData))(sequence[0]);
    return new AddInitialEimRequest(
        eimConfigurationDataList,

    );
}); }
    return _cached_decoder_for_AddInitialEimRequest(el);
}

let _cached_encoder_for_AddInitialEimRequest: $.ASN1Encoder<AddInitialEimRequest> | null = null;

/**
 * @summary Encodes a(n) AddInitialEimRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddInitialEimRequest, encoded as an ASN.1 Element.
 */
export
function _encode_AddInitialEimRequest (value: AddInitialEimRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddInitialEimRequest) { _cached_encoder_for_AddInitialEimRequest = $._encode_implicit(_TagClass.context, 87, () => function (value: AddInitialEimRequest, elGetter: $.ASN1Encoder<AddInitialEimRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<EimConfigurationData>(() => _encode_EimConfigurationData, $.BER), $.BER)(value.eimConfigurationDataList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_AddInitialEimRequest(value, elGetter);
}


/* eslint-enable */
