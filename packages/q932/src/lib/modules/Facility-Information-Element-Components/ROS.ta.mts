/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Facility-Information-Element-Components/InvokeId.ta.mjs";
import { Invoke, _decode_Invoke, _encode_Invoke } from "../Facility-Information-Element-Components/Invoke.ta.mjs";
// export { Invoke, _decode_Invoke, _encode_Invoke } from "../Facility-Information-Element-Components/Invoke.ta.mjs";
import { ReturnResult, _decode_ReturnResult, _encode_ReturnResult } from "../Facility-Information-Element-Components/ReturnResult.ta.mjs";
// export { ReturnResult, _decode_ReturnResult, _encode_ReturnResult } from "../Facility-Information-Element-Components/ReturnResult.ta.mjs";
import { ReturnError, _decode_ReturnError, _encode_ReturnError } from "../Facility-Information-Element-Components/ReturnError.ta.mjs";
// export { ReturnError, _decode_ReturnError, _encode_ReturnError } from "../Facility-Information-Element-Components/ReturnError.ta.mjs";
import { Reject, _decode_Reject, _encode_Reject } from "../Facility-Information-Element-Components/Reject.ta.mjs";
// export { Reject, _decode_Reject, _encode_Reject } from "../Facility-Information-Element-Components/Reject.ta.mjs";
// export { RejectProblem, RejectProblem_general_unrecognizedPDU /* IMPORTED_LONG_NAMED_INTEGER */, general_unrecognizedPDU /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_general_mistypedPDU /* IMPORTED_LONG_NAMED_INTEGER */, general_mistypedPDU /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_general_badlyStructuredPDU /* IMPORTED_LONG_NAMED_INTEGER */, general_badlyStructuredPDU /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_invoke_duplicateInvocation /* IMPORTED_LONG_NAMED_INTEGER */, invoke_duplicateInvocation /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_invoke_unrecognizedOperation /* IMPORTED_LONG_NAMED_INTEGER */, invoke_unrecognizedOperation /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_invoke_mistypedArgument /* IMPORTED_LONG_NAMED_INTEGER */, invoke_mistypedArgument /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_invoke_resourceLimitation /* IMPORTED_LONG_NAMED_INTEGER */, invoke_resourceLimitation /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_invoke_releaseInProgress /* IMPORTED_LONG_NAMED_INTEGER */, invoke_releaseInProgress /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_invoke_unrecognizedLinkedId /* IMPORTED_LONG_NAMED_INTEGER */, invoke_unrecognizedLinkedId /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_invoke_linkedResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */, invoke_linkedResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_invoke_unexpectedLinkedOperation /* IMPORTED_LONG_NAMED_INTEGER */, invoke_unexpectedLinkedOperation /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_returnResult_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */, returnResult_unrecognizedInvocation /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_returnResult_resultResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */, returnResult_resultResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_returnResult_mistypedResult /* IMPORTED_LONG_NAMED_INTEGER */, returnResult_mistypedResult /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_returnError_unrecognizedInvocation /* IMPORTED_LONG_NAMED_INTEGER */, returnError_unrecognizedInvocation /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_returnError_errorResponseUnexpected /* IMPORTED_LONG_NAMED_INTEGER */, returnError_errorResponseUnexpected /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_returnError_unrecognizedError /* IMPORTED_LONG_NAMED_INTEGER */, returnError_unrecognizedError /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_returnError_unexpectedError /* IMPORTED_LONG_NAMED_INTEGER */, returnError_unexpectedError /* IMPORTED_SHORT_NAMED_INTEGER */, RejectProblem_returnError_mistypedParameter /* IMPORTED_LONG_NAMED_INTEGER */, returnError_mistypedParameter /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RejectProblem, _encode_RejectProblem } from "../Facility-Information-Element-Components/RejectProblem.ta.mjs";


/**
 * @summary ROS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ROS{InvokeId:InvokeIdSet, OPERATION:Invokable, OPERATION:Returnable}  ::= 
 *   CHOICE {
 *   invoke        [1]  Invoke{{InvokeIdSet}, {Invokable}},
 *   returnResult  [2]  ReturnResult{{Returnable}},
 *   returnError   [3]  ReturnError{{Errors  {{Returnable}}}},
 *   reject        [4]  Reject
 * }
 * (CONSTRAINED BY { -- must conform to the above definition --} !
 *  RejectProblem:general-unrecognizedPDU)
 * ```
 */
export
type ROS =
    { invoke: Invoke } /* CHOICE_ALT_ROOT */
    | { returnResult: ReturnResult } /* CHOICE_ALT_ROOT */
    | { returnError: ReturnError } /* CHOICE_ALT_ROOT */
    | { reject: Reject } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ROS: $.ASN1Decoder<ROS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ROS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ROS (el: _Element): ROS {
    if (!_cached_decoder_for_ROS) { _cached_decoder_for_ROS = $._decode_inextensible_choice<ROS>({
    "CONTEXT 1": [ "invoke", $._decode_implicit<Invoke>(() => _decode_Invoke) ],
    "CONTEXT 2": [ "returnResult", $._decode_implicit<ReturnResult>(() => _decode_ReturnResult) ],
    "CONTEXT 3": [ "returnError", $._decode_implicit<ReturnError>(() => _decode_ReturnError) ],
    "CONTEXT 4": [ "reject", $._decode_implicit<Reject>(() => _decode_Reject) ]
}); }
    return _cached_decoder_for_ROS(el);
}

let _cached_encoder_for_ROS: $.ASN1Encoder<ROS> | null = null;

/**
 * @summary Encodes a(n) ROS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ROS, encoded as an ASN.1 Element.
 */
export
function _encode_ROS (value: ROS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ROS) { _cached_encoder_for_ROS = $._encode_choice<ROS>({
    "invoke": $._encode_implicit(_TagClass.context, 1, () => _encode_Invoke, $.BER),
    "returnResult": $._encode_implicit(_TagClass.context, 2, () => _encode_ReturnResult, $.BER),
    "returnError": $._encode_implicit(_TagClass.context, 3, () => _encode_ReturnError, $.BER),
    "reject": $._encode_implicit(_TagClass.context, 4, () => _encode_Reject, $.BER),
}, $.BER); }
    return _cached_encoder_for_ROS(value, elGetter);
}


/* eslint-enable */
