/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PartiallyInService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartiallyInService  ::=  BIT STRING
 * {     cause                    ( 0),     -- optional parameters
 *     privateData                ( 1) }
 * ```
 */
export
type PartiallyInService = BIT_STRING;

/**
 * @summary PartiallyInService_cause
 * @constant
 */
export
const PartiallyInService_cause: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = PartiallyInService_cause; /* SHORT_NAMED_BIT */

/**
 * @summary PartiallyInService_privateData
 * @constant
 */
export
const PartiallyInService_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = PartiallyInService_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_PartiallyInService: $.ASN1Decoder<PartiallyInService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartiallyInService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartiallyInService (el: _Element): PartiallyInService {
    if (!_cached_decoder_for_PartiallyInService) { _cached_decoder_for_PartiallyInService = $._decodeBitString; }
    return _cached_decoder_for_PartiallyInService(el);
}

let _cached_encoder_for_PartiallyInService: $.ASN1Encoder<PartiallyInService> | null = null;

/**
 * @summary Encodes a(n) PartiallyInService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartiallyInService, encoded as an ASN.1 Element.
 */
export
function _encode_PartiallyInService (value: PartiallyInService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartiallyInService) { _cached_encoder_for_PartiallyInService = $._encodeBitString; }
    return _cached_encoder_for_PartiallyInService(value, elGetter);
}


/* eslint-enable */
