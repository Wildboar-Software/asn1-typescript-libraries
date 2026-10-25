/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotReachableReason
 * @description
 *
 * Reason the MS is absent when MT short-message delivery fails at the MSC,
 * SGSN, or both. Defined in 3GPP TS 23.040. (3GPP TS 29.002 V19.1.0 clauses
 * 7.6.3.51 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotReachableReason  ::=  ENUMERATED {
 *     msPurged (0),
 *     imsiDetached (1),
 *     restrictedArea (2),
 *     notRegistered (3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NotReachableReason {
    msPurged = 0,
    imsiDetached = 1,
    restrictedArea = 2,
    notRegistered = 3,
}

/**
 * @summary NotReachableReason
 * @description
 *
 * Reason the MS is absent when MT short-message delivery fails at the MSC,
 * SGSN, or both. Defined in 3GPP TS 23.040. (3GPP TS 29.002 V19.1.0 clauses
 * 7.6.3.51 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotReachableReason  ::=  ENUMERATED {
 *     msPurged (0),
 *     imsiDetached (1),
 *     restrictedArea (2),
 *     notRegistered (3)}
 * ```
 * 
 * @enum {number}
 */
export
type NotReachableReason = _enum_for_NotReachableReason;

/**
 * @summary NotReachableReason
 * @description
 *
 * Reason the MS is absent when MT short-message delivery fails at the MSC,
 * SGSN, or both. Defined in 3GPP TS 23.040. (3GPP TS 29.002 V19.1.0 clauses
 * 7.6.3.51 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotReachableReason  ::=  ENUMERATED {
 *     msPurged (0),
 *     imsiDetached (1),
 *     restrictedArea (2),
 *     notRegistered (3)}
 * ```
 * 
 * @enum {number}
 */
export
const NotReachableReason: typeof _enum_for_NotReachableReason = _enum_for_NotReachableReason;

/**
 * @summary NotReachableReason_msPurged
 * @description
 *
 * MS purged. (3GPP TS 29.002 V19.1.0 clause 7.6.3.51)
 *
 * @constant
 * @type {number}
 */
export
const NotReachableReason_msPurged: _enum_for_NotReachableReason.msPurged = NotReachableReason.msPurged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msPurged
 * @description
 *
 * MS purged. (3GPP TS 29.002 V19.1.0 clause 7.6.3.51)
 *
 * @constant
 * @type {number}
 */
export
const msPurged: _enum_for_NotReachableReason.msPurged = NotReachableReason.msPurged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotReachableReason_imsiDetached
 * @description
 *
 * IMSI detached. (3GPP TS 29.002 V19.1.0 clause 7.6.3.51)
 *
 * @constant
 * @type {number}
 */
export
const NotReachableReason_imsiDetached: _enum_for_NotReachableReason.imsiDetached = NotReachableReason.imsiDetached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imsiDetached
 * @description
 *
 * IMSI detached. (3GPP TS 29.002 V19.1.0 clause 7.6.3.51)
 *
 * @constant
 * @type {number}
 */
export
const imsiDetached: _enum_for_NotReachableReason.imsiDetached = NotReachableReason.imsiDetached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotReachableReason_restrictedArea
 * @description
 *
 * Restricted area. (3GPP TS 29.002 V19.1.0 clause 7.6.3.51)
 *
 * @constant
 * @type {number}
 */
export
const NotReachableReason_restrictedArea: _enum_for_NotReachableReason.restrictedArea = NotReachableReason.restrictedArea; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedArea
 * @description
 *
 * Restricted area. (3GPP TS 29.002 V19.1.0 clause 7.6.3.51)
 *
 * @constant
 * @type {number}
 */
export
const restrictedArea: _enum_for_NotReachableReason.restrictedArea = NotReachableReason.restrictedArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NotReachableReason_notRegistered
 * @description
 *
 * Not registered. (3GPP TS 29.002 V19.1.0 clause 7.6.3.51)
 *
 * @constant
 * @type {number}
 */
export
const NotReachableReason_notRegistered: _enum_for_NotReachableReason.notRegistered = NotReachableReason.notRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notRegistered
 * @description
 *
 * Not registered. (3GPP TS 29.002 V19.1.0 clause 7.6.3.51)
 *
 * @constant
 * @type {number}
 */
export
const notRegistered: _enum_for_NotReachableReason.notRegistered = NotReachableReason.notRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) NotReachableReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NotReachableReason: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) NotReachableReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotReachableReason, encoded as an ASN.1 Element.
 */
export const _encode_NotReachableReason: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
