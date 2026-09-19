/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GenericDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericDigits  ::=  [149] IMPLICIT OCTET STRING (SIZE(2..11))
 * ```
 */
export
type GenericDigits = OCTET_STRING; // OctetStringType

let _cached_decoder_for_GenericDigits: $.ASN1Decoder<GenericDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericDigits (el: _Element): GenericDigits {
    if (!_cached_decoder_for_GenericDigits) { _cached_decoder_for_GenericDigits = $._decode_implicit<GenericDigits>(() => $._decodeOctetString); }
    return _cached_decoder_for_GenericDigits(el);
}

let _cached_encoder_for_GenericDigits: $.ASN1Encoder<GenericDigits> | null = null;

/**
 * @summary Encodes a(n) GenericDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericDigits, encoded as an ASN.1 Element.
 */
export
function _encode_GenericDigits (value: GenericDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericDigits) { _cached_encoder_for_GenericDigits = $._encode_implicit(_TagClass.context, 149, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_GenericDigits(value, elGetter);
}


/* eslint-enable */
