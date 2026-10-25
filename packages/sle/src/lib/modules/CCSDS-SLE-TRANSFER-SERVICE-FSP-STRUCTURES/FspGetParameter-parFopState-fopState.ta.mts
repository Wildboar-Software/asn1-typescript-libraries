/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parFopState_fopState
 * @description
 * 
 * State of the FOP on this VC. Table 3-11 names the six states below and does
 * not define the behavior of each state. Annex D1.3.4 calls fop-state
 * read-only.
 * 
 * CCSDS 912.3-B-3, table 3-11 and annex D1.3.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parFopState-fopState ::= INTEGER
 *       {  active                     (0)
 *       ,  retransmitWithoutWait      (1)
 *       ,  retransmitWithWait         (2)
 *       ,  initialisingWithoutBCFrame (3)
 *       ,  initialisingWithBCFrame    (4)
 *       ,  initial                    (5)
 *       }
 * ```
 */
export
type FspGetParameter_parFopState_fopState = INTEGER;

/**
 * @summary FspGetParameter_parFopState_fopState_active
 * @description
 *
 * Table 3-11 FOP state ACTIVE on this VC. Section 3.10.2.5 names this state and
 * does not define its behavior. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_active = 0 satisfies FspGetParameter_parFopState_fopState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_active
 * @description
 *
 * FOP state ACTIVE. Section 3.10.2.5 names this state and does not define its
 * behavior. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const active = FspGetParameter_parFopState_fopState_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_retransmitWithoutWait
 * @description
 *
 * Table 3-11 FOP state RETRANSMIT WITHOUT WAIT on this VC. Section 3.10.2.5
 * names this state and does not define its behavior. CCSDS 912.3-B-3, table
 * 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_retransmitWithoutWait = 1 satisfies FspGetParameter_parFopState_fopState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_retransmitWithoutWait
 * @description
 *
 * FOP state RETRANSMIT WITHOUT WAIT. Section 3.10.2.5 names this state and does
 * not define its behavior. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const retransmitWithoutWait = FspGetParameter_parFopState_fopState_retransmitWithoutWait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_retransmitWithWait
 * @description
 *
 * Table 3-11 FOP state RETRANSMIT WITH WAIT on this VC. Section 3.10.2.5 names
 * this state and does not define its behavior. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_retransmitWithWait = 2 satisfies FspGetParameter_parFopState_fopState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_retransmitWithWait
 * @description
 *
 * FOP state RETRANSMIT WITH WAIT. Section 3.10.2.5 names this state and does
 * not define its behavior. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const retransmitWithWait = FspGetParameter_parFopState_fopState_retransmitWithWait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initialisingWithoutBCFrame
 * @description
 *
 * Table 3-11 FOP state INITIALIZING WITHOUT BC FRAME on this VC. Section
 * 3.10.2.5 names this state and does not define its behavior. CCSDS 912.3-B-3,
 * table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_initialisingWithoutBCFrame = 3 satisfies FspGetParameter_parFopState_fopState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initialisingWithoutBCFrame
 * @description
 *
 * FOP state INITIALIZING WITHOUT BC FRAME. Section 3.10.2.5 names this state
 * and does not define its behavior. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const initialisingWithoutBCFrame = FspGetParameter_parFopState_fopState_initialisingWithoutBCFrame; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initialisingWithBCFrame
 * @description
 *
 * Table 3-11 FOP state INITIALIZING WITH BC FRAME on this VC. Section 3.10.2.5
 * names this state and does not define its behavior. CCSDS 912.3-B-3, table
 * 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_initialisingWithBCFrame = 4 satisfies FspGetParameter_parFopState_fopState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initialisingWithBCFrame
 * @description
 *
 * FOP state INITIALIZING WITH BC FRAME. Section 3.10.2.5 names this state and
 * does not define its behavior. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const initialisingWithBCFrame = FspGetParameter_parFopState_fopState_initialisingWithBCFrame; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initial
 * @description
 *
 * Table 3-11 FOP state INITIAL on this VC. Section 3.10.2.5 names this state
 * and does not define its behavior. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_initial = 5 satisfies FspGetParameter_parFopState_fopState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initial
 * @description
 *
 * FOP state INITIAL. Section 3.10.2.5 names this state and does not define its
 * behavior. CCSDS 912.3-B-3, table 3-11.
 * @constant
 * @type {number}
 */
export
const initial = FspGetParameter_parFopState_fopState_initial; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parFopState_fopState: $.ASN1Decoder<FspGetParameter_parFopState_fopState> = $._decodeInteger;
export const _encode_FspGetParameter_parFopState_fopState: $.ASN1Encoder<FspGetParameter_parFopState_fopState> = $._encodeInteger;


/* eslint-enable */
