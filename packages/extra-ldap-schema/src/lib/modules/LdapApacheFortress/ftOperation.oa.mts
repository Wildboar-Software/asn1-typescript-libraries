/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_ftOperation } from "../LdapApacheFortress/id-oc-ftOperation.va.mjs";
import { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
import { ftId } from "./ftId.oa.mjs";
import { ftObjId } from "./ftObjId.oa.mjs";
import { ftObjNm } from "./ftObjNm.oa.mjs";
import { ftOpNm } from "./ftOpNm.oa.mjs";
import { ftPASet } from "./ftPASet.oa.mjs";
import { ftPermName } from "./ftPermName.oa.mjs";
import { ftRoles } from "./ftRoles.oa.mjs";
import { ftType } from "./ftType.oa.mjs";
import { ftUsers } from "./ftUsers.oa.mjs";

/**
 * @summary ftOperation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftOperation OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MUST CONTAIN              { ftId
 *                               | ftPermName
 *                               | ftObjNm
 *                               | ftOpNm }
 *   MAY CONTAIN               { ftObjId
 *                               | ftRoles
 *                               | ftUsers
 *                               | ftType
 *                               | ftPASet }
 *   LDAP-NAME                 {"ftOperation"}
 *   LDAP-DESC                 "Fortress Permission Operation Structural Object Class"
 *   ID                        id-oc-ftOperation }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftOperation: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [organizationalRole] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ftId, ftPermName, ftObjNm, ftOpNm] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ftObjId, ftRoles, ftUsers, ftType, ftPASet] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ftOperation"],
    "&ldapDesc": "Fortress Permission Operation Structural Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftOperation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
