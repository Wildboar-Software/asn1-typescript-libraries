/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AuthenticationType {
    unknown = 0,
    static_ = 1,
    radiusAAA = 2,
    dhcpAAA = 3,
    diameterAAA = 4,
}

/**
 * @summary AuthenticationType
 * @description
 *
 * Which function authenticated or assigned the target service, so the
 * LEMF can check the IRI (ETSI TS 102 232-3 V3.9.1, table 2). Sent on
 * the IRI-REPORT and the IRI-BEGIN. RADIUS derives it from the
 * authentication message type (table A.4).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationType  ::=  ENUMERATED
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
 * @description
 *
 * The AAA function for the target service is unknown (clause 8).
 *
 * @constant
 * @type {number}
 */
export
const AuthenticationType_unknown: AuthenticationType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * The AAA function for the target service is unknown (clause 8).
 *
 * @constant
 * @type {number}
 */
export
const unknown: AuthenticationType = AuthenticationType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_static_
 * @description
 *
 * The service has a static address and no AAA exchange is expected
 * (clause 8). For static xDSL, especially PPPoA, the address may be
 * taken from IAP administration (clause 5.1.2). A host that only sends
 * DHCPINFORM has no DHCP event for the start or end of service
 * (clause B.4).
 *
 * @constant
 * @type {number}
 */
export
const AuthenticationType_static_: AuthenticationType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary static_
 * @description
 *
 * Static address; no AAA exchange is expected (clause 8).
 *
 * @constant
 * @type {number}
 */
export
const static_: AuthenticationType = AuthenticationType_static_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_radiusAAA
 * @description
 *
 * RADIUS provides AAA (IETF RFC 2865 and RFC 2866). Annex A is the
 * stage 1 description: authentication on UDP port 1812, accounting on
 * UDP port 1813, and the attribute mapping in tables A.4 to A.6.
 *
 * @constant
 * @type {number}
 */
export
const AuthenticationType_radiusAAA: AuthenticationType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radiusAAA
 * @description
 *
 * AAA is provided by RADIUS (annex A).
 *
 * @constant
 * @type {number}
 */
export
const radiusAAA: AuthenticationType = AuthenticationType_radiusAAA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_dhcpAAA
 * @description
 *
 * DHCP assigns the address (IETF RFC 2131). Clause 4.2 notes that
 * DHCP does little authentication and no authorization or accounting,
 * and is often paired with RADIUS. Annex B is the stage 1 description.
 *
 * @constant
 * @type {number}
 */
export
const AuthenticationType_dhcpAAA: AuthenticationType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhcpAAA
 * @description
 *
 * Address assignment is provided by DHCP (annex B).
 *
 * @constant
 * @type {number}
 */
export
const dhcpAAA: AuthenticationType = AuthenticationType_dhcpAAA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_diameterAAA
 * @description
 *
 * Diameter provides AAA (clause 8). V3.9.1 does not define a Diameter
 * mapping onto these IRI fields.
 *
 * @constant
 * @type {number}
 */
export
const AuthenticationType_diameterAAA: AuthenticationType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary diameterAAA
 * @description
 *
 * AAA is provided by Diameter. V3.9.1 gives no field mapping.
 *
 * @constant
 * @type {number}
 */
export
const diameterAAA: AuthenticationType = AuthenticationType_diameterAAA; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AuthenticationType: $.ASN1Decoder<AuthenticationType> = $._decodeEnumerated;
export const _encode_AuthenticationType: $.ASN1Encoder<AuthenticationType> = $._encodeEnumerated;


/* eslint-enable */
