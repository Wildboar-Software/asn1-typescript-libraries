/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGProSeAuthorizationIndicator
 * @description
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
    authorized = 1,
    notAuthorized = 2,
}

/**
 * @summary FiveGProSeAuthorizationIndicator
 * @description
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
const FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;

/**
 * @summary FiveGProSeAuthorizationIndicator_authorized
 * @constant
 * @type {number}
 */
export
const FiveGProSeAuthorizationIndicator_authorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @constant
 * @type {number}
 */
export
const authorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGProSeAuthorizationIndicator_notAuthorized
 * @constant
 * @type {number}
 */
export
const FiveGProSeAuthorizationIndicator_notAuthorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export
const notAuthorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FiveGProSeAuthorizationIndicator: $.ASN1Decoder<FiveGProSeAuthorizationIndicator> = $._decodeEnumerated;
export const _encode_FiveGProSeAuthorizationIndicator: $.ASN1Encoder<FiveGProSeAuthorizationIndicator> = $._encodeEnumerated;


/* eslint-enable */
