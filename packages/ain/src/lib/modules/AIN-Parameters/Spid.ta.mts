/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Spid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Spid  ::=  [49] IMPLICIT OCTET STRING(SIZE(3..20))
 * ```
 */
export
type Spid = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Spid: $.ASN1Decoder<Spid> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Spid
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Spid (el: _Element): Spid {
    if (!_cached_decoder_for_Spid) { _cached_decoder_for_Spid = $._decode_implicit<Spid>(() => $._decodeOctetString); }
    return _cached_decoder_for_Spid(el);
}

let _cached_encoder_for_Spid: $.ASN1Encoder<Spid> | null = null;

/**
 * @summary Encodes a(n) Spid into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Spid, encoded as an ASN.1 Element.
 */
export
function _encode_Spid (value: Spid, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Spid) { _cached_encoder_for_Spid = $._encode_implicit(_TagClass.context, 49, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_Spid(value, elGetter);
}


/* eslint-enable */
