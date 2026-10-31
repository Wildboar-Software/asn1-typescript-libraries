/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_ftRls } from "../LdapApacheFortress/id-oc-ftRls.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
import { ftCstr } from "./ftCstr.oa.mjs";
import { ftId } from "./ftId.oa.mjs";
import { ftParents } from "./ftParents.oa.mjs";
import { ftRoleName } from "./ftRoleName.oa.mjs";

/**
 * @summary ftRls
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftRls OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MUST CONTAIN              { ftId
 *                               | ftRoleName }
 *   MAY CONTAIN               { description
 *                               | ftCstr
 *                               | ftParents }
 *   LDAP-NAME                 {"ftRls"}
 *   LDAP-DESC                 "Fortress Role Structural Object Class"
 *   ID                        id-oc-ftRls }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftRls: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [organizationalRole] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ftId, ftRoleName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, ftCstr, ftParents] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ftRls"],
    "&ldapDesc": "Fortress Role Structural Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftRls /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
