/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventTypeBCUSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeBCUSM  ::=  ENUMERATED {
 *   componentReceived(127), associationReleaseRequested(126),
 *   activationReceivedAndAuthorized(125)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EventTypeBCUSM {
    componentReceived = 127,
    associationReleaseRequested = 126,
    activationReceivedAndAuthorized = 125,
}

/**
 * @summary EventTypeBCUSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeBCUSM  ::=  ENUMERATED {
 *   componentReceived(127), associationReleaseRequested(126),
 *   activationReceivedAndAuthorized(125)}
 * ```
 * 
 * @enum {number}
 */
export
type EventTypeBCUSM = _enum_for_EventTypeBCUSM;

/**
 * @summary EventTypeBCUSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeBCUSM  ::=  ENUMERATED {
 *   componentReceived(127), associationReleaseRequested(126),
 *   activationReceivedAndAuthorized(125)}
 * ```
 * 
 * @enum {number}
 */
export
const EventTypeBCUSM = _enum_for_EventTypeBCUSM;

/**
 * @summary EventTypeBCUSM_componentReceived
 * @constant
 * @type {number}
 */
export
const EventTypeBCUSM_componentReceived: EventTypeBCUSM = EventTypeBCUSM.componentReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary componentReceived
 * @constant
 * @type {number}
 */
export
const componentReceived: EventTypeBCUSM = EventTypeBCUSM.componentReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCUSM_associationReleaseRequested
 * @constant
 * @type {number}
 */
export
const EventTypeBCUSM_associationReleaseRequested: EventTypeBCUSM = EventTypeBCUSM.associationReleaseRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary associationReleaseRequested
 * @constant
 * @type {number}
 */
export
const associationReleaseRequested: EventTypeBCUSM = EventTypeBCUSM.associationReleaseRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCUSM_activationReceivedAndAuthorized
 * @constant
 * @type {number}
 */
export
const EventTypeBCUSM_activationReceivedAndAuthorized: EventTypeBCUSM = EventTypeBCUSM.activationReceivedAndAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activationReceivedAndAuthorized
 * @constant
 * @type {number}
 */
export
const activationReceivedAndAuthorized: EventTypeBCUSM = EventTypeBCUSM.activationReceivedAndAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EventTypeBCUSM: $.ASN1Decoder<EventTypeBCUSM> = $._decodeEnumerated;

export
const _encode_EventTypeBCUSM: $.ASN1Encoder<EventTypeBCUSM> = $._encodeEnumerated;

/* eslint-enable */
