/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_udHost } from "../LdapUd/id-oc-udHost.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { policyClass } from "../LdapUd/policyClass.oa.mjs";
import { policyClassDisabled } from "../LdapUd/policyClassDisabled.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { unixGroup } from "../LdapUd/unixGroup.oa.mjs";
import { udGroup } from "../LdapUd/udGroup.oa.mjs";
import { udMemberSerial } from "../LdapUd/udMemberSerial.oa.mjs";
import { fQDN } from "../LdapUd/fQDN.oa.mjs";
import { uSID } from "../LdapUd/uSID.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { udSerial } from "../LdapUd/udSerial.oa.mjs";
import { lastSeen } from "../LdapUd/lastSeen.oa.mjs";
/**
 * @summary udHost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * udHost OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | udSerial
 *                               | lastSeen }
 *   MAY CONTAIN               { description
 *                               | organizationalUnitName
 *                               | policyClass
 *                               | policyClassDisabled
 *                               | uid
 *                               | uidNumber
 *                               | gidNumber
 *                               | unixGroup
 *                               | udGroup
 *                               | udMemberSerial
 *                               | fQDN
 *                               | uSID }
 *   LDAP-NAME                 {"udHost"}
 *   LDAP-DESC                 "host object container"
 *   ID                        id-oc-udHost }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const udHost: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, udSerial, lastSeen, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, organizationalUnitName, policyClass, policyClassDisabled, uid, uidNumber, gidNumber, unixGroup, udGroup, udMemberSerial, fQDN, uSID, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "udHost" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "host object container" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_udHost /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
