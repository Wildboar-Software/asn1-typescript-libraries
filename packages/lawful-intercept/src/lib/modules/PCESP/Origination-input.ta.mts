/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Origination_input
 * @description
 *
 * The input string on `Origination`.
 *
 * `userinput` and `translationinput` are each a `VisibleString` of size 1 to
 * 32, extensible. This edition does not define how the two differ, or the
 * character set.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Origination-input ::= CHOICE {
 *     userinput               [6] VisibleString (SIZE (1..32, ...)),
 *     translationinput        [7] VisibleString (SIZE (1..32, ...)),
 *     ...
 * }
 * ```
 */
export
type Origination_input =
    /**
     * User input, size 1 to 32, extensible. This edition does not
     * define the character set or how this differs from
     * `translationinput`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    { userinput: VisibleString } /* CHOICE_ALT_ROOT */
    /**
     * Translation input, size 1 to 32, extensible. This edition
     * does not define the character set or how this differs from
     * `userinput`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { translationinput: VisibleString } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Origination_input: $.ASN1Decoder<Origination_input> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Origination_input
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Origination_input (el: _Element): Origination_input {
    if (!_cached_decoder_for_Origination_input) { _cached_decoder_for_Origination_input = $._decode_extensible_choice<Origination_input>({
    "CONTEXT 6": [ "userinput", $._decode_implicit<VisibleString>(() => $._decodeVisibleString) ],
    "CONTEXT 7": [ "translationinput", $._decode_implicit<VisibleString>(() => $._decodeVisibleString) ]
}); }
    return _cached_decoder_for_Origination_input(el);
}

let _cached_encoder_for_Origination_input: $.ASN1Encoder<Origination_input> | null = null;

/**
 * @summary Encodes a(n) Origination_input into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Origination_input, encoded as an ASN.1 Element.
 */
export
function _encode_Origination_input (value: Origination_input, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Origination_input) { _cached_encoder_for_Origination_input = $._encode_choice<Origination_input>({
    "userinput": $._encode_implicit(_TagClass.context, 6, () => $._encodeVisibleString, $.BER),
    "translationinput": $._encode_implicit(_TagClass.context, 7, () => $._encodeVisibleString, $.BER),
}, $.BER); }
    return _cached_encoder_for_Origination_input(value, elGetter);
}


/* eslint-enable */
