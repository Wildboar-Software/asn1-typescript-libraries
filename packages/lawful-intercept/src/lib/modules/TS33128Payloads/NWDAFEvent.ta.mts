/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NWDAFEvent
 * @description
 * 
 * Identifies the analytics event being requested.
 *
 * 3GPP TS 33.128, clause 7.16.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEvent  ::=  ENUMERATED
 * {
 *     serviceExperience(1),
 *     uEMobility(2),
 *     uEComm(3),
 *     abnormalBehaviour(4),
 *     dispersion(5),
 *     relativeProximity(6),
 *     pDUSessionTraffic(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NWDAFEvent {
    serviceExperience = 1,
    uEMobility = 2,
    uEComm = 3,
    abnormalBehaviour = 4,
    dispersion = 5,
    relativeProximity = 6,
    pDUSessionTraffic = 7,
}

/**
 * @summary NWDAFEvent
 * @description
 * 
 * Identifies the analytics event being requested.
 *
 * 3GPP TS 33.128, clause 7.16.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEvent  ::=  ENUMERATED
 * {
 *     serviceExperience(1),
 *     uEMobility(2),
 *     uEComm(3),
 *     abnormalBehaviour(4),
 *     dispersion(5),
 *     relativeProximity(6),
 *     pDUSessionTraffic(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NWDAFEvent = _enum_for_NWDAFEvent;

/**
 * @summary NWDAFEvent
 * @description
 * 
 * Identifies the analytics event being requested.
 *
 * 3GPP TS 33.128, clause 7.16.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEvent  ::=  ENUMERATED
 * {
 *     serviceExperience(1),
 *     uEMobility(2),
 *     uEComm(3),
 *     abnormalBehaviour(4),
 *     dispersion(5),
 *     relativeProximity(6),
 *     pDUSessionTraffic(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NWDAFEvent = _enum_for_NWDAFEvent;

/**
 * @summary NWDAFEvent_serviceExperience
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_serviceExperience = NWDAFEvent.serviceExperience satisfies NWDAFEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceExperience
 * @constant
 * @type {number}
 */
export
const serviceExperience = NWDAFEvent.serviceExperience satisfies NWDAFEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_uEMobility
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_uEMobility = NWDAFEvent.uEMobility satisfies NWDAFEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEMobility
 * @constant
 * @type {number}
 */
export
const uEMobility = NWDAFEvent.uEMobility satisfies NWDAFEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_uEComm
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_uEComm = NWDAFEvent.uEComm satisfies NWDAFEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEComm
 * @constant
 * @type {number}
 */
export
const uEComm = NWDAFEvent.uEComm satisfies NWDAFEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_abnormalBehaviour
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_abnormalBehaviour = NWDAFEvent.abnormalBehaviour satisfies NWDAFEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abnormalBehaviour
 * @constant
 * @type {number}
 */
export
const abnormalBehaviour = NWDAFEvent.abnormalBehaviour satisfies NWDAFEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_dispersion
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_dispersion = NWDAFEvent.dispersion satisfies NWDAFEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dispersion
 * @constant
 * @type {number}
 */
export
const dispersion = NWDAFEvent.dispersion satisfies NWDAFEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_relativeProximity
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_relativeProximity = NWDAFEvent.relativeProximity satisfies NWDAFEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary relativeProximity
 * @constant
 * @type {number}
 */
export
const relativeProximity = NWDAFEvent.relativeProximity satisfies NWDAFEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_pDUSessionTraffic
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_pDUSessionTraffic = NWDAFEvent.pDUSessionTraffic satisfies NWDAFEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionTraffic
 * @constant
 * @type {number}
 */
export
const pDUSessionTraffic = NWDAFEvent.pDUSessionTraffic satisfies NWDAFEvent; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NWDAFEvent: $.ASN1Decoder<NWDAFEvent> = $._decodeEnumerated;
export const _encode_NWDAFEvent: $.ASN1Encoder<NWDAFEvent> = $._encodeEnumerated;


/* eslint-enable */
