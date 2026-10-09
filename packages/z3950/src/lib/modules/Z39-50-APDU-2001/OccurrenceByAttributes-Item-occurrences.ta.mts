/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OccurrenceByAttributes_Item_occurrences_byDatabase_Item, _decode_OccurrenceByAttributes_Item_occurrences_byDatabase_Item, _encode_OccurrenceByAttributes_Item_occurrences_byDatabase_Item } from "../Z39-50-APDU-2001/OccurrenceByAttributes-Item-occurrences-byDatabase-Item.ta.mjs";


/**
 * @summary OccurrenceByAttributes_Item_occurrences
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OccurrenceByAttributes-Item-occurrences ::= CHOICE {
 *     global [2] INTEGER,
 *     byDatabase [3] IMPLICIT SEQUENCE OF SEQUENCE {
 *         db DatabaseName,
 *         num [1] IMPLICIT INTEGER OPTIONAL,
 *         otherDbInfo OtherInformation OPTIONAL
 *     }
 * }
 * ```
 */
export
type OccurrenceByAttributes_Item_occurrences =
    { global: INTEGER } /* CHOICE_ALT_ROOT */
    | { byDatabase: OccurrenceByAttributes_Item_occurrences_byDatabase_Item[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OccurrenceByAttributes_Item_occurrences: $.ASN1Decoder<OccurrenceByAttributes_Item_occurrences> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OccurrenceByAttributes_Item_occurrences
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OccurrenceByAttributes_Item_occurrences (el: _Element): OccurrenceByAttributes_Item_occurrences {
    if (!_cached_decoder_for_OccurrenceByAttributes_Item_occurrences) { _cached_decoder_for_OccurrenceByAttributes_Item_occurrences = $._decode_inextensible_choice<OccurrenceByAttributes_Item_occurrences>({
    "CONTEXT 2": [ "global", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "byDatabase", $._decode_implicit<OccurrenceByAttributes_Item_occurrences_byDatabase_Item[]>(() => $._decodeSequenceOf<OccurrenceByAttributes_Item_occurrences_byDatabase_Item>(() => _decode_OccurrenceByAttributes_Item_occurrences_byDatabase_Item)) ]
}); }
    return _cached_decoder_for_OccurrenceByAttributes_Item_occurrences(el);
}

let _cached_encoder_for_OccurrenceByAttributes_Item_occurrences: $.ASN1Encoder<OccurrenceByAttributes_Item_occurrences> | null = null;

/**
 * @summary Encodes a(n) OccurrenceByAttributes_Item_occurrences into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OccurrenceByAttributes_Item_occurrences, encoded as an ASN.1 Element.
 */
export
function _encode_OccurrenceByAttributes_Item_occurrences (value: OccurrenceByAttributes_Item_occurrences, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OccurrenceByAttributes_Item_occurrences) { _cached_encoder_for_OccurrenceByAttributes_Item_occurrences = $._encode_choice<OccurrenceByAttributes_Item_occurrences>({
    "global": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "byDatabase": $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<OccurrenceByAttributes_Item_occurrences_byDatabase_Item>(() => _encode_OccurrenceByAttributes_Item_occurrences_byDatabase_Item, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_OccurrenceByAttributes_Item_occurrences(value, elGetter);
}


/* eslint-enable */
