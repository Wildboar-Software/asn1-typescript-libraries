/* eslint-disable */
import {
    ENUMERATED
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-initiator ::= ENUMERATED
 * {
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
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_not_Available: IRI_Parameters_initiator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_Available
 * @constant
 * @type {number}
 */
export
const not_Available: IRI_Parameters_initiator = IRI_Parameters_initiator_not_Available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_originating_Target
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_originating_Target: IRI_Parameters_initiator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Target
 * @constant
 * @type {number}
 */
export
const originating_Target: IRI_Parameters_initiator = IRI_Parameters_initiator_originating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_network_initiated
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_network_initiated: IRI_Parameters_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary network_initiated
 * @constant
 * @type {number}
 */
export
const network_initiated: IRI_Parameters_initiator = IRI_Parameters_initiator_network_initiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_off_online_action
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_off_online_action: IRI_Parameters_initiator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary off_online_action
 * @constant
 * @type {number}
 */
export
const off_online_action: IRI_Parameters_initiator = IRI_Parameters_initiator_off_online_action; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_IRI_Parameters_initiator: $.ASN1Decoder<IRI_Parameters_initiator> = $._decodeEnumerated;

export const _encode_IRI_Parameters_initiator: $.ASN1Encoder<IRI_Parameters_initiator> = $._encodeEnumerated;

/* eslint-enable */
