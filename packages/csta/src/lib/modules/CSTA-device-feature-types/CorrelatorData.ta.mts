/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CorrelatorData
 * @description
 *
 * Computing sub-domain data attached to a call so computing functions can share
 * their own information (database key, command sequence, file name, etc.).
 * Stays with the call for its life; a null string clears it. Consultation Call
 * correlator data applies only to the secondary call. See also User Data
 * (ECMA-269 §6.1.2.4). ECMA-269 §12.2.10.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelatorData  ::=  OCTET STRING
 * ```
 */
export
type CorrelatorData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CorrelatorData: $.ASN1Decoder<CorrelatorData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelatorData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorrelatorData (el: _Element): CorrelatorData {
    if (!_cached_decoder_for_CorrelatorData) { _cached_decoder_for_CorrelatorData = $._decodeOctetString; }
    return _cached_decoder_for_CorrelatorData(el);
}

let _cached_encoder_for_CorrelatorData: $.ASN1Encoder<CorrelatorData> | null = null;

/**
 * @summary Encodes a(n) CorrelatorData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelatorData, encoded as an ASN.1 Element.
 */
export
function _encode_CorrelatorData (value: CorrelatorData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorrelatorData) { _cached_encoder_for_CorrelatorData = $._encodeOctetString; }
    return _cached_encoder_for_CorrelatorData(value, elGetter);
}


/* eslint-enable */
