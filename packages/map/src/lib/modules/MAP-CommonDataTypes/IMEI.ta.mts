/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_TBCD_STRING, _encode_TBCD_STRING, TBCD_STRING } from "../MAP-CommonDataTypes/TBCD-STRING.ta.mjs";


/**
 * @summary IMEI
 * @description
 *
 * International Mobile Station Equipment Identity and Software Version Number
 * (SVN) as in 3GPP TS 23.003. `TBCD-STRING` of 8 octets. If the SVN is not
 * present the last octet shall contain digit 0 and a filler. If present, the
 * SVN shall be in the last octet.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.3, 7.6.2.3a and 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEI  ::=  TBCD-STRING (SIZE (8))
 * ```
 */
export
type IMEI = TBCD_STRING; // DefinedType

let _cached_decoder_for_IMEI: $.ASN1Decoder<IMEI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMEI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMEI (el: _Element): IMEI {
    if (!_cached_decoder_for_IMEI) { _cached_decoder_for_IMEI = _decode_TBCD_STRING; }
    return _cached_decoder_for_IMEI(el);
}

let _cached_encoder_for_IMEI: $.ASN1Encoder<IMEI> | null = null;

/**
 * @summary Encodes a(n) IMEI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMEI, encoded as an ASN.1 Element.
 */
export
function _encode_IMEI (value: IMEI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMEI) { _cached_encoder_for_IMEI = _encode_TBCD_STRING; }
    return _cached_encoder_for_IMEI(value, elGetter);
}


/* eslint-enable */
