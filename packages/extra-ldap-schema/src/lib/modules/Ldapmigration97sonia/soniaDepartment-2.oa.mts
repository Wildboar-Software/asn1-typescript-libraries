/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_soniaDepartment_2 } from "../Ldapmigration97sonia/id-oc-soniaDepartment-2.va.mjs";
import { departmentNumber } from "../InetOrgPerson/departmentNumber.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { manager } from "../LdapSchema2ldifCosine/manager.oa.mjs";
import { name } from "../SelectedAttributeTypes/name.oa.mjs";
import { secretary } from "../LdapSchema2ldifCosine/secretary.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { soniaDepartmentNumber } from "../Ldapmigration97sonia/soniaDepartmentNumber.oa.mjs";
import { soniaDepartmentToken } from "../Ldapmigration97sonia/soniaDepartmentToken.oa.mjs";
import { soniaDepartmentSAMail } from "../Ldapmigration97sonia/soniaDepartmentSAMail.oa.mjs";


/**
 * @summary soniaDepartment_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaDepartment-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { departmentNumber
 *                               | description
 *                               | manager
 *                               | name
 *                               | secretary
 *                               | seeAlso
 *                               | soniaDepartmentNumber
 *                               | soniaDepartmentToken
 *                               | soniaDepartmentSAMail }
 *   LDAP-NAME                 {"soniaDepartment"}
 *   ID                        id-oc-soniaDepartment-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaDepartment_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ departmentNumber, description, manager, name, secretary, seeAlso, soniaDepartmentNumber, soniaDepartmentToken, soniaDepartmentSAMail, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaDepartment" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaDepartment_2 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

