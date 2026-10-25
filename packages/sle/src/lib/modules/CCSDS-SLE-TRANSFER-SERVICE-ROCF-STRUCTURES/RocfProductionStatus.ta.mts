/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RocfProductionStatus
 * @description
 * 
 * Status of ROCF production. The initial value is halted, because production
 * is not yet configured for the instance; the user may be unable to observe
 * that initial value if the instance stays inaccessible until configuration
 * finishes. Halted to running is a management action that makes production
 * operational. Running to interrupted is a production fault. Interrupted
 * returns to running when the provider detects that the fault is corrected.
 * Any status moves to halted on a management halt. A failed attempt to leave
 * halted leaves the status halted. While halted, ROCF-START is rejected with
 * out of service. While interrupted, ROCF-START is accepted and no frames are
 * sent until the status is running. Production-status changes are notified
 * with ROCF-SYNC-NOTIFY except in offline delivery.
 *
 * CCSDS 911.5-B-4, sections 3.7.2.3, 3.7.2.4, and annex B.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfProductionStatus     ::=    INTEGER
 * {  running                       (0)
 * ,  interrupted                   (1)
 * ,  halted                        (2)
 * }
 * ```
 */
export
type RocfProductionStatus = INTEGER;

/**
 * @summary RocfProductionStatus_running
 * @description
 * 
 * Production can process a return space link physical channel, if one is
 * available. CCSDS 911.5-B-4, section 3.7.2.4.
 * @constant
 * @type {number}
 */
export
const RocfProductionStatus_running: 0 = 0 satisfies RocfProductionStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_running
 * @description
 * 
 * Production can process the return space link when a channel is available
 * (CCSDS 911.5-B-4, section 3.7.2.4).
 * @constant
 * @type {number}
 */
export
const running: 0 = RocfProductionStatus_running; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_interrupted
 * @description
 * 
 * Production is stopped because of a fault. ROCF-START is accepted, and no
 * frames are sent until the status returns to running. CCSDS 911.5-B-4,
 * section 3.7.2.4 and annex B.
 * @constant
 * @type {number}
 */
export
const RocfProductionStatus_interrupted: 1 = 1 satisfies RocfProductionStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_interrupted
 * @description
 * 
 * Production is stopped by a fault (CCSDS 911.5-B-4, section 3.7.2.4).
 * @constant
 * @type {number}
 */
export
const interrupted: 1 = RocfProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_halted
 * @description
 * 
 * Production is stopped and the equipment is out of service because of a
 * management action. ROCF-START is rejected with out of service. This is the
 * initial status. CCSDS 911.5-B-4, section 3.7.2.4 and annex B.
 * @constant
 * @type {number}
 */
export
const RocfProductionStatus_halted: 2 = 2 satisfies RocfProductionStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_halted
 * @description
 * 
 * Production is stopped by management (CCSDS 911.5-B-4, section 3.7.2.4).
 * @constant
 * @type {number}
 */
export
const halted: 2 = RocfProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RocfProductionStatus: $.ASN1Decoder<RocfProductionStatus> = $._decodeInteger;
export const _encode_RocfProductionStatus: $.ASN1Encoder<RocfProductionStatus> = $._encodeInteger;


/* eslint-enable */
