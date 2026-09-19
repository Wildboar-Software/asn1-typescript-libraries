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
import { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
// export { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";


/**
 * @summary GetEuiccDataResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEuiccDataResponse ::= [62] SEQUENCE { -- Tag 'BF3E'
 *     eidValue [APPLICATION 26] Octet16  -- tag '5A'
 * }
 * ```
 * 
 * @class
 */
export
class GetEuiccDataResponse {
    constructor (
        /**
         * @summary `eidValue`.
         * @public
         * @readonly
         */
        readonly eidValue: Octet16
    ) {}

    /**
     * @summary Restructures an object into a GetEuiccDataResponse
     * @description
     * 
     * This takes an `object` and converts it to a `GetEuiccDataResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEuiccDataResponse`.
     * @returns {GetEuiccDataResponse}
     */
    public static _from_object (_o: { [_K in keyof (GetEuiccDataResponse)]: (GetEuiccDataResponse)[_K] }): GetEuiccDataResponse {
        return new GetEuiccDataResponse(_o.eidValue);
    }


}

/**
 * @summary The Leading Root Component Types of GetEuiccDataResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEuiccDataResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("eidValue", false, $.hasTag(_TagClass.application, 26))
];

/**
 * @summary The Trailing Root Component Types of GetEuiccDataResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEuiccDataResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEuiccDataResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEuiccDataResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEuiccDataResponse: $.ASN1Decoder<GetEuiccDataResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEuiccDataResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEuiccDataResponse (el: _Element): GetEuiccDataResponse {
    if (!_cached_decoder_for_GetEuiccDataResponse) { _cached_decoder_for_GetEuiccDataResponse = $._decode_implicit<GetEuiccDataResponse>(() => function (el: _Element): GetEuiccDataResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("GetEuiccDataResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eidValue";
    let eidValue!: Octet16;
    eidValue = $._decode_implicit<Octet16>(() => _decode_Octet16)(sequence[0]);
    return new GetEuiccDataResponse(
        eidValue,

    );
}); }
    return _cached_decoder_for_GetEuiccDataResponse(el);
}

let _cached_encoder_for_GetEuiccDataResponse: $.ASN1Encoder<GetEuiccDataResponse> | null = null;

/**
 * @summary Encodes a(n) GetEuiccDataResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEuiccDataResponse, encoded as an ASN.1 Element.
 */
export
function _encode_GetEuiccDataResponse (value: GetEuiccDataResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEuiccDataResponse) { _cached_encoder_for_GetEuiccDataResponse = $._encode_implicit(_TagClass.context, 62, () => function (value: GetEuiccDataResponse, elGetter: $.ASN1Encoder<GetEuiccDataResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 26, () => _encode_Octet16, $.BER)(value.eidValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetEuiccDataResponse(value, elGetter);
}


/* eslint-enable */
