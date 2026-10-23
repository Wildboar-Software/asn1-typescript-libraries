/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_TBCD_STRING, _encode_TBCD_STRING, TBCD_STRING } from "../MAP-CommonDataTypes/TBCD-STRING.ta.mjs";


/**
 * @summary IMSI
 * @description
 *
 * International Mobile Subscriber Identity as in 3GPP TS 23.003. Encoded as
 * `TBCD-STRING` of 3..8 octets (6..15 digits). Digits of MCC, MNC, MSIN are
 * concatenated in that order.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.1 and 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI  ::=  TBCD-STRING (SIZE (3..8))
 * ```
 */
export
type IMSI = TBCD_STRING; // DefinedType

let _cached_decoder_for_IMSI: $.ASN1Decoder<IMSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSI (el: _Element): IMSI {
    if (!_cached_decoder_for_IMSI) { _cached_decoder_for_IMSI = _decode_TBCD_STRING; }
    return _cached_decoder_for_IMSI(el);
}

let _cached_encoder_for_IMSI: $.ASN1Encoder<IMSI> | null = null;

/**
 * @summary Encodes a(n) IMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSI, encoded as an ASN.1 Element.
 */
export
function _encode_IMSI (value: IMSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSI) { _cached_encoder_for_IMSI = _encode_TBCD_STRING; }
    return _cached_encoder_for_IMSI(value, elGetter);
}


/* eslint-enable */
