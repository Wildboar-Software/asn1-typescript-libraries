/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_EndReason {
    undefined = 0,
    regularLogoff = 1,
    connectionLoss = 2,
    connectionTimeout = 3,
    leaseExpired = 4,
}

/**
 * @summary EndReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EndReason  ::=  ENUMERATED
 * {
 *     undefined(0),
 *     regularLogoff(1),
 *         -- The target logged off
 *     connectionLoss(2),
 *         -- The connection was lost
 *     connectionTimeout(3),
 *         -- The connection timed-out
 *     leaseExpired(4),
 *         -- The DHCP lease expired
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EndReason = _enum_for_EndReason | ENUMERATED;

/**
 * @summary EndReason_undefined
 * @constant
 * @type {number}
 */
export
const EndReason_undefined: EndReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export
const undefined: EndReason = EndReason_undefined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_regularLogoff
 * @constant
 * @type {number}
 */
export
const EndReason_regularLogoff: EndReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary regularLogoff
 * @constant
 * @type {number}
 */
export
const regularLogoff: EndReason = EndReason_regularLogoff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_connectionLoss
 * @constant
 * @type {number}
 */
export
const EndReason_connectionLoss: EndReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionLoss
 * @constant
 * @type {number}
 */
export
const connectionLoss: EndReason = EndReason_connectionLoss; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_connectionTimeout
 * @constant
 * @type {number}
 */
export
const EndReason_connectionTimeout: EndReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionTimeout
 * @constant
 * @type {number}
 */
export
const connectionTimeout: EndReason = EndReason_connectionTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EndReason_leaseExpired
 * @constant
 * @type {number}
 */
export
const EndReason_leaseExpired: EndReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary leaseExpired
 * @constant
 * @type {number}
 */
export
const leaseExpired: EndReason = EndReason_leaseExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) EndReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EndReason = $._decodeEnumerated;

/**
 * @summary Encodes a(n) EndReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EndReason, encoded as an ASN.1 Element.
 */
export const _encode_EndReason = $._encodeEnumerated;


/* eslint-enable */
