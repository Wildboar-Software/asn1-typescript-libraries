/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SingletonRange, _decode_SingletonRange, _encode_SingletonRange } from "../PKIS/SingletonRange.ta.mjs";
// export { SingletonRange, _decode_SingletonRange, _encode_SingletonRange } from "../PKIS/SingletonRange.ta.mjs";


/**
 * @summary SingletonChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SingletonChoice  ::=  CHOICE {
 *  uniqueSingleton     INTEGER (0..9223372036854775807),
 *   -- The implied value of the singleton being
 *   -- specified in this case is TRUE.
 *   -- Note that there isn’t any way to set a
 *   -- singleton value to FALSE, except by using the
 *   -- SingletonRange functions with identical lower
 *   -- and upper bounds.
 *  singletonRange      SingletonRange
 * }
 * ```
 */
export
type SingletonChoice =
    { uniqueSingleton: INTEGER } /* CHOICE_ALT_ROOT */
    | { singletonRange: SingletonRange } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SingletonChoice: $.ASN1Decoder<SingletonChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SingletonChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SingletonChoice (el: _Element): SingletonChoice {
    if (!_cached_decoder_for_SingletonChoice) { _cached_decoder_for_SingletonChoice = $._decode_inextensible_choice<SingletonChoice>({
    "UNIVERSAL 2": [ "uniqueSingleton", $._decodeInteger ],
    "UNIVERSAL 16": [ "singletonRange", _decode_SingletonRange ]
}); }
    return _cached_decoder_for_SingletonChoice(el);
}

let _cached_encoder_for_SingletonChoice: $.ASN1Encoder<SingletonChoice> | null = null;

/**
 * @summary Encodes a(n) SingletonChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SingletonChoice, encoded as an ASN.1 Element.
 */
export
function _encode_SingletonChoice (value: SingletonChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SingletonChoice) { _cached_encoder_for_SingletonChoice = $._encode_choice<SingletonChoice>({
    "uniqueSingleton": $._encodeInteger,
    "singletonRange": _encode_SingletonRange,
}, $.BER); }
    return _cached_encoder_for_SingletonChoice(value, elGetter);
}


/* eslint-enable */
