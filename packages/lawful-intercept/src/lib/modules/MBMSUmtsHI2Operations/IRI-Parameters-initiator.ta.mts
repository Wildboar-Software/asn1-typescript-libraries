/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IRI_Parameters_initiator {
    not_Available = 0,
    originating_Target = 1,
    network_initiated = 2,
    off_online_action = 3,
}

/**
 * @summary IRI_Parameters_initiator
 * @description
 * 
 * Who started the MBMS session or the subscription-management event.
 * 
 * 3GPP TS 33.108, table 9.2 and annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-initiator ::= ENUMERATED {
 *     not-Available        (0),
 *     originating-Target    (1),
 *     -- in case of MBMS, this indicates that the MBMS UE has initiated the MBMS session
 *     -- or initiated the subscription management event.
 *     network-initiated    (2),
 *     -- in case of MBMS, this indicates that the MBMS has initiated the MBMS session.
 *     off-online-action   (3),
 *     -- in case of MBMS, this indicates a subscription management event has occurred as the
 *     -- result of an MBMS operator customer services function or other subscription updates
 *     -- not initiated by the MBMS UE.
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IRI_Parameters_initiator = _enum_for_IRI_Parameters_initiator | ENUMERATED;

/**
 * @summary IRI_Parameters_initiator_not_Available
 * @description
 * 
 * Annex B.8 names this value and does not describe it. Clause 9 requires an
 * initiator on every record and describes UE, network, and off-line actions. TS
 * 33.108 does not further define this value.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_not_Available: IRI_Parameters_initiator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_Available
 * @description
 * 
 * Named in annex B.8. Clause 9 does not further define it.
 * @constant
 * @type {number}
 */
export
const not_Available: IRI_Parameters_initiator = IRI_Parameters_initiator_not_Available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_originating_Target
 * @description
 * 
 * The MBMS UE initiated the MBMS session, or initiated the
 * subscription-management event (annex B.8). Table 9.2 calls this a UE-directed
 * action.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_originating_Target: IRI_Parameters_initiator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Target
 * @description
 * 
 * UE started the session or the subscription event (annex B.8).
 * @constant
 * @type {number}
 */
export
const originating_Target: IRI_Parameters_initiator = IRI_Parameters_initiator_originating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_network_initiated
 * @description
 * 
 * The MBMS initiated the MBMS session (annex B.8). Table 9.2 calls this a
 * network-initiated action.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_network_initiated: IRI_Parameters_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary network_initiated
 * @description
 * 
 * The MBMS started the session (annex B.8).
 * @constant
 * @type {number}
 */
export
const network_initiated: IRI_Parameters_initiator = IRI_Parameters_initiator_network_initiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_off_online_action
 * @description
 * 
 * A subscription-management event from the operator's customer-services
 * function, or another subscription update not initiated by the MBMS UE (annex
 * B.8).
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_off_online_action: IRI_Parameters_initiator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary off_online_action
 * @description
 * 
 * Off-line subscription update, not started by the UE (annex B.8).
 * @constant
 * @type {number}
 */
export
const off_online_action: IRI_Parameters_initiator = IRI_Parameters_initiator_off_online_action; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_initiator: $.ASN1Decoder<IRI_Parameters_initiator> = $._decodeEnumerated;
export const _encode_IRI_Parameters_initiator: $.ASN1Encoder<IRI_Parameters_initiator> = $._encodeEnumerated;


/* eslint-enable */
