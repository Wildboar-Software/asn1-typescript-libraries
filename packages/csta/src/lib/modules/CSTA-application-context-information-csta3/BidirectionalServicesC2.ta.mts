/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary BidirectionalServicesC2
 * @description
 *
 * Phase II bidirectional services. Phase II (ECMA-218) compatibility BIT STRING
 * in ACSE user-information. For Phase III and later, use Capability Exchange to
 * learn supported services and events. ECMA-285 §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BidirectionalServicesC2  ::=  BIT STRING
 *     {escapeService                  (0),
 *      systemStatus                   (1)     }
 * ```
 */
export
type BidirectionalServicesC2 = BIT_STRING;

/**
 * @summary BidirectionalServicesC2_escapeService
 * @description Advertises `escapeService` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const BidirectionalServicesC2_escapeService: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary escapeService
 * @description Alias of {@link BidirectionalServicesC2_escapeService}.
 * @constant
 */
export
const escapeService: number = BidirectionalServicesC2_escapeService; /* SHORT_NAMED_BIT */

/**
 * @summary BidirectionalServicesC2_systemStatus
 * @description Advertises `systemStatus` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const BidirectionalServicesC2_systemStatus: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary systemStatus
 * @description Alias of {@link BidirectionalServicesC2_systemStatus}.
 * @constant
 */
export
const systemStatus: number = BidirectionalServicesC2_systemStatus; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BidirectionalServicesC2: $.ASN1Decoder<BidirectionalServicesC2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BidirectionalServicesC2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BidirectionalServicesC2 (el: _Element): BidirectionalServicesC2 {
    if (!_cached_decoder_for_BidirectionalServicesC2) { _cached_decoder_for_BidirectionalServicesC2 = $._decodeBitString; }
    return _cached_decoder_for_BidirectionalServicesC2(el);
}

let _cached_encoder_for_BidirectionalServicesC2: $.ASN1Encoder<BidirectionalServicesC2> | null = null;

/**
 * @summary Encodes a(n) BidirectionalServicesC2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BidirectionalServicesC2, encoded as an ASN.1 Element.
 */
export
function _encode_BidirectionalServicesC2 (value: BidirectionalServicesC2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BidirectionalServicesC2) { _cached_encoder_for_BidirectionalServicesC2 = $._encodeBitString; }
    return _cached_encoder_for_BidirectionalServicesC2(value, elGetter);
}


/* eslint-enable */
