/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Invoke, _decode_Invoke, _encode_Invoke } from "../Facility-Information-Element-Components/Invoke.ta.mjs";
import { ReturnResult, _decode_ReturnResult, _encode_ReturnResult } from "../Facility-Information-Element-Components/ReturnResult.ta.mjs";
import { ReturnError, _decode_ReturnError, _encode_ReturnError } from "../Facility-Information-Element-Components/ReturnError.ta.mjs";
import { Reject, _decode_Reject, _encode_Reject } from "../Facility-Information-Element-Components/Reject.ta.mjs";


/**
 * @summary ROS
 * @description
 * 
 * One ROSE component carried in octet group 4 of a Facility information element
 * when octet 3 is coded "Remote Operations Protocol". A component may be
 * repeated. Several components in one Facility information element are treated
 * as several Facility information elements in one message.
 *
 * An invoke identifier has meaning only inside the call reference that carries
 * it, including the dummy call reference. The same identifier sent both ways at
 * once can make a later reject ambiguous. Q.932 does not specify how to keep
 * identifiers from being reused while a class 3 or class 5 operation can still
 * return an error or a reject, or how to separate the dummy call reference on
 * the broadcast CEI from the same value on a specific CEI.
 *
 * If the operation is not implemented, return a reject reporting unrecognized
 * operation. That reject does not change handling of the message or of its
 * other information elements. If the operation is known but is not defined for
 * the message that carried it, return the Q.950 error "procedural error". An
 * invalid protocol profile is a Q.931 information-element error (no STATUS on
 * connectionless transport). An invalid profile in REGISTER discards the
 * REGISTER contents and returns RELEASE COMPLETE with cause #100.
 *
 * ITU-T Rec. Q.932 (05/1998) §6.3.6.1, §8.2.3, §8.2.3.1.2; ITU-T Rec. Q.932
 * (1998) Amd.1 (06/2000) Table 8-5 and Table 8-7 bis.
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
