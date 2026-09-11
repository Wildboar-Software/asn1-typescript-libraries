/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RingerID
 * @description
 *
 * Ringer associated with a physical element. A device may have one or more
 * ringers. ECMA-269 §12.3.26.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RingerID  ::=  OCTET STRING
 * ```
 */
export
type RingerID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_RingerID: $.ASN1Decoder<RingerID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RingerID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RingerID (el: _Element): RingerID {
    if (!_cached_decoder_for_RingerID) { _cached_decoder_for_RingerID = $._decodeOctetString; }
    return _cached_decoder_for_RingerID(el);
}

let _cached_encoder_for_RingerID: $.ASN1Encoder<RingerID> | null = null;

/**
 * @summary Encodes a(n) RingerID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RingerID, encoded as an ASN.1 Element.
 */
export
function _encode_RingerID (value: RingerID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RingerID) { _cached_encoder_for_RingerID = $._encodeOctetString; }
    return _cached_encoder_for_RingerID(value, elGetter);
}


/* eslint-enable */
