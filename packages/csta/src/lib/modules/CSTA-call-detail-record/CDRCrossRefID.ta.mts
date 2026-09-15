/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CDRCrossRefID
 * @description
 *
 * Correlates subsequent CDR services to Start Call Detail Records Transmission.
 * ECMA-269 §12.3.8.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRCrossRefID  ::=  OCTET STRING
 * ```
 */
export
type CDRCrossRefID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CDRCrossRefID: $.ASN1Decoder<CDRCrossRefID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRCrossRefID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRCrossRefID (el: _Element): CDRCrossRefID {
    if (!_cached_decoder_for_CDRCrossRefID) { _cached_decoder_for_CDRCrossRefID = $._decodeOctetString; }
    return _cached_decoder_for_CDRCrossRefID(el);
}

let _cached_encoder_for_CDRCrossRefID: $.ASN1Encoder<CDRCrossRefID> | null = null;

/**
 * @summary Encodes a(n) CDRCrossRefID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRCrossRefID, encoded as an ASN.1 Element.
 */
export
function _encode_CDRCrossRefID (value: CDRCrossRefID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRCrossRefID) { _cached_encoder_for_CDRCrossRefID = $._encodeOctetString; }
    return _cached_encoder_for_CDRCrossRefID(value, elGetter);
}


/* eslint-enable */
