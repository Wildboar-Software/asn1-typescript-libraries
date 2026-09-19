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
import { LpaeActivationResponse_lpaeActivationResult, LpaeActivationResponse_lpaeActivationResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, LpaeActivationResponse_lpaeActivationResult_notSupported /* IMPORTED_LONG_NAMED_INTEGER */, notSupported /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LpaeActivationResponse_lpaeActivationResult, _encode_LpaeActivationResponse_lpaeActivationResult } from "../RSPDefinitions/LpaeActivationResponse-lpaeActivationResult.ta.mjs";
// export { LpaeActivationResponse_lpaeActivationResult, LpaeActivationResponse_lpaeActivationResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, LpaeActivationResponse_lpaeActivationResult_notSupported /* IMPORTED_LONG_NAMED_INTEGER */, notSupported /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LpaeActivationResponse_lpaeActivationResult, _encode_LpaeActivationResponse_lpaeActivationResult } from "../RSPDefinitions/LpaeActivationResponse-lpaeActivationResult.ta.mjs";


/**
 * @summary LpaeActivationResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LpaeActivationResponse ::= [66] SEQUENCE { -- Tag 'BF42'
 *     lpaeActivationResult INTEGER {ok(0), notSupported(1)}
 * }
 * ```
 * 
 * @class
 */
export
class LpaeActivationResponse {
    constructor (
        /**
         * @summary `lpaeActivationResult`.
         * @public
         * @readonly
         */
        readonly lpaeActivationResult: LpaeActivationResponse_lpaeActivationResult
    ) {}

    /**
     * @summary Restructures an object into a LpaeActivationResponse
     * @description
     * 
     * This takes an `object` and converts it to a `LpaeActivationResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LpaeActivationResponse`.
     * @returns {LpaeActivationResponse}
     */
    public static _from_object (_o: { [_K in keyof (LpaeActivationResponse)]: (LpaeActivationResponse)[_K] }): LpaeActivationResponse {
        return new LpaeActivationResponse(_o.lpaeActivationResult);
    }


}

/**
 * @summary The Leading Root Component Types of LpaeActivationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LpaeActivationResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("lpaeActivationResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of LpaeActivationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LpaeActivationResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LpaeActivationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LpaeActivationResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LpaeActivationResponse: $.ASN1Decoder<LpaeActivationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LpaeActivationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LpaeActivationResponse (el: _Element): LpaeActivationResponse {
    if (!_cached_decoder_for_LpaeActivationResponse) { _cached_decoder_for_LpaeActivationResponse = $._decode_implicit<LpaeActivationResponse>(() => function (el: _Element): LpaeActivationResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("LpaeActivationResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "lpaeActivationResult";
    let lpaeActivationResult!: LpaeActivationResponse_lpaeActivationResult;
    lpaeActivationResult = _decode_LpaeActivationResponse_lpaeActivationResult(sequence[0]);
    return new LpaeActivationResponse(
        lpaeActivationResult,

    );
}); }
    return _cached_decoder_for_LpaeActivationResponse(el);
}

let _cached_encoder_for_LpaeActivationResponse: $.ASN1Encoder<LpaeActivationResponse> | null = null;

/**
 * @summary Encodes a(n) LpaeActivationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LpaeActivationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_LpaeActivationResponse (value: LpaeActivationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LpaeActivationResponse) { _cached_encoder_for_LpaeActivationResponse = $._encode_implicit(_TagClass.context, 66, () => function (value: LpaeActivationResponse, elGetter: $.ASN1Encoder<LpaeActivationResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LpaeActivationResponse_lpaeActivationResult(value.lpaeActivationResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_LpaeActivationResponse(value, elGetter);
}


/* eslint-enable */
