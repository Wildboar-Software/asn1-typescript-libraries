/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TS36413CoarseUELocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TS36413CoarseUELocation  ::=  OCTET STRING
 * ```
 */
export
type TS36413CoarseUELocation = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TS36413CoarseUELocation: $.ASN1Decoder<TS36413CoarseUELocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TS36413CoarseUELocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TS36413CoarseUELocation (el: _Element): TS36413CoarseUELocation {
    if (!_cached_decoder_for_TS36413CoarseUELocation) { _cached_decoder_for_TS36413CoarseUELocation = $._decodeOctetString; }
    return _cached_decoder_for_TS36413CoarseUELocation(el);
}

let _cached_encoder_for_TS36413CoarseUELocation: $.ASN1Encoder<TS36413CoarseUELocation> | null = null;

/**
 * @summary Encodes a(n) TS36413CoarseUELocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TS36413CoarseUELocation, encoded as an ASN.1 Element.
 */
export
function _encode_TS36413CoarseUELocation (value: TS36413CoarseUELocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TS36413CoarseUELocation) { _cached_encoder_for_TS36413CoarseUELocation = $._encodeOctetString; }
    return _cached_encoder_for_TS36413CoarseUELocation(value, elGetter);
}


/* eslint-enable */
