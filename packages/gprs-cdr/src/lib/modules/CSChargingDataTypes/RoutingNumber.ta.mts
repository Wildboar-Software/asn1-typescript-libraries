/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoutingNumber
 * @description
 *
 * The routing number field of the HLR interrogation record contains either a
 * mobile station roaming number or, in case of call forwarding, a
 * forwarded-to number.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.76.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingNumber  ::=  CHOICE {
 *    roaming       [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ),
 *    forwarded     [2] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) )}
 * ```
 */
export
type RoutingNumber =
    { roaming: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { forwarded: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RoutingNumber: $.ASN1Decoder<RoutingNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingNumber (el: _Element): RoutingNumber {
    if (!_cached_decoder_for_RoutingNumber) { _cached_decoder_for_RoutingNumber = $._decode_inextensible_choice<RoutingNumber>({
    "CONTEXT 1": [ "roaming", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "forwarded", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    const _decoded_RoutingNumber = _cached_decoder_for_RoutingNumber(el);
    if ("roaming" in _decoded_RoutingNumber && (_decoded_RoutingNumber.roaming.length < 1 || _decoded_RoutingNumber.roaming.length > 9)) {
        throw new ASN1SizeError("RoutingNumber.roaming violates SIZE constraint");
    }
    if ("forwarded" in _decoded_RoutingNumber && (_decoded_RoutingNumber.forwarded.length < 1 || _decoded_RoutingNumber.forwarded.length > 20)) {
        throw new ASN1SizeError("RoutingNumber.forwarded violates SIZE constraint");
    }
    return _decoded_RoutingNumber;
}

let _cached_encoder_for_RoutingNumber: $.ASN1Encoder<RoutingNumber> | null = null;

/**
 * @summary Encodes a(n) RoutingNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingNumber, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingNumber (value: RoutingNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingNumber) { _cached_encoder_for_RoutingNumber = $._encode_choice<RoutingNumber>({
    "roaming": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "forwarded": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_RoutingNumber(value, elGetter);
}


/* eslint-enable */
