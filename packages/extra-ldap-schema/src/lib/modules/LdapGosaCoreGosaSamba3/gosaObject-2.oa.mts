/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { gosaSubtreeACL } from "../LdapGosaCoreGosaSamba3/gosaSubtreeACL.oa.mjs";
// export { gosaSubtreeACL } from "../LdapGosaCoreGosaSamba3/gosaSubtreeACL.oa.mjs";
import { id_oc_gosaObject_2 } from "../LdapGosaCoreGosaSamba3/id-oc-gosaObject-2.va.mjs";
// export { id_oc_gosaObject_2 } from "../LdapGosaCoreGosaSamba3/id-oc-gosaObject-2.va.mjs";


/**
 * @summary gosaObject_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaObject-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { gosaSubtreeACL }
 *   LDAP-NAME                 {"gosaObject"}
 *   LDAP-DESC                 "Class for GOsa settings (v2.7)"
 *   ID                        id-oc-gosaObject-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaObject_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gosaSubtreeACL, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Class for GOsa settings (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaObject_2 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
