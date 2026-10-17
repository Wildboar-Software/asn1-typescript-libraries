/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
import { other_failure_causes } from "../TETRA-HI1NotificationOperations/other-failure-causes.oa.mjs";
// export { other_failure_causes } from "../TETRA-HI1NotificationOperations/other-failure-causes.oa.mjs";
import { missing_parameter } from "../TETRA-HI1NotificationOperations/missing-parameter.oa.mjs";
// export { missing_parameter } from "../TETRA-HI1NotificationOperations/missing-parameter.oa.mjs";
import { unknown_parameter } from "../TETRA-HI1NotificationOperations/unknown-parameter.oa.mjs";
// export { unknown_parameter } from "../TETRA-HI1NotificationOperations/unknown-parameter.oa.mjs";
import { erroneous_parameter } from "../TETRA-HI1NotificationOperations/erroneous-parameter.oa.mjs";
// export { erroneous_parameter } from "../TETRA-HI1NotificationOperations/erroneous-parameter.oa.mjs";


/**
 * @summary ErrorHI1Notifications
 * @description
 *
 * Errors the TETRA `sending-of-HI1-Notification` may return:
 * `other-failure-causes` (local 0), `missing-parameter` (local 1),
 * `unknown-parameter` (local 2), and `erroneous-parameter` (local 3). ROSE
 * only. With FTP, `HI1-Operation` is sent directly. This document does not say
 * which condition selects which code.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.2, clause C.1.2.2.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorHI1Notifications    ERROR ::= {
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
