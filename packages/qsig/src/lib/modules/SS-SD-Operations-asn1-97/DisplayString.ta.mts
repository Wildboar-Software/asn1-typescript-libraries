/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BMPStringNormal, _decode_BMPStringNormal, _encode_BMPStringNormal } from "../SS-SD-Operations-asn1-97/BMPStringNormal.ta.mjs";
import { BMPStringExtended, _decode_BMPStringExtended, _encode_BMPStringExtended } from "../SS-SD-Operations-asn1-97/BMPStringExtended.ta.mjs";

/**
 * @summary DisplayString
 * @description
 *
 * Display text coded as a BMP string. `displayStringNormal` is 2 to 64 octets.
 * `displayStringExtended` is 2 to 160 octets (ECMA-311 §6.3.1). The standard
 * does not say when to choose the extended form other than by that larger
 * bound. Keypad information cannot use the extended form.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-311/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayString  ::=  CHOICE {
 *     displayStringNormal [0] IMPLICIT BMPStringNormal,
 *     displayStringExtended [1] IMPLICIT BMPStringExtended
 * }
 * ```
 */
export
type DisplayString =
    { displayStringNormal: BMPStringNormal } /* CHOICE_ALT_ROOT */
    | { displayStringExtended: BMPStringExtended } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DisplayString: $.ASN1Decoder<DisplayString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayString (el: _Element): DisplayString {
    if (!_cached_decoder_for_DisplayString) { _cached_decoder_for_DisplayString = $._decode_inextensible_choice<DisplayString>({
    "CONTEXT 0": [ "displayStringNormal", $._decode_implicit<BMPStringNormal>(() => _decode_BMPStringNormal) ],
    "CONTEXT 1": [ "displayStringExtended", $._decode_implicit<BMPStringExtended>(() => _decode_BMPStringExtended) ]
}); }
    return _cached_decoder_for_DisplayString(el);
}

let _cached_encoder_for_DisplayString: $.ASN1Encoder<DisplayString> | null = null;

/**
 * @summary Encodes a(n) DisplayString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayString, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayString (value: DisplayString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayString) { _cached_encoder_for_DisplayString = $._encode_choice<DisplayString>({
    "displayStringNormal": $._encode_implicit(_TagClass.context, 0, () => _encode_BMPStringNormal, $.BER),
    "displayStringExtended": $._encode_implicit(_TagClass.context, 1, () => _encode_BMPStringExtended, $.BER),
}, $.BER); }
    return _cached_encoder_for_DisplayString(value, elGetter);
}

/* eslint-enable */
