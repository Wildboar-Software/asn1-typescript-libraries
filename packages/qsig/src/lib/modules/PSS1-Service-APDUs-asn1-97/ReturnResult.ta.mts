/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../PSS1-Service-APDUs-asn1-97/InvokeId.ta.mjs";
import { ReturnResult_result, _decode_ReturnResult_result, _encode_ReturnResult_result } from "../PSS1-Service-APDUs-asn1-97/ReturnResult-result.ta.mjs";

/**
 * @summary ReturnResult
 * @description
 *
 * Successful outcome of an outstanding invoke that reports a result
 * (ECMA-165 §6.4, §11.3.3.4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnResult { OPERATION: Operations } ::= SEQUENCE {
 *     invokeId InvokeId
 *         (
 *             CONSTRAINED BY {
 *                 -- must be that for an outstanding operation --
 *             }
 *             ! RejectProblem: returnResult-unrecognisedInvocation
 *         )
 *         (
 *             CONSTRAINED BY {
 *                 -- which returns a result --
 *             }
 *             ! RejectProblem: returnResult-resultResponseUnexpected
 *         ),
 *     result SEQUENCE {
 *         opcode OPERATION.&operationCode ({Operations})
 *             (
 *                 CONSTRAINED BY {
 *                     -- identified by invokeId --
 *                 }
 *                 ! RejectProblem: returnResult-unrecognisedInvocation
 *             ),
 *         result OPERATION.&ResultType
 *             (
 *                 {Operations} {@.opcode}
 *                 ! RejectProblem: returnResult-mistypedResult
 *             )
 *     } OPTIONAL
 * }
 *     (
 *         CONSTRAINED BY {
 *             -- must conform to the above definition --
 *         }
 *         ! RejectProblem: general-mistypedPDU
 *     )
 * ```
 * 
 * @class
 */
export
class ReturnResult {
    /**
     * @summary `invokeId`.
     * @description
     *
     * Identifier of the outstanding invoke. Rejected as
     * `unrecognisedInvocation` if none is in progress, or as
     * `resultResponseUnexpected` if that operation does not report a result
     * (ECMA-165 Annex G).
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `result`.
     * @description
     *
     * Operation code and result value. Omitted when the operation returns no
     * result parameter. The code must be the operation named by `invokeId`
     * (ECMA-165 §11.3.3.4).
     * @public
     * @readonly
     */
    readonly result: OPTIONAL<ReturnResult_result>;

    constructor (
        invokeId: InvokeId,
        result: OPTIONAL<ReturnResult_result>
    ) {
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a ReturnResult
     * @description
     * 
     * This takes an `object` and converts it to a `ReturnResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReturnResult`.
     * @returns {ReturnResult}
     */
    public static _from_object (_o: { [_K in keyof (ReturnResult)]: (ReturnResult)[_K] }): ReturnResult {
        return new ReturnResult(_o.invokeId, _o.result);
    }

}

/**
 * @summary The Leading Root Component Types of ReturnResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReturnResult: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ReturnResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReturnResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReturnResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReturnResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReturnResult: $.ASN1Decoder<ReturnResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReturnResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReturnResult (el: _Element): ReturnResult {
    if (!_cached_decoder_for_ReturnResult) { _cached_decoder_for_ReturnResult = function (el: _Element): ReturnResult {
    let invokeId!: InvokeId;
    let result: OPTIONAL<ReturnResult_result>;
    const callbacks: $.DecodingMap = {
        "invokeId": (_el: _Element): void => { invokeId = _decode_InvokeId(_el); },
        "result": (_el: _Element): void => { result = _decode_ReturnResult_result(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReturnResult,
        _extension_additions_list_spec_for_ReturnResult,
        _root_component_type_list_2_spec_for_ReturnResult,
        undefined,
    );
    return new ReturnResult(
        invokeId,
        result
    );
}; }
    return _cached_decoder_for_ReturnResult(el);
}

let _cached_encoder_for_ReturnResult: $.ASN1Encoder<ReturnResult> | null = null;

/**
 * @summary Encodes a(n) ReturnResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnResult, encoded as an ASN.1 Element.
 */
export
function _encode_ReturnResult (value: ReturnResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReturnResult) { _cached_encoder_for_ReturnResult = function (value: ReturnResult, _elGetter: $.ASN1Encoder<ReturnResult>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER));
    if (value.result !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ReturnResult_result(value.result, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReturnResult(value, elGetter);
}

/* eslint-enable */
