/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_SetDefaultDpAddressResponse_setDefaultDpAddressResult, _encode_SetDefaultDpAddressResponse_setDefaultDpAddressResult, SetDefaultDpAddressResponse_setDefaultDpAddressResult } from "../SGP32Definitions/SetDefaultDpAddressResponse-setDefaultDpAddressResult.ta.mjs";
// export { SetDefaultDpAddressResponse_setDefaultDpAddressResult, SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SetDefaultDpAddressResponse_setDefaultDpAddressResult, _encode_SetDefaultDpAddressResponse_setDefaultDpAddressResult } from "../SGP32Definitions/SetDefaultDpAddressResponse-setDefaultDpAddressResult.ta.mjs";


/**
 * @summary SetDefaultDpAddressResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetDefaultDpAddressResponse ::= [101] SEQUENCE { -- Tag 'BF65'
 *     setDefaultDpAddressResult INTEGER { ok (0), undefinedError (127)}
 * }
 * ```
 * 
 * @class
 */
export
class SetDefaultDpAddressResponse {
    constructor (
        /**
         * @summary `setDefaultDpAddressResult`.
         * @public
         * @readonly
         */
        readonly setDefaultDpAddressResult: SetDefaultDpAddressResponse_setDefaultDpAddressResult
    ) {}

    /**
     * @summary Restructures an object into a SetDefaultDpAddressResponse
     * @description
     * 
     * This takes an `object` and converts it to a `SetDefaultDpAddressResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetDefaultDpAddressResponse`.
     * @returns {SetDefaultDpAddressResponse}
     */
    public static _from_object (_o: { [_K in keyof (SetDefaultDpAddressResponse)]: (SetDefaultDpAddressResponse)[_K] }): SetDefaultDpAddressResponse {
        return new SetDefaultDpAddressResponse(_o.setDefaultDpAddressResult);
    }


}

/**
 * @summary The Leading Root Component Types of SetDefaultDpAddressResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetDefaultDpAddressResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("setDefaultDpAddressResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SetDefaultDpAddressResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetDefaultDpAddressResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetDefaultDpAddressResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetDefaultDpAddressResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetDefaultDpAddressResponse: $.ASN1Decoder<SetDefaultDpAddressResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetDefaultDpAddressResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetDefaultDpAddressResponse (el: _Element): SetDefaultDpAddressResponse {
    if (!_cached_decoder_for_SetDefaultDpAddressResponse) { _cached_decoder_for_SetDefaultDpAddressResponse = $._decode_implicit<SetDefaultDpAddressResponse>(() => function (el: _Element): SetDefaultDpAddressResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("SetDefaultDpAddressResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "setDefaultDpAddressResult";
    let setDefaultDpAddressResult!: SetDefaultDpAddressResponse_setDefaultDpAddressResult;
    setDefaultDpAddressResult = _decode_SetDefaultDpAddressResponse_setDefaultDpAddressResult(sequence[0]);
    return new SetDefaultDpAddressResponse(
        setDefaultDpAddressResult,

    );
}); }
    return _cached_decoder_for_SetDefaultDpAddressResponse(el);
}

let _cached_encoder_for_SetDefaultDpAddressResponse: $.ASN1Encoder<SetDefaultDpAddressResponse> | null = null;

/**
 * @summary Encodes a(n) SetDefaultDpAddressResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetDefaultDpAddressResponse, encoded as an ASN.1 Element.
 */
export
function _encode_SetDefaultDpAddressResponse (value: SetDefaultDpAddressResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetDefaultDpAddressResponse) { _cached_encoder_for_SetDefaultDpAddressResponse = $._encode_implicit(_TagClass.context, 101, () => function (value: SetDefaultDpAddressResponse, elGetter: $.ASN1Encoder<SetDefaultDpAddressResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SetDefaultDpAddressResponse_setDefaultDpAddressResult(value.setDefaultDpAddressResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_SetDefaultDpAddressResponse(value, elGetter);
}


/* eslint-enable */
