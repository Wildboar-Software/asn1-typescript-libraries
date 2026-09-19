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
import { IpaeActivationResponse_ipaeActivationResult, IpaeActivationResponse_ipaeActivationResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, IpaeActivationResponse_ipaeActivationResult_notSupported /* IMPORTED_LONG_NAMED_INTEGER */, notSupported /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_IpaeActivationResponse_ipaeActivationResult, _encode_IpaeActivationResponse_ipaeActivationResult } from "../SGP32Definitions/IpaeActivationResponse-ipaeActivationResult.ta.mjs";
// export { IpaeActivationResponse_ipaeActivationResult, IpaeActivationResponse_ipaeActivationResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, IpaeActivationResponse_ipaeActivationResult_notSupported /* IMPORTED_LONG_NAMED_INTEGER */, notSupported /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_IpaeActivationResponse_ipaeActivationResult, _encode_IpaeActivationResponse_ipaeActivationResult } from "../SGP32Definitions/IpaeActivationResponse-ipaeActivationResult.ta.mjs";


/**
 * @summary IpaeActivationResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaeActivationResponse ::= [66] SEQUENCE { -- Tag 'BF42'
 *     ipaeActivationResult INTEGER {ok(0), notSupported(1)}
 * }
 * ```
 * 
 * @class
 */
export
class IpaeActivationResponse {
    constructor (
        /**
         * @summary `ipaeActivationResult`.
         * @public
         * @readonly
         */
        readonly ipaeActivationResult: IpaeActivationResponse_ipaeActivationResult
    ) {}

    /**
     * @summary Restructures an object into a IpaeActivationResponse
     * @description
     * 
     * This takes an `object` and converts it to a `IpaeActivationResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IpaeActivationResponse`.
     * @returns {IpaeActivationResponse}
     */
    public static _from_object (_o: { [_K in keyof (IpaeActivationResponse)]: (IpaeActivationResponse)[_K] }): IpaeActivationResponse {
        return new IpaeActivationResponse(_o.ipaeActivationResult);
    }


}

/**
 * @summary The Leading Root Component Types of IpaeActivationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IpaeActivationResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("ipaeActivationResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of IpaeActivationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IpaeActivationResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IpaeActivationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IpaeActivationResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IpaeActivationResponse: $.ASN1Decoder<IpaeActivationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaeActivationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaeActivationResponse (el: _Element): IpaeActivationResponse {
    if (!_cached_decoder_for_IpaeActivationResponse) { _cached_decoder_for_IpaeActivationResponse = $._decode_implicit<IpaeActivationResponse>(() => function (el: _Element): IpaeActivationResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("IpaeActivationResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ipaeActivationResult";
    let ipaeActivationResult!: IpaeActivationResponse_ipaeActivationResult;
    ipaeActivationResult = _decode_IpaeActivationResponse_ipaeActivationResult(sequence[0]);
    return new IpaeActivationResponse(
        ipaeActivationResult,

    );
}); }
    return _cached_decoder_for_IpaeActivationResponse(el);
}

let _cached_encoder_for_IpaeActivationResponse: $.ASN1Encoder<IpaeActivationResponse> | null = null;

/**
 * @summary Encodes a(n) IpaeActivationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaeActivationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_IpaeActivationResponse (value: IpaeActivationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaeActivationResponse) { _cached_encoder_for_IpaeActivationResponse = $._encode_implicit(_TagClass.context, 66, () => function (value: IpaeActivationResponse, elGetter: $.ASN1Encoder<IpaeActivationResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IpaeActivationResponse_ipaeActivationResult(value.ipaeActivationResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_IpaeActivationResponse(value, elGetter);
}


/* eslint-enable */
