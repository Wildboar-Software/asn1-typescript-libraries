/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_nsSlapiTask } from "../LdapCommon389/id-oc-nsSlapiTask.va.mjs";
import { ttl } from "../LdapCommon389/ttl.oa.mjs";
import { nsTaskLog } from "../LdapCommon389/nsTaskLog.oa.mjs";
import { nsTaskStatus } from "../LdapCommon389/nsTaskStatus.oa.mjs";
import { nsTaskExitCode } from "../LdapCommon389/nsTaskExitCode.oa.mjs";
import { nsTaskCurrentItem } from "../LdapCommon389/nsTaskCurrentItem.oa.mjs";
import { nsTaskTotalItems } from "../LdapCommon389/nsTaskTotalItems.oa.mjs";
import { nsTaskCreated } from "../LdapCommon389/nsTaskCreated.oa.mjs";
import { nsTaskWarning } from "../LdapCommon389/nsTaskWarning.oa.mjs";
// export { id_oc_nsSlapiTask } from "../LdapCommon389/id-oc-nsSlapiTask.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ttl, nsTaskLog, nsTaskStatus, nsTaskExitCode, nsTaskCurrentItem, nsTaskTotalItems, nsTaskCreated, nsTaskWarning, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsSlapiTask" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Slapi_Task objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsSlapiTask /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
