/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProximityOperator, _decode_ProximityOperator, _encode_ProximityOperator } from "../Z39-50-APDU-2001/ProximityOperator.ta.mjs";


/**
 * @summary Operator
 * @description
 * 
 * Operator applied to the two operands most recently pushed while evaluating a
 * type-1 or type-101 query (ANSI/NISO Z39.50-2003 §3.7.1). `and` is the
 * intersection of S1 and S2, `or` is their union, and `and-not` is the part of
 * S1 absent from S2.
 * 
 * `prox` is the proximity test in §3.7.2. When both operands are
 * attribute-plus-term, the result is the subset of (S1 AND S2) for which the
 * test holds. Otherwise the server must support the extended result set model
 * for proximity, or the query is in error. Support of proximity between two
 * terms does not require that model (§3.7.2.2).
 * 
 * When version 2 is in force, a type-1 query uses `and`, `or`, or `and-not`.
 * `prox` is allowed in version 2 only on a type-101 query, and in version 3 it
 * may occur in type-1. A version-2 type-1 query that includes `prox` may be
 * treated as a protocol error (§3.7, §4.4.2.2.3). Support of type-1 does not
 * include any particular operator.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Operator  ::=  [46] CHOICE {
 *     and     [0] IMPLICIT NULL,
 *     or      [1] IMPLICIT NULL,
 *     and-not [2] IMPLICIT NULL,
 *     --If version 2 is in force:
 *     --For query type 1, one of the above three must be chosen;
 *     --prox (below) may be used only if query type is 101.
 *     prox    [3] IMPLICIT ProximityOperator
 * }
 * ```
 */
export
type Operator =
    { and: NULL } /* CHOICE_ALT_ROOT */
    | { or: NULL } /* CHOICE_ALT_ROOT */
    | { and_not: NULL } /* CHOICE_ALT_ROOT */
    | { prox: ProximityOperator } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Operator: $.ASN1Decoder<Operator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Operator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Operator (el: _Element): Operator {
    if (!_cached_decoder_for_Operator) { _cached_decoder_for_Operator = $._decode_explicit<Operator>(() => $._decode_inextensible_choice<Operator>({
    "CONTEXT 0": [ "and", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "or", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "and_not", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "prox", $._decode_implicit<ProximityOperator>(() => _decode_ProximityOperator) ]
})); }
    return _cached_decoder_for_Operator(el);
}

let _cached_encoder_for_Operator: $.ASN1Encoder<Operator> | null = null;

/**
 * @summary Encodes a(n) Operator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Operator, encoded as an ASN.1 Element.
 */
export
function _encode_Operator (value: Operator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Operator) { _cached_encoder_for_Operator = $._encode_explicit(_TagClass.context, 46, () => $._encode_explicit(_TagClass.context, 46, () => $._encode_choice<Operator>({
    "and": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "or": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "and_not": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "prox": $._encode_implicit(_TagClass.context, 3, () => _encode_ProximityOperator, $.BER),
}, $.BER), $.BER), $.BER); }
    return _cached_encoder_for_Operator(value, elGetter);
}


/* eslint-enable */
