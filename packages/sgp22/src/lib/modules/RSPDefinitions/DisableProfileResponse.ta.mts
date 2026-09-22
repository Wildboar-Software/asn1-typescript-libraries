/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DisableProfileResponse_disableResult, _encode_DisableProfileResponse_disableResult, DisableProfileResponse_disableResult } from "../RSPDefinitions/DisableProfileResponse-disableResult.ta.mjs";
// export { DisableProfileResponse_disableResult, DisableProfileResponse_disableResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, DisableProfileResponse_disableResult_iccidOrAidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, iccidOrAidNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, DisableProfileResponse_disableResult_profileNotInEnabledState /* IMPORTED_LONG_NAMED_INTEGER */, profileNotInEnabledState /* IMPORTED_SHORT_NAMED_INTEGER */, DisableProfileResponse_disableResult_disallowedByPolicy /* IMPORTED_LONG_NAMED_INTEGER */, disallowedByPolicy /* IMPORTED_SHORT_NAMED_INTEGER */, DisableProfileResponse_disableResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, DisableProfileResponse_disableResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DisableProfileResponse_disableResult, _encode_DisableProfileResponse_disableResult } from "../RSPDefinitions/DisableProfileResponse-disableResult.ta.mjs";


/**
 * @summary DisableProfileResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisableProfileResponse ::= [50] SEQUENCE { -- Tag 'BF32'
 *     disableResult INTEGER {ok(0), iccidOrAidNotFound (1), profileNotInEnabledState(2), disallowedByPolicy(3), catBusy(5), undefinedError(127)}
 * }
 * ```
 * 
 * @class
 */
export
class DisableProfileResponse {
    constructor (
        /**
         * @summary `disableResult`.
         * @public
         * @readonly
         */
        readonly disableResult: DisableProfileResponse_disableResult
    ) {}

    /**
     * @summary Restructures an object into a DisableProfileResponse
     * @description
     * 
     * This takes an `object` and converts it to a `DisableProfileResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisableProfileResponse`.
     * @returns {DisableProfileResponse}
     */
    public static _from_object (_o: { [_K in keyof (DisableProfileResponse)]: (DisableProfileResponse)[_K] }): DisableProfileResponse {
        return new DisableProfileResponse(_o.disableResult);
    }


}

/**
 * @summary The Leading Root Component Types of DisableProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisableProfileResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("disableResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of DisableProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisableProfileResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisableProfileResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisableProfileResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisableProfileResponse: $.ASN1Decoder<DisableProfileResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisableProfileResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisableProfileResponse (el: _Element): DisableProfileResponse {
    if (!_cached_decoder_for_DisableProfileResponse) { _cached_decoder_for_DisableProfileResponse = $._decode_implicit<DisableProfileResponse>(() => function (el: _Element): DisableProfileResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("DisableProfileResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "disableResult";
    let disableResult!: DisableProfileResponse_disableResult;
    disableResult = _decode_DisableProfileResponse_disableResult(sequence[0]);
    return new DisableProfileResponse(
        disableResult,

    );
}); }
    return _cached_decoder_for_DisableProfileResponse(el);
}

let _cached_encoder_for_DisableProfileResponse: $.ASN1Encoder<DisableProfileResponse> | null = null;

/**
 * @summary Encodes a(n) DisableProfileResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisableProfileResponse, encoded as an ASN.1 Element.
 */
export
function _encode_DisableProfileResponse (value: DisableProfileResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisableProfileResponse) { _cached_encoder_for_DisableProfileResponse = $._encode_implicit(_TagClass.context, 50, () => function (value: DisableProfileResponse, elGetter: $.ASN1Encoder<DisableProfileResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DisableProfileResponse_disableResult(value.disableResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_DisableProfileResponse(value, elGetter);
}


/* eslint-enable */
