/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StatusFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusFilter  ::=  BIT STRING
 * {     initializing                 ( 0),
 *     enabled                 ( 1),
 *     normal                     ( 2),
 *     messageLost                 ( 3),
 *     disabled                 ( 4),
 *     partiallyDisabled             ( 5),
 *     overloadImminent             ( 6),
 *     overloadReached             ( 7),
 *     overloadRelieved             ( 8) }
 * ```
 */
export
type StatusFilter = BIT_STRING;

/**
 * @summary StatusFilter_initializing
 * @constant
 */
export
const StatusFilter_initializing: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary initializing
 * @constant
 */
export
const initializing: number = StatusFilter_initializing; /* SHORT_NAMED_BIT */

/**
 * @summary StatusFilter_enabled
 * @constant
 */
export
const StatusFilter_enabled: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary enabled
 * @constant
 */
export
const enabled: number = StatusFilter_enabled; /* SHORT_NAMED_BIT */

/**
 * @summary StatusFilter_normal
 * @constant
 */
export
const StatusFilter_normal: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary normal
 * @constant
 */
export
const normal: number = StatusFilter_normal; /* SHORT_NAMED_BIT */

/**
 * @summary StatusFilter_messageLost
 * @constant
 */
export
const StatusFilter_messageLost: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary messageLost
 * @constant
 */
export
const messageLost: number = StatusFilter_messageLost; /* SHORT_NAMED_BIT */

/**
 * @summary StatusFilter_disabled
 * @constant
 */
export
const StatusFilter_disabled: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary disabled
 * @constant
 */
export
const disabled: number = StatusFilter_disabled; /* SHORT_NAMED_BIT */

/**
 * @summary StatusFilter_partiallyDisabled
 * @constant
 */
export
const StatusFilter_partiallyDisabled: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary partiallyDisabled
 * @constant
 */
export
const partiallyDisabled: number = StatusFilter_partiallyDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary StatusFilter_overloadImminent
 * @constant
 */
export
const StatusFilter_overloadImminent: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary overloadImminent
 * @constant
 */
export
const overloadImminent: number = StatusFilter_overloadImminent; /* SHORT_NAMED_BIT */

/**
 * @summary StatusFilter_overloadReached
 * @constant
 */
export
const StatusFilter_overloadReached: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary overloadReached
 * @constant
 */
export
const overloadReached: number = StatusFilter_overloadReached; /* SHORT_NAMED_BIT */

/**
 * @summary StatusFilter_overloadRelieved
 * @constant
 */
export
const StatusFilter_overloadRelieved: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary overloadRelieved
 * @constant
 */
export
const overloadRelieved: number = StatusFilter_overloadRelieved; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StatusFilter: $.ASN1Decoder<StatusFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusFilter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusFilter (el: _Element): StatusFilter {
    if (!_cached_decoder_for_StatusFilter) { _cached_decoder_for_StatusFilter = $._decodeBitString; }
    return _cached_decoder_for_StatusFilter(el);
}

let _cached_encoder_for_StatusFilter: $.ASN1Encoder<StatusFilter> | null = null;

/**
 * @summary Encodes a(n) StatusFilter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusFilter, encoded as an ASN.1 Element.
 */
export
function _encode_StatusFilter (value: StatusFilter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusFilter) { _cached_encoder_for_StatusFilter = $._encodeBitString; }
    return _cached_encoder_for_StatusFilter(value, elGetter);
}


/* eslint-enable */
