/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_TBCD_STRING, _encode_TBCD_STRING, TBCD_STRING } from "../MAP-CommonDataTypes/TBCD-STRING.ta.mjs";


/**
 * @summary RouteingNumber
 * @description
 *
 * Number used for routeing that identifies a network operator (Mobile Number
 * Portability). See 3GPP TS 23.066. Encoded as TBCD-STRING of 1..5 octets.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.63 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteingNumber  ::=  TBCD-STRING (SIZE (1..5))
 * ```
 */
export
type RouteingNumber = TBCD_STRING; // DefinedType

let _cached_decoder_for_RouteingNumber: $.ASN1Decoder<RouteingNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteingNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteingNumber (el: _Element): RouteingNumber {
    if (!_cached_decoder_for_RouteingNumber) { _cached_decoder_for_RouteingNumber = _decode_TBCD_STRING; }
    return _cached_decoder_for_RouteingNumber(el);
}

let _cached_encoder_for_RouteingNumber: $.ASN1Encoder<RouteingNumber> | null = null;

/**
 * @summary Encodes a(n) RouteingNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteingNumber, encoded as an ASN.1 Element.
 */
export
function _encode_RouteingNumber (value: RouteingNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteingNumber) { _cached_encoder_for_RouteingNumber = _encode_TBCD_STRING; }
    return _cached_encoder_for_RouteingNumber(value, elGetter);
}


/* eslint-enable */
