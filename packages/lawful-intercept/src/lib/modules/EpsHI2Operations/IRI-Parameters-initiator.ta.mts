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
 * Who started the procedure (table 10.5.2). Conditional on EPS bearer
 * activation, modification, and deactivation, to say whether it was
 * target-initiated, network-initiated, or unknown (tables 10.5.1.2.1,
 * 10.5.1.3.1, and 10.5.1.4.1). For a GPRS event on this HI2, the same values
 * distinguish an MS request from a network request (table 6.2, module comment).
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-initiator ::= ENUMERATED {
 *     not-Available        (0),
 *     originating-Target    (1),
 *     -- in case of GPRS, this indicates that the PDP context activation, modification
 *     -- or deactivation is MS requested
 *     -- in case of EPS, this indicated that the EPS detach, bearer activation, modification
 *     -- or deactivation is UE requested
 *     terminating-Target    (2),
 *     -- in case of GPRS, this indicates that the PDP context activation, modification or
 *     -- deactivation is network initiated
 *     -- in case of EPS, this indicated that the EPS detach, bearer activation, modification
 *     -- or deactivation is network initiated
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
 * The initiator is not known (module comment gives no further case). The EPS
 * bearer tables allow not available as well as target-initiated and
 * network-initiated.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_not_Available = _enum_for_IRI_Parameters_initiator.not_Available; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_Available
 * @description
 * 
 * Initiator is not known (clause 10.5.1.2).
 * 
 * @constant
 * @type {number}
 */
export
const not_Available = IRI_Parameters_initiator_not_Available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_originating_Target
 * @description
 * 
 * The target started the procedure. For EPS, the detach, bearer activation,
 * modification, or deactivation was requested by the UE. For GPRS, the
 * PDP-context activation, modification, or deactivation was requested by the MS
 * (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_originating_Target = _enum_for_IRI_Parameters_initiator.originating_Target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Target
 * @description
 * 
 * UE-requested for EPS; MS-requested for GPRS (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const originating_Target = IRI_Parameters_initiator_originating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_initiator_terminating_Target
 * @description
 * 
 * The network started the procedure. For EPS, the detach, bearer activation,
 * modification, or deactivation was network-initiated. For GPRS, the
 * PDP-context activation, modification, or deactivation was network-initiated
 * (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_terminating_Target = _enum_for_IRI_Parameters_initiator.terminating_Target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Target
 * @description
 * 
 * Network-initiated, for EPS or for GPRS (module comment).
 * 
 * @constant
 * @type {number}
 */
export
const terminating_Target = IRI_Parameters_initiator_terminating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_initiator: $.ASN1Decoder<IRI_Parameters_initiator> = $._decodeEnumerated;
export const _encode_IRI_Parameters_initiator: $.ASN1Encoder<IRI_Parameters_initiator> = $._encodeEnumerated;


/* eslint-enable */
