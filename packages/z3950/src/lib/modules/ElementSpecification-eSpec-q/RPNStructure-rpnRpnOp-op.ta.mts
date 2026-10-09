/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RPNStructure_rpnRpnOp_op
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RPNStructure-rpnRpnOp-op ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RPNStructure_rpnRpnOp_op =
    { and: NULL } /* CHOICE_ALT_ROOT */
    | { or: NULL } /* CHOICE_ALT_ROOT */
    | { and_not: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RPNStructure_rpnRpnOp_op: $.ASN1Decoder<RPNStructure_rpnRpnOp_op> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RPNStructure_rpnRpnOp_op
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RPNStructure_rpnRpnOp_op (el: _Element): RPNStructure_rpnRpnOp_op {
    if (!_cached_decoder_for_RPNStructure_rpnRpnOp_op) { _cached_decoder_for_RPNStructure_rpnRpnOp_op = $._decode_inextensible_choice<RPNStructure_rpnRpnOp_op>({
    "CONTEXT 0": [ "and", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "or", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "and_not", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_RPNStructure_rpnRpnOp_op(el);
}

let _cached_encoder_for_RPNStructure_rpnRpnOp_op: $.ASN1Encoder<RPNStructure_rpnRpnOp_op> | null = null;

/**
 * @summary Encodes a(n) RPNStructure_rpnRpnOp_op into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RPNStructure_rpnRpnOp_op, encoded as an ASN.1 Element.
 */
export
function _encode_RPNStructure_rpnRpnOp_op (value: RPNStructure_rpnRpnOp_op, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RPNStructure_rpnRpnOp_op) { _cached_encoder_for_RPNStructure_rpnRpnOp_op = $._encode_choice<RPNStructure_rpnRpnOp_op>({
    "and": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "or": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "and_not": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_RPNStructure_rpnRpnOp_op(value, elGetter);
}


/* eslint-enable */
