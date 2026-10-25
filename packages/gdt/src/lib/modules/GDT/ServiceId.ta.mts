/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceId  ::=  INTEGER {
 *     sid-stp-routing     (42),
 *     sid-sgn-forward     (43),
 *     sid-fgn-filtering   (44),
 *     sid-security        (45),
 *     sid-pdn-filtering   (46),
 *     sid-sysagent        (47)
 * }
 * ```
 */
export
type ServiceId = INTEGER;

/**
 * @summary ServiceId_sid_stp_routing
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_stp_routing: 42 = 42 satisfies ServiceId; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_stp_routing
 * @constant
 * @type {number}
 */
export
const sid_stp_routing: 42 = ServiceId_sid_stp_routing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sgn_forward
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_sgn_forward: 43 = 43 satisfies ServiceId; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sgn_forward
 * @constant
 * @type {number}
 */
export
const sid_sgn_forward: 43 = ServiceId_sid_sgn_forward; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_fgn_filtering
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_fgn_filtering: 44 = 44 satisfies ServiceId; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_fgn_filtering
 * @constant
 * @type {number}
 */
export
const sid_fgn_filtering: 44 = ServiceId_sid_fgn_filtering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_security
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_security: 45 = 45 satisfies ServiceId; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_security
 * @constant
 * @type {number}
 */
export
const sid_security: 45 = ServiceId_sid_security; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_pdn_filtering
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_pdn_filtering: 46 = 46 satisfies ServiceId; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_pdn_filtering
 * @constant
 * @type {number}
 */
export
const sid_pdn_filtering: 46 = ServiceId_sid_pdn_filtering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sysagent
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_sysagent: 47 = 47 satisfies ServiceId; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sysagent
 * @constant
 * @type {number}
 */
export
const sid_sysagent: 47 = ServiceId_sid_sysagent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceId: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_ServiceId: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
