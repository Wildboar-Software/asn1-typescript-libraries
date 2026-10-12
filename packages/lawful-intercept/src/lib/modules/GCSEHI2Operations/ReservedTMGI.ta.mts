/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReservedTMGI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservedTMGI  ::=  OCTET STRING
 * ```
 */
export
type ReservedTMGI = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ReservedTMGI: $.ASN1Decoder<ReservedTMGI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReservedTMGI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReservedTMGI (el: _Element): ReservedTMGI {
    if (!_cached_decoder_for_ReservedTMGI) { _cached_decoder_for_ReservedTMGI = $._decodeOctetString; }
    return _cached_decoder_for_ReservedTMGI(el);
}

let _cached_encoder_for_ReservedTMGI: $.ASN1Encoder<ReservedTMGI> | null = null;

/**
 * @summary Encodes a(n) ReservedTMGI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReservedTMGI, encoded as an ASN.1 Element.
 */
export
function _encode_ReservedTMGI (value: ReservedTMGI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReservedTMGI) { _cached_encoder_for_ReservedTMGI = $._encodeOctetString; }
    return _cached_encoder_for_ReservedTMGI(value, elGetter);
}


/* eslint-enable */
