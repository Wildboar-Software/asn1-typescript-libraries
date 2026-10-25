/* eslint-disable */
import {
    type ENUMERATED
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
 * Direct discovery event. Both values are delivered as IRI report records. 3GPP
 * TS 33.108, clause 13.2, table 13.2.1-1.
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
 * @description
 * 
 * The ProSe Function received a Discovery Request from the UE. IRI-REPORT. A
 * monitoring target may have more than one PLMN, application name, timer, code,
 * or mask; this record's discovery data carries one of each, except that
 * several masks may be listed. The specification does not say how further PLMN,
 * name, timer, or code values are encoded. 3GPP TS 33.108, clause 13.2.2.2,
 * table 13.2.2.2-1.
 * 
 * @constant
 * @type {number}
 */
export
const ProSeDirectDiscoveryEvent_proseDiscoveryRequest = _enum_for_ProSeDirectDiscoveryEvent.proseDiscoveryRequest satisfies ProSeDirectDiscoveryEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proseDiscoveryRequest
 * @description
 * 
 * Discovery Request from the UE. IRI-REPORT. 3GPP TS 33.108, clause 13.2.2.2.
 * 
 * @constant
 * @type {number}
 */
export
const proseDiscoveryRequest = ProSeDirectDiscoveryEvent_proseDiscoveryRequest satisfies ProSeDirectDiscoveryEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeDirectDiscoveryEvent_proseMatchReport
 * @description
 * 
 * The ProSe Function received a Match Report from the UE. IRI-REPORT. The other
 * UE's IMSI is included when available. 3GPP TS 33.108, clause 13.2.2.2, table
 * 13.2.2.2-2.
 * 
 * @constant
 * @type {number}
 */
export
const ProSeDirectDiscoveryEvent_proseMatchReport = _enum_for_ProSeDirectDiscoveryEvent.proseMatchReport satisfies ProSeDirectDiscoveryEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proseMatchReport
 * @description
 * 
 * Match Report from the UE. IRI-REPORT. 3GPP TS 33.108, clause 13.2.2.2.
 * 
 * @constant
 * @type {number}
 */
export
const proseMatchReport = ProSeDirectDiscoveryEvent_proseMatchReport satisfies ProSeDirectDiscoveryEvent; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ProSeDirectDiscoveryEvent: $.ASN1Decoder<ProSeDirectDiscoveryEvent> = $._decodeEnumerated;
export const _encode_ProSeDirectDiscoveryEvent: $.ASN1Encoder<ProSeDirectDiscoveryEvent> = $._encodeEnumerated;


/* eslint-enable */
