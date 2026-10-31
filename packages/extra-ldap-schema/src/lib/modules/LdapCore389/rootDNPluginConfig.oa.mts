/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_rootDNPluginConfig } from "../LdapCore389/id-oc-rootDNPluginConfig.va.mjs";


/**
 * @summary rootDNPluginConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rootDNPluginConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { rootdn-open-time
 *                               | rootdn-close-time
 *                               | rootdn-days-allowed
 *                               | rootdn-allow-host
 *                               | rootdn-deny-host
 *                               | rootdn-allow-ip
 *                               | rootdn-deny-ip }
 *   LDAP-NAME                 {"rootDNPluginConfig"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-rootDNPluginConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rootDNPluginConfig: OBJECT_CLASS = undefined;

/* eslint-enable */
