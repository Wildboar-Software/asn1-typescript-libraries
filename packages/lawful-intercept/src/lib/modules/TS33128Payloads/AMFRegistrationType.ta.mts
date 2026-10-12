/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFRegistrationType
 * @description
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
const AMFRegistrationType_initial: AMFRegistrationType = AMFRegistrationType.initial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initial
 * @constant
 * @type {number}
 */
export
const initial: AMFRegistrationType = AMFRegistrationType.initial; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_mobility
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_mobility: AMFRegistrationType = AMFRegistrationType.mobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobility
 * @constant
 * @type {number}
 */
export
const mobility: AMFRegistrationType = AMFRegistrationType.mobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_periodic
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_periodic: AMFRegistrationType = AMFRegistrationType.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @constant
 * @type {number}
 */
export
const periodic: AMFRegistrationType = AMFRegistrationType.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_emergency
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_emergency: AMFRegistrationType = AMFRegistrationType.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @constant
 * @type {number}
 */
export
const emergency: AMFRegistrationType = AMFRegistrationType.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_sNPNOnboarding
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_sNPNOnboarding: AMFRegistrationType = AMFRegistrationType.sNPNOnboarding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sNPNOnboarding
 * @constant
 * @type {number}
 */
export
const sNPNOnboarding: AMFRegistrationType = AMFRegistrationType.sNPNOnboarding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_disasterMobility
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_disasterMobility: AMFRegistrationType = AMFRegistrationType.disasterMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disasterMobility
 * @constant
 * @type {number}
 */
export
const disasterMobility: AMFRegistrationType = AMFRegistrationType.disasterMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_disasterInitial
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_disasterInitial: AMFRegistrationType = AMFRegistrationType.disasterInitial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disasterInitial
 * @constant
 * @type {number}
 */
export
const disasterInitial: AMFRegistrationType = AMFRegistrationType.disasterInitial; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AMFRegistrationType: $.ASN1Decoder<AMFRegistrationType> = $._decodeEnumerated;
export const _encode_AMFRegistrationType: $.ASN1Encoder<AMFRegistrationType> = $._encodeEnumerated;


/* eslint-enable */
