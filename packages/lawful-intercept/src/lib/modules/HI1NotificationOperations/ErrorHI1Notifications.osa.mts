/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
import { other_failure_causes } from "../HI1NotificationOperations/other-failure-causes.oa.mjs";
// export { other_failure_causes } from "../HI1NotificationOperations/other-failure-causes.oa.mjs";
import { missing_parameter } from "../HI1NotificationOperations/missing-parameter.oa.mjs";
// export { missing_parameter } from "../HI1NotificationOperations/missing-parameter.oa.mjs";
import { unknown_parameter } from "../HI1NotificationOperations/unknown-parameter.oa.mjs";
// export { unknown_parameter } from "../HI1NotificationOperations/unknown-parameter.oa.mjs";
import { erroneous_parameter } from "../HI1NotificationOperations/erroneous-parameter.oa.mjs";
// export { erroneous_parameter } from "../HI1NotificationOperations/erroneous-parameter.oa.mjs";


/**
 * @summary ErrorHI1Notifications
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorHI1Notifications ERROR ::= {
 *     other-failure-causes |
 *     missing-parameter |
 *     unknown-parameter |
 *     erroneous-parameter
 * }
 * ```
 * 
 * @constant
 * @type {ERROR[]}
 * 
 */
export
const ErrorHI1Notifications: (ERROR)[] = [ other_failure_causes, missing_parameter, unknown_parameter, erroneous_parameter, ];

/* eslint-enable */
