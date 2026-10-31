/* eslint-disable */
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_vmwPerson } from "../LdapVmwperson/id-oc-vmwPerson.va.mjs";
import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
import { person } from "../SelectedObjectClasses/person.oa.mjs";
import { createdBy } from "./createdBy.oa.mjs";
import { customernumber } from "./customernumber.oa.mjs";
import { jiveID } from "./jiveID.oa.mjs";
import { modifiedBy } from "./modifiedBy.oa.mjs";
import { userStatus } from "./userStatus.oa.mjs";
import { userType } from "./userType.oa.mjs";
import { vmwEnrollmentFlag } from "./vmwEnrollmentFlag.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [inetOrgPerson, organizationalPerson, person, top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [jiveID, userStatus, userType, createdBy, modifiedBy, customernumber, vmwEnrollmentFlag] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["vmwPerson"],
    "&ldapDesc": "VMware defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_vmwPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
