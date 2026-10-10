/* eslint-disable */
import {
    INTEGER
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
const ServiceId_sid_stp_routing: ServiceId = 42; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_stp_routing
 * @constant
 * @type {number}
 */
export
const sid_stp_routing: ServiceId = ServiceId_sid_stp_routing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sgn_forward
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_sgn_forward: ServiceId = 43; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sgn_forward
 * @constant
 * @type {number}
 */
export
const sid_sgn_forward: ServiceId = ServiceId_sid_sgn_forward; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_fgn_filtering
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_fgn_filtering: ServiceId = 44; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_fgn_filtering
 * @constant
 * @type {number}
 */
export
const sid_fgn_filtering: ServiceId = ServiceId_sid_fgn_filtering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_security
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_security: ServiceId = 45; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_security
 * @constant
 * @type {number}
 */
export
const sid_security: ServiceId = ServiceId_sid_security; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_pdn_filtering
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_pdn_filtering: ServiceId = 46; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_pdn_filtering
 * @constant
 * @type {number}
 */
export
const sid_pdn_filtering: ServiceId = ServiceId_sid_pdn_filtering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sysagent
 * @constant
 * @type {number}
 */
export
const ServiceId_sid_sysagent: ServiceId = 47; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceId_sid_sysagent
 * @constant
 * @type {number}
 */
export
const sid_sysagent: ServiceId = ServiceId_sid_sysagent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceId = $._decodeInteger;
export const _encode_ServiceId = $._encodeInteger;


/* eslint-enable */
