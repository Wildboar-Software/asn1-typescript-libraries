/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeneralProblem, _decode_GeneralProblem, _encode_GeneralProblem } from "../SeseAPDUs/GeneralProblem.ta.mjs";
// export { GeneralProblem, _enum_for_GeneralProblem, GeneralProblem_invalidAPDU /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidAPDU /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GeneralProblem, _encode_GeneralProblem } from "../SeseAPDUs/GeneralProblem.ta.mjs";
import { TransferProblem, _decode_TransferProblem, _encode_TransferProblem } from "../SeseAPDUs/TransferProblem.ta.mjs";
// export { TransferProblem, _enum_for_TransferProblem, TransferProblem_duplicateInvocationId /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicateInvocationId /* IMPORTED_SHORT_ENUMERATION_ITEM */, TransferProblem_unrecognizedSecurityExchange /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognizedSecurityExchange /* IMPORTED_SHORT_ENUMERATION_ITEM */, TransferProblem_mistypedItem /* IMPORTED_LONG_ENUMERATION_ITEM */, mistypedItem /* IMPORTED_SHORT_ENUMERATION_ITEM */, TransferProblem_inappropriateInvocationId /* IMPORTED_LONG_ENUMERATION_ITEM */, inappropriateInvocationId /* IMPORTED_SHORT_ENUMERATION_ITEM */, TransferProblem_alternatingSequenceError /* IMPORTED_LONG_ENUMERATION_ITEM */, alternatingSequenceError /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TransferProblem, _encode_TransferProblem } from "../SeseAPDUs/TransferProblem.ta.mjs";
import { AbortProblem, _decode_AbortProblem, _encode_AbortProblem } from "../SeseAPDUs/AbortProblem.ta.mjs";
// export { AbortProblem, _enum_for_AbortProblem, AbortProblem_unrecognizedInvocationId /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognizedInvocationId /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbortProblem_abortUnexpected /* IMPORTED_LONG_ENUMERATION_ITEM */, abortUnexpected /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbortProblem_unrecognizedError /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognizedError /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbortProblem_unexpectedError /* IMPORTED_LONG_ENUMERATION_ITEM */, unexpectedError /* IMPORTED_SHORT_ENUMERATION_ITEM */, AbortProblem_mistypedErrorParameter /* IMPORTED_LONG_ENUMERATION_ITEM */, mistypedErrorParameter /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AbortProblem, _encode_AbortProblem } from "../SeseAPDUs/AbortProblem.ta.mjs";


/**
 * @summary ProblemCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProblemCode  ::=  CHOICE {
 *   general   GeneralProblem,
 *   transfer  TransferProblem,
 *   abort     AbortProblem
 * }
 * ```
 */
export
type ProblemCode =
    { general: GeneralProblem } /* CHOICE_ALT_ROOT */
    | { transfer: TransferProblem } /* CHOICE_ALT_ROOT */
    | { abort: AbortProblem } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProblemCode: $.ASN1Decoder<ProblemCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProblemCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProblemCode (el: _Element): ProblemCode {
    if (!_cached_decoder_for_ProblemCode) { _cached_decoder_for_ProblemCode = $._decode_inextensible_choice<ProblemCode>({
    "CONTEXT 0": [ "general", _decode_GeneralProblem ],
    "CONTEXT 1": [ "transfer", _decode_TransferProblem ],
    "CONTEXT 2": [ "abort", _decode_AbortProblem ]
}); }
    return _cached_decoder_for_ProblemCode(el);
}

let _cached_encoder_for_ProblemCode: $.ASN1Encoder<ProblemCode> | null = null;

/**
 * @summary Encodes a(n) ProblemCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProblemCode, encoded as an ASN.1 Element.
 */
export
function _encode_ProblemCode (value: ProblemCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProblemCode) { _cached_encoder_for_ProblemCode = $._encode_choice<ProblemCode>({
    "general": $._encode_implicit(_TagClass.context, 0, () => _encode_GeneralProblem, $.BER),
    "transfer": $._encode_implicit(_TagClass.context, 1, () => _encode_TransferProblem, $.BER),
    "abort": $._encode_implicit(_TagClass.context, 2, () => _encode_AbortProblem, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProblemCode(value, elGetter);
}


/* eslint-enable */
