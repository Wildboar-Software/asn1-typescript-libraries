/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IABAuthorizedIndicator
 * @description
 * 
 * The IABAuthorizedIndicator provides information about the authorization
 * status of the IAB node. Defined in TS 38.413 [23] clause 9.3.1.129.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IABAuthorizedIndicator {
    /**
     * @description
     *
     * Indicates the UE is authorized to operate as an IAB node.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.9.
     */
    authorized = 1,
    /**
     * @description
     *
     * Indicates the UE is not authorized to operate as an IAB node.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.9.
     */
    notAuthorized = 2,
}

/**
 * @summary IABAuthorizedIndicator
 * @description
 * 
 * The IABAuthorizedIndicator provides information about the authorization
 * status of the IAB node. Defined in TS 38.413 [23] clause 9.3.1.129.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IABAuthorizedIndicator = _enum_for_IABAuthorizedIndicator;

/**
 * @summary IABAuthorizedIndicator
 * @description
 * 
 * The IABAuthorizedIndicator provides information about the authorization
 * status of the IAB node. Defined in TS 38.413 [23] clause 9.3.1.129.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const IABAuthorizedIndicator: typeof _enum_for_IABAuthorizedIndicator = _enum_for_IABAuthorizedIndicator;

/**
 * @summary IABAuthorizedIndicator_authorized
 * @description
 *
 * Indicates the UE is authorized to operate as an IAB node.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.9.
 *
 * @constant
 * @type {number}
 */
export
const IABAuthorizedIndicator_authorized: _enum_for_IABAuthorizedIndicator.authorized = IABAuthorizedIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @description
 *
 * Indicates the UE is authorized to operate as an IAB node.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.9.
 *
 * @constant
 * @type {number}
 */
export
const authorized: _enum_for_IABAuthorizedIndicator.authorized = IABAuthorizedIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IABAuthorizedIndicator_notAuthorized
 * @description
 *
 * Indicates the UE is not authorized to operate as an IAB node.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.9.
 *
 * @constant
 * @type {number}
 */
export
const IABAuthorizedIndicator_notAuthorized: _enum_for_IABAuthorizedIndicator.notAuthorized = IABAuthorizedIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @description
 *
 * Indicates the UE is not authorized to operate as an IAB node.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.9.
 *
 * @constant
 * @type {number}
 */
export
const notAuthorized: _enum_for_IABAuthorizedIndicator.notAuthorized = IABAuthorizedIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IABAuthorizedIndicator: $.ASN1Decoder<IABAuthorizedIndicator> = $._decodeEnumerated;
export const _encode_IABAuthorizedIndicator: $.ASN1Encoder<IABAuthorizedIndicator> = $._encodeEnumerated;


/* eslint-enable */
