/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ChangeSystemStatusFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeSystemStatusFilter  ::=  BIT STRING
 * {     requestedStatusFilterInitializing     ( 0),     -- optional parameters
 *     requestedStatusFilterEnabled         ( 1),     -- optional parameters
 *     requestedStatusFilterNormal         ( 2),     -- optional parameters
 *     requestedStatusFilterMessageLost     ( 3),     -- optional parameters
 *     requestedStatusFilterDisabled         ( 4),     -- optional parameters
 *     requestedStatusFilterPartiallyDisabled     ( 5),     -- optional parameters
 *     requestedStatusFilterOverloadImminent     ( 6),     -- optional parameters
 *     requestedStatusFilterOverloadReached     ( 7),     -- optional parameters
 *     requestedStatusFilterOverloadRelieved     ( 8),     -- optional parameters
 *     privateData                 ( 9),     -- optional parameters
 *     privateDataInAck             (10) }
 * ```
 */
export
type ChangeSystemStatusFilter = BIT_STRING;

/**
 * @summary ChangeSystemStatusFilter_requestedStatusFilterInitializing
 * @constant
 */
export
const ChangeSystemStatusFilter_requestedStatusFilterInitializing: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary requestedStatusFilterInitializing
 * @constant
 */
export
const requestedStatusFilterInitializing: number = ChangeSystemStatusFilter_requestedStatusFilterInitializing; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeSystemStatusFilter_requestedStatusFilterEnabled
 * @constant
 */
export
const ChangeSystemStatusFilter_requestedStatusFilterEnabled: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary requestedStatusFilterEnabled
 * @constant
 */
export
const requestedStatusFilterEnabled: number = ChangeSystemStatusFilter_requestedStatusFilterEnabled; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeSystemStatusFilter_requestedStatusFilterNormal
 * @constant
 */
export
const ChangeSystemStatusFilter_requestedStatusFilterNormal: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary requestedStatusFilterNormal
 * @constant
 */
export
const requestedStatusFilterNormal: number = ChangeSystemStatusFilter_requestedStatusFilterNormal; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeSystemStatusFilter_requestedStatusFilterMessageLost
 * @constant
 */
export
const ChangeSystemStatusFilter_requestedStatusFilterMessageLost: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary requestedStatusFilterMessageLost
 * @constant
 */
export
const requestedStatusFilterMessageLost: number = ChangeSystemStatusFilter_requestedStatusFilterMessageLost; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeSystemStatusFilter_requestedStatusFilterDisabled
 * @constant
 */
export
const ChangeSystemStatusFilter_requestedStatusFilterDisabled: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary requestedStatusFilterDisabled
 * @constant
 */
export
const requestedStatusFilterDisabled: number = ChangeSystemStatusFilter_requestedStatusFilterDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeSystemStatusFilter_requestedStatusFilterPartiallyDisabled
 * @constant
 */
export
const ChangeSystemStatusFilter_requestedStatusFilterPartiallyDisabled: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary requestedStatusFilterPartiallyDisabled
 * @constant
 */
export
const requestedStatusFilterPartiallyDisabled: number = ChangeSystemStatusFilter_requestedStatusFilterPartiallyDisabled; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeSystemStatusFilter_requestedStatusFilterOverloadImminent
 * @constant
 */
export
const ChangeSystemStatusFilter_requestedStatusFilterOverloadImminent: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary requestedStatusFilterOverloadImminent
 * @constant
 */
export
const requestedStatusFilterOverloadImminent: number = ChangeSystemStatusFilter_requestedStatusFilterOverloadImminent; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeSystemStatusFilter_requestedStatusFilterOverloadReached
 * @constant
 */
export
const ChangeSystemStatusFilter_requestedStatusFilterOverloadReached: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary requestedStatusFilterOverloadReached
 * @constant
 */
export
const requestedStatusFilterOverloadReached: number = ChangeSystemStatusFilter_requestedStatusFilterOverloadReached; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeSystemStatusFilter_requestedStatusFilterOverloadRelieved
 * @constant
 */
export
const ChangeSystemStatusFilter_requestedStatusFilterOverloadRelieved: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary requestedStatusFilterOverloadRelieved
 * @constant
 */
export
const requestedStatusFilterOverloadRelieved: number = ChangeSystemStatusFilter_requestedStatusFilterOverloadRelieved; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeSystemStatusFilter_privateData
 * @constant
 */
export
const ChangeSystemStatusFilter_privateData: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ChangeSystemStatusFilter_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ChangeSystemStatusFilter_privateDataInAck
 * @constant
 */
export
const ChangeSystemStatusFilter_privateDataInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = ChangeSystemStatusFilter_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ChangeSystemStatusFilter: $.ASN1Decoder<ChangeSystemStatusFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeSystemStatusFilter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeSystemStatusFilter (el: _Element): ChangeSystemStatusFilter {
    if (!_cached_decoder_for_ChangeSystemStatusFilter) { _cached_decoder_for_ChangeSystemStatusFilter = $._decodeBitString; }
    return _cached_decoder_for_ChangeSystemStatusFilter(el);
}

let _cached_encoder_for_ChangeSystemStatusFilter: $.ASN1Encoder<ChangeSystemStatusFilter> | null = null;

/**
 * @summary Encodes a(n) ChangeSystemStatusFilter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeSystemStatusFilter, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeSystemStatusFilter (value: ChangeSystemStatusFilter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeSystemStatusFilter) { _cached_encoder_for_ChangeSystemStatusFilter = $._encodeBitString; }
    return _cached_encoder_for_ChangeSystemStatusFilter(value, elGetter);
}


/* eslint-enable */
