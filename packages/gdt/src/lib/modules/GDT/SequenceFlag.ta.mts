/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SequenceFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SequenceFlag  ::=  INTEGER {
 *     sf-start                (0),
 *     sf-continue             (1),
 *     sf-end                  (2),
 *     sf-stateless-no-reply   (3),
 *     sf-stateless            (4),
 *     sf-stream-complete      (5),
 *     sf-continue-wait        (6),
 *     sf-heartbeat            (7)
 * }
 * ```
 */
export
type SequenceFlag = INTEGER;

/**
 * @summary SequenceFlag_sf_start
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_start: 0 = 0 satisfies SequenceFlag; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_start
 * @constant
 * @type {number}
 */
export
const sf_start: 0 = SequenceFlag_sf_start; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_continue: 1 = 1 satisfies SequenceFlag; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue
 * @constant
 * @type {number}
 */
export
const sf_continue: 1 = SequenceFlag_sf_continue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_end
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_end: 2 = 2 satisfies SequenceFlag; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_end
 * @constant
 * @type {number}
 */
export
const sf_end: 2 = SequenceFlag_sf_end; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless_no_reply
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_stateless_no_reply: 3 = 3 satisfies SequenceFlag; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless_no_reply
 * @constant
 * @type {number}
 */
export
const sf_stateless_no_reply: 3 = SequenceFlag_sf_stateless_no_reply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_stateless: 4 = 4 satisfies SequenceFlag; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless
 * @constant
 * @type {number}
 */
export
const sf_stateless: 4 = SequenceFlag_sf_stateless; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stream_complete
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_stream_complete: 5 = 5 satisfies SequenceFlag; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stream_complete
 * @constant
 * @type {number}
 */
export
const sf_stream_complete: 5 = SequenceFlag_sf_stream_complete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue_wait
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_continue_wait: 6 = 6 satisfies SequenceFlag; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue_wait
 * @constant
 * @type {number}
 */
export
const sf_continue_wait: 6 = SequenceFlag_sf_continue_wait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_heartbeat
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_heartbeat: 7 = 7 satisfies SequenceFlag; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_heartbeat
 * @constant
 * @type {number}
 */
export
const sf_heartbeat: 7 = SequenceFlag_sf_heartbeat; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SequenceFlag: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_SequenceFlag: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
