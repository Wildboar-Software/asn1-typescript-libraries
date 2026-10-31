/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_udHostContainer } from "../LdapUd/id-oc-udHostContainer.va.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { policyClass } from "./policyClass.oa.mjs";
import { policyClassDisabled } from "./policyClassDisabled.oa.mjs";
import { udGroup } from "./udGroup.oa.mjs";
import { udMemberContainer } from "./udMemberContainer.oa.mjs";
import { udMemberSerial } from "./udMemberSerial.oa.mjs";
import { udSerial } from "./udSerial.oa.mjs";
import { unixGroup } from "./unixGroup.oa.mjs";

/**
 * @summary udHostContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * udHostContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { udSerial
 *                               | description
 *                               | commonName
 *                               | policyClass
 *                               | policyClassDisabled
 *                               | uid
 *                               | uidNumber
 *                               | gidNumber
 *                               | unixGroup
 *                               | udGroup
 *                               | udMemberSerial
 *                               | udMemberContainer }
 *   LDAP-NAME                 {"udHostContainer"}
 *   LDAP-DESC                 "base hostgroup container"
 *   ID                        id-oc-udHostContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const udHostContainer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [udSerial, description, commonName, policyClass, policyClassDisabled, uid, uidNumber, gidNumber, unixGroup, udGroup, udMemberSerial, udMemberContainer] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["udHostContainer"],
    "&ldapDesc": "base hostgroup container" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_udHostContainer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
