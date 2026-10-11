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
 * Query on a Search request. The chosen alternative is the query type and
 * identifies the syntax (ANSI/NISO Z39.50-2003 §3.2.2.1.1).
 * 
 * `type-0` may be used only when the client and server have an agreement
 * outside this standard.
 * 
 * `type-1` is the Reverse Polish Notation query specified in §3.7. A conforming
 * server must support a type-1 query. That does not imply support of any
 * defined operator or operand.
 * 
 * `type-2` is the ISO 8777 query, as specified in ISO 8777.
 * 
 * `type-100` is the Common Command Language query. This standard does not
 * specify its syntax.
 * 
 * `type-101` is the extended RPN query, with the same structure as type-1.
 * Proximity and restriction are valid in version 2 and in version 3. In a
 * type-1 query they are valid only in version 3. Including either in a
 * version-2 type-1 query is a protocol error (§3.7).
 * 
 * `type-102` is the Ranked List query. This standard names it for version 3 and
 * supplies no definition. In version 2, a server that receives a type-102 query
 * may treat that as a protocol error (§4.4.2.2.5). In version 3, an unsupported
 * type-102 query must not be treated as a protocol error.
 * 
 * `type-104` is an externally defined query. When the query-type-104 option bit
 * is negotiated, the client may send type-104 queries and the server must
 * recognize them. Recognition does not commit the server to any particular
 * external definition (§3.2.1.1.3, §4.4.2.2.28).
 * 
 * An unsupported query of type 0, 2, 100, or 101 must not be treated as a
 * protocol error. The server should return a diagnostic that the query type is
 * not supported (§4.4.2.2.4).
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
