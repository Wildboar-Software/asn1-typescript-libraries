/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary BackInService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BackInService  ::=  BIT STRING
 * {     cause                     ( 0),     -- optional parameters
 *     privateData                 ( 1) }
 * ```
 */
export
type BackInService = BIT_STRING;

/**
 * @summary BackInService_cause
 * @constant
 */
export
const BackInService_cause: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = BackInService_cause; /* SHORT_NAMED_BIT */

/**
 * @summary BackInService_privateData
 * @constant
 */
export
const BackInService_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = BackInService_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BackInService: $.ASN1Decoder<BackInService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BackInService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BackInService (el: _Element): BackInService {
    if (!_cached_decoder_for_BackInService) { _cached_decoder_for_BackInService = $._decodeBitString; }
    return _cached_decoder_for_BackInService(el);
}

let _cached_encoder_for_BackInService: $.ASN1Encoder<BackInService> | null = null;

/**
 * @summary Encodes a(n) BackInService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackInService, encoded as an ASN.1 Element.
 */
export
function _encode_BackInService (value: BackInService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BackInService) { _cached_encoder_for_BackInService = $._encodeBitString; }
    return _cached_encoder_for_BackInService(value, elGetter);
}


/* eslint-enable */
