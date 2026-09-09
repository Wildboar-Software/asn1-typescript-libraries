/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SendStoredCDRs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendStoredCDRs  ::=  BIT STRING
 * {     timePeriod                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2) }
 * ```
 */
export
type SendStoredCDRs = BIT_STRING;

/**
 * @summary SendStoredCDRs_timePeriod
 * @constant
 */
export
const SendStoredCDRs_timePeriod: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary timePeriod
 * @constant
 */
export
const timePeriod: number = SendStoredCDRs_timePeriod; /* SHORT_NAMED_BIT */

/**
 * @summary SendStoredCDRs_privateData
 * @constant
 */
export
const SendStoredCDRs_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SendStoredCDRs_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SendStoredCDRs_privateDataInAck
 * @constant
 */
export
const SendStoredCDRs_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SendStoredCDRs_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SendStoredCDRs: $.ASN1Decoder<SendStoredCDRs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendStoredCDRs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendStoredCDRs (el: _Element): SendStoredCDRs {
    if (!_cached_decoder_for_SendStoredCDRs) { _cached_decoder_for_SendStoredCDRs = $._decodeBitString; }
    return _cached_decoder_for_SendStoredCDRs(el);
}

let _cached_encoder_for_SendStoredCDRs: $.ASN1Encoder<SendStoredCDRs> | null = null;

/**
 * @summary Encodes a(n) SendStoredCDRs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendStoredCDRs, encoded as an ASN.1 Element.
 */
export
function _encode_SendStoredCDRs (value: SendStoredCDRs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendStoredCDRs) { _cached_encoder_for_SendStoredCDRs = $._encodeBitString; }
    return _cached_encoder_for_SendStoredCDRs(value, elGetter);
}


/* eslint-enable */
