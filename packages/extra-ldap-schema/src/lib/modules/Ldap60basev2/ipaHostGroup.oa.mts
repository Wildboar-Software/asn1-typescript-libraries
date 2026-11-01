/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { nestedGroup } from "../Ldap60basev2/nestedGroup.oa.mjs";
// export { nestedGroup } from "../Ldap60basev2/nestedGroup.oa.mjs";
import { memberManager } from "../Ldap60basev2/memberManager.oa.mjs";
// export { memberManager } from "../Ldap60basev2/memberManager.oa.mjs";
import { id_oc_ipaHostGroup } from "../Ldap60basev2/id-oc-ipaHostGroup.va.mjs";
// export { id_oc_ipaHostGroup } from "../Ldap60basev2/id-oc-ipaHostGroup.va.mjs";


/**
 * @summary ipaHostGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaHostGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nestedGroup }
 *   MAY CONTAIN               { memberManager }
 *   LDAP-NAME                 {"ipaHostGroup"}
 *   LDAP-DESC                 "IPA host group object class"
 *   ID                        id-oc-ipaHostGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaHostGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ nestedGroup, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ memberManager, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaHostGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "IPA host group object class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaHostGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
