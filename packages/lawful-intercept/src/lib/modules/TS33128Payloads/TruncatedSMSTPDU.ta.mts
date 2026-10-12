/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TruncatedSMSTPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TruncatedSMSTPDU  ::=  OCTET STRING (SIZE(1..130))
 * ```
 */
export
type TruncatedSMSTPDU = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TruncatedSMSTPDU: $.ASN1Decoder<TruncatedSMSTPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TruncatedSMSTPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TruncatedSMSTPDU (el: _Element): TruncatedSMSTPDU {
    if (!_cached_decoder_for_TruncatedSMSTPDU) { _cached_decoder_for_TruncatedSMSTPDU = $._decodeOctetString; }
    return _cached_decoder_for_TruncatedSMSTPDU(el);
}

let _cached_encoder_for_TruncatedSMSTPDU: $.ASN1Encoder<TruncatedSMSTPDU> | null = null;

/**
 * @summary Encodes a(n) TruncatedSMSTPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TruncatedSMSTPDU, encoded as an ASN.1 Element.
 */
export
function _encode_TruncatedSMSTPDU (value: TruncatedSMSTPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TruncatedSMSTPDU) { _cached_encoder_for_TruncatedSMSTPDU = $._encodeOctetString; }
    return _cached_encoder_for_TruncatedSMSTPDU(value, elGetter);
}


/* eslint-enable */
