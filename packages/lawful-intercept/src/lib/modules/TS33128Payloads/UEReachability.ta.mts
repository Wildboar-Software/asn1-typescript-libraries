/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UEReachability
 * @description
 * 
 * The UEReachability indicates the reachability of the UE. UEReachability is
 * derived from the UeReachability type defined in TS 29.518 [22] clause
 * 6.2.6.3.7.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.66.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEReachability  ::=  ENUMERATED
 * {
 *     unreachable(1),
 *     reachable(2),
 *     regulatoryOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UEReachability {
    /**
     * @description
     *
     * Indicates the UE is not reachable.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.66.
     */
    unreachable = 1,
    /**
     * @description
     *
     * Indicates the UE is reachable for services and downlink traffic.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.66.
     */
    reachable = 2,
    /**
     * @description
     *
     * Indicates the UE is reachable only for Regulatory Prioritized Service as
     * the UE is in Not Allowed Areas.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.66.
     */
    regulatoryOnly = 3,
}

/**
 * @summary UEReachability
 * @description
 * 
 * The UEReachability indicates the reachability of the UE. UEReachability is
 * derived from the UeReachability type defined in TS 29.518 [22] clause
 * 6.2.6.3.7.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.66.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEReachability  ::=  ENUMERATED
 * {
 *     unreachable(1),
 *     reachable(2),
 *     regulatoryOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UEReachability = _enum_for_UEReachability;

/**
 * @summary UEReachability
 * @description
 * 
 * The UEReachability indicates the reachability of the UE. UEReachability is
 * derived from the UeReachability type defined in TS 29.518 [22] clause
 * 6.2.6.3.7.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.66.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEReachability  ::=  ENUMERATED
 * {
 *     unreachable(1),
 *     reachable(2),
 *     regulatoryOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UEReachability = _enum_for_UEReachability;

/**
 * @summary UEReachability_unreachable
 * @description
 *
 * Indicates the UE is not reachable.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.66.
 *
 * @constant
 * @type {number}
 */
export
const UEReachability_unreachable = UEReachability.unreachable satisfies UEReachability; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unreachable
 * @description
 *
 * Indicates the UE is not reachable.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.66.
 *
 * @constant
 * @type {number}
 */
export
const unreachable = UEReachability.unreachable satisfies UEReachability; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UEReachability_reachable
 * @description
 *
 * Indicates the UE is reachable for services and downlink traffic.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.66.
 *
 * @constant
 * @type {number}
 */
export
const UEReachability_reachable = UEReachability.reachable satisfies UEReachability; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reachable
 * @description
 *
 * Indicates the UE is reachable for services and downlink traffic.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.66.
 *
 * @constant
 * @type {number}
 */
export
const reachable = UEReachability.reachable satisfies UEReachability; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UEReachability_regulatoryOnly
 * @description
 *
 * Indicates the UE is reachable only for Regulatory Prioritized Service as the
 * UE is in Not Allowed Areas.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.66.
 *
 * @constant
 * @type {number}
 */
export
const UEReachability_regulatoryOnly = UEReachability.regulatoryOnly satisfies UEReachability; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary regulatoryOnly
 * @description
 *
 * Indicates the UE is reachable only for Regulatory Prioritized Service as the
 * UE is in Not Allowed Areas.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.66.
 *
 * @constant
 * @type {number}
 */
export
const regulatoryOnly = UEReachability.regulatoryOnly satisfies UEReachability; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UEReachability: $.ASN1Decoder<UEReachability> = $._decodeEnumerated;
export const _encode_UEReachability: $.ASN1Encoder<UEReachability> = $._encodeEnumerated;


/* eslint-enable */
