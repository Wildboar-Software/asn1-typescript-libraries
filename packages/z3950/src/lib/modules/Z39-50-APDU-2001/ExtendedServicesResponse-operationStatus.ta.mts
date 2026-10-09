/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedServicesResponse_operationStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesResponse-operationStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ExtendedServicesResponse_operationStatus = INTEGER;

/**
 * @summary ExtendedServicesResponse_operationStatus_done
 * @constant
 * @type {number}
 */
export
const ExtendedServicesResponse_operationStatus_done: ExtendedServicesResponse_operationStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_done
 * @constant
 * @type {number}
 */
export
const done: ExtendedServicesResponse_operationStatus = ExtendedServicesResponse_operationStatus_done; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_accepted
 * @constant
 * @type {number}
 */
export
const ExtendedServicesResponse_operationStatus_accepted: ExtendedServicesResponse_operationStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_accepted
 * @constant
 * @type {number}
 */
export
const accepted: ExtendedServicesResponse_operationStatus = ExtendedServicesResponse_operationStatus_accepted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_failure
 * @constant
 * @type {number}
 */
export
const ExtendedServicesResponse_operationStatus_failure: ExtendedServicesResponse_operationStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExtendedServicesResponse_operationStatus_failure
 * @constant
 * @type {number}
 */
export
const failure: ExtendedServicesResponse_operationStatus = ExtendedServicesResponse_operationStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ExtendedServicesResponse_operationStatus = $._decodeInteger;
export const _encode_ExtendedServicesResponse_operationStatus = $._encodeInteger;


/* eslint-enable */
