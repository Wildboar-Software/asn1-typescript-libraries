/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFRegistrationType
 * @description
 * 
 * Specifies the type of registration, see TS 24.501 [13] clause 9.11.3.7. This
 * is derived from the information received from the UE in the REGISTRATION
 * REQUEST message.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationType  ::=  ENUMERATED
 * {
 *     initial(1),
 *     mobility(2),
 *     periodic(3),
 *     emergency(4),
 *     sNPNOnboarding(5),
 *     disasterMobility(6),
 *     disasterInitial(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMFRegistrationType {
    initial = 1,
    mobility = 2,
    periodic = 3,
    emergency = 4,
    sNPNOnboarding = 5,
    disasterMobility = 6,
    disasterInitial = 7,
}

/**
 * @summary AMFRegistrationType
 * @description
 * 
 * Specifies the type of registration, see TS 24.501 [13] clause 9.11.3.7. This
 * is derived from the information received from the UE in the REGISTRATION
 * REQUEST message.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationType  ::=  ENUMERATED
 * {
 *     initial(1),
 *     mobility(2),
 *     periodic(3),
 *     emergency(4),
 *     sNPNOnboarding(5),
 *     disasterMobility(6),
 *     disasterInitial(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AMFRegistrationType = _enum_for_AMFRegistrationType;

/**
 * @summary AMFRegistrationType
 * @description
 * 
 * Specifies the type of registration, see TS 24.501 [13] clause 9.11.3.7. This
 * is derived from the information received from the UE in the REGISTRATION
 * REQUEST message.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationType  ::=  ENUMERATED
 * {
 *     initial(1),
 *     mobility(2),
 *     periodic(3),
 *     emergency(4),
 *     sNPNOnboarding(5),
 *     disasterMobility(6),
 *     disasterInitial(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AMFRegistrationType = _enum_for_AMFRegistrationType;

/**
 * @summary AMFRegistrationType_initial
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_initial = AMFRegistrationType.initial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initial
 * @constant
 * @type {number}
 */
export
const initial = AMFRegistrationType.initial; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_mobility
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_mobility = AMFRegistrationType.mobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobility
 * @constant
 * @type {number}
 */
export
const mobility = AMFRegistrationType.mobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_periodic
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_periodic = AMFRegistrationType.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @constant
 * @type {number}
 */
export
const periodic = AMFRegistrationType.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_emergency
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_emergency = AMFRegistrationType.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @constant
 * @type {number}
 */
export
const emergency = AMFRegistrationType.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_sNPNOnboarding
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_sNPNOnboarding = AMFRegistrationType.sNPNOnboarding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sNPNOnboarding
 * @constant
 * @type {number}
 */
export
const sNPNOnboarding = AMFRegistrationType.sNPNOnboarding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_disasterMobility
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_disasterMobility = AMFRegistrationType.disasterMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disasterMobility
 * @constant
 * @type {number}
 */
export
const disasterMobility = AMFRegistrationType.disasterMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_disasterInitial
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_disasterInitial = AMFRegistrationType.disasterInitial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disasterInitial
 * @constant
 * @type {number}
 */
export
const disasterInitial = AMFRegistrationType.disasterInitial; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AMFRegistrationType: $.ASN1Decoder<AMFRegistrationType> = $._decodeEnumerated;
export const _encode_AMFRegistrationType: $.ASN1Encoder<AMFRegistrationType> = $._encodeEnumerated;


/* eslint-enable */
