/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary StringOrNumeric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StringOrNumeric  ::=  CHOICE {
 *     string  [1] IMPLICIT InternationalString,
 *     numeric [2] IMPLICIT INTEGER
 * }
 * ```
 */
export
type StringOrNumeric =
    { string_: InternationalString } /* CHOICE_ALT_ROOT */
    | { numeric: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_StringOrNumeric: $.ASN1Decoder<StringOrNumeric> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StringOrNumeric
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StringOrNumeric (el: _Element): StringOrNumeric {
    if (!_cached_decoder_for_StringOrNumeric) { _cached_decoder_for_StringOrNumeric = $._decode_inextensible_choice<StringOrNumeric>({
    "CONTEXT 1": [ "string_", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 2": [ "numeric", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_StringOrNumeric(el);
}

let _cached_encoder_for_StringOrNumeric: $.ASN1Encoder<StringOrNumeric> | null = null;

/**
 * @summary Encodes a(n) StringOrNumeric into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StringOrNumeric, encoded as an ASN.1 Element.
 */
export
function _encode_StringOrNumeric (value: StringOrNumeric, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StringOrNumeric) { _cached_encoder_for_StringOrNumeric = $._encode_choice<StringOrNumeric>({
    "string_": $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER),
    "numeric": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_StringOrNumeric(value, elGetter);
}


/* eslint-enable */
