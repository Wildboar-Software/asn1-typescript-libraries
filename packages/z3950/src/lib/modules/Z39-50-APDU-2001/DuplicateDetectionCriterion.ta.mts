/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    EXTERNAL,
    INTEGER,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DuplicateDetectionCriterion
 * @description
 * 
 * One test for deciding that two result-set items are duplicates (ANSI/NISO
 * Z39.50-2003 §3.2.7.2.3). The list may be extended; values 6 through 100 are
 * reserved. If the client supplies no criterion, the server chooses the tests.
 * 
 * `levelOfMatch` is a percentage from 1 to 100. 100 means records are
 * duplicates only when they are identical. `caseSensitive` and
 * `punctuationSensitive` make case or punctuation count. `regularExpression`
 * carries a regular expression as an EXTERNAL; this standard does not define
 * that encoding. `rsDuplicates` treats two items as duplicates when they point
 * at the same database record.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DuplicateDetectionCriterion  ::=  CHOICE {
 *     levelOfMatch                [1] IMPLICIT INTEGER,
 *     --A percentage; 1-100
 *     caseSensitive               [2] IMPLICIT NULL,
 *     punctuationSensitive        [3] IMPLICIT NULL,
 *     regularExpression           [4] IMPLICIT EXTERNAL,
 *     rsDuplicates                [5] IMPLICIT NULL
 *     --Values 6-100 reserved for future assignment
 * }
 * ```
 */
export
type DuplicateDetectionCriterion =
    { levelOfMatch: INTEGER } /* CHOICE_ALT_ROOT */
    | { caseSensitive: NULL } /* CHOICE_ALT_ROOT */
    | { punctuationSensitive: NULL } /* CHOICE_ALT_ROOT */
    | { regularExpression: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { rsDuplicates: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DuplicateDetectionCriterion: $.ASN1Decoder<DuplicateDetectionCriterion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DuplicateDetectionCriterion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DuplicateDetectionCriterion (el: _Element): DuplicateDetectionCriterion {
    if (!_cached_decoder_for_DuplicateDetectionCriterion) { _cached_decoder_for_DuplicateDetectionCriterion = $._decode_inextensible_choice<DuplicateDetectionCriterion>({
    "CONTEXT 1": [ "levelOfMatch", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "caseSensitive", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "punctuationSensitive", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "regularExpression", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ],
    "CONTEXT 5": [ "rsDuplicates", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_DuplicateDetectionCriterion(el);
}

let _cached_encoder_for_DuplicateDetectionCriterion: $.ASN1Encoder<DuplicateDetectionCriterion> | null = null;

/**
 * @summary Encodes a(n) DuplicateDetectionCriterion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DuplicateDetectionCriterion, encoded as an ASN.1 Element.
 */
export
function _encode_DuplicateDetectionCriterion (value: DuplicateDetectionCriterion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DuplicateDetectionCriterion) { _cached_encoder_for_DuplicateDetectionCriterion = $._encode_choice<DuplicateDetectionCriterion>({
    "levelOfMatch": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "caseSensitive": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "punctuationSensitive": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "regularExpression": $._encode_implicit(_TagClass.context, 4, () => $._encodeExternal, $.BER),
    "rsDuplicates": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_DuplicateDetectionCriterion(value, elGetter);
}


/* eslint-enable */
