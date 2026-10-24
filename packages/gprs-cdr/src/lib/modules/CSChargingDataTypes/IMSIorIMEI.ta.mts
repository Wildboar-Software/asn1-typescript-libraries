/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSIorIMEI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSIorIMEI  ::=  CHOICE {
 *    imsi         [0] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    imei         [1] IMPLICIT OCTET STRING ( SIZE( 8 ) )}
 * ```
 */
export
type IMSIorIMEI =
    { imsi: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { imei: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IMSIorIMEI: $.ASN1Decoder<IMSIorIMEI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSIorIMEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSIorIMEI (el: _Element): IMSIorIMEI {
    if (!_cached_decoder_for_IMSIorIMEI) { _cached_decoder_for_IMSIorIMEI = $._decode_inextensible_choice<IMSIorIMEI>({
    "CONTEXT 0": [ "imsi", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "imei", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    const _decoded_IMSIorIMEI = _cached_decoder_for_IMSIorIMEI(el);
    if ("imsi" in _decoded_IMSIorIMEI && (_decoded_IMSIorIMEI.imsi.length < 3 || _decoded_IMSIorIMEI.imsi.length > 8)) {
        throw new ASN1SizeError("IMSIorIMEI.imsi violates SIZE constraint");
    }
    if ("imei" in _decoded_IMSIorIMEI && (_decoded_IMSIorIMEI.imei.length !== 8)) {
        throw new ASN1SizeError("IMSIorIMEI.imei violates SIZE constraint");
    }
    return _decoded_IMSIorIMEI;
}

let _cached_encoder_for_IMSIorIMEI: $.ASN1Encoder<IMSIorIMEI> | null = null;

/**
 * @summary Encodes a(n) IMSIorIMEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSIorIMEI, encoded as an ASN.1 Element.
 */
export
function _encode_IMSIorIMEI (value: IMSIorIMEI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSIorIMEI) { _cached_encoder_for_IMSIorIMEI = $._encode_choice<IMSIorIMEI>({
    "imsi": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "imei": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_IMSIorIMEI(value, elGetter);
}


/* eslint-enable */
