/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ImmediateEnableResponse_immediateEnableResult, _encode_ImmediateEnableResponse_immediateEnableResult, ImmediateEnableResponse_immediateEnableResult } from "../SGP32Definitions/ImmediateEnableResponse-immediateEnableResult.ta.mjs";
// export { ImmediateEnableResponse_immediateEnableResult, ImmediateEnableResponse_immediateEnableResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, immediateEnableNotAvailable /* IMPORTED_SHORT_NAMED_INTEGER */, ImmediateEnableResponse_immediateEnableResult_noSessionContext /* IMPORTED_LONG_NAMED_INTEGER */, noSessionContext /* IMPORTED_SHORT_NAMED_INTEGER */, ImmediateEnableResponse_immediateEnableResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, catBusy /* IMPORTED_SHORT_NAMED_INTEGER */, ImmediateEnableResponse_immediateEnableResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ImmediateEnableResponse_immediateEnableResult, _encode_ImmediateEnableResponse_immediateEnableResult } from "../SGP32Definitions/ImmediateEnableResponse-immediateEnableResult.ta.mjs";


/**
 * @summary ImmediateEnableResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImmediateEnableResponse ::= [90] SEQUENCE { -- Tag 'BF5A'
 *     immediateEnableResult [0] INTEGER {
 *         ok(0),
 *         immediateEnableNotAvailable (1),
 *         noSessionContext(4),
 *         catBusy(5),
 *         undefinedError(127)
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ImmediateEnableResponse {
    constructor (
        /**
         * @summary `immediateEnableResult`.
         * @public
         * @readonly
         */
        readonly immediateEnableResult: ImmediateEnableResponse_immediateEnableResult
    ) {}

    /**
     * @summary Restructures an object into a ImmediateEnableResponse
     * @description
     * 
     * This takes an `object` and converts it to a `ImmediateEnableResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ImmediateEnableResponse`.
     * @returns {ImmediateEnableResponse}
     */
    public static _from_object (_o: { [_K in keyof (ImmediateEnableResponse)]: (ImmediateEnableResponse)[_K] }): ImmediateEnableResponse {
        return new ImmediateEnableResponse(_o.immediateEnableResult);
    }


}

/**
 * @summary The Leading Root Component Types of ImmediateEnableResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ImmediateEnableResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("immediateEnableResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ImmediateEnableResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ImmediateEnableResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ImmediateEnableResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ImmediateEnableResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ImmediateEnableResponse: $.ASN1Decoder<ImmediateEnableResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ImmediateEnableResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ImmediateEnableResponse (el: _Element): ImmediateEnableResponse {
    if (!_cached_decoder_for_ImmediateEnableResponse) { _cached_decoder_for_ImmediateEnableResponse = $._decode_implicit<ImmediateEnableResponse>(() => function (el: _Element): ImmediateEnableResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ImmediateEnableResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "immediateEnableResult";
    let immediateEnableResult!: ImmediateEnableResponse_immediateEnableResult;
    immediateEnableResult = $._decode_implicit<ImmediateEnableResponse_immediateEnableResult>(() => _decode_ImmediateEnableResponse_immediateEnableResult)(sequence[0]);
    return new ImmediateEnableResponse(
        immediateEnableResult,

    );
}); }
    return _cached_decoder_for_ImmediateEnableResponse(el);
}

let _cached_encoder_for_ImmediateEnableResponse: $.ASN1Encoder<ImmediateEnableResponse> | null = null;

/**
 * @summary Encodes a(n) ImmediateEnableResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImmediateEnableResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ImmediateEnableResponse (value: ImmediateEnableResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ImmediateEnableResponse) { _cached_encoder_for_ImmediateEnableResponse = $._encode_implicit(_TagClass.context, 90, () => function (value: ImmediateEnableResponse, elGetter: $.ASN1Encoder<ImmediateEnableResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ImmediateEnableResponse_immediateEnableResult, $.BER)(value.immediateEnableResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ImmediateEnableResponse(value, elGetter);
}


/* eslint-enable */
