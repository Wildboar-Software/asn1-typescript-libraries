/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export
enum _enum_for_AuthenticationType {
    /**
     * The AAA function for the target service is unknown. Tables A.10 and
     * A.11 require this value for interception that has no network session.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    unknown = 0,
    /**
     * The AAA function for the target service is RADIUS. Annex B describes a
     * RADIUS proxy at the access provider when that provider is not the IAP.
     * The annex does not require this value for that deployment.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), annex B.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    radiusAAA = 2,
    /**
     * The AAA function for the target service is DHCP.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    dhcpAAA = 3,
    /**
     * The AAA function for the target service is Diameter. The ASN.1 comment
     * spells it DIAMETER.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     */
    diameterAAA = 4,
}

/**
 * @summary AuthenticationType
 * @description
 *
 * Which AAA function serves the target, so the LEMF can validate the IRI.
 * `L2IRIContents.authenticationType` carries it. It is conditional on every
 * annex A.1 record. Tables A.10 and A.11 set it to `unknown`.
 *
 * `static(1)` is a root value: the target service has a static IP address
 * and no AAA is expected. It is exported as `AuthenticationType_static`.
 * The generated enum does not list number 1. `static` is not a legal
 * TypeScript enum member name, and there is no short constant.
 *
 * The short name `unknown` is not re-exported from the module index, because
 * `AccessEventType` uses the same short name.
 *
 * The ellipsis names no further values.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
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
 * @description
 *
 * The AAA function for the target service is unknown. Tables A.10 and A.11
 * require this value for interception that has no network session.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const AuthenticationType_unknown = _enum_for_AuthenticationType.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * The AAA function for the target service is unknown. Tables A.10 and A.11
 * require this value for interception that has no network session. Not
 * re-exported from the module index: `AccessEventType` uses the same short
 * name.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex A.1.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const unknown = AuthenticationType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_static
 * @description
 *
 * Value `static(1)`. The target service is assigned a static IP address and
 * no AAA is expected. There is no short constant of this name.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const AuthenticationType_static = 1 satisfies AuthenticationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_radiusAAA
 * @description
 *
 * The AAA function for the target service is RADIUS. Annex B describes a
 * RADIUS proxy at the access provider when that provider is not the IAP.
 * The annex does not require this value for that deployment.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex B.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const AuthenticationType_radiusAAA = _enum_for_AuthenticationType.radiusAAA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radiusAAA
 * @description
 *
 * The AAA function for the target service is RADIUS. Annex B describes a
 * RADIUS proxy at the access provider when that provider is not the IAP.
 * The annex does not require this value for that deployment.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), annex B.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const radiusAAA = AuthenticationType_radiusAAA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_dhcpAAA
 * @description
 *
 * The AAA function for the target service is DHCP.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const AuthenticationType_dhcpAAA = _enum_for_AuthenticationType.dhcpAAA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhcpAAA
 * @description
 *
 * The AAA function for the target service is DHCP.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const dhcpAAA = AuthenticationType_dhcpAAA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthenticationType_diameterAAA
 * @description
 *
 * The AAA function for the target service is Diameter. The ASN.1 comment
 * spells it DIAMETER.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const AuthenticationType_diameterAAA = _enum_for_AuthenticationType.diameterAAA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary diameterAAA
 * @description
 *
 * The AAA function for the target service is Diameter. The ASN.1 comment
 * spells it DIAMETER.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 *
 * @constant
 * @type {number}
 */
export
const diameterAAA = AuthenticationType_diameterAAA; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AuthenticationType: $.ASN1Decoder<AuthenticationType> = $._decodeEnumerated;
export const _encode_AuthenticationType: $.ASN1Encoder<AuthenticationType> = $._encodeEnumerated;


/* eslint-enable */
