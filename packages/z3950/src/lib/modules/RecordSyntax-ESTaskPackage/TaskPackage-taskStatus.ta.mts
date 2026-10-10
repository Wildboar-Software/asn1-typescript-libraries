/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TaskPackage_taskStatus
 * @description
 * 
 * Progress of an extended-services task (ANSI/NISO Z39.50-2003, §3.2.9.1.10,
 * §3.2.9.5). It is stored on the task package and is not a parameter of the ES
 * response. It is not specific to the service type, and complete does not mean
 * success. The client learns progress by retrieving the package again.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaskPackage-taskStatus ::= INTEGER {
 *     pending (0),
 *     active (1),
 *     complete (2),
 *     aborted (3)
 * }
 * ```
 */
export
type TaskPackage_taskStatus = INTEGER;

/**
 * @summary TaskPackage_taskStatus_pending
 * @description
 * 
 * The task passed a preliminary check and is queued (§3.2.9.5). This state can
 * be skipped when the server starts the task immediately. If the request fails
 * that check, the server may create no package; if it does, the status is
 * aborted rather than pending.
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_pending: TaskPackage_taskStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_pending
 * @description
 * 
 * Short name for `TaskPackage_taskStatus_pending`: the task is queued.
 * @constant
 * @type {number}
 */
export
const pending: TaskPackage_taskStatus = TaskPackage_taskStatus_pending; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_active
 * @description
 * 
 * The task has started. That may happen before the ES response is sent
 * (§3.2.9.5).
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_active: TaskPackage_taskStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_active
 * @description
 * 
 * Short name for `TaskPackage_taskStatus_active`: the task has started.
 * @constant
 * @type {number}
 */
export
const active: TaskPackage_taskStatus = TaskPackage_taskStatus_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_complete
 * @description
 * 
 * The task has finished. This does not say that it finished successfully
 * (§3.2.9.5).
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_complete: TaskPackage_taskStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_complete
 * @description
 * 
 * Short name for `TaskPackage_taskStatus_complete`: the task has finished.
 * @constant
 * @type {number}
 */
export
const complete: TaskPackage_taskStatus = TaskPackage_taskStatus_complete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_aborted
 * @description
 * 
 * The task was aborted, or it failed the preliminary check and a package was
 * still created (§3.2.9.5).
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_aborted: TaskPackage_taskStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_aborted
 * @description
 * 
 * Short name for `TaskPackage_taskStatus_aborted`: the task was aborted.
 * @constant
 * @type {number}
 */
export
const aborted: TaskPackage_taskStatus = TaskPackage_taskStatus_aborted; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TaskPackage_taskStatus: $.ASN1Decoder<TaskPackage_taskStatus> = $._decodeInteger;
export const _encode_TaskPackage_taskStatus: $.ASN1Encoder<TaskPackage_taskStatus> = $._encodeInteger;


/* eslint-enable */
