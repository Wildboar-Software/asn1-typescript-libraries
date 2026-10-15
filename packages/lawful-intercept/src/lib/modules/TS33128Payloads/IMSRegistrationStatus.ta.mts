/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSRegistrationStatus
 * @description
 * 
 * Provides the current state of the target or IMPU as know at the HSS. See TS
 * 29.562 [101] clause 6.2.6.3.5.
 *
 * 3GPP TS 33.128, clause 7.2.4.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSRegistrationStatus  ::=  ENUMERATED
 * {
 *     initialRegistration(1),
 *     reregistration(2),
 *     timeoutDeregistration(3),
 *     userDeregistration(4),
 *     administrativeDeregistration(5),
 *     authenticationFailure(6),
 *     authenticationTimeout(7),
 *     unregisteredUser(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IMSRegistrationStatus {
    initialRegistration = 1,
    reregistration = 2,
    timeoutDeregistration = 3,
    userDeregistration = 4,
    administrativeDeregistration = 5,
    authenticationFailure = 6,
    authenticationTimeout = 7,
    unregisteredUser = 8,
}

/**
 * @summary IMSRegistrationStatus
 * @description
 * 
 * Provides the current state of the target or IMPU as know at the HSS. See TS
 * 29.562 [101] clause 6.2.6.3.5.
 *
 * 3GPP TS 33.128, clause 7.2.4.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSRegistrationStatus  ::=  ENUMERATED
 * {
 *     initialRegistration(1),
 *     reregistration(2),
 *     timeoutDeregistration(3),
 *     userDeregistration(4),
 *     administrativeDeregistration(5),
 *     authenticationFailure(6),
 *     authenticationTimeout(7),
 *     unregisteredUser(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IMSRegistrationStatus = _enum_for_IMSRegistrationStatus;

/**
 * @summary IMSRegistrationStatus
 * @description
 * 
 * Provides the current state of the target or IMPU as know at the HSS. See TS
 * 29.562 [101] clause 6.2.6.3.5.
 *
 * 3GPP TS 33.128, clause 7.2.4.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSRegistrationStatus  ::=  ENUMERATED
 * {
 *     initialRegistration(1),
 *     reregistration(2),
 *     timeoutDeregistration(3),
 *     userDeregistration(4),
 *     administrativeDeregistration(5),
 *     authenticationFailure(6),
 *     authenticationTimeout(7),
 *     unregisteredUser(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const IMSRegistrationStatus = _enum_for_IMSRegistrationStatus;

/**
 * @summary IMSRegistrationStatus_initialRegistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_initialRegistration: IMSRegistrationStatus = IMSRegistrationStatus.initialRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialRegistration
 * @constant
 * @type {number}
 */
export
const initialRegistration: IMSRegistrationStatus = IMSRegistrationStatus.initialRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_reregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_reregistration: IMSRegistrationStatus = IMSRegistrationStatus.reregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reregistration
 * @constant
 * @type {number}
 */
export
const reregistration: IMSRegistrationStatus = IMSRegistrationStatus.reregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_timeoutDeregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_timeoutDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.timeoutDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeoutDeregistration
 * @constant
 * @type {number}
 */
export
const timeoutDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.timeoutDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_userDeregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_userDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.userDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userDeregistration
 * @constant
 * @type {number}
 */
export
const userDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.userDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_administrativeDeregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_administrativeDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.administrativeDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary administrativeDeregistration
 * @constant
 * @type {number}
 */
export
const administrativeDeregistration: IMSRegistrationStatus = IMSRegistrationStatus.administrativeDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_authenticationFailure
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_authenticationFailure: IMSRegistrationStatus = IMSRegistrationStatus.authenticationFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationFailure
 * @constant
 * @type {number}
 */
export
const authenticationFailure: IMSRegistrationStatus = IMSRegistrationStatus.authenticationFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_authenticationTimeout
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_authenticationTimeout: IMSRegistrationStatus = IMSRegistrationStatus.authenticationTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationTimeout
 * @constant
 * @type {number}
 */
export
const authenticationTimeout: IMSRegistrationStatus = IMSRegistrationStatus.authenticationTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_unregisteredUser
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_unregisteredUser: IMSRegistrationStatus = IMSRegistrationStatus.unregisteredUser; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unregisteredUser
 * @constant
 * @type {number}
 */
export
const unregisteredUser: IMSRegistrationStatus = IMSRegistrationStatus.unregisteredUser; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IMSRegistrationStatus: $.ASN1Decoder<IMSRegistrationStatus> = $._decodeEnumerated;
export const _encode_IMSRegistrationStatus: $.ASN1Encoder<IMSRegistrationStatus> = $._encodeEnumerated;


/* eslint-enable */
