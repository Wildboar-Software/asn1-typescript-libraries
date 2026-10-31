/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsSlapiTask } from "../LdapCommon389/id-oc-nsSlapiTask.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nsTaskCreated } from "./nsTaskCreated.oa.mjs";
import { nsTaskCurrentItem } from "./nsTaskCurrentItem.oa.mjs";
import { nsTaskExitCode } from "./nsTaskExitCode.oa.mjs";
import { nsTaskLog } from "./nsTaskLog.oa.mjs";
import { nsTaskStatus } from "./nsTaskStatus.oa.mjs";
import { nsTaskTotalItems } from "./nsTaskTotalItems.oa.mjs";
import { nsTaskWarning } from "./nsTaskWarning.oa.mjs";
import { ttl } from "./ttl.oa.mjs";

/**
 * @summary nsSlapiTask
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsSlapiTask OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { ttl
 *                               | nsTaskLog
 *                               | nsTaskStatus
 *                               | nsTaskExitCode
 *                               | nsTaskCurrentItem
 *                               | nsTaskTotalItems
 *                               | nsTaskCreated
 *                               | nsTaskWarning }
 *   LDAP-NAME                 {"nsSlapiTask"}
 *   LDAP-DESC                 "Slapi_Task objectclass"
 *   ID                        id-oc-nsSlapiTask }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsSlapiTask: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ttl, nsTaskLog, nsTaskStatus, nsTaskExitCode, nsTaskCurrentItem, nsTaskTotalItems, nsTaskCreated, nsTaskWarning] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsSlapiTask"],
    "&ldapDesc": "Slapi_Task objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsSlapiTask /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
