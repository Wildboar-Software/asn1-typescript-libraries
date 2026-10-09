/* eslint-disable */
import {
    EXTERNAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RPNQuery, _decode_RPNQuery, _encode_RPNQuery } from "../Z39-50-APDU-2001/RPNQuery.ta.mjs";


/**
 * @summary Query
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Query  ::=  CHOICE {
 *     type-0      [0] ANY,
 *     type-1      [1] IMPLICIT RPNQuery,
 *     type-2      [2] OCTET STRING,
 *     type-100    [100] OCTET STRING,
 *     type-101    [101] IMPLICIT RPNQuery,
 *     type-102    [102] OCTET STRING,
 *     type-104    [104] IMPLICIT EXTERNAL
 * }
 * ```
 */
export
type Query =
    { type_0: _Element } /* CHOICE_ALT_ROOT */
    | { type_1: RPNQuery } /* CHOICE_ALT_ROOT */
    | { type_2: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { type_100: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { type_101: RPNQuery } /* CHOICE_ALT_ROOT */
    | { type_102: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { type_104: EXTERNAL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Query: $.ASN1Decoder<Query> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Query
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Query (el: _Element): Query {
    if (!_cached_decoder_for_Query) { _cached_decoder_for_Query = $._decode_inextensible_choice<Query>({
    "CONTEXT 0": [ "type_0", $._decode_explicit<_Element>(() => $._decodeAny) ],
    "CONTEXT 1": [ "type_1", $._decode_implicit<RPNQuery>(() => _decode_RPNQuery) ],
    "CONTEXT 2": [ "type_2", $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 100": [ "type_100", $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 101": [ "type_101", $._decode_implicit<RPNQuery>(() => _decode_RPNQuery) ],
    "CONTEXT 102": [ "type_102", $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 104": [ "type_104", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ]
}); }
    return _cached_decoder_for_Query(el);
}

let _cached_encoder_for_Query: $.ASN1Encoder<Query> | null = null;

/**
 * @summary Encodes a(n) Query into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Query, encoded as an ASN.1 Element.
 */
export
function _encode_Query (value: Query, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Query) { _cached_encoder_for_Query = $._encode_choice<Query>({
    "type_0": $._encode_explicit(_TagClass.context, 0, () => $._encodeAny, $.BER),
    "type_1": $._encode_implicit(_TagClass.context, 1, () => _encode_RPNQuery, $.BER),
    "type_2": $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "type_100": $._encode_explicit(_TagClass.context, 100, () => $._encodeOctetString, $.BER),
    "type_101": $._encode_implicit(_TagClass.context, 101, () => _encode_RPNQuery, $.BER),
    "type_102": $._encode_explicit(_TagClass.context, 102, () => $._encodeOctetString, $.BER),
    "type_104": $._encode_implicit(_TagClass.context, 104, () => $._encodeExternal, $.BER),
}, $.BER); }
    return _cached_encoder_for_Query(value, elGetter);
}


/* eslint-enable */
