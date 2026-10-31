/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_udGroup_2 } from "../LdapUd/id-oc-udGroup-2.va.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { fQDN } from "./fQDN.oa.mjs";
import { policyClass } from "./policyClass.oa.mjs";
import { policyClassDisabled } from "./policyClassDisabled.oa.mjs";
import { uSID } from "./uSID.oa.mjs";
import { udGroup } from "./udGroup.oa.mjs";
import { udMemberContainer } from "./udMemberContainer.oa.mjs";
import { udMemberSerial } from "./udMemberSerial.oa.mjs";
import { udSerial } from "./udSerial.oa.mjs";
import { unixGroup } from "./unixGroup.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [udSerial, description, organizationalUnitName, policyClass, policyClassDisabled, uid, uidNumber, gidNumber, unixGroup, udGroup, udMemberSerial, udMemberContainer, fQDN, uSID, udMemberSerial] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["udGroup"],
    "&ldapDesc": "group container for multiple purpose (users, group of group etc)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_udGroup_2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
