/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RcfProductionStatus
 * @description
 *
 * Status of RCF production. The initial value is halted, because production is
 * not yet configured for the service instance. Changes are reported by an
 * RCF-SYNC-NOTIFY production-status notification in online delivery, and by
 * RCF-STATUS-REPORT. Offline delivery does not send the production-status
 * notification.
 *
 * CCSDS 911.2-B-4, section 3.7.2.4.3 and annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfProductionStatus          ::=  INTEGER
 * {   running                         (0)
 * ,   interrupted                     (1)
 * ,   halted                          (2)
 * }
 * ```
 */
export
type RcfProductionStatus = INTEGER;

/**
 * @summary RcfProductionStatus_running
 * @description
 *
 * Production can process a return space link physical channel when one is
 * available. Management action moves the status here from halted, typically by
 * moving the antenna to the acquisition point and configuring frequency, data
 * rate, and decoding. Recovery from a fault also returns the status here. If
 * that transition from halted fails, the reported status stays halted.
 *
 * CCSDS 911.2-B-4, section 3.7.2.4.3 and annex B, table B-1.
 * @constant
 * @type {number}
 */
export
const RcfProductionStatus_running = 0 satisfies RcfProductionStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_running
 * @description
 *
 * Production can process a return space link physical channel when one is
 * available (CCSDS 911.2-B-4, section 3.7.2.4.3).
 * @constant
 * @type {number}
 */
export
const running = RcfProductionStatus_running; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_interrupted
 * @description
 *
 * Production is stopped because the provider detected a fault. RCF-START is
 * accepted while the status is interrupted, and the provider sends no frames
 * until the status returns to running.
 *
 * CCSDS 911.2-B-4, section 3.7.2.4.3 and annex B.
 * @constant
 * @type {number}
 */
export
const RcfProductionStatus_interrupted = 1 satisfies RcfProductionStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_interrupted
 * @description
 *
 * Production is stopped by a fault (CCSDS 911.2-B-4, section 3.7.2.4.3 and
 * annex B).
 * @constant
 * @type {number}
 */
export
const interrupted = RcfProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_halted
 * @description
 *
 * Production is stopped and the equipment is out of service because of
 * management action. This is the initial status. RCF-BIND and RCF-START are
 * rejected with diagnostic out of service.
 *
 * CCSDS 911.2-B-4, section 3.7.2.4.3, section 3.4.2.9, and annex B.
 * @constant
 * @type {number}
 */
export
const RcfProductionStatus_halted = 2 satisfies RcfProductionStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_halted
 * @description
 *
 * Production is stopped by management action (CCSDS 911.2-B-4, section
 * 3.7.2.4.3 and annex B).
 * @constant
 * @type {number}
 */
export
const halted = RcfProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RcfProductionStatus: $.ASN1Decoder<RcfProductionStatus> = $._decodeInteger;
export const _encode_RcfProductionStatus: $.ASN1Encoder<RcfProductionStatus> = $._encodeInteger;


/* eslint-enable */
