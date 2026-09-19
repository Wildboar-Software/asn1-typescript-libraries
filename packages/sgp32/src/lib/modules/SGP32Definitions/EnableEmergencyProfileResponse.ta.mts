/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_EnableEmergencyProfileResponse_enableEmergencyProfileResult, _encode_EnableEmergencyProfileResponse_enableEmergencyProfileResult, EnableEmergencyProfileResponse_enableEmergencyProfileResult } from "../SGP32Definitions/EnableEmergencyProfileResponse-enableEmergencyProfileResult.ta.mjs";
// export { EnableEmergencyProfileResponse_enableEmergencyProfileResult, EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState /* IMPORTED_LONG_NAMED_INTEGER */, profileNotInDisabledState /* IMPORTED_SHORT_NAMED_INTEGER */, EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, ecallNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EnableEmergencyProfileResponse_enableEmergencyProfileResult, _encode_EnableEmergencyProfileResponse_enableEmergencyProfileResult } from "../SGP32Definitions/EnableEmergencyProfileResponse-enableEmergencyProfileResult.ta.mjs";


/**
 * @summary EnableEmergencyProfileResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableEmergencyProfileResponse ::= [91] SEQUENCE { -- Tag 'BF5B'
 *     enableEmergencyProfileResult [0] INTEGER {
 *         ok(0),
 *         profileNotInDisabledState(2),
 *         catBusy(5),
 *         ecallNotAvailable(8), -- Emergency Profile does not exist
 *         undefinedError(127)
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class EnableEmergencyProfileResponse {
    constructor (
        /**
         * @summary `enableEmergencyProfileResult`.
         * @public
         * @readonly
         */
        readonly enableEmergencyProfileResult: EnableEmergencyProfileResponse_enableEmergencyProfileResult
    ) {}

    /**
     * @summary Restructures an object into a EnableEmergencyProfileResponse
     * @description
     * 
     * This takes an `object` and converts it to a `EnableEmergencyProfileResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnableEmergencyProfileResponse`.
     * @returns {EnableEmergencyProfileResponse}
     */
    public static _from_object (_o: { [_K in keyof (EnableEmergencyProfileResponse)]: (EnableEmergencyProfileResponse)[_K] }): EnableEmergencyProfileResponse {
        return new EnableEmergencyProfileResponse(_o.enableEmergencyProfileResult);
    }


}

/**
 * @summary The Leading Root Component Types of EnableEmergencyProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EnableEmergencyProfileResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("enableEmergencyProfileResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EnableEmergencyProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EnableEmergencyProfileResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EnableEmergencyProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EnableEmergencyProfileResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EnableEmergencyProfileResponse: $.ASN1Decoder<EnableEmergencyProfileResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnableEmergencyProfileResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnableEmergencyProfileResponse (el: _Element): EnableEmergencyProfileResponse {
    if (!_cached_decoder_for_EnableEmergencyProfileResponse) { _cached_decoder_for_EnableEmergencyProfileResponse = $._decode_implicit<EnableEmergencyProfileResponse>(() => function (el: _Element): EnableEmergencyProfileResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("EnableEmergencyProfileResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "enableEmergencyProfileResult";
    let enableEmergencyProfileResult!: EnableEmergencyProfileResponse_enableEmergencyProfileResult;
    enableEmergencyProfileResult = $._decode_implicit<EnableEmergencyProfileResponse_enableEmergencyProfileResult>(() => _decode_EnableEmergencyProfileResponse_enableEmergencyProfileResult)(sequence[0]);
    return new EnableEmergencyProfileResponse(
        enableEmergencyProfileResult,

    );
}); }
    return _cached_decoder_for_EnableEmergencyProfileResponse(el);
}

let _cached_encoder_for_EnableEmergencyProfileResponse: $.ASN1Encoder<EnableEmergencyProfileResponse> | null = null;

/**
 * @summary Encodes a(n) EnableEmergencyProfileResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableEmergencyProfileResponse, encoded as an ASN.1 Element.
 */
export
function _encode_EnableEmergencyProfileResponse (value: EnableEmergencyProfileResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnableEmergencyProfileResponse) { _cached_encoder_for_EnableEmergencyProfileResponse = $._encode_implicit(_TagClass.context, 91, () => function (value: EnableEmergencyProfileResponse, elGetter: $.ASN1Encoder<EnableEmergencyProfileResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EnableEmergencyProfileResponse_enableEmergencyProfileResult, $.BER)(value.enableEmergencyProfileResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EnableEmergencyProfileResponse(value, elGetter);
}


/* eslint-enable */
