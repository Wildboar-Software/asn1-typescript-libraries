/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSI_Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI-Address  ::=  OCTET STRING
 * ```
 */
export
type IMSI_Address = OCTET_STRING; // OctetStringType

let _cached_decoder_for_IMSI_Address: $.ASN1Decoder<IMSI_Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSI_Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSI_Address (el: _Element): IMSI_Address {
    if (!_cached_decoder_for_IMSI_Address) { _cached_decoder_for_IMSI_Address = $._decodeOctetString; }
    return _cached_decoder_for_IMSI_Address(el);
}

let _cached_encoder_for_IMSI_Address: $.ASN1Encoder<IMSI_Address> | null = null;

/**
 * @summary Encodes a(n) IMSI_Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSI_Address, encoded as an ASN.1 Element.
 */
export
function _encode_IMSI_Address (value: IMSI_Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSI_Address) { _cached_encoder_for_IMSI_Address = $._encodeOctetString; }
    return _cached_encoder_for_IMSI_Address(value, elGetter);
}


/* eslint-enable */
