/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";

/**
 * @summary RCSRegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSRegistrationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     reRegistration(2),
 *     uEDeregistration(3),
 *     networkDeregistration(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSRegistrationType {
    registration = 1,
    reRegistration = 2,
    uEDeregistration = 3,
    networkDeregistration = 4,
}

/**
 * @summary RCSRegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSRegistrationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     reRegistration(2),
 *     uEDeregistration(3),
 *     networkDeregistration(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSRegistrationType = _enum_for_RCSRegistrationType;

/**
 * @summary RCSRegistrationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSRegistrationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     reRegistration(2),
 *     uEDeregistration(3),
 *     networkDeregistration(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSRegistrationType = _enum_for_RCSRegistrationType;

/**
 * @summary RCSRegistrationType_registration
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_registration: RCSRegistrationType = RCSRegistrationType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration: RCSRegistrationType = RCSRegistrationType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSRegistrationType_reRegistration
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_reRegistration: RCSRegistrationType = RCSRegistrationType.reRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reRegistration
 * @constant
 * @type {number}
 */
export
const reRegistration: RCSRegistrationType = RCSRegistrationType.reRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSRegistrationType_uEDeregistration
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_uEDeregistration: RCSRegistrationType = RCSRegistrationType.uEDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEDeregistration
 * @constant
 * @type {number}
 */
export
const uEDeregistration: RCSRegistrationType = RCSRegistrationType.uEDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSRegistrationType_networkDeregistration
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_networkDeregistration: RCSRegistrationType = RCSRegistrationType.networkDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkDeregistration
 * @constant
 * @type {number}
 */
export
const networkDeregistration: RCSRegistrationType = RCSRegistrationType.networkDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_RCSRegistrationType: $.ASN1Decoder<RCSRegistrationType> = $._decodeEnumerated;

export const _encode_RCSRegistrationType: $.ASN1Encoder<RCSRegistrationType> = $._encodeEnumerated;

/* eslint-enable */
