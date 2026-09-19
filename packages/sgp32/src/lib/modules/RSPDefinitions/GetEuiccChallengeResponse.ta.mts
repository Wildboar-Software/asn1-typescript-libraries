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
 * @summary GetEuiccChallengeResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEuiccChallengeResponse ::= [46] SEQUENCE { -- Tag 'BF2E'
 *     euiccChallenge Octet16  -- random eUICC challenge
 * }
 * ```
 * 
 * @class
 */
export
class GetEuiccChallengeResponse {
    constructor (
        /**
         * @summary `euiccChallenge`.
         * @public
         * @readonly
         */
        readonly euiccChallenge: Octet16
    ) {}

    /**
     * @summary Restructures an object into a GetEuiccChallengeResponse
     * @description
     * 
     * This takes an `object` and converts it to a `GetEuiccChallengeResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEuiccChallengeResponse`.
     * @returns {GetEuiccChallengeResponse}
     */
    public static _from_object (_o: { [_K in keyof (GetEuiccChallengeResponse)]: (GetEuiccChallengeResponse)[_K] }): GetEuiccChallengeResponse {
        return new GetEuiccChallengeResponse(_o.euiccChallenge);
    }


}

/**
 * @summary The Leading Root Component Types of GetEuiccChallengeResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEuiccChallengeResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccChallenge", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of GetEuiccChallengeResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEuiccChallengeResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEuiccChallengeResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEuiccChallengeResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEuiccChallengeResponse: $.ASN1Decoder<GetEuiccChallengeResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEuiccChallengeResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEuiccChallengeResponse (el: _Element): GetEuiccChallengeResponse {
    if (!_cached_decoder_for_GetEuiccChallengeResponse) { _cached_decoder_for_GetEuiccChallengeResponse = $._decode_implicit<GetEuiccChallengeResponse>(() => function (el: _Element): GetEuiccChallengeResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("GetEuiccChallengeResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccChallenge";
    let euiccChallenge!: Octet16;
    euiccChallenge = _decode_Octet16(sequence[0]);
    return new GetEuiccChallengeResponse(
        euiccChallenge,

    );
}); }
    return _cached_decoder_for_GetEuiccChallengeResponse(el);
}

let _cached_encoder_for_GetEuiccChallengeResponse: $.ASN1Encoder<GetEuiccChallengeResponse> | null = null;

/**
 * @summary Encodes a(n) GetEuiccChallengeResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEuiccChallengeResponse, encoded as an ASN.1 Element.
 */
export
function _encode_GetEuiccChallengeResponse (value: GetEuiccChallengeResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEuiccChallengeResponse) { _cached_encoder_for_GetEuiccChallengeResponse = $._encode_implicit(_TagClass.context, 46, () => function (value: GetEuiccChallengeResponse, elGetter: $.ASN1Encoder<GetEuiccChallengeResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Octet16(value.euiccChallenge, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetEuiccChallengeResponse(value, elGetter);
}


/* eslint-enable */
