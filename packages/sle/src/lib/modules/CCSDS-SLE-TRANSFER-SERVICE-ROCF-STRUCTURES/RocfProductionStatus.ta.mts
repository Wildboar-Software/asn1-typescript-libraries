/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RocfProductionStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfProductionStatus     ::=    INTEGER
 * {  running                       (0)
 * ,  interrupted                   (1)
 * ,  halted                        (2)
 * }
 * ```
 */
export
type RocfProductionStatus = INTEGER;

/**
 * @summary RocfProductionStatus_running
 * @constant
 * @type {number}
 */
export
const RocfProductionStatus_running: RocfProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_running
 * @constant
 * @type {number}
 */
export
const running: RocfProductionStatus = RocfProductionStatus_running; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const RocfProductionStatus_interrupted: RocfProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: RocfProductionStatus = RocfProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const RocfProductionStatus_halted: RocfProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RocfProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const halted: RocfProductionStatus = RocfProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RocfProductionStatus: $.ASN1Decoder<RocfProductionStatus> = $._decodeInteger;
export const _encode_RocfProductionStatus: $.ASN1Encoder<RocfProductionStatus> = $._encodeInteger;


/* eslint-enable */
