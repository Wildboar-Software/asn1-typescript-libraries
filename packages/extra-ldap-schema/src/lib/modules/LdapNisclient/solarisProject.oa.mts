/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_solarisProject } from "../LdapNisclient/id-oc-solarisProject.va.mjs";
import { solarisProjectID } from "../LdapNisclient/solarisProjectID.oa.mjs";
import { solarisProjectName } from "../LdapNisclient/solarisProjectName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { memberGid } from "../LdapNisclient/memberGid.oa.mjs";
import { memberUid } from "../NIS/memberUid.oa.mjs";
import { solarisProjectAttr } from "../LdapNisclient/solarisProjectAttr.oa.mjs";


/**
 * @summary solarisProject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * solarisProject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { solarisProjectID
 *                               | solarisProjectName }
 *   MAY CONTAIN               { description
 *                               | memberGid
 *                               | memberUid
 *                               | solarisProjectAttr }
 *   LDAP-NAME                 {"SolarisProject"}
 *   ID                        id-oc-solarisProject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const solarisProject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ solarisProjectID, solarisProjectName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, memberGid, memberUid, solarisProjectAttr, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "SolarisProject" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_solarisProject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

