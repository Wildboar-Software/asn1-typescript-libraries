/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProductionStatus
 * @description
 * 
 * Status of FCLTU service production, reported on CLTU-ASYNC-NOTIFY and
 * CLTU-STATUS-REPORT. The provider notifies the user when the status becomes
 * operational, and, under the configured notification-mode, when it becomes
 * interrupted or halted. CCSDS 912.1-B-5, sections 3.7.2.10, 3.9.2.8, and 2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProductionStatus               ::=    INTEGER
 * {  operational                   (0)
 * ,  configured                    (1)
 * ,  interrupted                   (2)
 * ,  halted                        (3)
 * }
 * ```
 */
export
type ProductionStatus = INTEGER;

/**
 * @summary ProductionStatus_operational
 * @description
 *
 * The production process can radiate CLTUs. Section 3.9.2.8 adds that the
 * acquisition sequence has completed. Reached after the uplink is established
 * or after recovery from halted or interrupted. CLTU-START then reports that
 * time as start-production-time. CCSDS 912.1-B-5, sections 3.7.2.10 and
 * 3.9.2.8.
 * @constant
 * @type {number}
 */
export
const ProductionStatus_operational = 0 satisfies ProductionStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_operational
 * @description
 *
 * Production can radiate CLTUs (CCSDS 912.1-B-5, section 3.7.2.10).
 * @constant
 * @type {number}
 */
export
const operational = ProductionStatus_operational; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_configured
 * @description
 *
 * Equipment has been assigned to the service instance, and the production
 * process cannot yet radiate CLTUs. CCSDS 912.1-B-5, sections 3.7.2.10 and
 * 3.9.2.8.
 * @constant
 * @type {number}
 */
export
const ProductionStatus_configured = 1 satisfies ProductionStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_configured
 * @description
 *
 * Equipment is assigned and radiation is not yet possible (CCSDS 912.1-B-5,
 * section 3.7.2.10).
 * @constant
 * @type {number}
 */
export
const configured = ProductionStatus_configured; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_interrupted
 * @description
 *
 * A fault is stopping radiation. Section 3.7.2.10 allows the fault to be
 * transient and to clear by automatic reconfiguration. CLTU-START is rejected
 * with unable to comply. Depending on notification-mode, the user is told
 * immediately or when a CLTU's radiation is affected; buffered CLTUs are then
 * discarded and further transfers are blocked. CCSDS 912.1-B-5, sections
 * 3.7.2.10, 3.7.2.3, and 3.4.2.9.
 * @constant
 * @type {number}
 */
export
const ProductionStatus_interrupted = 2 satisfies ProductionStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_interrupted
 * @description
 *
 * A fault is stopping radiation; it may be transient (CCSDS 912.1-B-5, section
 * 3.7.2.10).
 * @constant
 * @type {number}
 */
export
const interrupted = ProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_halted
 * @description
 *
 * Service management has taken production out of service, for example because
 * an interruption is not transient or because the resources must be reassigned.
 * CLTU-START is rejected with out of service. Buffered CLTUs are discarded and
 * further transfers are blocked after the production halted notification. CCSDS
 * 912.1-B-5, sections 3.7.2.10, 3.7.2.3, and 3.4.2.9.
 * @constant
 * @type {number}
 */
export
const ProductionStatus_halted = 3 satisfies ProductionStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_halted
 * @description
 *
 * Management has taken production out of service (CCSDS 912.1-B-5, section
 * 3.7.2.10).
 * @constant
 * @type {number}
 */
export
const halted = ProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProductionStatus: $.ASN1Decoder<ProductionStatus> = $._decodeInteger;
export const _encode_ProductionStatus: $.ASN1Encoder<ProductionStatus> = $._encodeInteger;


/* eslint-enable */
