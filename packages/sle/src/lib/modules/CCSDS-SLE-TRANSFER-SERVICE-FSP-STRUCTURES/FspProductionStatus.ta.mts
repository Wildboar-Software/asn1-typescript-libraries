/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspProductionStatus
 * @description
 * 
 * Status of the FSP production process, including the operational sub-state.
 * The initial value is `configured`. Annex C defines the transitions:
 * configured to operational on management action that makes production
 * operational; operational to interrupted on a detected production fault;
 * interrupted back to operational when the provider detects that the fault is
 * corrected; any status to halted on direct management action; halted to
 * configured when management restores the configuration. The sub-states of
 * operational, and the transitions among them, are defined in CCSDS 232.1-B-2
 * and are not repeated in this issue. Annex C notes that fact.
 * 
 * CCSDS 912.3-B-3, sections 3.7.2.14, 3.9.2.8, and annex C.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspProductionStatus      ::=    INTEGER
 * {  configured                    (0)
 * ,  operationalBd                 (1)
 * ,  operationalAdAndBd            (2)
 * ,  operationalAdSuspended        (3)
 * ,  interrupted                   (4)
 * ,  halted                        (5)
 * }
 * ```
 */
export
type FspProductionStatus = INTEGER;

/**
 * @summary FspProductionStatus_configured
 * @description
 * 
 * Equipment has been assigned to the service instance, and the production
 * process cannot yet process Space Packets. Users may connect during the
 * scheduled provision period and submit Packets whose production interval fits
 * the expected space link session.
 * 
 * CCSDS 912.3-B-3, sections 3.7.2.14 and 3.9.2.8, and annex C.
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_configured: FspProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_configured
 * @description
 * 
 * Equipment is assigned and production cannot yet process Packets
 * (CCSDS 912.3-B-3, section 3.7.2.14).
 * @constant
 * @type {number}
 */
export
const configured: FspProductionStatus = FspProductionStatus_configured; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalBd
 * @description
 * 
 * Production can process Space Packets, and only in BD transmission mode. The
 * AD service may have been terminated for the reason given by the FOP alert, or
 * no directive that initiates AD service has completed. After a transition to
 * operational, the initial sub-state is BD.
 * 
 * CCSDS 912.3-B-3, sections 3.7.2.14 and 3.9.2.8.
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_operationalBd: FspProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalBd
 * @description
 * 
 * Operational, with only BD transmission available (CCSDS 912.3-B-3, section
 * 3.7.2.14).
 * @constant
 * @type {number}
 */
export
const operationalBd: FspProductionStatus = FspProductionStatus_operationalBd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdAndBd
 * @description
 * 
 * Production can process Space Packets in any transmission mode. The AD service
 * is available because a directive that initiates or resumes AD service has
 * completed.
 * 
 * CCSDS 912.3-B-3, sections 3.7.2.14 and 3.9.2.8.
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_operationalAdAndBd: FspProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdAndBd
 * @description
 * 
 * Operational, with AD and BD transmission available (CCSDS 912.3-B-3, section
 * 3.7.2.14).
 * @constant
 * @type {number}
 */
export
const operationalAdAndBd: FspProductionStatus = FspProductionStatus_operationalAdAndBd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdSuspended
 * @description
 * 
 * Production is operational and the AD service is suspended because the number
 * of transmissions given by the transmission limit has been completed. A later
 * Resume AD Service directive causes FOP-1 to resume in the state it had when
 * it was suspended.
 * 
 * CCSDS 912.3-B-3, sections 3.7.2.14 and 3.9.2.8.
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_operationalAdSuspended: FspProductionStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdSuspended
 * @description
 * 
 * Operational, with the AD service suspended at the transmission limit
 * (CCSDS 912.3-B-3, section 3.7.2.14).
 * @constant
 * @type {number}
 */
export
const operationalAdSuspended: FspProductionStatus = FspProductionStatus_operationalAdSuspended; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_interrupted
 * @description
 * 
 * The production process has detected a problem that prevents it from
 * processing Space Packets. The problem may be transient and may clear, for
 * example by automatic equipment reconfiguration. Packets already in process
 * for an affected user are discarded.
 * 
 * CCSDS 912.3-B-3, sections 3.7.2.14, 3.7.2.3, and annex C.
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_interrupted: FspProductionStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_interrupted
 * @description
 * 
 * A possibly transient fault prevents processing (CCSDS 912.3-B-3, section
 * 3.7.2.14).
 * @constant
 * @type {number}
 */
export
const interrupted: FspProductionStatus = FspProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_halted
 * @description
 * 
 * Service management has taken production out of service, for example because
 * an interruption is severe or because resources must be reassigned, such as
 * for a spacecraft emergency. All queues are cleared.
 * 
 * CCSDS 912.3-B-3, sections 3.7.2.14, 3.9.2.8, and B3.17.
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_halted: FspProductionStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_halted
 * @description
 * 
 * Management has taken production out of service (CCSDS 912.3-B-3, section
 * 3.7.2.14).
 * @constant
 * @type {number}
 */
export
const halted: FspProductionStatus = FspProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspProductionStatus: $.ASN1Decoder<FspProductionStatus> = $._decodeInteger;
export const _encode_FspProductionStatus: $.ASN1Encoder<FspProductionStatus> = $._encodeInteger;


/* eslint-enable */
