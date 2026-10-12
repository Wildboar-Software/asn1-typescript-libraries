/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VisitedPLMNID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VisitedPLMNID  ::=  OCTET STRING
 * ```
 */
export
type VisitedPLMNID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_VisitedPLMNID: $.ASN1Decoder<VisitedPLMNID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VisitedPLMNID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VisitedPLMNID (el: _Element): VisitedPLMNID {
    if (!_cached_decoder_for_VisitedPLMNID) { _cached_decoder_for_VisitedPLMNID = $._decodeOctetString; }
    return _cached_decoder_for_VisitedPLMNID(el);
}

let _cached_encoder_for_VisitedPLMNID: $.ASN1Encoder<VisitedPLMNID> | null = null;

/**
 * @summary Encodes a(n) VisitedPLMNID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisitedPLMNID, encoded as an ASN.1 Element.
 */
export
function _encode_VisitedPLMNID (value: VisitedPLMNID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VisitedPLMNID) { _cached_encoder_for_VisitedPLMNID = $._encodeOctetString; }
    return _cached_encoder_for_VisitedPLMNID(value, elGetter);
}


/* eslint-enable */
