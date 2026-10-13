/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RafProductionStatus
 * @description
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
 * @constant
 * @type {number}
 */
export
const RafProductionStatus_running: RafProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_running
 * @constant
 * @type {number}
 */
export
const running: RafProductionStatus = RafProductionStatus_running; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const RafProductionStatus_interrupted: RafProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: RafProductionStatus = RafProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const RafProductionStatus_halted: RafProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RafProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const halted: RafProductionStatus = RafProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RafProductionStatus: $.ASN1Decoder<RafProductionStatus> = $._decodeInteger;
export const _encode_RafProductionStatus: $.ASN1Encoder<RafProductionStatus> = $._encodeInteger;


/* eslint-enable */
