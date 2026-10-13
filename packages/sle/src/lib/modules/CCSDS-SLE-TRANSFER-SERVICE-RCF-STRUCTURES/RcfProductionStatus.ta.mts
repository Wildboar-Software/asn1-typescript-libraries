/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RcfProductionStatus
 * @description
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
 * @constant
 * @type {number}
 */
export
const RcfProductionStatus_running: RcfProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_running
 * @constant
 * @type {number}
 */
export
const running: RcfProductionStatus = RcfProductionStatus_running; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const RcfProductionStatus_interrupted: RcfProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: RcfProductionStatus = RcfProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const RcfProductionStatus_halted: RcfProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RcfProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const halted: RcfProductionStatus = RcfProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RcfProductionStatus: $.ASN1Decoder<RcfProductionStatus> = $._decodeInteger;
export const _encode_RcfProductionStatus: $.ASN1Encoder<RcfProductionStatus> = $._encodeInteger;


/* eslint-enable */
