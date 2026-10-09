/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributesPlusTerm, _decode_AttributesPlusTerm, _encode_AttributesPlusTerm } from "../ElementSpecification-eSpec-q/AttributesPlusTerm.ta.mjs";
// export { AttributesPlusTerm, _decode_AttributesPlusTerm, _encode_AttributesPlusTerm } from "../ElementSpecification-eSpec-q/AttributesPlusTerm.ta.mjs";
import { RPNStructure_rpnRpnOp, _decode_RPNStructure_rpnRpnOp, _encode_RPNStructure_rpnRpnOp } from "../ElementSpecification-eSpec-q/RPNStructure-rpnRpnOp.ta.mjs";
// export { RPNStructure_rpnRpnOp, _decode_RPNStructure_rpnRpnOp, _encode_RPNStructure_rpnRpnOp } from "../ElementSpecification-eSpec-q/RPNStructure-rpnRpnOp.ta.mjs";


/**
 * @summary RPNStructure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RPNStructure  ::=  CHOICE {
 *     op          [0] AttributesPlusTerm,
 *     rpnRpnOp    [1] IMPLICIT SEQUENCE {
 *         rpn1    RPNStructure,
 *         rpn2    RPNStructure,
 *         op      [46] CHOICE {
 *             and     [0] IMPLICIT NULL,
 *             or      [1] IMPLICIT NULL,
 *             and-not [2] IMPLICIT NULL
 *         }
 *     }
 * }
 * ```
 */
export
type RPNStructure =
    { op: AttributesPlusTerm } /* CHOICE_ALT_ROOT */
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
    "CONTEXT 0": [ "op", $._decode_implicit<AttributesPlusTerm>(() => _decode_AttributesPlusTerm) ],
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
    "op": $._encode_implicit(_TagClass.context, 0, () => _encode_AttributesPlusTerm, $.BER),
    "rpnRpnOp": $._encode_implicit(_TagClass.context, 1, () => _encode_RPNStructure_rpnRpnOp, $.BER),
}, $.BER); }
    return _cached_encoder_for_RPNStructure(value, elGetter);
}


/* eslint-enable */
