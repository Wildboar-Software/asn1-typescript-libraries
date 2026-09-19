/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DiagFormat_sort_key, _encode_DiagFormat_sort_key, DiagFormat_sort_key } from "../DiagnosticFormatDiag1/DiagFormat-sort-key.ta.mjs";
// export { DiagFormat_sort_key, DiagFormat_sort_key_tooMany /* IMPORTED_LONG_NAMED_INTEGER */, tooMany /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_sort_key_duplicate /* IMPORTED_LONG_NAMED_INTEGER */, duplicate /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_sort_key, _encode_DiagFormat_sort_key } from "../DiagnosticFormatDiag1/DiagFormat-sort-key.ta.mjs";
import { _decode_DiagFormat_sort_illegal, _encode_DiagFormat_sort_illegal, DiagFormat_sort_illegal } from "../DiagnosticFormatDiag1/DiagFormat-sort-illegal.ta.mjs";
// export { DiagFormat_sort_illegal, DiagFormat_sort_illegal_relation /* IMPORTED_LONG_NAMED_INTEGER */, relation /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_sort_illegal_case /* IMPORTED_LONG_NAMED_INTEGER */, case_ /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_sort_illegal_action /* IMPORTED_LONG_NAMED_INTEGER */, action /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_sort_illegal_sort /* IMPORTED_LONG_NAMED_INTEGER */, sort /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_sort_illegal, _encode_DiagFormat_sort_illegal } from "../DiagnosticFormatDiag1/DiagFormat-sort-illegal.ta.mjs";


/**
 * @summary DiagFormat_sort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-sort ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_sort =
    { sequence: NULL } /* CHOICE_ALT_ROOT */
    | { noRsName: NULL } /* CHOICE_ALT_ROOT */
    | { tooMany: INTEGER } /* CHOICE_ALT_ROOT */
    | { incompatible: NULL } /* CHOICE_ALT_ROOT */
    | { generic: NULL } /* CHOICE_ALT_ROOT */
    | { dbSpecific: NULL } /* CHOICE_ALT_ROOT */
    | { sortElement: SortElement } /* CHOICE_ALT_ROOT */
    | { key: DiagFormat_sort_key } /* CHOICE_ALT_ROOT */
    | { action: NULL } /* CHOICE_ALT_ROOT */
    | { illegal: DiagFormat_sort_illegal } /* CHOICE_ALT_ROOT */
    | { inputTooLarge: InternationalString[] } /* CHOICE_ALT_ROOT */
    | { aggregateTooLarge: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagFormat_sort: $.ASN1Decoder<DiagFormat_sort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_sort
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_sort (el: _Element): DiagFormat_sort {
    if (!_cached_decoder_for_DiagFormat_sort) { _cached_decoder_for_DiagFormat_sort = $._decode_inextensible_choice<DiagFormat_sort>({
    "CONTEXT 0": [ "sequence", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "noRsName", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "tooMany", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "incompatible", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "generic", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "dbSpecific", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "sortElement", $._decode_implicit<SortElement>(() => _decode_SortElement) ],
    "CONTEXT 7": [ "key", $._decode_implicit<DiagFormat_sort_key>(() => _decode_DiagFormat_sort_key) ],
    "CONTEXT 8": [ "action", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 9": [ "illegal", $._decode_implicit<DiagFormat_sort_illegal>(() => _decode_DiagFormat_sort_illegal) ],
    "CONTEXT 10": [ "inputTooLarge", $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString)) ],
    "CONTEXT 11": [ "aggregateTooLarge", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_DiagFormat_sort(el);
}

let _cached_encoder_for_DiagFormat_sort: $.ASN1Encoder<DiagFormat_sort> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_sort into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_sort, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_sort (value: DiagFormat_sort, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_sort) { _cached_encoder_for_DiagFormat_sort = $._encode_choice<DiagFormat_sort>({
    "sequence": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "noRsName": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "tooMany": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "incompatible": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "generic": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "dbSpecific": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "sortElement": $._encode_implicit(_TagClass.context, 6, () => _encode_SortElement, $.BER),
    "key": $._encode_implicit(_TagClass.context, 7, () => _encode_DiagFormat_sort_key, $.BER),
    "action": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
    "illegal": $._encode_implicit(_TagClass.context, 9, () => _encode_DiagFormat_sort_illegal, $.BER),
    "inputTooLarge": $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER),
    "aggregateTooLarge": $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagFormat_sort(value, elGetter);
}


/* eslint-enable */
