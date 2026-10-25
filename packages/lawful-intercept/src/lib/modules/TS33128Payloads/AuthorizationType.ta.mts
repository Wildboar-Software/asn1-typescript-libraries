/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthorizationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     deregistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AuthorizationType {
    registration = 1,
    deregistration = 2,
}

/**
 * @summary AuthorizationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     deregistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AuthorizationType = _enum_for_AuthorizationType;

/**
 * @summary AuthorizationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     deregistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AuthorizationType = _enum_for_AuthorizationType;

/**
 * @summary AuthorizationType_registration
 * @constant
 * @type {number}
 */
export
const AuthorizationType_registration = AuthorizationType.registration satisfies AuthorizationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration = AuthorizationType.registration satisfies AuthorizationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthorizationType_deregistration
 * @constant
 * @type {number}
 */
export
const AuthorizationType_deregistration = AuthorizationType.deregistration satisfies AuthorizationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistration
 * @constant
 * @type {number}
 */
export
const deregistration = AuthorizationType.deregistration satisfies AuthorizationType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AuthorizationType: $.ASN1Decoder<AuthorizationType> = $._decodeEnumerated;
export const _encode_AuthorizationType: $.ASN1Encoder<AuthorizationType> = $._encodeEnumerated;


/* eslint-enable */
