/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Credentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Credentials              ::=    CHOICE
 * { unused             [0]   NULL
 * , used               [1]   OCTET STRING (SIZE (8 .. 256))
 * }
 * ```
 */
export
type Credentials =
    { unused: NULL } /* CHOICE_ALT_ROOT */
    | { used: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Credentials: $.ASN1Decoder<Credentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Credentials
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Credentials (el: _Element): Credentials {
    if (!_cached_decoder_for_Credentials) { _cached_decoder_for_Credentials = $._decode_inextensible_choice<Credentials>({
    "CONTEXT 0": [ "unused", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "used", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    const _decoded = _cached_decoder_for_Credentials(el);
    if ("used" in _decoded) {
        if (_decoded.used.length < 8 || _decoded.used.length > 256) {
            throw new ASN1SizeError("Credentials.used violates SIZE (8..256)");
        }
    }
    return _decoded;
}

let _cached_encoder_for_Credentials: $.ASN1Encoder<Credentials> | null = null;

/**
 * @summary Encodes a(n) Credentials into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Credentials, encoded as an ASN.1 Element.
 */
export
function _encode_Credentials (value: Credentials, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Credentials) { _cached_encoder_for_Credentials = $._encode_choice<Credentials>({
    "unused": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "used": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_Credentials(value, elGetter);
}


/* eslint-enable */
