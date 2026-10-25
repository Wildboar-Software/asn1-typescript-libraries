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
 *   componentReceived(127), associationReleaseRequested(126)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EventTypeBCUSM {
    componentReceived = 127,
    associationReleaseRequested = 126,
}

/**
 * @summary EventTypeBCUSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTypeBCUSM  ::=  ENUMERATED {
 *   componentReceived(127), associationReleaseRequested(126)}
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
 *   componentReceived(127), associationReleaseRequested(126)}
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
const EventTypeBCUSM_componentReceived = EventTypeBCUSM.componentReceived satisfies EventTypeBCUSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary componentReceived
 * @constant
 * @type {number}
 */
export
const componentReceived = EventTypeBCUSM.componentReceived satisfies EventTypeBCUSM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventTypeBCUSM_associationReleaseRequested
 * @constant
 * @type {number}
 */
export
const EventTypeBCUSM_associationReleaseRequested = EventTypeBCUSM.associationReleaseRequested satisfies EventTypeBCUSM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary associationReleaseRequested
 * @constant
 * @type {number}
 */
export
const associationReleaseRequested = EventTypeBCUSM.associationReleaseRequested satisfies EventTypeBCUSM; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_EventTypeBCUSM(el: _Element): EventTypeBCUSM {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case EventTypeBCUSM.componentReceived: return EventTypeBCUSM.componentReceived;
        case EventTypeBCUSM.associationReleaseRequested: return EventTypeBCUSM.associationReleaseRequested;
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
