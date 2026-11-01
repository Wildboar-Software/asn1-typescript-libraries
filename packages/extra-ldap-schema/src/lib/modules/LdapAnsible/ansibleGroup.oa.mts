/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { ansibleGroupVar } from "../LdapAnsible/ansibleGroupVar.oa.mjs";
// export { ansibleGroupVar } from "../LdapAnsible/ansibleGroupVar.oa.mjs";
import { id_oc_ansibleGroup } from "../LdapAnsible/id-oc-ansibleGroup.va.mjs";
// export { id_oc_ansibleGroup } from "../LdapAnsible/id-oc-ansibleGroup.va.mjs";


/**
 * @summary ansibleGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ansibleGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ansibleGroupVar }
 *   LDAP-NAME                 {"ansibleGroup"}
 *   LDAP-DESC                 "Ansible group entry"
 *   ID                        id-oc-ansibleGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ansibleGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ansibleGroupVar, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ansibleGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Ansible group entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ansibleGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
