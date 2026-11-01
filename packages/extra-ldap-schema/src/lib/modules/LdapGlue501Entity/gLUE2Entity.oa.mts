/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gLUE2Entity } from "../LdapGlue501Entity/id-oc-gLUE2Entity.va.mjs";
import { gLUE2EntityName } from "../LdapGlue501Entity/gLUE2EntityName.oa.mjs";
import { gLUE2EntityOtherInfo } from "../LdapGlue501Entity/gLUE2EntityOtherInfo.oa.mjs";
import { gLUE2EntityCreationTime } from "../LdapGlue501Entity/gLUE2EntityCreationTime.oa.mjs";
import { gLUE2EntityValidity } from "../LdapGlue501Entity/gLUE2EntityValidity.oa.mjs";
// export { id_oc_gLUE2Entity } from "../LdapGlue501Entity/id-oc-gLUE2Entity.va.mjs";


/**
 * @summary gLUE2Entity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Entity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MAY CONTAIN               { gLUE2EntityName
 *                               | gLUE2EntityOtherInfo
 *                               | gLUE2EntityCreationTime
 *                               | gLUE2EntityValidity }
 *   LDAP-NAME                 {"GLUE2Entity"}
 *   LDAP-DESC                 "Base class"
 *   ID                        id-oc-gLUE2Entity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Entity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2EntityName, gLUE2EntityOtherInfo, gLUE2EntityCreationTime, gLUE2EntityValidity, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2Entity" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Base class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Entity /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
