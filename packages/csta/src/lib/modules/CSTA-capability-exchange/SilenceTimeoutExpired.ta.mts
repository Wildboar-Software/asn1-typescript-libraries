/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SilenceTimeoutExpired
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SilenceTimeoutExpired  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type SilenceTimeoutExpired = BIT_STRING;

/**
 * @summary SilenceTimeoutExpired_resource
 * @constant
 */
export
const SilenceTimeoutExpired_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = SilenceTimeoutExpired_resource; /* SHORT_NAMED_BIT */

/**
 * @summary SilenceTimeoutExpired_cause
 * @constant
 */
export
const SilenceTimeoutExpired_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = SilenceTimeoutExpired_cause; /* SHORT_NAMED_BIT */

/**
 * @summary SilenceTimeoutExpired_servicesPermitted
 * @constant
 */
export
const SilenceTimeoutExpired_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = SilenceTimeoutExpired_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary SilenceTimeoutExpired_privateData
 * @constant
 */
export
const SilenceTimeoutExpired_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SilenceTimeoutExpired_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SilenceTimeoutExpired: $.ASN1Decoder<SilenceTimeoutExpired> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SilenceTimeoutExpired
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SilenceTimeoutExpired (el: _Element): SilenceTimeoutExpired {
    if (!_cached_decoder_for_SilenceTimeoutExpired) { _cached_decoder_for_SilenceTimeoutExpired = $._decodeBitString; }
    return _cached_decoder_for_SilenceTimeoutExpired(el);
}

let _cached_encoder_for_SilenceTimeoutExpired: $.ASN1Encoder<SilenceTimeoutExpired> | null = null;

/**
 * @summary Encodes a(n) SilenceTimeoutExpired into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SilenceTimeoutExpired, encoded as an ASN.1 Element.
 */
export
function _encode_SilenceTimeoutExpired (value: SilenceTimeoutExpired, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SilenceTimeoutExpired) { _cached_encoder_for_SilenceTimeoutExpired = $._encodeBitString; }
    return _cached_encoder_for_SilenceTimeoutExpired(value, elGetter);
}


/* eslint-enable */
