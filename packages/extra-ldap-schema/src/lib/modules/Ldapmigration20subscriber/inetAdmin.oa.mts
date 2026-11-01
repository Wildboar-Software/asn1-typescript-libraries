/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_inetAdmin } from "../Ldapmigration20subscriber/id-oc-inetAdmin.va.mjs";
import { aci } from "../LdapAci/aci.oa.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { adminRole } from "../Ldapmigration20subscriber/adminRole.oa.mjs";
// export { id_oc_inetAdmin } from "../Ldapmigration20subscriber/id-oc-inetAdmin.va.mjs";


/**
 * @summary inetAdmin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetAdmin OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { aci
 *                               | memberOf
 *                               | adminRole }
 *   LDAP-NAME                 {"inetAdmin"}
 *   LDAP-DESC                 "Marker for an administrative group or user"
 *   ID                        id-oc-inetAdmin }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetAdmin: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ aci, memberOf, adminRole, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetAdmin" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Marker for an administrative group or user" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetAdmin /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
