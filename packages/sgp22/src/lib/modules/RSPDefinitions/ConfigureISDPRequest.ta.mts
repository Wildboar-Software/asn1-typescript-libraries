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
import { DpProprietaryData, _decode_DpProprietaryData, _encode_DpProprietaryData } from "../RSPDefinitions/DpProprietaryData.ta.mjs";
// export { DpProprietaryData, _decode_DpProprietaryData, _encode_DpProprietaryData } from "../RSPDefinitions/DpProprietaryData.ta.mjs";


/**
 * @summary ConfigureISDPRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfigureISDPRequest ::= [36] SEQUENCE { -- Tag 'BF24'
 *     dpProprietaryData [24] DpProprietaryData OPTIONAL -- Tag 'B8'
 * }
 * ```
 * 
 * @class
 */
export
class ConfigureISDPRequest {
    constructor (
        /**
         * @summary `dpProprietaryData`.
         * @public
         * @readonly
         */
        readonly dpProprietaryData: OPTIONAL<DpProprietaryData>
    ) {}

    /**
     * @summary Restructures an object into a ConfigureISDPRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ConfigureISDPRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConfigureISDPRequest`.
     * @returns {ConfigureISDPRequest}
     */
    public static _from_object (_o: { [_K in keyof (ConfigureISDPRequest)]: (ConfigureISDPRequest)[_K] }): ConfigureISDPRequest {
        return new ConfigureISDPRequest(_o.dpProprietaryData);
    }


}

/**
 * @summary The Leading Root Component Types of ConfigureISDPRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConfigureISDPRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("dpProprietaryData", true, $.hasTag(_TagClass.context, 24))
];

/**
 * @summary The Trailing Root Component Types of ConfigureISDPRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConfigureISDPRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConfigureISDPRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConfigureISDPRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConfigureISDPRequest: $.ASN1Decoder<ConfigureISDPRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfigureISDPRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfigureISDPRequest (el: _Element): ConfigureISDPRequest {
    if (!_cached_decoder_for_ConfigureISDPRequest) { _cached_decoder_for_ConfigureISDPRequest = $._decode_implicit<ConfigureISDPRequest>(() => function (el: _Element): ConfigureISDPRequest {
    let dpProprietaryData: OPTIONAL<DpProprietaryData>;
    const callbacks: $.DecodingMap = {
        "dpProprietaryData": (_el: _Element): void => { dpProprietaryData = $._decode_implicit<DpProprietaryData>(() => _decode_DpProprietaryData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConfigureISDPRequest,
        _extension_additions_list_spec_for_ConfigureISDPRequest,
        _root_component_type_list_2_spec_for_ConfigureISDPRequest,
        undefined,
    );
    return new ConfigureISDPRequest(
        dpProprietaryData
    );
}); }
    return _cached_decoder_for_ConfigureISDPRequest(el);
}

let _cached_encoder_for_ConfigureISDPRequest: $.ASN1Encoder<ConfigureISDPRequest> | null = null;

/**
 * @summary Encodes a(n) ConfigureISDPRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfigureISDPRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ConfigureISDPRequest (value: ConfigureISDPRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfigureISDPRequest) { _cached_encoder_for_ConfigureISDPRequest = $._encode_implicit(_TagClass.context, 36, () => function (value: ConfigureISDPRequest, elGetter: $.ASN1Encoder<ConfigureISDPRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.dpProprietaryData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_DpProprietaryData, $.BER)(value.dpProprietaryData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ConfigureISDPRequest(value, elGetter);
}


/* eslint-enable */
