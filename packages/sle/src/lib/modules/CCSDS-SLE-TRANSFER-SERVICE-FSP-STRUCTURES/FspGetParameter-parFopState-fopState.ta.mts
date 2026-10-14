/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspGetParameter_parFopState_fopState
 * @description
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
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_active: FspGetParameter_parFopState_fopState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_active
 * @constant
 * @type {number}
 */
export
const active: FspGetParameter_parFopState_fopState = FspGetParameter_parFopState_fopState_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_retransmitWithoutWait
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_retransmitWithoutWait: FspGetParameter_parFopState_fopState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_retransmitWithoutWait
 * @constant
 * @type {number}
 */
export
const retransmitWithoutWait: FspGetParameter_parFopState_fopState = FspGetParameter_parFopState_fopState_retransmitWithoutWait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_retransmitWithWait
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_retransmitWithWait: FspGetParameter_parFopState_fopState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_retransmitWithWait
 * @constant
 * @type {number}
 */
export
const retransmitWithWait: FspGetParameter_parFopState_fopState = FspGetParameter_parFopState_fopState_retransmitWithWait; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initialisingWithoutBCFrame
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_initialisingWithoutBCFrame: FspGetParameter_parFopState_fopState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initialisingWithoutBCFrame
 * @constant
 * @type {number}
 */
export
const initialisingWithoutBCFrame: FspGetParameter_parFopState_fopState = FspGetParameter_parFopState_fopState_initialisingWithoutBCFrame; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initialisingWithBCFrame
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_initialisingWithBCFrame: FspGetParameter_parFopState_fopState = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initialisingWithBCFrame
 * @constant
 * @type {number}
 */
export
const initialisingWithBCFrame: FspGetParameter_parFopState_fopState = FspGetParameter_parFopState_fopState_initialisingWithBCFrame; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initial
 * @constant
 * @type {number}
 */
export
const FspGetParameter_parFopState_fopState_initial: FspGetParameter_parFopState_fopState = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspGetParameter_parFopState_fopState_initial
 * @constant
 * @type {number}
 */
export
const initial: FspGetParameter_parFopState_fopState = FspGetParameter_parFopState_fopState_initial; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspGetParameter_parFopState_fopState: $.ASN1Decoder<FspGetParameter_parFopState_fopState> = $._decodeInteger;
export const _encode_FspGetParameter_parFopState_fopState: $.ASN1Encoder<FspGetParameter_parFopState_fopState> = $._encodeInteger;


/* eslint-enable */
