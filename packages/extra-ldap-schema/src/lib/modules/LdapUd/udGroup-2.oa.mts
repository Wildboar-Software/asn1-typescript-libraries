/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_udGroup_2 } from "../LdapUd/id-oc-udGroup-2.va.mjs";
import { udSerial } from "../LdapUd/udSerial.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { policyClass } from "../LdapUd/policyClass.oa.mjs";
import { policyClassDisabled } from "../LdapUd/policyClassDisabled.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { unixGroup } from "../LdapUd/unixGroup.oa.mjs";
import { udMemberSerial } from "../LdapUd/udMemberSerial.oa.mjs";
import { udMemberContainer } from "../LdapUd/udMemberContainer.oa.mjs";
import { fQDN } from "../LdapUd/fQDN.oa.mjs";
import { uSID } from "../LdapUd/uSID.oa.mjs";
import { udGroup } from "../LdapUd/udGroup.oa.mjs";


/**
 * @summary udGroup_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * udGroup-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { udSerial
 *                               | description
 *                               | organizationalUnitName
 *                               | policyClass
 *                               | policyClassDisabled
 *                               | uid
 *                               | uidNumber
 *                               | gidNumber
 *                               | unixGroup
 *                               | udGroup
 *                               | udMemberSerial
 *                               | udMemberContainer
 *                               | fQDN
 *                               | uSID
 *                               | udMemberSerial }
 *   LDAP-NAME                 {"udGroup"}
 *   LDAP-DESC                 "group container for multiple purpose (users, group of group etc)"
 *   ID                        id-oc-udGroup-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const udGroup_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ udSerial, description, organizationalUnitName, policyClass, policyClassDisabled, uid, uidNumber, gidNumber, unixGroup, udGroup, udMemberSerial, udMemberContainer, fQDN, uSID, udMemberSerial, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "udGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "group container for multiple purpose (users, group of group etc)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_udGroup_2 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

