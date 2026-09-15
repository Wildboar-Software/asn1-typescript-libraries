/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SecurityMode
 * @description
 *
 * When the SF supplies securityInfo: all events, all acks, all
 * service requests (Table 13-9). ASN.1 is ENUMERATED.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityMode  ::=  ENUMERATED
 * {     allEvents                     (0),
 *     allAcks                     (1),
 *     allServReqs                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SecurityMode {
    allEvents = 0,
    allAcks = 1,
    allServReqs = 2,
}

/**
 * @summary SecurityMode
 * @description
 *
 * When the SF supplies securityInfo: all events, all acks, all
 * service requests (Table 13-9). ASN.1 is ENUMERATED.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityMode  ::=  ENUMERATED
 * {     allEvents                     (0),
 *     allAcks                     (1),
 *     allServReqs                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
type SecurityMode = _enum_for_SecurityMode;

/**
 * @summary SecurityMode
 * @description
 *
 * When the SF supplies securityInfo: all events, all acks, all
 * service requests (Table 13-9). ASN.1 is ENUMERATED.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityMode  ::=  ENUMERATED
 * {     allEvents                     (0),
 *     allAcks                     (1),
 *     allServReqs                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
const SecurityMode = _enum_for_SecurityMode;

/**
 * @summary SecurityMode_allEvents
 * @constant
 * @type {number}
 */
export
const SecurityMode_allEvents: SecurityMode = SecurityMode.allEvents; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allEvents
 * @constant
 * @type {number}
 */
export
const allEvents: SecurityMode = SecurityMode.allEvents; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityMode_allAcks
 * @constant
 * @type {number}
 */
export
const SecurityMode_allAcks: SecurityMode = SecurityMode.allAcks; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allAcks
 * @constant
 * @type {number}
 */
export
const allAcks: SecurityMode = SecurityMode.allAcks; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityMode_allServReqs
 * @constant
 * @type {number}
 */
export
const SecurityMode_allServReqs: SecurityMode = SecurityMode.allServReqs; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allServReqs
 * @constant
 * @type {number}
 */
export
const allServReqs: SecurityMode = SecurityMode.allServReqs; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SecurityMode: $.ASN1Decoder<SecurityMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityMode (el: _Element): SecurityMode {
    if (!_cached_decoder_for_SecurityMode) { _cached_decoder_for_SecurityMode = $._decodeEnumerated; }
    return _cached_decoder_for_SecurityMode(el);
}

let _cached_encoder_for_SecurityMode: $.ASN1Encoder<SecurityMode> | null = null;

/**
 * @summary Encodes a(n) SecurityMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityMode, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityMode (value: SecurityMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityMode) { _cached_encoder_for_SecurityMode = $._encodeEnumerated; }
    return _cached_encoder_for_SecurityMode(value, elGetter);
}


/* eslint-enable */
