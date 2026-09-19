/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeOfDay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeOfDay  ::=  OCTET STRING
 * ```
 */
export
type TimeOfDay = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TimeOfDay: $.ASN1Decoder<TimeOfDay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeOfDay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeOfDay (el: _Element): TimeOfDay {
    if (!_cached_decoder_for_TimeOfDay) { _cached_decoder_for_TimeOfDay = $._decodeOctetString; }
    return _cached_decoder_for_TimeOfDay(el);
}

let _cached_encoder_for_TimeOfDay: $.ASN1Encoder<TimeOfDay> | null = null;

/**
 * @summary Encodes a(n) TimeOfDay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeOfDay, encoded as an ASN.1 Element.
 */
export
function _encode_TimeOfDay (value: TimeOfDay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeOfDay) { _cached_encoder_for_TimeOfDay = $._encodeOctetString; }
    return _cached_encoder_for_TimeOfDay(value, elGetter);
}


/* eslint-enable */
