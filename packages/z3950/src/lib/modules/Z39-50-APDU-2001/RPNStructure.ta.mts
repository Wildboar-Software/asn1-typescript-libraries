/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Operand, _decode_Operand, _encode_Operand } from "../Z39-50-APDU-2001/Operand.ta.mjs";
import { RPNStructure_rpnRpnOp, _decode_RPNStructure_rpnRpnOp, _encode_RPNStructure_rpnRpnOp } from "../Z39-50-APDU-2001/RPNStructure-rpnRpnOp.ta.mjs";


/**
 * @summary RPNStructure
 * @description
 * 
 * One node of a type-1 or type-101 query tree (ANSI/NISO Z39.50-2003 §3.7.1).
 * `op` is a simple operand, a leaf. `rpnRpnOp` is a complex operand: the left
 * subtree, the right subtree, and the operator, in the post-order the client
 * sends.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RPNStructure  ::=  CHOICE {
 *     op          [0] Operand,
 *     rpnRpnOp    [1] IMPLICIT SEQUENCE {
 *         rpn1                      RPNStructure,
 *         rpn2                      RPNStructure,
 *         op                        Operator
 *     }
 * }
 * ```
 */
export
type RPNStructure =
    { op: Operand } /* CHOICE_ALT_ROOT */
    | { rpnRpnOp: RPNStructure_rpnRpnOp } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RPNStructure: $.ASN1Decoder<RPNStructure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RPNStructure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RPNStructure (el: _Element): RPNStructure {
    if (!_cached_decoder_for_RPNStructure) { _cached_decoder_for_RPNStructure = $._decode_inextensible_choice<RPNStructure>({
    "CONTEXT 0": [ "op", $._decode_explicit<Operand>(() => _decode_Operand) ],
    "CONTEXT 1": [ "rpnRpnOp", $._decode_implicit<RPNStructure_rpnRpnOp>(() => _decode_RPNStructure_rpnRpnOp) ]
}); }
    return _cached_decoder_for_RPNStructure(el);
}

let _cached_encoder_for_RPNStructure: $.ASN1Encoder<RPNStructure> | null = null;

/**
 * @summary Encodes a(n) RPNStructure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RPNStructure, encoded as an ASN.1 Element.
 */
export
function _encode_RPNStructure (value: RPNStructure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RPNStructure) { _cached_encoder_for_RPNStructure = $._encode_choice<RPNStructure>({
    "op": $._encode_explicit(_TagClass.context, 0, () => _encode_Operand, $.BER),
    "rpnRpnOp": $._encode_implicit(_TagClass.context, 1, () => _encode_RPNStructure_rpnRpnOp, $.BER),
}, $.BER); }
    return _cached_encoder_for_RPNStructure(value, elGetter);
}


/* eslint-enable */
