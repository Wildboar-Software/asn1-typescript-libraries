/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type GeneralProblem, _decode_GeneralProblem, _encode_GeneralProblem } from "../PSS1-Service-APDUs-asn1-97/GeneralProblem.ta.mjs";
import { type InvokeProblem, _decode_InvokeProblem, _encode_InvokeProblem } from "../PSS1-Service-APDUs-asn1-97/InvokeProblem.ta.mjs";
import { type ReturnResultProblem, _decode_ReturnResultProblem, _encode_ReturnResultProblem } from "../PSS1-Service-APDUs-asn1-97/ReturnResultProblem.ta.mjs";
import { type ReturnErrorProblem, _decode_ReturnErrorProblem, _encode_ReturnErrorProblem } from "../PSS1-Service-APDUs-asn1-97/ReturnErrorProblem.ta.mjs";

/**
 * @summary Reject_problem
 * @description
 *
 * The problem component of a Reject APDU (ECMA-165 §11.3.3.4). The chosen
 * alternative says which kind of APDU failed. The integer is the code Annex G
 * defines for that kind. This is not the `RejectProblem` integer, which names
 * the Table 34 constraint exceptions.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reject-problem ::= CHOICE {
 *     general [0] GeneralProblem,
 *     invoke [1] InvokeProblem,
 *     returnResult [2] ReturnResultProblem,
 *     returnError [3] ReturnErrorProblem
 * }
 * ```
 */
export
type Reject_problem =
    { general: GeneralProblem } /* CHOICE_ALT_ROOT */
    | { invoke: InvokeProblem } /* CHOICE_ALT_ROOT */
    | { returnResult: ReturnResultProblem } /* CHOICE_ALT_ROOT */
    | { returnError: ReturnErrorProblem } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Reject_problem: $.ASN1Decoder<Reject_problem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Reject_problem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Reject_problem (el: _Element): Reject_problem {
    if (!_cached_decoder_for_Reject_problem) { _cached_decoder_for_Reject_problem = $._decode_inextensible_choice<Reject_problem>({
    "CONTEXT 0": [ "general", $._decode_implicit<GeneralProblem>(() => _decode_GeneralProblem) ],
    "CONTEXT 1": [ "invoke", $._decode_implicit<InvokeProblem>(() => _decode_InvokeProblem) ],
    "CONTEXT 2": [ "returnResult", $._decode_implicit<ReturnResultProblem>(() => _decode_ReturnResultProblem) ],
    "CONTEXT 3": [ "returnError", $._decode_implicit<ReturnErrorProblem>(() => _decode_ReturnErrorProblem) ]
}); }
    return _cached_decoder_for_Reject_problem(el);
}

let _cached_encoder_for_Reject_problem: $.ASN1Encoder<Reject_problem> | null = null;

/**
 * @summary Encodes a(n) Reject_problem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reject_problem, encoded as an ASN.1 Element.
 */
export
function _encode_Reject_problem (value: Reject_problem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Reject_problem) { _cached_encoder_for_Reject_problem = $._encode_choice<Reject_problem>({
    "general": $._encode_implicit(_TagClass.context, 0, () => _encode_GeneralProblem, $.BER),
    "invoke": $._encode_implicit(_TagClass.context, 1, () => _encode_InvokeProblem, $.BER),
    "returnResult": $._encode_implicit(_TagClass.context, 2, () => _encode_ReturnResultProblem, $.BER),
    "returnError": $._encode_implicit(_TagClass.context, 3, () => _encode_ReturnErrorProblem, $.BER),
}, $.BER); }
    return _cached_encoder_for_Reject_problem(value, elGetter);
}

/* eslint-enable */
