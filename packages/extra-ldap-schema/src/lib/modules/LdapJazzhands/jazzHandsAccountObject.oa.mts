/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { jazzHandsAccountId } from "../LdapJazzhands/jazzHandsAccountId.oa.mjs";
// export { jazzHandsAccountId } from "../LdapJazzhands/jazzHandsAccountId.oa.mjs";
import { id_oc_jazzHandsAccountObject } from "../LdapJazzhands/id-oc-jazzHandsAccountObject.va.mjs";
// export { id_oc_jazzHandsAccountObject } from "../LdapJazzhands/id-oc-jazzHandsAccountObject.va.mjs";


/**
 * @summary jazzHandsAccountObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * jazzHandsAccountObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { jazzHandsAccountId }
 *   LDAP-NAME                 {"jazzHandsAccountObject"}
 *   LDAP-DESC                 "jazzHands account object class"
 *   ID                        id-oc-jazzHandsAccountObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const jazzHandsAccountObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ jazzHandsAccountId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "jazzHandsAccountObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "jazzHands account object class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_jazzHandsAccountObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
