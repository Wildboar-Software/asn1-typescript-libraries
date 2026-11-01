/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_oc_vmwPerson } from "../LdapVmwperson/id-oc-vmwPerson.va.mjs";
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
import { person } from "../SelectedObjectClasses/person.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { jiveID } from "../LdapVmwperson/jiveID.oa.mjs";
import { userStatus } from "../LdapVmwperson/userStatus.oa.mjs";
import { userType } from "../LdapVmwperson/userType.oa.mjs";
import { createdBy } from "../LdapVmwperson/createdBy.oa.mjs";
import { modifiedBy } from "../LdapVmwperson/modifiedBy.oa.mjs";
import { customernumber } from "../LdapVmwperson/customernumber.oa.mjs";
import { vmwEnrollmentFlag } from "../LdapVmwperson/vmwEnrollmentFlag.oa.mjs";


/**
 * @summary vmwPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vmwPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson
 *                               | organizationalPerson
 *                               | person
 *                               | top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { jiveID
 *                               | userStatus
 *                               | userType
 *                               | createdBy
 *                               | modifiedBy
 *                               | customernumber
 *                               | vmwEnrollmentFlag }
 *   LDAP-NAME                 {"vmwPerson"}
 *   LDAP-DESC                 "VMware defined objectclass"
 *   ID                        id-oc-vmwPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const vmwPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ inetOrgPerson, organizationalPerson, person, top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ jiveID, userStatus, userType, createdBy, modifiedBy, customernumber, vmwEnrollmentFlag, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "vmwPerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "VMware defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_vmwPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

