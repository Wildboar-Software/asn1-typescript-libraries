/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_udHost } from "../LdapUd/id-oc-udHost.va.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { fQDN } from "./fQDN.oa.mjs";
import { lastSeen } from "./lastSeen.oa.mjs";
import { policyClass } from "./policyClass.oa.mjs";
import { policyClassDisabled } from "./policyClassDisabled.oa.mjs";
import { uSID } from "./uSID.oa.mjs";
import { udGroup } from "./udGroup.oa.mjs";
import { udMemberSerial } from "./udMemberSerial.oa.mjs";
import { udSerial } from "./udSerial.oa.mjs";
import { unixGroup } from "./unixGroup.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, udSerial, lastSeen] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, organizationalUnitName, policyClass, policyClassDisabled, uid, uidNumber, gidNumber, unixGroup, udGroup, udMemberSerial, fQDN, uSID] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["udHost"],
    "&ldapDesc": "host object container" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_udHost /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
