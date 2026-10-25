/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary S8HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * S8HRMessageCause  ::=  ENUMERATED
 * {
 *     bearerActivated(1),
 *     bearerModified(2),
 *     bearerDeleted(3),
 *     pDNDisconnected(4),
 *     updatedLocationAvailable(5),
 *     sGWChanged(6),
 *     other(7),
 *     hRLIEnabled(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_S8HRMessageCause {
    bearerActivated = 1,
    bearerModified = 2,
    bearerDeleted = 3,
    pDNDisconnected = 4,
    updatedLocationAvailable = 5,
    sGWChanged = 6,
    other = 7,
    hRLIEnabled = 8,
}

/**
 * @summary S8HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * S8HRMessageCause  ::=  ENUMERATED
 * {
 *     bearerActivated(1),
 *     bearerModified(2),
 *     bearerDeleted(3),
 *     pDNDisconnected(4),
 *     updatedLocationAvailable(5),
 *     sGWChanged(6),
 *     other(7),
 *     hRLIEnabled(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type S8HRMessageCause = _enum_for_S8HRMessageCause;

/**
 * @summary S8HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * S8HRMessageCause  ::=  ENUMERATED
 * {
 *     bearerActivated(1),
 *     bearerModified(2),
 *     bearerDeleted(3),
 *     pDNDisconnected(4),
 *     updatedLocationAvailable(5),
 *     sGWChanged(6),
 *     other(7),
 *     hRLIEnabled(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const S8HRMessageCause = _enum_for_S8HRMessageCause;

/**
 * @summary S8HRMessageCause_bearerActivated
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_bearerActivated = S8HRMessageCause.bearerActivated satisfies S8HRMessageCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerActivated
 * @constant
 * @type {number}
 */
export
const bearerActivated = S8HRMessageCause.bearerActivated satisfies S8HRMessageCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_bearerModified
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_bearerModified = S8HRMessageCause.bearerModified satisfies S8HRMessageCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerModified
 * @constant
 * @type {number}
 */
export
const bearerModified = S8HRMessageCause.bearerModified satisfies S8HRMessageCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_bearerDeleted
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_bearerDeleted = S8HRMessageCause.bearerDeleted satisfies S8HRMessageCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerDeleted
 * @constant
 * @type {number}
 */
export
const bearerDeleted = S8HRMessageCause.bearerDeleted satisfies S8HRMessageCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_pDNDisconnected
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_pDNDisconnected = S8HRMessageCause.pDNDisconnected satisfies S8HRMessageCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDNDisconnected
 * @constant
 * @type {number}
 */
export
const pDNDisconnected = S8HRMessageCause.pDNDisconnected satisfies S8HRMessageCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_updatedLocationAvailable
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_updatedLocationAvailable = S8HRMessageCause.updatedLocationAvailable satisfies S8HRMessageCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updatedLocationAvailable
 * @constant
 * @type {number}
 */
export
const updatedLocationAvailable = S8HRMessageCause.updatedLocationAvailable satisfies S8HRMessageCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_sGWChanged
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_sGWChanged = S8HRMessageCause.sGWChanged satisfies S8HRMessageCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sGWChanged
 * @constant
 * @type {number}
 */
export
const sGWChanged = S8HRMessageCause.sGWChanged satisfies S8HRMessageCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_other
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_other = S8HRMessageCause.other satisfies S8HRMessageCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other = S8HRMessageCause.other satisfies S8HRMessageCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary S8HRMessageCause_hRLIEnabled
 * @constant
 * @type {number}
 */
export
const S8HRMessageCause_hRLIEnabled = S8HRMessageCause.hRLIEnabled satisfies S8HRMessageCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hRLIEnabled
 * @constant
 * @type {number}
 */
export
const hRLIEnabled = S8HRMessageCause.hRLIEnabled satisfies S8HRMessageCause; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_S8HRMessageCause: $.ASN1Decoder<S8HRMessageCause> = $._decodeEnumerated;
export const _encode_S8HRMessageCause: $.ASN1Encoder<S8HRMessageCause> = $._encodeEnumerated;


/* eslint-enable */
