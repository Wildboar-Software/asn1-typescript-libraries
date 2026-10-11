/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RetentionCriterion
 * @description
 * 
 * Which members of a duplicate class are kept (ANSI/NISO Z39.50-2003
 * §3.2.7.2.5). Values 5 through 100 are reserved.
 * 
 * `numberOfEntries` is N greater than 0: keep up to N entries. N = 1 keeps the
 * representative only. It may be combined with duplicates-only and with
 * discard-result-set-duplicates, and not with percent-of-entries.
 * `percentOfEntries` is an integer from 1 to 100; 100 keeps every entry. It may
 * be combined the same way, and not with number-of-entries. `duplicatesOnly`
 * discards the representative and should be used only when clustering is
 * individual entries. `discardRsDuplicates` drops items that point at the same
 * database record, and does that before number or percent selection when those
 * are also present.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetentionCriterion  ::=  CHOICE {
 *     numberOfEntries     [1] IMPLICIT INTEGER,   -- Greater than 0
 *     percentOfEntries    [2] IMPLICIT INTEGER,   -- 1-100
 *     duplicatesOnly      [3] IMPLICIT NULL,      -- Should not be chosen if clustering is 'true'
 *     discardRsDuplicates [4] IMPLICIT NULL       -- Values 5-100 reserved for future assignment
 * }
 * ```
 */
export
type RetentionCriterion =
    { numberOfEntries: INTEGER } /* CHOICE_ALT_ROOT */
    | { percentOfEntries: INTEGER } /* CHOICE_ALT_ROOT */
    | { duplicatesOnly: NULL } /* CHOICE_ALT_ROOT */
    | { discardRsDuplicates: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RetentionCriterion: $.ASN1Decoder<RetentionCriterion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RetentionCriterion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RetentionCriterion (el: _Element): RetentionCriterion {
    if (!_cached_decoder_for_RetentionCriterion) { _cached_decoder_for_RetentionCriterion = $._decode_inextensible_choice<RetentionCriterion>({
    "CONTEXT 1": [ "numberOfEntries", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "percentOfEntries", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "duplicatesOnly", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "discardRsDuplicates", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_RetentionCriterion(el);
}

let _cached_encoder_for_RetentionCriterion: $.ASN1Encoder<RetentionCriterion> | null = null;

/**
 * @summary Encodes a(n) RetentionCriterion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetentionCriterion, encoded as an ASN.1 Element.
 */
export
function _encode_RetentionCriterion (value: RetentionCriterion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RetentionCriterion) { _cached_encoder_for_RetentionCriterion = $._encode_choice<RetentionCriterion>({
    "numberOfEntries": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "percentOfEntries": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "duplicatesOnly": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "discardRsDuplicates": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_RetentionCriterion(value, elGetter);
}


/* eslint-enable */
