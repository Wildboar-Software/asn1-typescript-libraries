/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PLMNID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNID  ::=  OCTET STRING (SIZE(3))
 * ```
 */
export
type PLMNID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_PLMNID: $.ASN1Decoder<PLMNID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PLMNID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PLMNID (el: _Element): PLMNID {
    if (!_cached_decoder_for_PLMNID) { _cached_decoder_for_PLMNID = $._decodeOctetString; }
    return _cached_decoder_for_PLMNID(el);
}

let _cached_encoder_for_PLMNID: $.ASN1Encoder<PLMNID> | null = null;

/**
 * @summary Encodes a(n) PLMNID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMNID, encoded as an ASN.1 Element.
 */
export
function _encode_PLMNID (value: PLMNID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PLMNID) { _cached_encoder_for_PLMNID = $._encodeOctetString; }
    return _cached_encoder_for_PLMNID(value, elGetter);
}


/* eslint-enable */
