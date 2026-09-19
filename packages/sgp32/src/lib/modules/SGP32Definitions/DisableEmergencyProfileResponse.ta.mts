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
import { DisableEmergencyProfileResponse_disableEmergencyProfileResult, DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState /* IMPORTED_LONG_NAMED_INTEGER */, profileNotInEnabledState /* IMPORTED_SHORT_NAMED_INTEGER */, DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, ecallNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DisableEmergencyProfileResponse_disableEmergencyProfileResult, _encode_DisableEmergencyProfileResponse_disableEmergencyProfileResult } from "../SGP32Definitions/DisableEmergencyProfileResponse-disableEmergencyProfileResult.ta.mjs";
// export { DisableEmergencyProfileResponse_disableEmergencyProfileResult, DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState /* IMPORTED_LONG_NAMED_INTEGER */, profileNotInEnabledState /* IMPORTED_SHORT_NAMED_INTEGER */, DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, ecallNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DisableEmergencyProfileResponse_disableEmergencyProfileResult, _encode_DisableEmergencyProfileResponse_disableEmergencyProfileResult } from "../SGP32Definitions/DisableEmergencyProfileResponse-disableEmergencyProfileResult.ta.mjs";


/**
 * @summary DisableEmergencyProfileResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisableEmergencyProfileResponse ::= [92] SEQUENCE { -- Tag 'BF5C'
 *     disableEmergencyProfileResult [0] INTEGER {
 *         ok(0),
 *         profileNotInEnabledState(2),
 *         catBusy(5),
 *         ecallNotAvailable(8), -- Emergency Profile does not exist or is not supported
 *         undefinedError(127)
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class DisableEmergencyProfileResponse {
    constructor (
        /**
         * @summary `disableEmergencyProfileResult`.
         * @public
         * @readonly
         */
        readonly disableEmergencyProfileResult: DisableEmergencyProfileResponse_disableEmergencyProfileResult
    ) {}

    /**
     * @summary Restructures an object into a DisableEmergencyProfileResponse
     * @description
     * 
     * This takes an `object` and converts it to a `DisableEmergencyProfileResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisableEmergencyProfileResponse`.
     * @returns {DisableEmergencyProfileResponse}
     */
    public static _from_object (_o: { [_K in keyof (DisableEmergencyProfileResponse)]: (DisableEmergencyProfileResponse)[_K] }): DisableEmergencyProfileResponse {
        return new DisableEmergencyProfileResponse(_o.disableEmergencyProfileResult);
    }


}

/**
 * @summary The Leading Root Component Types of DisableEmergencyProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisableEmergencyProfileResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("disableEmergencyProfileResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of DisableEmergencyProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisableEmergencyProfileResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisableEmergencyProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisableEmergencyProfileResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisableEmergencyProfileResponse: $.ASN1Decoder<DisableEmergencyProfileResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisableEmergencyProfileResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisableEmergencyProfileResponse (el: _Element): DisableEmergencyProfileResponse {
    if (!_cached_decoder_for_DisableEmergencyProfileResponse) { _cached_decoder_for_DisableEmergencyProfileResponse = $._decode_implicit<DisableEmergencyProfileResponse>(() => function (el: _Element): DisableEmergencyProfileResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("DisableEmergencyProfileResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "disableEmergencyProfileResult";
    let disableEmergencyProfileResult!: DisableEmergencyProfileResponse_disableEmergencyProfileResult;
    disableEmergencyProfileResult = $._decode_implicit<DisableEmergencyProfileResponse_disableEmergencyProfileResult>(() => _decode_DisableEmergencyProfileResponse_disableEmergencyProfileResult)(sequence[0]);
    return new DisableEmergencyProfileResponse(
        disableEmergencyProfileResult,

    );
}); }
    return _cached_decoder_for_DisableEmergencyProfileResponse(el);
}

let _cached_encoder_for_DisableEmergencyProfileResponse: $.ASN1Encoder<DisableEmergencyProfileResponse> | null = null;

/**
 * @summary Encodes a(n) DisableEmergencyProfileResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisableEmergencyProfileResponse, encoded as an ASN.1 Element.
 */
export
function _encode_DisableEmergencyProfileResponse (value: DisableEmergencyProfileResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisableEmergencyProfileResponse) { _cached_encoder_for_DisableEmergencyProfileResponse = $._encode_implicit(_TagClass.context, 92, () => function (value: DisableEmergencyProfileResponse, elGetter: $.ASN1Encoder<DisableEmergencyProfileResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DisableEmergencyProfileResponse_disableEmergencyProfileResult, $.BER)(value.disableEmergencyProfileResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_DisableEmergencyProfileResponse(value, elGetter);
}


/* eslint-enable */
