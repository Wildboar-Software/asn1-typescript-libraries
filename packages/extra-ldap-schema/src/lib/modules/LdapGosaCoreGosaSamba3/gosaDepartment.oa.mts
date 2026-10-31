/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaDepartment } from "../LdapGosaCoreGosaSamba3/id-oc-gosaDepartment.va.mjs";
import { manager } from "../LdapSchema2ldifCosine/manager.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";

/**
 * @summary gosaDepartment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaDepartment OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { organizationalUnitName
 *                               | description }
 *   MAY CONTAIN               { manager }
 *   LDAP-NAME                 {"gosaDepartment"}
 *   LDAP-DESC                 "Class to mark Departments for GOsa (v2.7)"
 *   ID                        id-oc-gosaDepartment }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaDepartment: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationalUnitName, description] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [manager] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaDepartment"],
    "&ldapDesc": "Class to mark Departments for GOsa (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaDepartment /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
