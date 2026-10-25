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
const IMSRegistrationStatus: typeof _enum_for_IMSRegistrationStatus = _enum_for_IMSRegistrationStatus;

/**
 * @summary IMSRegistrationStatus_initialRegistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_initialRegistration: _enum_for_IMSRegistrationStatus.initialRegistration = IMSRegistrationStatus.initialRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialRegistration
 * @constant
 * @type {number}
 */
export
const initialRegistration: _enum_for_IMSRegistrationStatus.initialRegistration = IMSRegistrationStatus.initialRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_reregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_reregistration: _enum_for_IMSRegistrationStatus.reregistration = IMSRegistrationStatus.reregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reregistration
 * @constant
 * @type {number}
 */
export
const reregistration: _enum_for_IMSRegistrationStatus.reregistration = IMSRegistrationStatus.reregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_timeoutDeregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_timeoutDeregistration: _enum_for_IMSRegistrationStatus.timeoutDeregistration = IMSRegistrationStatus.timeoutDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeoutDeregistration
 * @constant
 * @type {number}
 */
export
const timeoutDeregistration: _enum_for_IMSRegistrationStatus.timeoutDeregistration = IMSRegistrationStatus.timeoutDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_userDeregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_userDeregistration: _enum_for_IMSRegistrationStatus.userDeregistration = IMSRegistrationStatus.userDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userDeregistration
 * @constant
 * @type {number}
 */
export
const userDeregistration: _enum_for_IMSRegistrationStatus.userDeregistration = IMSRegistrationStatus.userDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_administrativeDeregistration
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_administrativeDeregistration: _enum_for_IMSRegistrationStatus.administrativeDeregistration = IMSRegistrationStatus.administrativeDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary administrativeDeregistration
 * @constant
 * @type {number}
 */
export
const administrativeDeregistration: _enum_for_IMSRegistrationStatus.administrativeDeregistration = IMSRegistrationStatus.administrativeDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_authenticationFailure
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_authenticationFailure: _enum_for_IMSRegistrationStatus.authenticationFailure = IMSRegistrationStatus.authenticationFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationFailure
 * @constant
 * @type {number}
 */
export
const authenticationFailure: _enum_for_IMSRegistrationStatus.authenticationFailure = IMSRegistrationStatus.authenticationFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_authenticationTimeout
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_authenticationTimeout: _enum_for_IMSRegistrationStatus.authenticationTimeout = IMSRegistrationStatus.authenticationTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationTimeout
 * @constant
 * @type {number}
 */
export
const authenticationTimeout: _enum_for_IMSRegistrationStatus.authenticationTimeout = IMSRegistrationStatus.authenticationTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IMSRegistrationStatus_unregisteredUser
 * @constant
 * @type {number}
 */
export
const IMSRegistrationStatus_unregisteredUser: _enum_for_IMSRegistrationStatus.unregisteredUser = IMSRegistrationStatus.unregisteredUser; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unregisteredUser
 * @constant
 * @type {number}
 */
export
const unregisteredUser: _enum_for_IMSRegistrationStatus.unregisteredUser = IMSRegistrationStatus.unregisteredUser; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IMSRegistrationStatus: $.ASN1Decoder<IMSRegistrationStatus> = $._decodeEnumerated;
export const _encode_IMSRegistrationStatus: $.ASN1Encoder<IMSRegistrationStatus> = $._encodeEnumerated;


/* eslint-enable */
