/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SysStatRegisterID
 * @description
 *
 * Identifies a system-status registration. ECMA-269 §12.3.31.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SysStatRegisterID  ::=  OCTET STRING
 * ```
 */
export
type SysStatRegisterID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SysStatRegisterID: $.ASN1Decoder<SysStatRegisterID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SysStatRegisterID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SysStatRegisterID (el: _Element): SysStatRegisterID {
    if (!_cached_decoder_for_SysStatRegisterID) { _cached_decoder_for_SysStatRegisterID = $._decodeOctetString; }
    return _cached_decoder_for_SysStatRegisterID(el);
}

let _cached_encoder_for_SysStatRegisterID: $.ASN1Encoder<SysStatRegisterID> | null = null;

/**
 * @summary Encodes a(n) SysStatRegisterID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SysStatRegisterID, encoded as an ASN.1 Element.
 */
export
function _encode_SysStatRegisterID (value: SysStatRegisterID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SysStatRegisterID) { _cached_encoder_for_SysStatRegisterID = $._encodeOctetString; }
    return _cached_encoder_for_SysStatRegisterID(value, elGetter);
}


/* eslint-enable */
