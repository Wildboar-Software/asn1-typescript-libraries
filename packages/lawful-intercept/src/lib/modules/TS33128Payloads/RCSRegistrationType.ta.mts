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
    /**
     * @description
     *
     * Shall be selected if the message being reported contains a SIP REGISTER
     * request for a target that is not currently registered.
     *
     * 3GPP TS 33.128, clause 7.13.3.2.2.1.
     */
    registration = 1,
    /**
     * @description
     *
     * Shall be selected if the message being reported contains a SIP REGISTER
     * request and the target is already registered.
     *
     * 3GPP TS 33.128, clause 7.13.3.2.2.1.
     */
    reRegistration = 2,
    /**
     * @description
     *
     * Shall be selected if the event being reported contains a SIP REGISTER
     * request with an "expires" parameter set to 0 and/or a SIP NOTIFY Request
     * with the "state" attribute set to "terminated" and the "event" attribute
     * set to "unregistered".
     *
     * 3GPP TS 33.128, clause 7.13.3.2.2.1.
     */
    uEDeregistration = 3,
    /**
     * @description
     *
     * Shall be selected if the event being reported contains a SIP NOTIFY
     * Request with the "state" attribute set to "terminated" and the "event"
     * attribute set either to "expired", or "rejected", or "deactivated" or
     * "probation".
     *
     * 3GPP TS 33.128, clause 7.13.3.2.2.1.
     */
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
 * @description
 *
 * Shall be selected if the message being reported contains a SIP REGISTER
 * request for a target that is not currently registered.
 *
 * 3GPP TS 33.128, clause 7.13.3.2.2.1.
 *
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_registration = RCSRegistrationType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @description
 *
 * Shall be selected if the message being reported contains a SIP REGISTER
 * request for a target that is not currently registered.
 *
 * 3GPP TS 33.128, clause 7.13.3.2.2.1.
 *
 * @constant
 * @type {number}
 */
export
const registration = RCSRegistrationType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSRegistrationType_reRegistration
 * @description
 *
 * Shall be selected if the message being reported contains a SIP REGISTER
 * request and the target is already registered.
 *
 * 3GPP TS 33.128, clause 7.13.3.2.2.1.
 *
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_reRegistration = RCSRegistrationType.reRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reRegistration
 * @description
 *
 * Shall be selected if the message being reported contains a SIP REGISTER
 * request and the target is already registered.
 *
 * 3GPP TS 33.128, clause 7.13.3.2.2.1.
 *
 * @constant
 * @type {number}
 */
export
const reRegistration = RCSRegistrationType.reRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSRegistrationType_uEDeregistration
 * @description
 *
 * Shall be selected if the event being reported contains a SIP REGISTER request
 * with an "expires" parameter set to 0 and/or a SIP NOTIFY Request with the
 * "state" attribute set to "terminated" and the "event" attribute set to
 * "unregistered".
 *
 * 3GPP TS 33.128, clause 7.13.3.2.2.1.
 *
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_uEDeregistration = RCSRegistrationType.uEDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEDeregistration
 * @description
 *
 * Shall be selected if the event being reported contains a SIP REGISTER request
 * with an "expires" parameter set to 0 and/or a SIP NOTIFY Request with the
 * "state" attribute set to "terminated" and the "event" attribute set to
 * "unregistered".
 *
 * 3GPP TS 33.128, clause 7.13.3.2.2.1.
 *
 * @constant
 * @type {number}
 */
export
const uEDeregistration = RCSRegistrationType.uEDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSRegistrationType_networkDeregistration
 * @description
 *
 * Shall be selected if the event being reported contains a SIP NOTIFY Request
 * with the "state" attribute set to "terminated" and the "event" attribute set
 * either to "expired", or "rejected", or "deactivated" or "probation".
 *
 * 3GPP TS 33.128, clause 7.13.3.2.2.1.
 *
 * @constant
 * @type {number}
 */
export
const RCSRegistrationType_networkDeregistration = RCSRegistrationType.networkDeregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkDeregistration
 * @description
 *
 * Shall be selected if the event being reported contains a SIP NOTIFY Request
 * with the "state" attribute set to "terminated" and the "event" attribute set
 * either to "expired", or "rejected", or "deactivated" or "probation".
 *
 * 3GPP TS 33.128, clause 7.13.3.2.2.1.
 *
 * @constant
 * @type {number}
 */
export
const networkDeregistration = RCSRegistrationType.networkDeregistration; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RCSRegistrationType: $.ASN1Decoder<RCSRegistrationType> = $._decodeEnumerated;
export const _encode_RCSRegistrationType: $.ASN1Encoder<RCSRegistrationType> = $._encodeEnumerated;


/* eslint-enable */
