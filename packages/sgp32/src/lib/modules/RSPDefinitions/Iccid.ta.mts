/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Iccid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Iccid  ::=  [APPLICATION 26] OCTET STRING (SIZE(10))
 * ```
 */
export
type Iccid = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Iccid: $.ASN1Decoder<Iccid> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Iccid
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Iccid (el: _Element): Iccid {
    if (!_cached_decoder_for_Iccid) { _cached_decoder_for_Iccid = $._decode_implicit<Iccid>(() => $._decodeOctetString); }
    return _cached_decoder_for_Iccid(el);
}

let _cached_encoder_for_Iccid: $.ASN1Encoder<Iccid> | null = null;

/**
 * @summary Encodes a(n) Iccid into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Iccid, encoded as an ASN.1 Element.
 */
export
function _encode_Iccid (value: Iccid, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Iccid) { _cached_encoder_for_Iccid = $._encode_implicit(_TagClass.application, 26, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_Iccid(value, elGetter);
}


/* eslint-enable */
