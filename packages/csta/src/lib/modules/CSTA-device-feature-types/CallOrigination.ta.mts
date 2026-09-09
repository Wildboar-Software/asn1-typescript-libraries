/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallOrigination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallOrigination  ::=  BIT STRING
 * {     internal             (0),
 *     external             (1) }
 * ```
 */
export
type CallOrigination = BIT_STRING;

/**
 * @summary CallOrigination_internal
 * @constant
 */
export
const CallOrigination_internal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary internal
 * @constant
 */
export
const internal: number = CallOrigination_internal; /* SHORT_NAMED_BIT */

/**
 * @summary CallOrigination_external
 * @constant
 */
export
const CallOrigination_external: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary external
 * @constant
 */
export
const external: number = CallOrigination_external; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallOrigination: $.ASN1Decoder<CallOrigination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallOrigination
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallOrigination (el: _Element): CallOrigination {
    if (!_cached_decoder_for_CallOrigination) { _cached_decoder_for_CallOrigination = $._decodeBitString; }
    return _cached_decoder_for_CallOrigination(el);
}

let _cached_encoder_for_CallOrigination: $.ASN1Encoder<CallOrigination> | null = null;

/**
 * @summary Encodes a(n) CallOrigination into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallOrigination, encoded as an ASN.1 Element.
 */
export
function _encode_CallOrigination (value: CallOrigination, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallOrigination) { _cached_encoder_for_CallOrigination = $._encodeBitString; }
    return _cached_encoder_for_CallOrigination(value, elGetter);
}


/* eslint-enable */
