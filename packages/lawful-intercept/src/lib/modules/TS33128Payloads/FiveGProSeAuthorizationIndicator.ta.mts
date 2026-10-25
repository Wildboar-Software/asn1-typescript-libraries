/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGProSeAuthorizationIndicator
 * @description
 * 
 * The FiveGProSeAuthorizationIndicator indicates authorization status of the UE
 * to use the 5G ProSe services. Derived from the 5G ProSe Authorized IE defined
 * in TS 38.413 [23] clause 9.3.1.233.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.11.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGProSeAuthorizationIndicator {
    /**
     * @description
     *
     * 5G ProSe service is authorized.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.11.
     */
    authorized = 1,
    /**
     * @description
     *
     * 5G ProSe service is not authorized.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.11.
     */
    notAuthorized = 2,
}

/**
 * @summary FiveGProSeAuthorizationIndicator
 * @description
 * 
 * The FiveGProSeAuthorizationIndicator indicates authorization status of the UE
 * to use the 5G ProSe services. Derived from the 5G ProSe Authorized IE defined
 * in TS 38.413 [23] clause 9.3.1.233.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.11.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;

/**
 * @summary FiveGProSeAuthorizationIndicator
 * @description
 * 
 * The FiveGProSeAuthorizationIndicator indicates authorization status of the UE
 * to use the 5G ProSe services. Derived from the 5G ProSe Authorized IE defined
 * in TS 38.413 [23] clause 9.3.1.233.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.11.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGProSeAuthorizationIndicator: typeof _enum_for_FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;

/**
 * @summary FiveGProSeAuthorizationIndicator_authorized
 * @description
 *
 * 5G ProSe service is authorized.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.11.
 *
 * @constant
 * @type {number}
 */
export
const FiveGProSeAuthorizationIndicator_authorized: _enum_for_FiveGProSeAuthorizationIndicator.authorized = FiveGProSeAuthorizationIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @description
 *
 * 5G ProSe service is authorized.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.11.
 *
 * @constant
 * @type {number}
 */
export
const authorized: _enum_for_FiveGProSeAuthorizationIndicator.authorized = FiveGProSeAuthorizationIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGProSeAuthorizationIndicator_notAuthorized
 * @description
 *
 * 5G ProSe service is not authorized.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.11.
 *
 * @constant
 * @type {number}
 */
export
const FiveGProSeAuthorizationIndicator_notAuthorized: _enum_for_FiveGProSeAuthorizationIndicator.notAuthorized = FiveGProSeAuthorizationIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @description
 *
 * 5G ProSe service is not authorized.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.11.
 *
 * @constant
 * @type {number}
 */
export
const notAuthorized: _enum_for_FiveGProSeAuthorizationIndicator.notAuthorized = FiveGProSeAuthorizationIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FiveGProSeAuthorizationIndicator: $.ASN1Decoder<FiveGProSeAuthorizationIndicator> = $._decodeEnumerated;
export const _encode_FiveGProSeAuthorizationIndicator: $.ASN1Encoder<FiveGProSeAuthorizationIndicator> = $._encodeEnumerated;


/* eslint-enable */
