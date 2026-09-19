/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingGeodeticLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingGeodeticLocation  ::=  [162] IMPLICIT OCTET STRING(SIZE(8..13))
 * ```
 */
export
type CallingGeodeticLocation = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CallingGeodeticLocation: $.ASN1Decoder<CallingGeodeticLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallingGeodeticLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallingGeodeticLocation (el: _Element): CallingGeodeticLocation {
    if (!_cached_decoder_for_CallingGeodeticLocation) { _cached_decoder_for_CallingGeodeticLocation = $._decode_implicit<CallingGeodeticLocation>(() => $._decodeOctetString); }
    return _cached_decoder_for_CallingGeodeticLocation(el);
}

let _cached_encoder_for_CallingGeodeticLocation: $.ASN1Encoder<CallingGeodeticLocation> | null = null;

/**
 * @summary Encodes a(n) CallingGeodeticLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallingGeodeticLocation, encoded as an ASN.1 Element.
 */
export
function _encode_CallingGeodeticLocation (value: CallingGeodeticLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallingGeodeticLocation) { _cached_encoder_for_CallingGeodeticLocation = $._encode_implicit(_TagClass.context, 162, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_CallingGeodeticLocation(value, elGetter);
}


/* eslint-enable */
