/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary HookswitchID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HookswitchID  ::=  OCTET STRING
 * ```
 */
export
type HookswitchID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_HookswitchID: $.ASN1Decoder<HookswitchID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HookswitchID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HookswitchID (el: _Element): HookswitchID {
    if (!_cached_decoder_for_HookswitchID) { _cached_decoder_for_HookswitchID = $._decodeOctetString; }
    return _cached_decoder_for_HookswitchID(el);
}

let _cached_encoder_for_HookswitchID: $.ASN1Encoder<HookswitchID> | null = null;

/**
 * @summary Encodes a(n) HookswitchID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HookswitchID, encoded as an ASN.1 Element.
 */
export
function _encode_HookswitchID (value: HookswitchID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HookswitchID) { _cached_encoder_for_HookswitchID = $._encodeOctetString; }
    return _cached_encoder_for_HookswitchID(value, elGetter);
}


/* eslint-enable */
