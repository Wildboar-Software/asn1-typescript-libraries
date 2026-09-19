/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_EnableProfileResponse_enableResult, _encode_EnableProfileResponse_enableResult, EnableProfileResponse_enableResult } from "../RSPDefinitions/EnableProfileResponse-enableResult.ta.mjs";
// export { EnableProfileResponse_enableResult, EnableProfileResponse_enableResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, EnableProfileResponse_enableResult_iccidOrAidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, iccidOrAidNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, EnableProfileResponse_enableResult_profileNotInDisabledState /* IMPORTED_LONG_NAMED_INTEGER */, profileNotInDisabledState /* IMPORTED_SHORT_NAMED_INTEGER */, EnableProfileResponse_enableResult_disallowedByPolicy /* IMPORTED_LONG_NAMED_INTEGER */, disallowedByPolicy /* IMPORTED_SHORT_NAMED_INTEGER */, EnableProfileResponse_enableResult_wrongProfileReenabling /* IMPORTED_LONG_NAMED_INTEGER */, wrongProfileReenabling /* IMPORTED_SHORT_NAMED_INTEGER */, EnableProfileResponse_enableResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, EnableProfileResponse_enableResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EnableProfileResponse_enableResult, _encode_EnableProfileResponse_enableResult } from "../RSPDefinitions/EnableProfileResponse-enableResult.ta.mjs";


/**
 * @summary EnableProfileResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableProfileResponse ::= [49] SEQUENCE { -- Tag 'BF31'
 *     enableResult INTEGER {ok(0), iccidOrAidNotFound (1), profileNotInDisabledState(2), disallowedByPolicy(3), wrongProfileReenabling(4), catBusy(5), undefinedError(127)}
 * }
 * ```
 * 
 * @class
 */
export
class EnableProfileResponse {
    constructor (
        /**
         * @summary `enableResult`.
         * @public
         * @readonly
         */
        readonly enableResult: EnableProfileResponse_enableResult
    ) {}

    /**
     * @summary Restructures an object into a EnableProfileResponse
     * @description
     * 
     * This takes an `object` and converts it to a `EnableProfileResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnableProfileResponse`.
     * @returns {EnableProfileResponse}
     */
    public static _from_object (_o: { [_K in keyof (EnableProfileResponse)]: (EnableProfileResponse)[_K] }): EnableProfileResponse {
        return new EnableProfileResponse(_o.enableResult);
    }


}

/**
 * @summary The Leading Root Component Types of EnableProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EnableProfileResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("enableResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EnableProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EnableProfileResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EnableProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EnableProfileResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EnableProfileResponse: $.ASN1Decoder<EnableProfileResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnableProfileResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnableProfileResponse (el: _Element): EnableProfileResponse {
    if (!_cached_decoder_for_EnableProfileResponse) { _cached_decoder_for_EnableProfileResponse = $._decode_implicit<EnableProfileResponse>(() => function (el: _Element): EnableProfileResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("EnableProfileResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "enableResult";
    let enableResult!: EnableProfileResponse_enableResult;
    enableResult = _decode_EnableProfileResponse_enableResult(sequence[0]);
    return new EnableProfileResponse(
        enableResult,

    );
}); }
    return _cached_decoder_for_EnableProfileResponse(el);
}

let _cached_encoder_for_EnableProfileResponse: $.ASN1Encoder<EnableProfileResponse> | null = null;

/**
 * @summary Encodes a(n) EnableProfileResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableProfileResponse, encoded as an ASN.1 Element.
 */
export
function _encode_EnableProfileResponse (value: EnableProfileResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnableProfileResponse) { _cached_encoder_for_EnableProfileResponse = $._encode_implicit(_TagClass.context, 49, () => function (value: EnableProfileResponse, elGetter: $.ASN1Encoder<EnableProfileResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EnableProfileResponse_enableResult(value.enableResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EnableProfileResponse(value, elGetter);
}


/* eslint-enable */
