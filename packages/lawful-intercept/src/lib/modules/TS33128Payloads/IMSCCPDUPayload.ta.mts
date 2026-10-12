/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSCCPDUPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSCCPDUPayload  ::=  OCTET STRING
 * ```
 */
export
type IMSCCPDUPayload = OCTET_STRING; // OctetStringType

let _cached_decoder_for_IMSCCPDUPayload: $.ASN1Decoder<IMSCCPDUPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSCCPDUPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSCCPDUPayload (el: _Element): IMSCCPDUPayload {
    if (!_cached_decoder_for_IMSCCPDUPayload) { _cached_decoder_for_IMSCCPDUPayload = $._decodeOctetString; }
    return _cached_decoder_for_IMSCCPDUPayload(el);
}

let _cached_encoder_for_IMSCCPDUPayload: $.ASN1Encoder<IMSCCPDUPayload> | null = null;

/**
 * @summary Encodes a(n) IMSCCPDUPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSCCPDUPayload, encoded as an ASN.1 Element.
 */
export
function _encode_IMSCCPDUPayload (value: IMSCCPDUPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSCCPDUPayload) { _cached_encoder_for_IMSCCPDUPayload = $._encodeOctetString; }
    return _cached_encoder_for_IMSCCPDUPayload(value, elGetter);
}


/* eslint-enable */
