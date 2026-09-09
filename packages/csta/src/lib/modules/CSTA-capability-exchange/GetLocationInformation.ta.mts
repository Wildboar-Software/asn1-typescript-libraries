/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetLocationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetLocationInformation  ::=  BIT STRING
 * {    privateData                ( 0),
 *     locationInfoInAck            ( 1),
 *     privateDataInAck            ( 2) }
 * ```
 */
export
type GetLocationInformation = BIT_STRING;

/**
 * @summary GetLocationInformation_privateData
 * @constant
 */
export
const GetLocationInformation_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetLocationInformation_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetLocationInformation_locationInfoInAck
 * @constant
 */
export
const GetLocationInformation_locationInfoInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoInAck
 * @constant
 */
export
const locationInfoInAck: number = GetLocationInformation_locationInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetLocationInformation_privateDataInAck
 * @constant
 */
export
const GetLocationInformation_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetLocationInformation_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetLocationInformation: $.ASN1Decoder<GetLocationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetLocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetLocationInformation (el: _Element): GetLocationInformation {
    if (!_cached_decoder_for_GetLocationInformation) { _cached_decoder_for_GetLocationInformation = $._decodeBitString; }
    return _cached_decoder_for_GetLocationInformation(el);
}

let _cached_encoder_for_GetLocationInformation: $.ASN1Encoder<GetLocationInformation> | null = null;

/**
 * @summary Encodes a(n) GetLocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetLocationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_GetLocationInformation (value: GetLocationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetLocationInformation) { _cached_encoder_for_GetLocationInformation = $._encodeBitString; }
    return _cached_encoder_for_GetLocationInformation(value, elGetter);
}


/* eslint-enable */
