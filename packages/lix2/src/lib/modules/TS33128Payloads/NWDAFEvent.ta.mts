/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NWDAFEvent
 * @description
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
const NWDAFEvent_serviceExperience: NWDAFEvent = NWDAFEvent.serviceExperience; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceExperience
 * @constant
 * @type {number}
 */
export
const serviceExperience: NWDAFEvent = NWDAFEvent.serviceExperience; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_uEMobility
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_uEMobility: NWDAFEvent = NWDAFEvent.uEMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEMobility
 * @constant
 * @type {number}
 */
export
const uEMobility: NWDAFEvent = NWDAFEvent.uEMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_uEComm
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_uEComm: NWDAFEvent = NWDAFEvent.uEComm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEComm
 * @constant
 * @type {number}
 */
export
const uEComm: NWDAFEvent = NWDAFEvent.uEComm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_abnormalBehaviour
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_abnormalBehaviour: NWDAFEvent = NWDAFEvent.abnormalBehaviour; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abnormalBehaviour
 * @constant
 * @type {number}
 */
export
const abnormalBehaviour: NWDAFEvent = NWDAFEvent.abnormalBehaviour; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_dispersion
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_dispersion: NWDAFEvent = NWDAFEvent.dispersion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dispersion
 * @constant
 * @type {number}
 */
export
const dispersion: NWDAFEvent = NWDAFEvent.dispersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_relativeProximity
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_relativeProximity: NWDAFEvent = NWDAFEvent.relativeProximity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary relativeProximity
 * @constant
 * @type {number}
 */
export
const relativeProximity: NWDAFEvent = NWDAFEvent.relativeProximity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFEvent_pDUSessionTraffic
 * @constant
 * @type {number}
 */
export
const NWDAFEvent_pDUSessionTraffic: NWDAFEvent = NWDAFEvent.pDUSessionTraffic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDUSessionTraffic
 * @constant
 * @type {number}
 */
export
const pDUSessionTraffic: NWDAFEvent = NWDAFEvent.pDUSessionTraffic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NWDAFEvent = $._decodeEnumerated;

/**
 * @summary Encodes a(n) NWDAFEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFEvent, encoded as an ASN.1 Element.
 */
export const _encode_NWDAFEvent = $._encodeEnumerated;


/* eslint-enable */
