/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TaskPackageRecordStructure_recordStatus
 * @description
 * 
 * Status of the update of one record. A client can poll the task package
 * and watch these change. `queued` is the initial value. The server may
 * set `inProcess` and may skip either `queued` or `inProcess`. The ending
 * value is `success` or `failure`, and it should not change after that.
 * When task status is pending, all are `queued`. When task status is
 * complete or aborted, none should be `queued`.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5, EXT.1.5.1.
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
 * @description
 * 
 * This record was updated successfully. Once set, the status should not
 * change. Include the record in the per-record structure when an
 * element-set name was supplied.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5, EXT.1.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_success: TaskPackageRecordStructure_recordStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_success
 * @description
 * 
 * This record was updated successfully (EXT.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const success: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_queued
 * @description
 * 
 * This record is queued for update, or the update is already in process if
 * the server does not distinguish that case. Initial status. When task
 * status is pending, every record is queued.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5, EXT.1.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_queued: TaskPackageRecordStructure_recordStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_queued
 * @description
 * 
 * Queued for update, or in process if undistinguished (EXT.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const queued: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_queued; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_inProcess
 * @description
 * 
 * The update of this record is in process. The server may skip this
 * status, and may use `queued` instead when it does not distinguish the
 * two.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5, EXT.1.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_inProcess: TaskPackageRecordStructure_recordStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_inProcess
 * @description
 * 
 * Update of this record is in process (EXT.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const inProcess: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_inProcess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_failure
 * @description
 * 
 * The update of this record failed. A surrogate diagnostic should be
 * supplied instead of the record. Once set, the status should not change.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5, EXT.1.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_failure: TaskPackageRecordStructure_recordStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_failure
 * @description
 * 
 * Update of this record failed; supply a surrogate diagnostic (EXT.1.5).
 * 
 * @constant
 * @type {number}
 */
export
const failure: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TaskPackageRecordStructure_recordStatus = $._decodeInteger;
export const _encode_TaskPackageRecordStructure_recordStatus = $._encodeInteger;


/* eslint-enable */
