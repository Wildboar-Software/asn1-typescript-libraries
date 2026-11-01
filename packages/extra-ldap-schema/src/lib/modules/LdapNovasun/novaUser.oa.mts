/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_novaUser } from "../LdapNovasun/id-oc-novaUser.va.mjs";
import { accessKey } from "../LdapNovasun/accessKey.oa.mjs";
import { secretKey } from "../LdapNovasun/secretKey.oa.mjs";
import { isNovaAdmin } from "../LdapNovasun/isNovaAdmin.oa.mjs";
// export { id_oc_novaUser } from "../LdapNovasun/id-oc-novaUser.va.mjs";


/**
 * @summary novaUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * novaUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { accessKey
 *                               | secretKey
 *                               | isNovaAdmin }
 *   LDAP-NAME                 {"novaUser"}
 *   LDAP-DESC                 "access and secret keys"
 *   ID                        id-oc-novaUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const novaUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ accessKey, secretKey, isNovaAdmin, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "novaUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "access and secret keys" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_novaUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
