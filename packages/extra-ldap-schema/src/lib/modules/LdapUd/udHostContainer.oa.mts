/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
// export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { id_oc_udHostContainer } from "../LdapUd/id-oc-udHostContainer.va.mjs";
import { udSerial } from "../LdapUd/udSerial.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { policyClass } from "../LdapUd/policyClass.oa.mjs";
import { policyClassDisabled } from "../LdapUd/policyClassDisabled.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { unixGroup } from "../LdapUd/unixGroup.oa.mjs";
import { udGroup } from "../LdapUd/udGroup.oa.mjs";
import { udMemberSerial } from "../LdapUd/udMemberSerial.oa.mjs";
import { udMemberContainer } from "../LdapUd/udMemberContainer.oa.mjs";
// export { id_oc_udHostContainer } from "../LdapUd/id-oc-udHostContainer.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ organizationalUnitName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ udSerial, description, commonName, policyClass, policyClassDisabled, uid, uidNumber, gidNumber, unixGroup, udGroup, udMemberSerial, udMemberContainer, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "udHostContainer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "base hostgroup container" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_udHostContainer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
