/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RafProductionStatus
 * @description
 * 
 * Status of RAF production for this service instance. The initial value is
 * `halted`, because production is not yet configured. A change is reported by
 * `productionStatusChange` during online delivery. The permitted transitions
 * are halted to running, running
 * to interrupted, interrupted to running, and any status to halted.
 * 
 * CCSDS 911.1-B-5, sections 3.7.2.4.3 and 3.9.2.9, and annex B.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafProductionStatus            ::=  INTEGER
 * {   running                           (0)
 * ,   interrupted                       (1)
 * ,   halted                            (2)
 * }
 * ```
 */
export
type RafProductionStatus = INTEGER;

/**
 * @summary RafProductionStatus_running
 * @description
 * 
 * Production can process a return space link physical channel when one is
 * available. Entered from `halted` by management action that configures the
 * return link, or from `interrupted` when the provider detects that a fault has
 * been corrected. While status is `interrupted`, a successful RAF-START still
 * delivers no frames until status returns to `running`.
 * 
 * CCSDS 911.1-B-5, section 3.7.2.4.3 and annex B.
 * @constant
 * @type {number}
 */
export
const RafProductionStatus_running: RafProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_running
 * @description
 * 
 * Production can process the return channel when it is available (CCSDS
 * 911.1-B-5, section 3.7.2.4.3).
 * @constant
 * @type {number}
 */
export
const running: RafProductionStatus = RafProductionStatus_running; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_interrupted
 * @description
 * 
 * Production is stopped because the provider detected a fault. RAF-BIND and
 * RAF-START are still accepted. No frames are sent until the fault is corrected
 * and status returns to `running`.
 * 
 * CCSDS 911.1-B-5, section 3.7.2.4.3 and annex B.
 * @constant
 * @type {number}
 */
export
const RafProductionStatus_interrupted: RafProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_interrupted
 * @description
 * 
 * Production is stopped by a fault (CCSDS 911.1-B-5, section 3.7.2.4.3 and
 * annex B).
 * @constant
 * @type {number}
 */
export
const interrupted: RafProductionStatus = RafProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_halted
 * @description
 * 
 * Production is stopped and the equipment is out of service because of
 * management action. This is the initial status. RAF-BIND and RAF-START are
 * rejected with diagnostic `out of service`. If a transition to `running`
 * fails, status stays `halted`.
 * 
 * CCSDS 911.1-B-5, section 3.7.2.4.3, sections 3.2.2.11 and 3.4.2.9, and annex
 * B.
 * @constant
 * @type {number}
 */
export
const RafProductionStatus_halted: RafProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_halted
 * @description
 * 
 * Production is stopped by management action; BIND and START are rejected
 * (CCSDS 911.1-B-5, section 3.7.2.4.3 and annex B).
 * @constant
 * @type {number}
 */
export
const halted: RafProductionStatus = RafProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RafProductionStatus: $.ASN1Decoder<RafProductionStatus> = $._decodeInteger;
export const _encode_RafProductionStatus: $.ASN1Encoder<RafProductionStatus> = $._encodeInteger;


/* eslint-enable */
