/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary V2XUEAuthorizationIndicator
 * @description
 * 
 * The V2XUEAuthorizationIndicator indicates whether the UE is authorized to use
 * Sidelink for V2X operation. Derived from the IEs defined in TS 38.413 [23]
 * clauses 9.3.1.146 and 9.3.1.147.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V2XUEAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_V2XUEAuthorizationIndicator {
    /**
     * @description
     *
     * Sidelink for V2X operation is authorized.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.10.
     */
    authorized = 1,
    /**
     * @description
     *
     * Sidelink for V2X operation is not authorized.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.10.
     */
    notAuthorized = 2,
}

/**
 * @summary V2XUEAuthorizationIndicator
 * @description
 * 
 * The V2XUEAuthorizationIndicator indicates whether the UE is authorized to use
 * Sidelink for V2X operation. Derived from the IEs defined in TS 38.413 [23]
 * clauses 9.3.1.146 and 9.3.1.147.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V2XUEAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type V2XUEAuthorizationIndicator = _enum_for_V2XUEAuthorizationIndicator;

/**
 * @summary V2XUEAuthorizationIndicator
 * @description
 * 
 * The V2XUEAuthorizationIndicator indicates whether the UE is authorized to use
 * Sidelink for V2X operation. Derived from the IEs defined in TS 38.413 [23]
 * clauses 9.3.1.146 and 9.3.1.147.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V2XUEAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const V2XUEAuthorizationIndicator = _enum_for_V2XUEAuthorizationIndicator;

/**
 * @summary V2XUEAuthorizationIndicator_authorized
 * @description
 *
 * Sidelink for V2X operation is authorized.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.10.
 *
 * @constant
 * @type {number}
 */
export
const V2XUEAuthorizationIndicator_authorized = V2XUEAuthorizationIndicator.authorized satisfies V2XUEAuthorizationIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @description
 *
 * Sidelink for V2X operation is authorized.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.10.
 *
 * @constant
 * @type {number}
 */
export
const authorized = V2XUEAuthorizationIndicator.authorized satisfies V2XUEAuthorizationIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V2XUEAuthorizationIndicator_notAuthorized
 * @description
 *
 * Sidelink for V2X operation is not authorized.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.10.
 *
 * @constant
 * @type {number}
 */
export
const V2XUEAuthorizationIndicator_notAuthorized = V2XUEAuthorizationIndicator.notAuthorized satisfies V2XUEAuthorizationIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @description
 *
 * Sidelink for V2X operation is not authorized.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.10.
 *
 * @constant
 * @type {number}
 */
export
const notAuthorized = V2XUEAuthorizationIndicator.notAuthorized satisfies V2XUEAuthorizationIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_V2XUEAuthorizationIndicator: $.ASN1Decoder<V2XUEAuthorizationIndicator> = $._decodeEnumerated;
export const _encode_V2XUEAuthorizationIndicator: $.ASN1Encoder<V2XUEAuthorizationIndicator> = $._encodeEnumerated;


/* eslint-enable */
