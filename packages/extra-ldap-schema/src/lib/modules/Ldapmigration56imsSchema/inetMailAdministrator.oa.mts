/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { mailAdminRole } from "../Ldapmigration56imsSchema/mailAdminRole.oa.mjs";
// export { mailAdminRole } from "../Ldapmigration56imsSchema/mailAdminRole.oa.mjs";
import { id_oc_inetMailAdministrator } from "../Ldapmigration56imsSchema/id-oc-inetMailAdministrator.va.mjs";
// export { id_oc_inetMailAdministrator } from "../Ldapmigration56imsSchema/id-oc-inetMailAdministrator.va.mjs";


/**
 * @summary inetMailAdministrator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetMailAdministrator OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mailAdminRole }
 *   LDAP-NAME                 {"inetMailAdministrator"}
 *   LDAP-DESC                 "auxiliary class for defining messaging server administrators"
 *   ID                        id-oc-inetMailAdministrator }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetMailAdministrator: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailAdminRole, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetMailAdministrator" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for defining messaging server administrators" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailAdministrator /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
