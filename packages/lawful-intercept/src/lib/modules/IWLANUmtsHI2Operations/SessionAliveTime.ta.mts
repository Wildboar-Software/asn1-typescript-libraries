/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SessionAliveTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionAliveTime  ::=  OCTET STRING
 * ```
 */
export
type SessionAliveTime = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SessionAliveTime: $.ASN1Decoder<SessionAliveTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SessionAliveTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SessionAliveTime (el: _Element): SessionAliveTime {
    if (!_cached_decoder_for_SessionAliveTime) { _cached_decoder_for_SessionAliveTime = $._decodeOctetString; }
    return _cached_decoder_for_SessionAliveTime(el);
}

let _cached_encoder_for_SessionAliveTime: $.ASN1Encoder<SessionAliveTime> | null = null;

/**
 * @summary Encodes a(n) SessionAliveTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SessionAliveTime, encoded as an ASN.1 Element.
 */
export
function _encode_SessionAliveTime (value: SessionAliveTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SessionAliveTime) { _cached_encoder_for_SessionAliveTime = $._encodeOctetString; }
    return _cached_encoder_for_SessionAliveTime(value, elGetter);
}


/* eslint-enable */
