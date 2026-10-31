/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_pwdPBKDF2PluginConfig } from "../LdapCore389/id-oc-pwdPBKDF2PluginConfig.va.mjs";


/**
 * @summary pwdPBKDF2PluginConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pwdPBKDF2PluginConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { nsslapd-pwdPBKDF2NumIterations
 *                               | nsslapd-pwdPBKDF2AcceptMaxIterations }
 *   LDAP-NAME                 {"pwdPBKDF2PluginConfig"}
 *   LDAP-DESC                 "PBKDF2 Password Storage Plugin configuration"
 *   ID                        id-oc-pwdPBKDF2PluginConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pwdPBKDF2PluginConfig: OBJECT_CLASS = undefined;

/* eslint-enable */
