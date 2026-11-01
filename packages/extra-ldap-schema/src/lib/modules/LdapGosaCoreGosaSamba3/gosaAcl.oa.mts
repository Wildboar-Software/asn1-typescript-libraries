/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { gosaAclEntry } from "../LdapGosaCoreGosaSamba3/gosaAclEntry.oa.mjs";
// export { gosaAclEntry } from "../LdapGosaCoreGosaSamba3/gosaAclEntry.oa.mjs";
import { id_oc_gosaAcl } from "../LdapGosaCoreGosaSamba3/id-oc-gosaAcl.va.mjs";
// export { id_oc_gosaAcl } from "../LdapGosaCoreGosaSamba3/id-oc-gosaAcl.va.mjs";


/**
 * @summary gosaAcl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaAcl OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { gosaAclEntry }
 *   LDAP-NAME                 {"gosaAcl"}
 *   LDAP-DESC                 "ACL container to define single ACLs (v2.7)"
 *   ID                        id-oc-gosaAcl }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaAcl: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gosaAclEntry, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaAcl" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "ACL container to define single ACLs (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaAcl /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
