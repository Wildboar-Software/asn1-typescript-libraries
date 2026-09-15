/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthMethod
 * @description
 * 
 * Authentication class used with a Security Environment. ISO/IEC 7816-15:2016
 * §8.2.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthMethod  ::=  BIT STRING {
 *     secureMessaging(0),
 *     extAuthentication(1),
 *     userAuthentication(2),
 *     always(3)
 * }
 * ```
 */
export
type AuthMethod = BIT_STRING;

/**
 * @summary AuthMethod_secureMessaging
 * @description
 * Secure messaging. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AuthMethod_secureMessaging: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary secureMessaging
 * @constant
 */
export
const secureMessaging: number = AuthMethod_secureMessaging; /* SHORT_NAMED_BIT */

/**
 * @summary AuthMethod_extAuthentication
 * @description
 * External authentication. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AuthMethod_extAuthentication: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary extAuthentication
 * @constant
 */
export
const extAuthentication: number = AuthMethod_extAuthentication; /* SHORT_NAMED_BIT */

/**
 * @summary AuthMethod_userAuthentication
 * @description
 * User authentication. ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AuthMethod_userAuthentication: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary userAuthentication
 * @constant
 */
export
const userAuthentication: number = AuthMethod_userAuthentication; /* SHORT_NAMED_BIT */

/**
 * @summary AuthMethod_always
 * @description
 * Always (unconditional in this class). ISO/IEC 7816-15:2016 §8.2.8.
 * @constant
 */
export
const AuthMethod_always: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary always
 * @constant
 */
export
const always: number = AuthMethod_always; /* SHORT_NAMED_BIT */
export const _decode_AuthMethod = $._decodeBitString;
export const _encode_AuthMethod = $._encodeBitString;


/* eslint-enable */
