/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IABAuthorizedIndicator
 * @description
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
    authorized = 1,
    notAuthorized = 2,
}

/**
 * @summary IABAuthorizedIndicator
 * @description
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
const IABAuthorizedIndicator = _enum_for_IABAuthorizedIndicator;

/**
 * @summary IABAuthorizedIndicator_authorized
 * @constant
 * @type {number}
 */
export
const IABAuthorizedIndicator_authorized: IABAuthorizedIndicator = IABAuthorizedIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @constant
 * @type {number}
 */
export
const authorized: IABAuthorizedIndicator = IABAuthorizedIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IABAuthorizedIndicator_notAuthorized
 * @constant
 * @type {number}
 */
export
const IABAuthorizedIndicator_notAuthorized: IABAuthorizedIndicator = IABAuthorizedIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export
const notAuthorized: IABAuthorizedIndicator = IABAuthorizedIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_IABAuthorizedIndicator: $.ASN1Decoder<IABAuthorizedIndicator> = $._decodeEnumerated;

export const _encode_IABAuthorizedIndicator: $.ASN1Encoder<IABAuthorizedIndicator> = $._encodeEnumerated;


/* eslint-enable */
