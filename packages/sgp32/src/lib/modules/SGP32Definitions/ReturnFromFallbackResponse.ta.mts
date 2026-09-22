/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ReturnFromFallbackResponse_returnFromFallbackResult, _encode_ReturnFromFallbackResponse_returnFromFallbackResult, ReturnFromFallbackResponse_returnFromFallbackResult } from "../SGP32Definitions/ReturnFromFallbackResponse-returnFromFallbackResult.ta.mjs";
// export { ReturnFromFallbackResponse_returnFromFallbackResult, ReturnFromFallbackResponse_returnFromFallbackResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, ReturnFromFallbackResponse_returnFromFallbackResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, ReturnFromFallbackResponse_returnFromFallbackResult_fallbackNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, fallbackNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, ReturnFromFallbackResponse_returnFromFallbackResult_commandError /* IMPORTED_LONG_NAMED_INTEGER */, commandError /* IMPORTED_SHORT_NAMED_INTEGER */, ReturnFromFallbackResponse_returnFromFallbackResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ReturnFromFallbackResponse_returnFromFallbackResult, _encode_ReturnFromFallbackResponse_returnFromFallbackResult } from "../SGP32Definitions/ReturnFromFallbackResponse-returnFromFallbackResult.ta.mjs";


/**
 * @summary ReturnFromFallbackResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnFromFallbackResponse ::= [94] SEQUENCE { -- Tag 'BF5E'
 *     returnFromFallbackResult [0] INTEGER {
 *         ok(0),
 *         catBusy(5),
 *         fallbackNotAvailable(6), -- Fallback Attribute not set 
 *         commandError(7),
 *         undefinedError(127)
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ReturnFromFallbackResponse {
    constructor (
        /**
         * @summary `returnFromFallbackResult`.
         * @public
         * @readonly
         */
        readonly returnFromFallbackResult: ReturnFromFallbackResponse_returnFromFallbackResult
    ) {}

    /**
     * @summary Restructures an object into a ReturnFromFallbackResponse
     * @description
     * 
     * This takes an `object` and converts it to a `ReturnFromFallbackResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReturnFromFallbackResponse`.
     * @returns {ReturnFromFallbackResponse}
     */
    public static _from_object (_o: { [_K in keyof (ReturnFromFallbackResponse)]: (ReturnFromFallbackResponse)[_K] }): ReturnFromFallbackResponse {
        return new ReturnFromFallbackResponse(_o.returnFromFallbackResult);
    }


}

/**
 * @summary The Leading Root Component Types of ReturnFromFallbackResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReturnFromFallbackResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("returnFromFallbackResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ReturnFromFallbackResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReturnFromFallbackResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReturnFromFallbackResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReturnFromFallbackResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReturnFromFallbackResponse: $.ASN1Decoder<ReturnFromFallbackResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReturnFromFallbackResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReturnFromFallbackResponse (el: _Element): ReturnFromFallbackResponse {
    if (!_cached_decoder_for_ReturnFromFallbackResponse) { _cached_decoder_for_ReturnFromFallbackResponse = $._decode_implicit<ReturnFromFallbackResponse>(() => function (el: _Element): ReturnFromFallbackResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ReturnFromFallbackResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "returnFromFallbackResult";
    let returnFromFallbackResult!: ReturnFromFallbackResponse_returnFromFallbackResult;
    returnFromFallbackResult = $._decode_implicit<ReturnFromFallbackResponse_returnFromFallbackResult>(() => _decode_ReturnFromFallbackResponse_returnFromFallbackResult)(sequence[0]);
    return new ReturnFromFallbackResponse(
        returnFromFallbackResult,

    );
}); }
    return _cached_decoder_for_ReturnFromFallbackResponse(el);
}

let _cached_encoder_for_ReturnFromFallbackResponse: $.ASN1Encoder<ReturnFromFallbackResponse> | null = null;

/**
 * @summary Encodes a(n) ReturnFromFallbackResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnFromFallbackResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ReturnFromFallbackResponse (value: ReturnFromFallbackResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReturnFromFallbackResponse) { _cached_encoder_for_ReturnFromFallbackResponse = $._encode_implicit(_TagClass.context, 94, () => function (value: ReturnFromFallbackResponse, elGetter: $.ASN1Encoder<ReturnFromFallbackResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ReturnFromFallbackResponse_returnFromFallbackResult, $.BER)(value.returnFromFallbackResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ReturnFromFallbackResponse(value, elGetter);
}


/* eslint-enable */
