/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const EventTypeBCUSM: typeof _enum_for_EventTypeBCUSM = _enum_for_EventTypeBCUSM;

/**
 * @summary EventTypeBCUSM_componentReceived
 * @constant
 * @type {number}
 */
export
const EventTypeBCUSM_componentReceived: _enum_for_EventTypeBCUSM.componentReceived = EventTypeBCUSM.componentReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary componentReceived
 * @constant
 * @type {number}
 */
export
const componentReceived: _enum_for_EventTypeBCUSM.componentReceived = EventTypeBCUSM.componentReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCUSM_associationReleaseRequested
 * @constant
 * @type {number}
 */
export
const EventTypeBCUSM_associationReleaseRequested: _enum_for_EventTypeBCUSM.associationReleaseRequested = EventTypeBCUSM.associationReleaseRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary associationReleaseRequested
 * @constant
 * @type {number}
 */
export
const associationReleaseRequested: _enum_for_EventTypeBCUSM.associationReleaseRequested = EventTypeBCUSM.associationReleaseRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCUSM_activationReceivedAndAuthorized
 * @constant
 * @type {number}
 */
export
const EventTypeBCUSM_activationReceivedAndAuthorized: _enum_for_EventTypeBCUSM.activationReceivedAndAuthorized = EventTypeBCUSM.activationReceivedAndAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activationReceivedAndAuthorized
 * @constant
 * @type {number}
 */
export
const activationReceivedAndAuthorized: _enum_for_EventTypeBCUSM.activationReceivedAndAuthorized = EventTypeBCUSM.activationReceivedAndAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_EventTypeBCUSM(el: _Element): EventTypeBCUSM {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case EventTypeBCUSM.componentReceived: return EventTypeBCUSM.componentReceived;
        case EventTypeBCUSM.associationReleaseRequested: return EventTypeBCUSM.associationReleaseRequested;
        case EventTypeBCUSM.activationReceivedAndAuthorized: return EventTypeBCUSM.activationReceivedAndAuthorized;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for EventTypeBCUSM.",
                el,
            );
    }
}

export
const _encode_EventTypeBCUSM: $.ASN1Encoder<EventTypeBCUSM> = $._encodeEnumerated as $.ASN1Encoder<EventTypeBCUSM>;

/* eslint-enable */
