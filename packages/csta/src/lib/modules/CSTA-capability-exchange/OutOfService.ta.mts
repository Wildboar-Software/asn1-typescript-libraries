/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary OutOfService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OutOfService  ::=  BIT STRING
 * {     cause                     ( 0),     -- optional parameters
 *     privateData                 ( 1) }
 * ```
 */
export
type OutOfService = BIT_STRING;

/**
 * @summary OutOfService_cause
 * @constant
 */
export
const OutOfService_cause: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = OutOfService_cause; /* SHORT_NAMED_BIT */

/**
 * @summary OutOfService_privateData
 * @constant
 */
export
const OutOfService_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = OutOfService_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_OutOfService: $.ASN1Decoder<OutOfService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OutOfService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OutOfService (el: _Element): OutOfService {
    if (!_cached_decoder_for_OutOfService) { _cached_decoder_for_OutOfService = $._decodeBitString; }
    return _cached_decoder_for_OutOfService(el);
}

let _cached_encoder_for_OutOfService: $.ASN1Encoder<OutOfService> | null = null;

/**
 * @summary Encodes a(n) OutOfService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OutOfService, encoded as an ASN.1 Element.
 */
export
function _encode_OutOfService (value: OutOfService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OutOfService) { _cached_encoder_for_OutOfService = $._encodeBitString; }
    return _cached_encoder_for_OutOfService(value, elGetter);
}


/* eslint-enable */
