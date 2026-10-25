/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IRI_Parameters_initiator {
    not_Available = 0,
    originating_Target = 1,
    terminating_Target = 2,
}

/**
 * @summary IRI_Parameters_initiator
 * @description
 * 
 * Who started the reported I-WLAN action, when either the UE or the network can
 * start it. Used for tunnel disconnect.
 * 
 * 3GPP TS 33.108, table 8.2, tables 8.12 and 8.13, and annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-initiator ::= ENUMERATED {
 *     not-Available        (0),
 *     originating-Target    (1),
 *     -- in case of I-WLAN, this indicates that the I-WLAN tunnel disconnect is WLAN UE
 *     -- requested.
 *     terminating-Target    (2),
 *     -- in case of I-WLAN, this indicates that the I-WLAN tunnel disconnect is network
 *     -- initiated.
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
 * The initiator is not available. Tables 8.12 and 8.13 include this outcome for
 * tunnel disconnect.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_not_Available = _enum_for_IRI_Parameters_initiator.not_Available satisfies IRI_Parameters_initiator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_Available
 * @description
 * 
 * Initiator not available on tunnel disconnect (tables 8.12 and 8.13).
 * @constant
 * @type {number}
 */
export
const not_Available = IRI_Parameters_initiator_not_Available satisfies IRI_Parameters_initiator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_originating_Target
 * @description
 * 
 * The WLAN UE requested the I-WLAN tunnel disconnect. Tables 8.12 and 8.13 call
 * this target-initiated.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_originating_Target = _enum_for_IRI_Parameters_initiator.originating_Target satisfies IRI_Parameters_initiator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Target
 * @description
 * 
 * UE-requested tunnel disconnect (annex B.7).
 * @constant
 * @type {number}
 */
export
const originating_Target = IRI_Parameters_initiator_originating_Target satisfies IRI_Parameters_initiator; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_terminating_Target
 * @description
 * 
 * The network initiated the I-WLAN tunnel disconnect. Tables 8.12 and 8.13 call
 * this network-initiated.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_terminating_Target = _enum_for_IRI_Parameters_initiator.terminating_Target satisfies IRI_Parameters_initiator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Target
 * @description
 * 
 * Network-initiated tunnel disconnect (annex B.7).
 * @constant
 * @type {number}
 */
export
const terminating_Target = IRI_Parameters_initiator_terminating_Target satisfies IRI_Parameters_initiator; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_initiator: $.ASN1Decoder<IRI_Parameters_initiator> = $._decodeEnumerated;
export const _encode_IRI_Parameters_initiator: $.ASN1Encoder<IRI_Parameters_initiator> = $._encodeEnumerated;


/* eslint-enable */
