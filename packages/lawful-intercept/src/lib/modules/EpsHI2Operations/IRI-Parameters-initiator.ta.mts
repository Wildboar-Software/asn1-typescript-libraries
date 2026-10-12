/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * @summary IRI_Parameters_initiator_terminating_Target
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_initiator_terminating_Target: IRI_Parameters_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Target
 * @constant
 * @type {number}
 */
export
const terminating_Target: IRI_Parameters_initiator = IRI_Parameters_initiator_terminating_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_initiator: $.ASN1Decoder<IRI_Parameters_initiator> = $._decodeEnumerated;
export const _encode_IRI_Parameters_initiator: $.ASN1Encoder<IRI_Parameters_initiator> = $._encodeEnumerated;


/* eslint-enable */
