/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetCallerIDStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCallerIDStatus  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type GetCallerIDStatus = BIT_STRING;

/**
 * @summary GetCallerIDStatus_privateData
 * @constant
 */
export
const GetCallerIDStatus_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetCallerIDStatus_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetCallerIDStatus_privateDataInAck
 * @constant
 */
export
const GetCallerIDStatus_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetCallerIDStatus_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetCallerIDStatus: $.ASN1Decoder<GetCallerIDStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCallerIDStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCallerIDStatus (el: _Element): GetCallerIDStatus {
    if (!_cached_decoder_for_GetCallerIDStatus) { _cached_decoder_for_GetCallerIDStatus = $._decodeBitString; }
    return _cached_decoder_for_GetCallerIDStatus(el);
}

let _cached_encoder_for_GetCallerIDStatus: $.ASN1Encoder<GetCallerIDStatus> | null = null;

/**
 * @summary Encodes a(n) GetCallerIDStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCallerIDStatus, encoded as an ASN.1 Element.
 */
export
function _encode_GetCallerIDStatus (value: GetCallerIDStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCallerIDStatus) { _cached_encoder_for_GetCallerIDStatus = $._encodeBitString; }
    return _cached_encoder_for_GetCallerIDStatus(value, elGetter);
}


/* eslint-enable */
