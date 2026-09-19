/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_EuiccMemoryResetResponse_resetResult, _encode_EuiccMemoryResetResponse_resetResult, EuiccMemoryResetResponse_resetResult } from "../RSPDefinitions/EuiccMemoryResetResponse-resetResult.ta.mjs";
// export { EuiccMemoryResetResponse_resetResult, EuiccMemoryResetResponse_resetResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccMemoryResetResponse_resetResult_nothingToDelete /* IMPORTED_LONG_NAMED_INTEGER */, nothingToDelete /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccMemoryResetResponse_resetResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccMemoryResetResponse_resetResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EuiccMemoryResetResponse_resetResult, _encode_EuiccMemoryResetResponse_resetResult } from "../RSPDefinitions/EuiccMemoryResetResponse-resetResult.ta.mjs";


/**
 * @summary EuiccMemoryResetResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetResponse ::= [52] SEQUENCE { -- Tag 'BF34'
 *     resetResult INTEGER {ok(0), nothingToDelete(1), catBusy(5), undefinedError(127)}
 * }
 * ```
 * 
 * @class
 */
export
class EuiccMemoryResetResponse {
    constructor (
        /**
         * @summary `resetResult`.
         * @public
         * @readonly
         */
        readonly resetResult: EuiccMemoryResetResponse_resetResult
    ) {}

    /**
     * @summary Restructures an object into a EuiccMemoryResetResponse
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccMemoryResetResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccMemoryResetResponse`.
     * @returns {EuiccMemoryResetResponse}
     */
    public static _from_object (_o: { [_K in keyof (EuiccMemoryResetResponse)]: (EuiccMemoryResetResponse)[_K] }): EuiccMemoryResetResponse {
        return new EuiccMemoryResetResponse(_o.resetResult);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccMemoryResetResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccMemoryResetResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("resetResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EuiccMemoryResetResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccMemoryResetResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccMemoryResetResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccMemoryResetResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccMemoryResetResponse: $.ASN1Decoder<EuiccMemoryResetResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccMemoryResetResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccMemoryResetResponse (el: _Element): EuiccMemoryResetResponse {
    if (!_cached_decoder_for_EuiccMemoryResetResponse) { _cached_decoder_for_EuiccMemoryResetResponse = $._decode_implicit<EuiccMemoryResetResponse>(() => function (el: _Element): EuiccMemoryResetResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("EuiccMemoryResetResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "resetResult";
    let resetResult!: EuiccMemoryResetResponse_resetResult;
    resetResult = _decode_EuiccMemoryResetResponse_resetResult(sequence[0]);
    return new EuiccMemoryResetResponse(
        resetResult,

    );
}); }
    return _cached_decoder_for_EuiccMemoryResetResponse(el);
}

let _cached_encoder_for_EuiccMemoryResetResponse: $.ASN1Encoder<EuiccMemoryResetResponse> | null = null;

/**
 * @summary Encodes a(n) EuiccMemoryResetResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccMemoryResetResponse, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccMemoryResetResponse (value: EuiccMemoryResetResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccMemoryResetResponse) { _cached_encoder_for_EuiccMemoryResetResponse = $._encode_implicit(_TagClass.context, 52, () => function (value: EuiccMemoryResetResponse, elGetter: $.ASN1Encoder<EuiccMemoryResetResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EuiccMemoryResetResponse_resetResult(value.resetResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EuiccMemoryResetResponse(value, elGetter);
}


/* eslint-enable */
