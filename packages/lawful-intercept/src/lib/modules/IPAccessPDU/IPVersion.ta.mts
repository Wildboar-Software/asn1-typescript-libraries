/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IPVersion {
    iPV4 = 1,
    iPV6 = 2,
    iPV4andV6 = 3,
}

/**
 * @summary IPVersion
 * @description
 *
 * Which IP version the target service uses. This chooses how
 * `targetIPAddress`, `additionalIPAddress`, and `otherTargetIdentifiers`
 * are filled (ETSI TS 102 232-3 V3.9.1, clause 6.2.1). The interception
 * function supplies a fixed value (tables A.4 and B.3).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPVersion  ::=  ENUMERATED
 * {
 *     iPV4(1),
 *         -- The IPv4 protocol is used
 *     iPV6(2),
 *         -- The IPv6 protocol is used
 *     iPV4andV6(3),
 *         -- The IPv4 and IPv6 protocols are used
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IPVersion = _enum_for_IPVersion | ENUMERATED;

/**
 * @summary IPVersion_iPV4
 * @description
 *
 * IPv4 only. `targetIPAddress` is the first IPv4 address or subnet.
 * `additionalIPAddress` is empty. Further IPv4 ranges go in
 * `otherTargetIdentifiers` (clause 6.2.1).
 *
 * @constant
 * @type {number}
 */
export
const IPVersion_iPV4: _enum_for_IPVersion.iPV4 = _enum_for_IPVersion.iPV4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV4
 * @description
 *
 * The service uses IPv4 only (clause 6.2.1).
 *
 * @constant
 * @type {number}
 */
export
const iPV4: _enum_for_IPVersion.iPV4 = IPVersion_iPV4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPVersion_iPV6
 * @description
 *
 * IPv6 only. `targetIPAddress` is the first IPv6 address or prefix.
 * `additionalIPAddress` is empty. Further IPv6 ranges go in
 * `otherTargetIdentifiers`. For RADIUS, clause A.5.2.6 gives the
 * order Framed-IPv6-Address, then Framed-IPv6-Prefix, then
 * Delegated-IPv6-Prefix.
 *
 * @constant
 * @type {number}
 */
export
const IPVersion_iPV6: _enum_for_IPVersion.iPV6 = _enum_for_IPVersion.iPV6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV6
 * @description
 *
 * The service uses IPv6 only (clause 6.2.1).
 *
 * @constant
 * @type {number}
 */
export
const iPV6: _enum_for_IPVersion.iPV6 = IPVersion_iPV6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IPVersion_iPV4andV6
 * @description
 *
 * Dual stack. `targetIPAddress` is the first IPv4 address or subnet.
 * `additionalIPAddress` is the first IPv6 address or prefix. Further
 * addresses of either family go in `otherTargetIdentifiers`
 * (clause 6.2.1). RADIUS dual-stack mapping is in clause A.5.2.6
 * and table A.6.
 *
 * @constant
 * @type {number}
 */
export
const IPVersion_iPV4andV6: _enum_for_IPVersion.iPV4andV6 = _enum_for_IPVersion.iPV4andV6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPV4andV6
 * @description
 *
 * The service uses IPv4 and IPv6 together (clause 6.2.1).
 *
 * @constant
 * @type {number}
 */
export
const iPV4andV6: _enum_for_IPVersion.iPV4andV6 = IPVersion_iPV4andV6; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IPVersion: $.ASN1Decoder<IPVersion> = $._decodeEnumerated;
export const _encode_IPVersion: $.ASN1Encoder<IPVersion> = $._encodeEnumerated;


/* eslint-enable */
