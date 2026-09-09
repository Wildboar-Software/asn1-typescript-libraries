/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary LocReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocReason  ::=  ENUMERATED
 * {    connectionToDeviceOrNetworkRestored        ( 0),
 *     performanceConditionRelieved            ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LocReason {
    connectionToDeviceOrNetworkRestored = 0,
    performanceConditionRelieved = 1,
}

/**
 * @summary LocReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocReason  ::=  ENUMERATED
 * {    connectionToDeviceOrNetworkRestored        ( 0),
 *     performanceConditionRelieved            ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
type LocReason = _enum_for_LocReason;

/**
 * @summary LocReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocReason  ::=  ENUMERATED
 * {    connectionToDeviceOrNetworkRestored        ( 0),
 *     performanceConditionRelieved            ( 1) }
 * ```
 * 
 * @enum {number}
 */
export
const LocReason = _enum_for_LocReason;

/**
 * @summary LocReason_connectionToDeviceOrNetworkRestored
 * @constant
 * @type {number}
 */
export
const LocReason_connectionToDeviceOrNetworkRestored: LocReason = LocReason.connectionToDeviceOrNetworkRestored; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionToDeviceOrNetworkRestored
 * @constant
 * @type {number}
 */
export
const connectionToDeviceOrNetworkRestored: LocReason = LocReason.connectionToDeviceOrNetworkRestored; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocReason_performanceConditionRelieved
 * @constant
 * @type {number}
 */
export
const LocReason_performanceConditionRelieved: LocReason = LocReason.performanceConditionRelieved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary performanceConditionRelieved
 * @constant
 * @type {number}
 */
export
const performanceConditionRelieved: LocReason = LocReason.performanceConditionRelieved; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LocReason: $.ASN1Decoder<LocReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocReason (el: _Element): LocReason {
    if (!_cached_decoder_for_LocReason) { _cached_decoder_for_LocReason = $._decodeEnumerated; }
    return _cached_decoder_for_LocReason(el);
}

let _cached_encoder_for_LocReason: $.ASN1Encoder<LocReason> | null = null;

/**
 * @summary Encodes a(n) LocReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocReason, encoded as an ASN.1 Element.
 */
export
function _encode_LocReason (value: LocReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocReason) { _cached_encoder_for_LocReason = $._encodeEnumerated; }
    return _cached_encoder_for_LocReason(value, elGetter);
}


/* eslint-enable */
