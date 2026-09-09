/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RegistrationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationInfo  ::=  BIT STRING
 * {    segmentID                ( 0),
 *     privateData                ( 1) }
 * ```
 */
export
type RegistrationInfo = BIT_STRING;

/**
 * @summary RegistrationInfo_segmentID
 * @constant
 */
export
const RegistrationInfo_segmentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary segmentID
 * @constant
 */
export
const segmentID: number = RegistrationInfo_segmentID; /* SHORT_NAMED_BIT */

/**
 * @summary RegistrationInfo_privateData
 * @constant
 */
export
const RegistrationInfo_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = RegistrationInfo_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RegistrationInfo: $.ASN1Decoder<RegistrationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationInfo (el: _Element): RegistrationInfo {
    if (!_cached_decoder_for_RegistrationInfo) { _cached_decoder_for_RegistrationInfo = $._decodeBitString; }
    return _cached_decoder_for_RegistrationInfo(el);
}

let _cached_encoder_for_RegistrationInfo: $.ASN1Encoder<RegistrationInfo> | null = null;

/**
 * @summary Encodes a(n) RegistrationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationInfo (value: RegistrationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationInfo) { _cached_encoder_for_RegistrationInfo = $._encodeBitString; }
    return _cached_encoder_for_RegistrationInfo(value, elGetter);
}


/* eslint-enable */
