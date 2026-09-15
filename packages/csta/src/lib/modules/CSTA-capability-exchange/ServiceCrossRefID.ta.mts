/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ServiceCrossRefID
 * @description
 * Correlator associating subsequent Switching Function Devices services with a
 * Get Switching Function Devices request (ECMA-269 §13.1.5.2.1, ECMA-285
 * §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceCrossRefID  ::=  OCTET STRING
 * ```
 */
export
type ServiceCrossRefID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ServiceCrossRefID: $.ASN1Decoder<ServiceCrossRefID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceCrossRefID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceCrossRefID (el: _Element): ServiceCrossRefID {
    if (!_cached_decoder_for_ServiceCrossRefID) { _cached_decoder_for_ServiceCrossRefID = $._decodeOctetString; }
    return _cached_decoder_for_ServiceCrossRefID(el);
}

let _cached_encoder_for_ServiceCrossRefID: $.ASN1Encoder<ServiceCrossRefID> | null = null;

/**
 * @summary Encodes a(n) ServiceCrossRefID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceCrossRefID, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceCrossRefID (value: ServiceCrossRefID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceCrossRefID) { _cached_encoder_for_ServiceCrossRefID = $._encodeOctetString; }
    return _cached_encoder_for_ServiceCrossRefID(value, elGetter);
}


/* eslint-enable */
