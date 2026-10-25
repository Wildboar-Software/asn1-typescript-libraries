/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MobileIABAuthorizedIndicator
 * @description
 * 
 * The MobileIABAuthorizedIndicator provides information about the authorization
 * status of the mobile IAB node. Defined in TS 38.413 [23] clause 9.3.1.259.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.13.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MobileIABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MobileIABAuthorizedIndicator {
    /**
     * @description
     *
     * Indicates the UE is authorized to operate as a mobile IAB node.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.13.
     */
    authorized = 1,
    /**
     * @description
     *
     * Indicates the UE is not authorized to operate as a mobile IAB node.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.13.
     */
    notAuthorized = 2,
}

/**
 * @summary MobileIABAuthorizedIndicator
 * @description
 * 
 * The MobileIABAuthorizedIndicator provides information about the authorization
 * status of the mobile IAB node. Defined in TS 38.413 [23] clause 9.3.1.259.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.13.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MobileIABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MobileIABAuthorizedIndicator = _enum_for_MobileIABAuthorizedIndicator;

/**
 * @summary MobileIABAuthorizedIndicator
 * @description
 * 
 * The MobileIABAuthorizedIndicator provides information about the authorization
 * status of the mobile IAB node. Defined in TS 38.413 [23] clause 9.3.1.259.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.13.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MobileIABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MobileIABAuthorizedIndicator: typeof _enum_for_MobileIABAuthorizedIndicator = _enum_for_MobileIABAuthorizedIndicator;

/**
 * @summary MobileIABAuthorizedIndicator_authorized
 * @description
 *
 * Indicates the UE is authorized to operate as a mobile IAB node.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.13.
 *
 * @constant
 * @type {number}
 */
export
const MobileIABAuthorizedIndicator_authorized: _enum_for_MobileIABAuthorizedIndicator.authorized = MobileIABAuthorizedIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @description
 *
 * Indicates the UE is authorized to operate as a mobile IAB node.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.13.
 *
 * @constant
 * @type {number}
 */
export
const authorized: _enum_for_MobileIABAuthorizedIndicator.authorized = MobileIABAuthorizedIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MobileIABAuthorizedIndicator_notAuthorized
 * @description
 *
 * Indicates the UE is not authorized to operate as a mobile IAB node.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.13.
 *
 * @constant
 * @type {number}
 */
export
const MobileIABAuthorizedIndicator_notAuthorized: _enum_for_MobileIABAuthorizedIndicator.notAuthorized = MobileIABAuthorizedIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @description
 *
 * Indicates the UE is not authorized to operate as a mobile IAB node.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.13.
 *
 * @constant
 * @type {number}
 */
export
const notAuthorized: _enum_for_MobileIABAuthorizedIndicator.notAuthorized = MobileIABAuthorizedIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MobileIABAuthorizedIndicator: $.ASN1Decoder<MobileIABAuthorizedIndicator> = $._decodeEnumerated;
export const _encode_MobileIABAuthorizedIndicator: $.ASN1Encoder<MobileIABAuthorizedIndicator> = $._encodeEnumerated;


/* eslint-enable */
