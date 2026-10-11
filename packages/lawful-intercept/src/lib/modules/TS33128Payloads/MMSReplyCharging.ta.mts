/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSReplyCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReplyCharging  ::=  ENUMERATED
 * {
 *     requested(0),
 *     requestedTextOnly(1),
 *     accepted(2),
 *     acceptedTextOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSReplyCharging {
    requested = 0,
    requestedTextOnly = 1,
    accepted = 2,
    acceptedTextOnly = 3,
}

/**
 * @summary MMSReplyCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReplyCharging  ::=  ENUMERATED
 * {
 *     requested(0),
 *     requestedTextOnly(1),
 *     accepted(2),
 *     acceptedTextOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSReplyCharging = _enum_for_MMSReplyCharging;

/**
 * @summary MMSReplyCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReplyCharging  ::=  ENUMERATED
 * {
 *     requested(0),
 *     requestedTextOnly(1),
 *     accepted(2),
 *     acceptedTextOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSReplyCharging = _enum_for_MMSReplyCharging;

/**
 * @summary MMSReplyCharging_requested
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_requested: MMSReplyCharging = MMSReplyCharging.requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requested
 * @constant
 * @type {number}
 */
export
const requested: MMSReplyCharging = MMSReplyCharging.requested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReplyCharging_requestedTextOnly
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_requestedTextOnly: MMSReplyCharging = MMSReplyCharging.requestedTextOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedTextOnly
 * @constant
 * @type {number}
 */
export
const requestedTextOnly: MMSReplyCharging = MMSReplyCharging.requestedTextOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReplyCharging_accepted
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_accepted: MMSReplyCharging = MMSReplyCharging.accepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accepted
 * @constant
 * @type {number}
 */
export
const accepted: MMSReplyCharging = MMSReplyCharging.accepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReplyCharging_acceptedTextOnly
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_acceptedTextOnly: MMSReplyCharging = MMSReplyCharging.acceptedTextOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acceptedTextOnly
 * @constant
 * @type {number}
 */
export
const acceptedTextOnly: MMSReplyCharging = MMSReplyCharging.acceptedTextOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_MMSReplyCharging: $.ASN1Decoder<MMSReplyCharging> = $._decodeEnumerated;

export const _encode_MMSReplyCharging: $.ASN1Encoder<MMSReplyCharging> = $._encodeEnumerated;


/* eslint-enable */
