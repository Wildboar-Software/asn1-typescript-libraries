/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ProSeDirectDiscoveryEvent {
    proseDiscoveryRequest = 1,
    proseMatchReport = 2,
}

/**
 * @summary ProSeDirectDiscoveryEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeDirectDiscoveryEvent  ::=  ENUMERATED
 * {
 *     proseDiscoveryRequest               (1),
 *     proseMatchReport                (2),
 * 
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProSeDirectDiscoveryEvent = _enum_for_ProSeDirectDiscoveryEvent | ENUMERATED;

/**
 * @summary ProSeDirectDiscoveryEvent_proseDiscoveryRequest
 * @constant
 * @type {number}
 */
export
const ProSeDirectDiscoveryEvent_proseDiscoveryRequest: ProSeDirectDiscoveryEvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proseDiscoveryRequest
 * @constant
 * @type {number}
 */
export
const proseDiscoveryRequest: ProSeDirectDiscoveryEvent = ProSeDirectDiscoveryEvent_proseDiscoveryRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeDirectDiscoveryEvent_proseMatchReport
 * @constant
 * @type {number}
 */
export
const ProSeDirectDiscoveryEvent_proseMatchReport: ProSeDirectDiscoveryEvent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proseMatchReport
 * @constant
 * @type {number}
 */
export
const proseMatchReport: ProSeDirectDiscoveryEvent = ProSeDirectDiscoveryEvent_proseMatchReport; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ProSeDirectDiscoveryEvent: $.ASN1Decoder<ProSeDirectDiscoveryEvent> = $._decodeEnumerated;
export const _encode_ProSeDirectDiscoveryEvent: $.ASN1Encoder<ProSeDirectDiscoveryEvent> = $._encodeEnumerated;


/* eslint-enable */
