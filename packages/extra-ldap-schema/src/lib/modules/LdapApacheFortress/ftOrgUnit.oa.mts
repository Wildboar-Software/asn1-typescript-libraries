/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ftId } from "../LdapApacheFortress/ftId.oa.mjs";
import { ftParents } from "../LdapApacheFortress/ftParents.oa.mjs";
import { id_oc_ftOrgUnit } from "../LdapApacheFortress/id-oc-ftOrgUnit.va.mjs";
import { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";

/**
 * @summary ftOrgUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftOrgUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalUnit }
 *   MUST CONTAIN              { ftId }
 *   MAY CONTAIN               { ftParents }
 *   LDAP-NAME                 {"ftOrgUnit"}
 *   LDAP-DESC                 "Fortress OrgUnit Structural Object Class"
 *   ID                        id-oc-ftOrgUnit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftOrgUnit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [organizationalUnit] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ftId] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ftParents] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ftOrgUnit"],
    "&ldapDesc": "Fortress OrgUnit Structural Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftOrgUnit /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
