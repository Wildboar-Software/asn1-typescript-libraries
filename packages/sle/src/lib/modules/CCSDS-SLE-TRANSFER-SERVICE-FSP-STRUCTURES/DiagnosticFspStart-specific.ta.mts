/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspStart_specific
 * @description
 * 
 * FSP-specific rejection codes for FSP-START. Duplicate invoke-ID and other
 * reason are carried in the `common` alternative. On `unableToComply` the user
 * may retry within the provision period, and the provider may FSP-PEER-ABORT if
 * the fault is more than transient.
 * 
 * CCSDS 912.3-B-3, sections 3.4.2.9 and 3.4.3.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspStart-specific ::= INTEGER
 *    {  outOfService            (0)
 *    ,  unableToComply          (1)
 *    ,  productionTimeExpired   (2)
 *    }
 * ```
 */
export
type DiagnosticFspStart_specific = INTEGER;

/**
 * @summary DiagnosticFspStart_specific_outOfService
 * @description
 * 
 * FSP-START is rejected because production status is `halted`: management has
 * taken the provider out of service for an indefinite period.
 * 
 * CCSDS 912.3-B-3, section 3.4.2.9.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspStart_specific_outOfService = 0 satisfies DiagnosticFspStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_outOfService
 * @description
 * 
 * Production status is `halted` (CCSDS 912.3-B-3, section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const outOfService = DiagnosticFspStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_unableToComply
 * @description
 * 
 * The provider cannot accept data because of a possibly temporary fault.
 * Production status is `interrupted`. The user may invoke FSP-START again later
 * in the provision period.
 * 
 * CCSDS 912.3-B-3, sections 3.4.2.9 and 3.4.3.2.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspStart_specific_unableToComply = 1 satisfies DiagnosticFspStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_unableToComply
 * @description
 * 
 * Production status is `interrupted` (CCSDS 912.3-B-3, section 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const unableToComply = DiagnosticFspStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_productionTimeExpired
 * @description
 * 
 * The time period scheduled for service production, the processing of Space
 * Packets, is already past.
 * 
 * CCSDS 912.3-B-3, section 3.4.2.9.
 * @constant
 * @type {number}
 */
export
const DiagnosticFspStart_specific_productionTimeExpired = 2 satisfies DiagnosticFspStart_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_productionTimeExpired
 * @description
 * 
 * The scheduled production period is already past (CCSDS 912.3-B-3, section
 * 3.4.2.9).
 * @constant
 * @type {number}
 */
export
const productionTimeExpired = DiagnosticFspStart_specific_productionTimeExpired; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticFspStart_specific: $.ASN1Decoder<DiagnosticFspStart_specific> = $._decodeInteger;
export const _encode_DiagnosticFspStart_specific: $.ASN1Encoder<DiagnosticFspStart_specific> = $._encodeInteger;


/* eslint-enable */
