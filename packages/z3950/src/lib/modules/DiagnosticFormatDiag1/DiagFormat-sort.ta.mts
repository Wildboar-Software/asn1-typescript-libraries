/* eslint-disable */
import {
    INTEGER,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SortElement, _decode_SortElement, _encode_SortElement } from "../Z39-50-APDU-2001/SortElement.ta.mjs";
import { DiagFormat_sort_key, _decode_DiagFormat_sort_key, _encode_DiagFormat_sort_key } from "../DiagnosticFormatDiag1/DiagFormat-sort-key.ta.mjs";
import { DiagFormat_sort_illegal, _decode_DiagFormat_sort_illegal, _encode_DiagFormat_sort_illegal } from "../DiagnosticFormatDiag1/DiagFormat-sort-illegal.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary DiagFormat_sort
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-sort ::= CHOICE {
 *     sequence [0] IMPLICIT NULL,
 *     -- cannot sort according to sequence
 *     noRsName [1] IMPLICIT NULL,
 *     -- no result set name supplied
 *     tooMany [2] IMPLICIT INTEGER,
 *     -- Too many input result sets, maximum supplied.
 *     incompatible [3] IMPLICIT NULL,
 *     -- records with different formats not compatible for sorting
 *     generic [4] IMPLICIT NULL,
 *     -- generic sort not supported (db specific only)
 *     dbSpecific [5] IMPLICIT NULL,
 *     -- db specific sort not supported
 *     sortElement [6] SortElement,
 *     key [7] IMPLICIT INTEGER {
 *         tooMany (1),
 *         -- too many sort keys
 *         duplicate (2)
 *     },
 *     -- duplicate sort keys
 *     action [8] IMPLICIT NULL,
 *     -- unuspported missing data action
 *     illegal [9] IMPLICIT INTEGER {
 *         relation (1),
 *         -- illegal sort relation
 *         case (2),
 *         -- illegal case value
 *         action (3),
 *         -- illegal missing data action
 *         sort (4)
 *     },
 *     -- illegal sort
 *     inputTooLarge [10] IMPLICIT SEQUENCE OF InternationalString,
 *     -- one or more of the
 *     -- input result sets too
 *     -- large to sort
 *     aggregateTooLarge [11] IMPLICIT NULL  --  aggregate result set
 *     -- too large
 * }
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
    "CONTEXT 6": [ "sortElement", $._decode_explicit<SortElement>(() => _decode_SortElement) ],
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
    "sortElement": $._encode_explicit(_TagClass.context, 6, () => _encode_SortElement, $.BER),
    "key": $._encode_implicit(_TagClass.context, 7, () => _encode_DiagFormat_sort_key, $.BER),
    "action": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
    "illegal": $._encode_implicit(_TagClass.context, 9, () => _encode_DiagFormat_sort_illegal, $.BER),
    "inputTooLarge": $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER),
    "aggregateTooLarge": $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagFormat_sort(value, elGetter);
}


/* eslint-enable */
