/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary N9HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N9HRMessageCause  ::=  ENUMERATED
 * {
 *     pDUSessionEstablished(1),
 *     pDUSessionModified(2),
 *     pDUSessionReleased(3),
 *     updatedLocationAvailable(4),
 *     sMFChanged(5),
 *     other(6),
 *     hRLIEnabled(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_N9HRMessageCause {
    pDUSessionEstablished = 1,
    pDUSessionModified = 2,
    pDUSessionReleased = 3,
    updatedLocationAvailable = 4,
    sMFChanged = 5,
    other = 6,
    hRLIEnabled = 7,
}

/**
 * @summary N9HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N9HRMessageCause  ::=  ENUMERATED
 * {
 *     pDUSessionEstablished(1),
 *     pDUSessionModified(2),
 *     pDUSessionReleased(3),
 *     updatedLocationAvailable(4),
 *     sMFChanged(5),
 *     other(6),
 *     hRLIEnabled(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type N9HRMessageCause = _enum_for_N9HRMessageCause;

/**
 * @summary N9HRMessageCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N9HRMessageCause  ::=  ENUMERATED
 * {
 *     pDUSessionEstablished(1),
 *     pDUSessionModified(2),
 *     pDUSessionReleased(3),
 *     updatedLocationAvailable(4),
 *     sMFChanged(5),
 *     other(6),
 *     hRLIEnabled(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const N9HRMessageCause: typeof _enum_for_N9HRMessageCause = _enum_for_N9HRMessageCause;

/**
 * @summary N9HRMessageCause_pDUSessionEstablished
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_pDUSessionEstablished: _enum_for_N9HRMessageCause.pDUSessionEstablished = N9HRMessageCause.pDUSessionEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionEstablished
 * @constant
 * @type {number}
 */
export
const pDUSessionEstablished: _enum_for_N9HRMessageCause.pDUSessionEstablished = N9HRMessageCause.pDUSessionEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_pDUSessionModified
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_pDUSessionModified: _enum_for_N9HRMessageCause.pDUSessionModified = N9HRMessageCause.pDUSessionModified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionModified
 * @constant
 * @type {number}
 */
export
const pDUSessionModified: _enum_for_N9HRMessageCause.pDUSessionModified = N9HRMessageCause.pDUSessionModified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_pDUSessionReleased
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_pDUSessionReleased: _enum_for_N9HRMessageCause.pDUSessionReleased = N9HRMessageCause.pDUSessionReleased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionReleased
 * @constant
 * @type {number}
 */
export
const pDUSessionReleased: _enum_for_N9HRMessageCause.pDUSessionReleased = N9HRMessageCause.pDUSessionReleased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_updatedLocationAvailable
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_updatedLocationAvailable: _enum_for_N9HRMessageCause.updatedLocationAvailable = N9HRMessageCause.updatedLocationAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updatedLocationAvailable
 * @constant
 * @type {number}
 */
export
const updatedLocationAvailable: _enum_for_N9HRMessageCause.updatedLocationAvailable = N9HRMessageCause.updatedLocationAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_sMFChanged
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_sMFChanged: _enum_for_N9HRMessageCause.sMFChanged = N9HRMessageCause.sMFChanged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMFChanged
 * @constant
 * @type {number}
 */
export
const sMFChanged: _enum_for_N9HRMessageCause.sMFChanged = N9HRMessageCause.sMFChanged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_other
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_other: _enum_for_N9HRMessageCause.other = N9HRMessageCause.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: _enum_for_N9HRMessageCause.other = N9HRMessageCause.other; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary N9HRMessageCause_hRLIEnabled
 * @constant
 * @type {number}
 */
export
const N9HRMessageCause_hRLIEnabled: _enum_for_N9HRMessageCause.hRLIEnabled = N9HRMessageCause.hRLIEnabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hRLIEnabled
 * @constant
 * @type {number}
 */
export
const hRLIEnabled: _enum_for_N9HRMessageCause.hRLIEnabled = N9HRMessageCause.hRLIEnabled; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_N9HRMessageCause: $.ASN1Decoder<N9HRMessageCause> = $._decodeEnumerated;
export const _encode_N9HRMessageCause: $.ASN1Encoder<N9HRMessageCause> = $._encodeEnumerated;


/* eslint-enable */
