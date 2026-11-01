/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { jazzHandsAccountCollectionId } from "../LdapJazzhands/jazzHandsAccountCollectionId.oa.mjs";
// export { jazzHandsAccountCollectionId } from "../LdapJazzhands/jazzHandsAccountCollectionId.oa.mjs";
import { id_oc_jazzHandsAccountCollectionObject } from "../LdapJazzhands/id-oc-jazzHandsAccountCollectionObject.va.mjs";
// export { id_oc_jazzHandsAccountCollectionObject } from "../LdapJazzhands/id-oc-jazzHandsAccountCollectionObject.va.mjs";


/**
 * @summary jazzHandsAccountCollectionObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * jazzHandsAccountCollectionObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { jazzHandsAccountCollectionId }
 *   LDAP-NAME                 {"jazzHandsAccountCollectionObject"}
 *   LDAP-DESC                 "jazzHands account collection class"
 *   ID                        id-oc-jazzHandsAccountCollectionObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const jazzHandsAccountCollectionObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ jazzHandsAccountCollectionId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "jazzHandsAccountCollectionObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "jazzHands account collection class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_jazzHandsAccountCollectionObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
