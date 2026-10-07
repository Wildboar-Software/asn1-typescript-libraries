/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TaskPackage_taskStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaskPackage-taskStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TaskPackage_taskStatus = INTEGER;

/**
 * @summary TaskPackage_taskStatus_pending
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_pending: TaskPackage_taskStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_pending
 * @constant
 * @type {number}
 */
export
const pending: TaskPackage_taskStatus = TaskPackage_taskStatus_pending; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_active
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_active: TaskPackage_taskStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_active
 * @constant
 * @type {number}
 */
export
const active: TaskPackage_taskStatus = TaskPackage_taskStatus_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_complete
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_complete: TaskPackage_taskStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_complete
 * @constant
 * @type {number}
 */
export
const complete: TaskPackage_taskStatus = TaskPackage_taskStatus_complete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_aborted
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_aborted: TaskPackage_taskStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_aborted
 * @constant
 * @type {number}
 */
export
const aborted: TaskPackage_taskStatus = TaskPackage_taskStatus_aborted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TaskPackage_taskStatus = $._decodeInteger;
export const _encode_TaskPackage_taskStatus = $._encodeInteger;


/* eslint-enable */
