/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UmtsQos
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UmtsQos  ::=  CHOICE
 * {
 *  qosMobileRadio [1] OCTET STRING,
 *  -- The qosMobileRadio parameter shall be coded in accordance with the § 10.5.6.5 of
 *  -- document [9] without the Quality of service IEI and Length of
 *  -- quality of service IE (. That is, first
 *  -- two octets carrying 'Quality of service IEI' and 'Length of quality of service
 *  -- IE' shall be excluded).
 *  qosGn [2] OCTET STRING
 *  -- qosGn parameter shall be coded in accordance with § 7.7.34 of document [17]
 * }
 * ```
 */
export
type UmtsQos =
    { qosMobileRadio: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { qosGn: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UmtsQos: $.ASN1Decoder<UmtsQos> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UmtsQos
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UmtsQos (el: _Element): UmtsQos {
    if (!_cached_decoder_for_UmtsQos) { _cached_decoder_for_UmtsQos = $._decode_inextensible_choice<UmtsQos>({
    "CONTEXT 1": [ "qosMobileRadio", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "qosGn", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_UmtsQos(el);
}

let _cached_encoder_for_UmtsQos: $.ASN1Encoder<UmtsQos> | null = null;

/**
 * @summary Encodes a(n) UmtsQos into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UmtsQos, encoded as an ASN.1 Element.
 */
export
function _encode_UmtsQos (value: UmtsQos, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UmtsQos) { _cached_encoder_for_UmtsQos = $._encode_choice<UmtsQos>({
    "qosMobileRadio": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "qosGn": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_UmtsQos(value, elGetter);
}


/* eslint-enable */
