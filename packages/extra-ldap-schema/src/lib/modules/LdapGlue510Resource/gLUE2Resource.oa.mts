/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2Resource } from "../LdapGlue510Resource/id-oc-gLUE2Resource.va.mjs";
import { gLUE2ResourceID } from "../LdapGlue510Resource/gLUE2ResourceID.oa.mjs";
import { gLUE2ResourceManagerForeignKey } from "../LdapGlue510Resource/gLUE2ResourceManagerForeignKey.oa.mjs";
// export { id_oc_gLUE2Resource } from "../LdapGlue510Resource/id-oc-gLUE2Resource.va.mjs";


/**
 * @summary gLUE2Resource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Resource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ResourceID
 *                               | gLUE2ResourceManagerForeignKey }
 *   LDAP-NAME                 {"GLUE2Resource"}
 *   LDAP-DESC                 "A resource"
 *   ID                        id-oc-gLUE2Resource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Resource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ResourceID, gLUE2ResourceManagerForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2Resource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A resource" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Resource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
