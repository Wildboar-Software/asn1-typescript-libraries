/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary IORegisterReqID
 * @description
 *
 * Identifies an I/O registration for which the computing function (as I/O
 * server) receives I/O requests. May apply to one device or all devices in the
 * sub-domain. Returned from I/O Register; valid until registration ends. Unique
 * across a CSTA service boundary. ECMA-269 §12.3.16.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IORegisterReqID  ::=  OCTET STRING
 * ```
 */
export
type IORegisterReqID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_IORegisterReqID: $.ASN1Decoder<IORegisterReqID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IORegisterReqID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IORegisterReqID (el: _Element): IORegisterReqID {
    if (!_cached_decoder_for_IORegisterReqID) { _cached_decoder_for_IORegisterReqID = $._decodeOctetString; }
    return _cached_decoder_for_IORegisterReqID(el);
}

let _cached_encoder_for_IORegisterReqID: $.ASN1Encoder<IORegisterReqID> | null = null;

/**
 * @summary Encodes a(n) IORegisterReqID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IORegisterReqID, encoded as an ASN.1 Element.
 */
export
function _encode_IORegisterReqID (value: IORegisterReqID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IORegisterReqID) { _cached_encoder_for_IORegisterReqID = $._encodeOctetString; }
    return _cached_encoder_for_IORegisterReqID(value, elGetter);
}


/* eslint-enable */
