/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AuditoryApparatusID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusID  ::=  OCTET STRING
 * ```
 */
export
type AuditoryApparatusID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AuditoryApparatusID: $.ASN1Decoder<AuditoryApparatusID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditoryApparatusID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditoryApparatusID (el: _Element): AuditoryApparatusID {
    if (!_cached_decoder_for_AuditoryApparatusID) { _cached_decoder_for_AuditoryApparatusID = $._decodeOctetString; }
    return _cached_decoder_for_AuditoryApparatusID(el);
}

let _cached_encoder_for_AuditoryApparatusID: $.ASN1Encoder<AuditoryApparatusID> | null = null;

/**
 * @summary Encodes a(n) AuditoryApparatusID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditoryApparatusID, encoded as an ASN.1 Element.
 */
export
function _encode_AuditoryApparatusID (value: AuditoryApparatusID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditoryApparatusID) { _cached_encoder_for_AuditoryApparatusID = $._encodeOctetString; }
    return _cached_encoder_for_AuditoryApparatusID(value, elGetter);
}


/* eslint-enable */
