/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MuxScheme
 * @description
 * 
 * Multiplexing scheme for MAP multiplexing or for VC multiplexing. The scheme
 * at MAP level may differ from the scheme at VC level, and different VCs may
 * use different MAP schemes. If no MAP multiplexing is used, the MAP scheme is
 * reported as FIFO. Requests are Frame Data Units at MAP level and TC frames at
 * VC level.
 * 
 * CCSDS 912.3-B-3, sections B2 and 3.10.2.5 (table 3-11).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MuxScheme                ::=    INTEGER
 * {  fifo                          (0)
 * ,  absolute-priority             (1)
 * ,  polling-vector                (2)
 * }
 * ```
 */
export
type MuxScheme = INTEGER;

/**
 * @summary MuxScheme_fifo
 * @description
 * 
 * First in, first out. Requests are served in the order received from the user.
 * At MAP level, when Segment Headers or MAPs are not used, the segments queue
 * with the earliest time stamp is selected.
 * 
 * CCSDS 912.3-B-3, sections B2.2, B3.11, and B4.
 * @constant
 * @type {number}
 */
export
const MuxScheme_fifo: MuxScheme = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_fifo
 * @description
 * 
 * First-in, first-out service (CCSDS 912.3-B-3, section B2.2).
 * @constant
 * @type {number}
 */
export
const fifo: MuxScheme = MuxScheme_fifo; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_absolute_priority
 * @description
 * 
 * Absolute priority. Requests are served from the highest priority currently
 * queued. All priorities are different. After a request is taken, the search
 * resumes at the highest priority.
 * 
 * CCSDS 912.3-B-3, sections B2.2, B3.10, and B4.
 * @constant
 * @type {number}
 */
export
const MuxScheme_absolute_priority: MuxScheme = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_absolute_priority
 * @description
 * 
 * Service by distinct absolute priority, highest first (CCSDS 912.3-B-3,
 * section B2.2).
 * @constant
 * @type {number}
 */
export
const absolute_priority: MuxScheme = MuxScheme_absolute_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_polling_vector
 * @description
 * 
 * Polling vector. Queues are checked in vector order. After a request is taken,
 * checking continues at the next entry, wrapping to the first entry after the
 * last.
 * 
 * CCSDS 912.3-B-3, sections B2.2, B3.10, and B4.
 * @constant
 * @type {number}
 */
export
const MuxScheme_polling_vector: MuxScheme = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_polling_vector
 * @description
 * 
 * Service in polling-vector order (CCSDS 912.3-B-3, section B2.2).
 * @constant
 * @type {number}
 */
export
const polling_vector: MuxScheme = MuxScheme_polling_vector; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_MuxScheme: $.ASN1Decoder<MuxScheme> = $._decodeInteger;
export const _encode_MuxScheme: $.ASN1Encoder<MuxScheme> = $._encodeInteger;


/* eslint-enable */
