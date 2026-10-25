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
const AMFRegistrationType: typeof _enum_for_AMFRegistrationType = _enum_for_AMFRegistrationType;

/**
 * @summary AMFRegistrationType_initial
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_initial: _enum_for_AMFRegistrationType.initial = AMFRegistrationType.initial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initial
 * @constant
 * @type {number}
 */
export
const initial: _enum_for_AMFRegistrationType.initial = AMFRegistrationType.initial; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_mobility
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_mobility: _enum_for_AMFRegistrationType.mobility = AMFRegistrationType.mobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mobility
 * @constant
 * @type {number}
 */
export
const mobility: _enum_for_AMFRegistrationType.mobility = AMFRegistrationType.mobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_periodic
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_periodic: _enum_for_AMFRegistrationType.periodic = AMFRegistrationType.periodic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary periodic
 * @constant
 * @type {number}
 */
export
const periodic: _enum_for_AMFRegistrationType.periodic = AMFRegistrationType.periodic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_emergency
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_emergency: _enum_for_AMFRegistrationType.emergency = AMFRegistrationType.emergency; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergency
 * @constant
 * @type {number}
 */
export
const emergency: _enum_for_AMFRegistrationType.emergency = AMFRegistrationType.emergency; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_sNPNOnboarding
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_sNPNOnboarding: _enum_for_AMFRegistrationType.sNPNOnboarding = AMFRegistrationType.sNPNOnboarding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sNPNOnboarding
 * @constant
 * @type {number}
 */
export
const sNPNOnboarding: _enum_for_AMFRegistrationType.sNPNOnboarding = AMFRegistrationType.sNPNOnboarding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_disasterMobility
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_disasterMobility: _enum_for_AMFRegistrationType.disasterMobility = AMFRegistrationType.disasterMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disasterMobility
 * @constant
 * @type {number}
 */
export
const disasterMobility: _enum_for_AMFRegistrationType.disasterMobility = AMFRegistrationType.disasterMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationType_disasterInitial
 * @constant
 * @type {number}
 */
export
const AMFRegistrationType_disasterInitial: _enum_for_AMFRegistrationType.disasterInitial = AMFRegistrationType.disasterInitial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disasterInitial
 * @constant
 * @type {number}
 */
export
const disasterInitial: _enum_for_AMFRegistrationType.disasterInitial = AMFRegistrationType.disasterInitial; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AMFRegistrationType: $.ASN1Decoder<AMFRegistrationType> = $._decodeEnumerated;
export const _encode_AMFRegistrationType: $.ASN1Encoder<AMFRegistrationType> = $._encodeEnumerated;


/* eslint-enable */
