/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FspProductionStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspProductionStatus      ::=    INTEGER
 * {  configured                    (0)
 * ,  operationalBd                 (1)
 * ,  operationalAdAndBd            (2)
 * ,  operationalAdSuspended        (3)
 * ,  interrupted                   (4)
 * ,  halted                        (5)
 * }
 * ```
 */
export
type FspProductionStatus = INTEGER;

/**
 * @summary FspProductionStatus_configured
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_configured: FspProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_configured
 * @constant
 * @type {number}
 */
export
const configured: FspProductionStatus = FspProductionStatus_configured; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalBd
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_operationalBd: FspProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalBd
 * @constant
 * @type {number}
 */
export
const operationalBd: FspProductionStatus = FspProductionStatus_operationalBd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdAndBd
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_operationalAdAndBd: FspProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdAndBd
 * @constant
 * @type {number}
 */
export
const operationalAdAndBd: FspProductionStatus = FspProductionStatus_operationalAdAndBd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdSuspended
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_operationalAdSuspended: FspProductionStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_operationalAdSuspended
 * @constant
 * @type {number}
 */
export
const operationalAdSuspended: FspProductionStatus = FspProductionStatus_operationalAdSuspended; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_interrupted: FspProductionStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: FspProductionStatus = FspProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const FspProductionStatus_halted: FspProductionStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FspProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const halted: FspProductionStatus = FspProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FspProductionStatus: $.ASN1Decoder<FspProductionStatus> = $._decodeInteger;
export const _encode_FspProductionStatus: $.ASN1Encoder<FspProductionStatus> = $._encodeInteger;


/* eslint-enable */
