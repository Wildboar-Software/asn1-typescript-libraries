/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_proximity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-proximity ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_proximity =
    { resultSets: NULL } /* CHOICE_ALT_ROOT */
    | { badSet: InternationalString } /* CHOICE_ALT_ROOT */
    | { relation: INTEGER } /* CHOICE_ALT_ROOT */
    | { unit: INTEGER } /* CHOICE_ALT_ROOT */
    | { distance: INTEGER } /* CHOICE_ALT_ROOT */
    | { attributes: AttributeList } /* CHOICE_ALT_ROOT */
    | { ordered: NULL } /* CHOICE_ALT_ROOT */
    | { exclusion: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagFormat_proximity: $.ASN1Decoder<DiagFormat_proximity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_proximity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_proximity (el: _Element): DiagFormat_proximity {
    if (!_cached_decoder_for_DiagFormat_proximity) { _cached_decoder_for_DiagFormat_proximity = $._decode_inextensible_choice<DiagFormat_proximity>({
    "CONTEXT 1": [ "resultSets", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "badSet", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 3": [ "relation", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 4": [ "unit", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 5": [ "distance", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 6": [ "attributes", $._decode_implicit<AttributeList>(() => _decode_AttributeList) ],
    "CONTEXT 7": [ "ordered", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "exclusion", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_DiagFormat_proximity(el);
}

let _cached_encoder_for_DiagFormat_proximity: $.ASN1Encoder<DiagFormat_proximity> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_proximity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_proximity, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_proximity (value: DiagFormat_proximity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_proximity) { _cached_encoder_for_DiagFormat_proximity = $._encode_choice<DiagFormat_proximity>({
    "resultSets": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "badSet": $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER),
    "relation": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
    "unit": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
    "distance": $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER),
    "attributes": $._encode_implicit(_TagClass.context, 6, () => _encode_AttributeList, $.BER),
    "ordered": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "exclusion": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagFormat_proximity(value, elGetter);
}


/* eslint-enable */
