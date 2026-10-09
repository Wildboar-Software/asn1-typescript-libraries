/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Occurrences_values, _decode_Occurrences_values, _encode_Occurrences_values } from "../ElementSpecification-eSpec-2/Occurrences-values.ta.mjs";
// export { Occurrences_values, _decode_Occurrences_values, _encode_Occurrences_values } from "../ElementSpecification-eSpec-2/Occurrences-values.ta.mjs";


/**
 * @summary Occurrences
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Occurrences  ::=  CHOICE {
 *     all     [1] IMPLICIT NULL,
 *     last    [2] IMPLICIT NULL,
 *     values  [3] IMPLICIT SEQUENCE {
 *         start   [1] IMPLICIT INTEGER,
 *         -- If 'start' alone is included, then
 *         -- single occurrence is requested
 *         howMany [2] IMPLICIT INTEGER OPTIONAL
 *         -- For example, if 'start' is 5 and 'howMany' is 6,
 *         -- then request is for "occurrences 5 through 10."
 *     }
 * }
 * ```
 */
export
type Occurrences =
    { all: NULL } /* CHOICE_ALT_ROOT */
    | { last: NULL } /* CHOICE_ALT_ROOT */
    | { values: Occurrences_values } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Occurrences: $.ASN1Decoder<Occurrences> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Occurrences
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Occurrences (el: _Element): Occurrences {
    if (!_cached_decoder_for_Occurrences) { _cached_decoder_for_Occurrences = $._decode_inextensible_choice<Occurrences>({
    "CONTEXT 1": [ "all", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "last", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "values", $._decode_implicit<Occurrences_values>(() => _decode_Occurrences_values) ]
}); }
    return _cached_decoder_for_Occurrences(el);
}

let _cached_encoder_for_Occurrences: $.ASN1Encoder<Occurrences> | null = null;

/**
 * @summary Encodes a(n) Occurrences into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Occurrences, encoded as an ASN.1 Element.
 */
export
function _encode_Occurrences (value: Occurrences, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Occurrences) { _cached_encoder_for_Occurrences = $._encode_choice<Occurrences>({
    "all": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "last": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "values": $._encode_implicit(_TagClass.context, 3, () => _encode_Occurrences_values, $.BER),
}, $.BER); }
    return _cached_encoder_for_Occurrences(value, elGetter);
}


/* eslint-enable */
