/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { nsNumDomains } from "../Ldapmigration50nsDelegatedAdmin/nsNumDomains.oa.mjs";
// export { nsNumDomains } from "../Ldapmigration50nsDelegatedAdmin/nsNumDomains.oa.mjs";
import { id_oc_nsManagedISP } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedISP.va.mjs";
// export { id_oc_nsManagedISP } from "../Ldapmigration50nsDelegatedAdmin/id-oc-nsManagedISP.va.mjs";


/**
 * @summary nsManagedISP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsManagedISP OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsNumDomains }
 *   LDAP-NAME                 {"nsManagedISP"}
 *   LDAP-DESC                 "Delegated Admin marker for hosted root"
 *   ID                        id-oc-nsManagedISP }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsManagedISP: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsNumDomains, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsManagedISP" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Delegated Admin marker for hosted root" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsManagedISP /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
