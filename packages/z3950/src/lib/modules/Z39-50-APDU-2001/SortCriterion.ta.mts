/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary SortCriterion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortCriterion  ::=  CHOICE {
 *     mostComprehensive   [1] IMPLICIT NULL,
 *     leastComprehensive  [2] IMPLICIT NULL,
 *     mostRecent          [3] IMPLICIT NULL,
 *     oldest              [4] IMPLICIT NULL,
 *     leastCost           [5] IMPLICIT NULL,
 *     preferredDatabases  [6] IMPLICIT SEQUENCE OF InternationalString
 *     --Values 7-100 reserved for future assignment
 * }
 * ```
 */
export
type SortCriterion =
    { mostComprehensive: NULL } /* CHOICE_ALT_ROOT */
    | { leastComprehensive: NULL } /* CHOICE_ALT_ROOT */
    | { mostRecent: NULL } /* CHOICE_ALT_ROOT */
    | { oldest: NULL } /* CHOICE_ALT_ROOT */
    | { leastCost: NULL } /* CHOICE_ALT_ROOT */
    | { preferredDatabases: InternationalString[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SortCriterion: $.ASN1Decoder<SortCriterion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortCriterion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortCriterion (el: _Element): SortCriterion {
    if (!_cached_decoder_for_SortCriterion) { _cached_decoder_for_SortCriterion = $._decode_inextensible_choice<SortCriterion>({
    "CONTEXT 1": [ "mostComprehensive", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "leastComprehensive", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "mostRecent", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "oldest", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "leastCost", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "preferredDatabases", $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString)) ]
}); }
    return _cached_decoder_for_SortCriterion(el);
}

let _cached_encoder_for_SortCriterion: $.ASN1Encoder<SortCriterion> | null = null;

/**
 * @summary Encodes a(n) SortCriterion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortCriterion, encoded as an ASN.1 Element.
 */
export
function _encode_SortCriterion (value: SortCriterion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortCriterion) { _cached_encoder_for_SortCriterion = $._encode_choice<SortCriterion>({
    "mostComprehensive": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "leastComprehensive": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "mostRecent": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "oldest": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "leastCost": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "preferredDatabases": $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_SortCriterion(value, elGetter);
}


/* eslint-enable */
