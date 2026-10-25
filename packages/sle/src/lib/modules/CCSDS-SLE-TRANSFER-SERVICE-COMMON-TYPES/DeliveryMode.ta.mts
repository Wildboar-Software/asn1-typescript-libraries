/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeliveryMode
 * @description
 * 
 * Delivery mode of a service instance, set by service management. Section 3.1.9
 * defines the three return modes. Annex A2.1 also assigns `fwdOnline` and
 * `fwdOffline`, and section 3.1.9 does not define those forward modes.
 * 
 * CCSDS 911.1-B-5, section 3.1.9 and annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeliveryMode               ::=    INTEGER
 * { rtnTimelyOnline                  (0)
 * , rtnCompleteOnline                (1)
 * , rtnOffline                       (2)
 * , fwdOnline                        (3)
 * , fwdOffline                       (4)
 * }
 * ```
 */
export
type DeliveryMode = INTEGER;

/**
 * @summary DeliveryMode_rtnTimelyOnline
 * @description
 * 
 * Timely online delivery. Acquired frames and synchronous notifications go into
 * the transfer buffer and are released when the buffer is full, the
 * latency-limit release timer expires, or an end-of-data notification is
 * inserted. If the communications service applies backpressure, that buffer is
 * discarded and a 'data discarded due to excessive backlog' notification is
 * inserted. Abort clears the transfer buffer.
 * 
 * CCSDS 911.1-B-5, section 3.1.9.1.
 * @constant
 * @type {number}
 */
export
const DeliveryMode_rtnTimelyOnline: DeliveryMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_rtnTimelyOnline
 * @description
 * 
 * Timely online delivery; backpressure discards the transfer buffer
 * (CCSDS 911.1-B-5, section 3.1.9.1).
 * @constant
 * @type {number}
 */
export
const rtnTimelyOnline: DeliveryMode = DeliveryMode_rtnTimelyOnline; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_rtnCompleteOnline
 * @description
 * 
 * Complete online delivery. Frames and synchronous notifications are stored in
 * the online frame buffer and moved, in order, into the transfer buffer while
 * the provider is in state 3. The online frame buffer keeps filling through the
 * provision period while the instance is unbound, unless UNBIND reason is
 * `end`, which clears it. Overflow discards the oldest records and inserts a
 * 'data discarded' notification. Abort clears the transfer buffer, and a frame
 * already taken from the online frame buffer is not taken again.
 * 
 * CCSDS 911.1-B-5, section 3.1.9.2.
 * @constant
 * @type {number}
 */
export
const DeliveryMode_rtnCompleteOnline: DeliveryMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_rtnCompleteOnline
 * @description
 * 
 * Online delivery that keeps frames in the online frame buffer (CCSDS
 * 911.1-B-5, section 3.1.9.2).
 * @constant
 * @type {number}
 */
export
const rtnCompleteOnline: DeliveryMode = DeliveryMode_rtnCompleteOnline; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_rtnOffline
 * @description
 * 
 * Offline delivery. Frames are stored in an offline frame buffer, one per
 * service agreement, and may become available only after a delay the provider
 * documents. START delivers frames whose Earth Receive Time falls in the
 * requested interval, whichever space link session acquired them. Synchronous
 * notifications other than end-of-data are not provided. SCHEDULE-STATUS-REPORT
 * is rejected. The provider documents when offline-buffer records are deleted.
 * 
 * CCSDS 911.1-B-5, sections 3.1.9.3 and 3.8.1.6.
 * @constant
 * @type {number}
 */
export
const DeliveryMode_rtnOffline: DeliveryMode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_rtnOffline
 * @description
 * 
 * Delivery from the offline frame buffer for a requested ERT interval (CCSDS
 * 911.1-B-5, section 3.1.9.3).
 * @constant
 * @type {number}
 */
export
const rtnOffline: DeliveryMode = DeliveryMode_rtnOffline; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_fwdOnline
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3.1.9 defines the return delivery
 * modes and does not define this forward mode.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.1.9.
 * @constant
 * @type {number}
 */
export
const DeliveryMode_fwdOnline: DeliveryMode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_fwdOnline
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3.1.9 does not define this forward
 * mode (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdOnline: DeliveryMode = DeliveryMode_fwdOnline; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_fwdOffline
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3.1.9 defines the return delivery
 * modes and does not define this forward mode.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.1.9.
 * @constant
 * @type {number}
 */
export
const DeliveryMode_fwdOffline: DeliveryMode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryMode_fwdOffline
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3.1.9 does not define this forward
 * mode (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdOffline: DeliveryMode = DeliveryMode_fwdOffline; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeliveryMode: $.ASN1Decoder<DeliveryMode> = $._decodeInteger;
export const _encode_DeliveryMode: $.ASN1Encoder<DeliveryMode> = $._encodeInteger;


/* eslint-enable */
