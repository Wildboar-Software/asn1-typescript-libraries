/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export
enum _enum_for_AuthenticationType {
    unknown = 0,
    radiusAAA = 2,
    dhcpAAA = 3,
    diameterAAA = 4,
}

/**
 * @summary AuthenticationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationType ::= ENUMERATED
 * {
 *     unknown(0),
 *         -- AAA function for the target service is unknown
 *     static(1),
 *         -- The target service is assigned a static IP address & no AAA expected
 *     radiusAAA(2),
 *         -- AAA function for the target service is provided by RADIUS
 *     dhcpAAA(3),
 *         -- AAA function for the target service is provided by DHCP
 *     diameterAAA(4),
 *         -- AAA function for the target service is provided by DIAMETER
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AuthenticationType = _enum_for_AuthenticationType | ENUMERATED;

/**
 * @summary AuthenticationType_unknown
 * @constant
 * @type {number}
 */
export
const AuthenticationType_unknown: AuthenticationType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: AuthenticationType = AuthenticationType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_static
 * @constant
 * @type {number}
 */
export
const AuthenticationType_static: AuthenticationType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_radiusAAA
 * @constant
 * @type {number}
 */
export
const AuthenticationType_radiusAAA: AuthenticationType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radiusAAA
 * @constant
 * @type {number}
 */
export
const radiusAAA: AuthenticationType = AuthenticationType_radiusAAA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_dhcpAAA
 * @constant
 * @type {number}
 */
export
const AuthenticationType_dhcpAAA: AuthenticationType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhcpAAA
 * @constant
 * @type {number}
 */
export
const dhcpAAA: AuthenticationType = AuthenticationType_dhcpAAA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_diameterAAA
 * @constant
 * @type {number}
 */
export
const AuthenticationType_diameterAAA: AuthenticationType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary diameterAAA
 * @constant
 * @type {number}
 */
export
const diameterAAA: AuthenticationType = AuthenticationType_diameterAAA; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AuthenticationType: $.ASN1Decoder<AuthenticationType> = $._decodeEnumerated;
export const _encode_AuthenticationType: $.ASN1Encoder<AuthenticationType> = $._encodeEnumerated;


/* eslint-enable */
