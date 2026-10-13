/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProductionStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProductionStatus               ::=    INTEGER
 * {  operational                   (0)
 * ,  configured                    (1)
 * ,  interrupted                   (2)
 * ,  halted                        (3)
 * }
 * ```
 */
export
type ProductionStatus = INTEGER;

/**
 * @summary ProductionStatus_operational
 * @constant
 * @type {number}
 */
export
const ProductionStatus_operational: ProductionStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_operational
 * @constant
 * @type {number}
 */
export
const operational: ProductionStatus = ProductionStatus_operational; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_configured
 * @constant
 * @type {number}
 */
export
const ProductionStatus_configured: ProductionStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_configured
 * @constant
 * @type {number}
 */
export
const configured: ProductionStatus = ProductionStatus_configured; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const ProductionStatus_interrupted: ProductionStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_interrupted
 * @constant
 * @type {number}
 */
export
const interrupted: ProductionStatus = ProductionStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const ProductionStatus_halted: ProductionStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProductionStatus_halted
 * @constant
 * @type {number}
 */
export
const halted: ProductionStatus = ProductionStatus_halted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProductionStatus: $.ASN1Decoder<ProductionStatus> = $._decodeInteger;
export const _encode_ProductionStatus: $.ASN1Encoder<ProductionStatus> = $._encodeInteger;


/* eslint-enable */
