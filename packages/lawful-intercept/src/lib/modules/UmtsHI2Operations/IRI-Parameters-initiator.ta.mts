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
 * Whether a PDP-context activation, modification, or deactivation was requested
 * by the target's MS, initiated by the network, or is not available.
 * 
 * Mandatory on activation and deactivation (tables 6.5, 6.10, and 6.14). On
 * modification, include it when it is available (table 6.12).
 * 
 * 3GPP TS 33.108, clause 6.5.1 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-initiator ::= ENUMERATED {
 *     not-Available        (0),
 *     originating-Target    (1),
 *     -- in case of GPRS, this indicates that the PDP context activation, modification
 *     -- or deactivation is MS requested
 *     terminating-Target    (2),
 *     -- in case of GPRS, this indicates that the PDP context activation, modification or
 *     -- deactivation is network initiated
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
 * It is not known whether the MS or the network started the PDP-context
 * operation.
 * 
 * 3GPP TS 33.108, annex B.3 and table 6.10.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_not_Available: IRI_Parameters_initiator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_Available
 * @description
 * 
 * The PDP-context initiator is not available (annex B.3).
 * @constant
 * @type {number}
 */
export
const not_Available: IRI_Parameters_initiator = IRI_Parameters_initiator_not_Available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_originating_Target
 * @description
 * 
 * The target's MS requested the PDP-context activation, modification, or
 * deactivation.
 * 
 * 3GPP TS 33.108, annex B.3.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_originating_Target: IRI_Parameters_initiator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Target
 * @description
 * 
 * The MS requested the PDP-context operation (annex B.3).
 * @constant
 * @type {number}
 */
export
const originating_Target: IRI_Parameters_initiator = IRI_Parameters_initiator_originating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_terminating_Target
 * @description
 * 
 * The network initiated the PDP-context activation, modification, or
 * deactivation.
 * 
 * 3GPP TS 33.108, annex B.3.
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_terminating_Target: IRI_Parameters_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Target
 * @description
 * 
 * The network initiated the PDP-context operation (annex B.3).
 * @constant
 * @type {number}
 */
export
const terminating_Target: IRI_Parameters_initiator = IRI_Parameters_initiator_terminating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_initiator: $.ASN1Decoder<IRI_Parameters_initiator> = $._decodeEnumerated;
export const _encode_IRI_Parameters_initiator: $.ASN1Encoder<IRI_Parameters_initiator> = $._encodeEnumerated;


/* eslint-enable */
