/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UEEPSPDNConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEEPSPDNConnection  ::=  OCTET STRING
 * ```
 */
export
type UEEPSPDNConnection = OCTET_STRING; // OctetStringType

let _cached_decoder_for_UEEPSPDNConnection: $.ASN1Decoder<UEEPSPDNConnection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UEEPSPDNConnection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UEEPSPDNConnection (el: _Element): UEEPSPDNConnection {
    if (!_cached_decoder_for_UEEPSPDNConnection) { _cached_decoder_for_UEEPSPDNConnection = $._decodeOctetString; }
    return _cached_decoder_for_UEEPSPDNConnection(el);
}

let _cached_encoder_for_UEEPSPDNConnection: $.ASN1Encoder<UEEPSPDNConnection> | null = null;

/**
 * @summary Encodes a(n) UEEPSPDNConnection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UEEPSPDNConnection, encoded as an ASN.1 Element.
 */
export
function _encode_UEEPSPDNConnection (value: UEEPSPDNConnection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UEEPSPDNConnection) { _cached_encoder_for_UEEPSPDNConnection = $._encodeOctetString; }
    return _cached_encoder_for_UEEPSPDNConnection(value, elGetter);
}


/* eslint-enable */
