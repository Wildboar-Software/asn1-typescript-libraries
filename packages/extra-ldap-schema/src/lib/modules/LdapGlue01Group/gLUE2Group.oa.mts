/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { gLUE2GroupID } from "../LdapGlue01Group/gLUE2GroupID.oa.mjs";
// export { gLUE2GroupID } from "../LdapGlue01Group/gLUE2GroupID.oa.mjs";
import { id_oc_gLUE2Group } from "../LdapGlue01Group/id-oc-gLUE2Group.va.mjs";
// export { id_oc_gLUE2Group } from "../LdapGlue01Group/id-oc-gLUE2Group.va.mjs";


/**
 * @summary gLUE2Group
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Group OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gLUE2GroupID }
 *   LDAP-NAME                 {"GLUE2Group"}
 *   LDAP-DESC                 "Group object"
 *   ID                        id-oc-gLUE2Group }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Group: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2GroupID, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2Group" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Group object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Group /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
