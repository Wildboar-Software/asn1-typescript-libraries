/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { proxyHost } from "../LdapIspenv/proxyHost.oa.mjs";
// export { proxyHost } from "../LdapIspenv/proxyHost.oa.mjs";
import { id_oc_proxyAccount } from "../LdapIspenv/id-oc-proxyAccount.va.mjs";
import { webAccess } from "../LdapIspenv/webAccess.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
// export { id_oc_proxyAccount } from "../LdapIspenv/id-oc-proxyAccount.va.mjs";


/**
 * @summary proxyAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * proxyAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { webAccess
 *                               | uid
 *                               | userPassword }
 *   MAY CONTAIN               { proxyHost }
 *   LDAP-NAME                 {"proxyAccount"}
 *   LDAP-DESC                 "Account for accessing the proxy server"
 *   ID                        id-oc-proxyAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const proxyAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ webAccess, uid, userPassword, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ proxyHost, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "proxyAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Account for accessing the proxy server" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_proxyAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
