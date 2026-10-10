/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
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
const SequenceFlag_sf_start: SequenceFlag = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_start
 * @constant
 * @type {number}
 */
export
const sf_start: SequenceFlag = SequenceFlag_sf_start; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_continue: SequenceFlag = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue
 * @constant
 * @type {number}
 */
export
const sf_continue: SequenceFlag = SequenceFlag_sf_continue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_end
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_end: SequenceFlag = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_end
 * @constant
 * @type {number}
 */
export
const sf_end: SequenceFlag = SequenceFlag_sf_end; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless_no_reply
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_stateless_no_reply: SequenceFlag = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless_no_reply
 * @constant
 * @type {number}
 */
export
const sf_stateless_no_reply: SequenceFlag = SequenceFlag_sf_stateless_no_reply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_stateless: SequenceFlag = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stateless
 * @constant
 * @type {number}
 */
export
const sf_stateless: SequenceFlag = SequenceFlag_sf_stateless; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stream_complete
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_stream_complete: SequenceFlag = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_stream_complete
 * @constant
 * @type {number}
 */
export
const sf_stream_complete: SequenceFlag = SequenceFlag_sf_stream_complete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue_wait
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_continue_wait: SequenceFlag = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_continue_wait
 * @constant
 * @type {number}
 */
export
const sf_continue_wait: SequenceFlag = SequenceFlag_sf_continue_wait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_heartbeat
 * @constant
 * @type {number}
 */
export
const SequenceFlag_sf_heartbeat: SequenceFlag = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SequenceFlag_sf_heartbeat
 * @constant
 * @type {number}
 */
export
const sf_heartbeat: SequenceFlag = SequenceFlag_sf_heartbeat; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SequenceFlag = $._decodeInteger;
export const _encode_SequenceFlag = $._encodeInteger;


/* eslint-enable */
