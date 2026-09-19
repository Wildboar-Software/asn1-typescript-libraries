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
import { ExecuteFallbackMechanismResponse_executeFallbackMechanismResult, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_profileNotInDisabledState /* IMPORTED_LONG_NAMED_INTEGER */, profileNotInDisabledState /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_fallbackNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, fallbackNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_commandError /* IMPORTED_LONG_NAMED_INTEGER */, commandError /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ecallActive /* IMPORTED_LONG_NAMED_INTEGER */, ecallActive /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult, _encode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult } from "../SGP32Definitions/ExecuteFallbackMechanismResponse-executeFallbackMechanismResult.ta.mjs";
// export { ExecuteFallbackMechanismResponse_executeFallbackMechanismResult, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_profileNotInDisabledState /* IMPORTED_LONG_NAMED_INTEGER */, profileNotInDisabledState /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_fallbackNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, fallbackNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_commandError /* IMPORTED_LONG_NAMED_INTEGER */, commandError /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ecallActive /* IMPORTED_LONG_NAMED_INTEGER */, ecallActive /* IMPORTED_SHORT_NAMED_INTEGER */, ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult, _encode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult } from "../SGP32Definitions/ExecuteFallbackMechanismResponse-executeFallbackMechanismResult.ta.mjs";


/**
 * @summary ExecuteFallbackMechanismResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecuteFallbackMechanismResponse ::= [93] SEQUENCE { -- Tag ' BF5D'
 *     executeFallbackMechanismResult [0] INTEGER {
 *         ok(0),
 *         profileNotInDisabledState(2),
 *         catBusy(5),
 *         fallbackNotAvailable(6), -- Fallback Attribute not set
 *         commandError(7),
 *         ecallActive(104),
 *         undefinedError(127)
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ExecuteFallbackMechanismResponse {
    constructor (
        /**
         * @summary `executeFallbackMechanismResult`.
         * @public
         * @readonly
         */
        readonly executeFallbackMechanismResult: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult
    ) {}

    /**
     * @summary Restructures an object into a ExecuteFallbackMechanismResponse
     * @description
     * 
     * This takes an `object` and converts it to a `ExecuteFallbackMechanismResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExecuteFallbackMechanismResponse`.
     * @returns {ExecuteFallbackMechanismResponse}
     */
    public static _from_object (_o: { [_K in keyof (ExecuteFallbackMechanismResponse)]: (ExecuteFallbackMechanismResponse)[_K] }): ExecuteFallbackMechanismResponse {
        return new ExecuteFallbackMechanismResponse(_o.executeFallbackMechanismResult);
    }


}

/**
 * @summary The Leading Root Component Types of ExecuteFallbackMechanismResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExecuteFallbackMechanismResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("executeFallbackMechanismResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ExecuteFallbackMechanismResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExecuteFallbackMechanismResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExecuteFallbackMechanismResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExecuteFallbackMechanismResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExecuteFallbackMechanismResponse: $.ASN1Decoder<ExecuteFallbackMechanismResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteFallbackMechanismResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteFallbackMechanismResponse (el: _Element): ExecuteFallbackMechanismResponse {
    if (!_cached_decoder_for_ExecuteFallbackMechanismResponse) { _cached_decoder_for_ExecuteFallbackMechanismResponse = $._decode_implicit<ExecuteFallbackMechanismResponse>(() => function (el: _Element): ExecuteFallbackMechanismResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ExecuteFallbackMechanismResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "executeFallbackMechanismResult";
    let executeFallbackMechanismResult!: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult;
    executeFallbackMechanismResult = $._decode_implicit<ExecuteFallbackMechanismResponse_executeFallbackMechanismResult>(() => _decode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult)(sequence[0]);
    return new ExecuteFallbackMechanismResponse(
        executeFallbackMechanismResult,

    );
}); }
    return _cached_decoder_for_ExecuteFallbackMechanismResponse(el);
}

let _cached_encoder_for_ExecuteFallbackMechanismResponse: $.ASN1Encoder<ExecuteFallbackMechanismResponse> | null = null;

/**
 * @summary Encodes a(n) ExecuteFallbackMechanismResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteFallbackMechanismResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ExecuteFallbackMechanismResponse (value: ExecuteFallbackMechanismResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExecuteFallbackMechanismResponse) { _cached_encoder_for_ExecuteFallbackMechanismResponse = $._encode_implicit(_TagClass.context, 93, () => function (value: ExecuteFallbackMechanismResponse, elGetter: $.ASN1Encoder<ExecuteFallbackMechanismResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult, $.BER)(value.executeFallbackMechanismResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ExecuteFallbackMechanismResponse(value, elGetter);
}


/* eslint-enable */
