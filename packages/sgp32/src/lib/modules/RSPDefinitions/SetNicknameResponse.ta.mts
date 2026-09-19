/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_SetNicknameResponse_setNicknameResult, _encode_SetNicknameResponse_setNicknameResult, SetNicknameResponse_setNicknameResult } from "../RSPDefinitions/SetNicknameResponse-setNicknameResult.ta.mjs";
// export { SetNicknameResponse_setNicknameResult, SetNicknameResponse_setNicknameResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, SetNicknameResponse_setNicknameResult_iccidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, iccidNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, SetNicknameResponse_setNicknameResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SetNicknameResponse_setNicknameResult, _encode_SetNicknameResponse_setNicknameResult } from "../RSPDefinitions/SetNicknameResponse-setNicknameResult.ta.mjs";


/**
 * @summary SetNicknameResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetNicknameResponse ::= [41] SEQUENCE { -- Tag 'BF29'
 *     setNicknameResult INTEGER {ok(0), iccidNotFound (1), undefinedError(127)}
 * }
 * ```
 * 
 * @class
 */
export
class SetNicknameResponse {
    constructor (
        /**
         * @summary `setNicknameResult`.
         * @public
         * @readonly
         */
        readonly setNicknameResult: SetNicknameResponse_setNicknameResult
    ) {}

    /**
     * @summary Restructures an object into a SetNicknameResponse
     * @description
     * 
     * This takes an `object` and converts it to a `SetNicknameResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetNicknameResponse`.
     * @returns {SetNicknameResponse}
     */
    public static _from_object (_o: { [_K in keyof (SetNicknameResponse)]: (SetNicknameResponse)[_K] }): SetNicknameResponse {
        return new SetNicknameResponse(_o.setNicknameResult);
    }


}

/**
 * @summary The Leading Root Component Types of SetNicknameResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetNicknameResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("setNicknameResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SetNicknameResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetNicknameResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetNicknameResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetNicknameResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetNicknameResponse: $.ASN1Decoder<SetNicknameResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetNicknameResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetNicknameResponse (el: _Element): SetNicknameResponse {
    if (!_cached_decoder_for_SetNicknameResponse) { _cached_decoder_for_SetNicknameResponse = $._decode_implicit<SetNicknameResponse>(() => function (el: _Element): SetNicknameResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("SetNicknameResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "setNicknameResult";
    let setNicknameResult!: SetNicknameResponse_setNicknameResult;
    setNicknameResult = _decode_SetNicknameResponse_setNicknameResult(sequence[0]);
    return new SetNicknameResponse(
        setNicknameResult,

    );
}); }
    return _cached_decoder_for_SetNicknameResponse(el);
}

let _cached_encoder_for_SetNicknameResponse: $.ASN1Encoder<SetNicknameResponse> | null = null;

/**
 * @summary Encodes a(n) SetNicknameResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetNicknameResponse, encoded as an ASN.1 Element.
 */
export
function _encode_SetNicknameResponse (value: SetNicknameResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetNicknameResponse) { _cached_encoder_for_SetNicknameResponse = $._encode_implicit(_TagClass.context, 41, () => function (value: SetNicknameResponse, elGetter: $.ASN1Encoder<SetNicknameResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SetNicknameResponse_setNicknameResult(value.setNicknameResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_SetNicknameResponse(value, elGetter);
}


/* eslint-enable */
