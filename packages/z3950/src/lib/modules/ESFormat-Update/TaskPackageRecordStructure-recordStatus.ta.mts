/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TaskPackageRecordStructure_recordStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaskPackageRecordStructure-recordStatus ::= INTEGER {
 *     success (1),
 *     queued (2),
 *     inProcess (3),
 *     failure (4)
 * }
 * ```
 */
export
type TaskPackageRecordStructure_recordStatus = INTEGER;

/**
 * @summary TaskPackageRecordStructure_recordStatus_success
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_success: TaskPackageRecordStructure_recordStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_success
 * @constant
 * @type {number}
 */
export
const success: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_queued
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_queued: TaskPackageRecordStructure_recordStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_queued
 * @constant
 * @type {number}
 */
export
const queued: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_queued; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_inProcess
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_inProcess: TaskPackageRecordStructure_recordStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_inProcess
 * @constant
 * @type {number}
 */
export
const inProcess: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_inProcess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_failure
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_failure: TaskPackageRecordStructure_recordStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_failure
 * @constant
 * @type {number}
 */
export
const failure: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TaskPackageRecordStructure_recordStatus = $._decodeInteger;
export const _encode_TaskPackageRecordStructure_recordStatus = $._encodeInteger;


/* eslint-enable */
