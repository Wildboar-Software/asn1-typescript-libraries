/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary OutOfService
 * @description
 * Capability bitmap for the Out of Service event (ECMA-269 C.16.3, ECMA-285
 * §9.10). Presence of this entry in `DeviceMaintEvtsList` means the SF supports
 * that event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.16.3).
 */
export
const OutOfService_cause: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `OutOfService_cause`.
 */
export
const cause: number = OutOfService_cause; /* SHORT_NAMED_BIT */

/**
 * @summary OutOfService_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.16.3).
 */
export
const OutOfService_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `OutOfService_privateData`.
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
