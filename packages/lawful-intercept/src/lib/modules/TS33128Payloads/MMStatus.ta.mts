/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMStatus
 * @description
 * 
 * Provides a MM status. A status of "retrieved" is only signalled by the
 * retrieving UE after retrieval of the MM. Include if received by the MMS
 * Proxy-Relay and if generated from a m-notifyresp-ind.
 *
 * 3GPP TS 33.128, clause 7.4.3.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatus  ::=  ENUMERATED
 * {
 *     expired(1),
 *     retrieved(2),
 *     rejected(3),
 *     deferred(4),
 *     unrecognized(5),
 *     indeterminate(6),
 *     forwarded(7),
 *     unreachable(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMStatus {
    expired = 1,
    retrieved = 2,
    rejected = 3,
    deferred = 4,
    unrecognized = 5,
    indeterminate = 6,
    forwarded = 7,
    unreachable = 8,
}

/**
 * @summary MMStatus
 * @description
 * 
 * Provides a MM status. A status of "retrieved" is only signalled by the
 * retrieving UE after retrieval of the MM. Include if received by the MMS
 * Proxy-Relay and if generated from a m-notifyresp-ind.
 *
 * 3GPP TS 33.128, clause 7.4.3.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatus  ::=  ENUMERATED
 * {
 *     expired(1),
 *     retrieved(2),
 *     rejected(3),
 *     deferred(4),
 *     unrecognized(5),
 *     indeterminate(6),
 *     forwarded(7),
 *     unreachable(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMStatus = _enum_for_MMStatus;

/**
 * @summary MMStatus
 * @description
 * 
 * Provides a MM status. A status of "retrieved" is only signalled by the
 * retrieving UE after retrieval of the MM. Include if received by the MMS
 * Proxy-Relay and if generated from a m-notifyresp-ind.
 *
 * 3GPP TS 33.128, clause 7.4.3.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatus  ::=  ENUMERATED
 * {
 *     expired(1),
 *     retrieved(2),
 *     rejected(3),
 *     deferred(4),
 *     unrecognized(5),
 *     indeterminate(6),
 *     forwarded(7),
 *     unreachable(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMStatus: typeof _enum_for_MMStatus = _enum_for_MMStatus;

/**
 * @summary MMStatus_expired
 * @constant
 * @type {number}
 */
export
const MMStatus_expired: _enum_for_MMStatus.expired = MMStatus.expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @constant
 * @type {number}
 */
export
const expired: _enum_for_MMStatus.expired = MMStatus.expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_retrieved
 * @constant
 * @type {number}
 */
export
const MMStatus_retrieved: _enum_for_MMStatus.retrieved = MMStatus.retrieved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @constant
 * @type {number}
 */
export
const retrieved: _enum_for_MMStatus.retrieved = MMStatus.retrieved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_rejected
 * @constant
 * @type {number}
 */
export
const MMStatus_rejected: _enum_for_MMStatus.rejected = MMStatus.rejected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejected
 * @constant
 * @type {number}
 */
export
const rejected: _enum_for_MMStatus.rejected = MMStatus.rejected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_deferred
 * @constant
 * @type {number}
 */
export
const MMStatus_deferred: _enum_for_MMStatus.deferred = MMStatus.deferred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferred
 * @constant
 * @type {number}
 */
export
const deferred: _enum_for_MMStatus.deferred = MMStatus.deferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_unrecognized
 * @constant
 * @type {number}
 */
export
const MMStatus_unrecognized: _enum_for_MMStatus.unrecognized = MMStatus.unrecognized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognized
 * @constant
 * @type {number}
 */
export
const unrecognized: _enum_for_MMStatus.unrecognized = MMStatus.unrecognized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_indeterminate
 * @constant
 * @type {number}
 */
export
const MMStatus_indeterminate: _enum_for_MMStatus.indeterminate = MMStatus.indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @constant
 * @type {number}
 */
export
const indeterminate: _enum_for_MMStatus.indeterminate = MMStatus.indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_forwarded
 * @constant
 * @type {number}
 */
export
const MMStatus_forwarded: _enum_for_MMStatus.forwarded = MMStatus.forwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: _enum_for_MMStatus.forwarded = MMStatus.forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatus_unreachable
 * @constant
 * @type {number}
 */
export
const MMStatus_unreachable: _enum_for_MMStatus.unreachable = MMStatus.unreachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unreachable
 * @constant
 * @type {number}
 */
export
const unreachable: _enum_for_MMStatus.unreachable = MMStatus.unreachable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMStatus: $.ASN1Decoder<MMStatus> = $._decodeEnumerated;
export const _encode_MMStatus: $.ASN1Encoder<MMStatus> = $._encodeEnumerated;


/* eslint-enable */
