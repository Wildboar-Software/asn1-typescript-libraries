/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_dnaPluginConfig } from "../LdapDnaPlugin/id-oc-dnaPluginConfig.va.mjs";


/**
 * @summary dnaPluginConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnaPluginConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { dnaType
 *                               | dnaPrefix
 *                               | dnaNextValue
 *                               | dnaMaxValue
 *                               | dnaInterval
 *                               | dnaMagicRegen
 *                               | dnaFilter
 *                               | dnaScope
 *                               | dnaExcludeScope
 *                               | dnaSharedCfgDN
 *                               | dnaThreshold
 *                               | dnaNextRange
 *                               | dnaRangeRequestTimeout
 *                               | dnaRemoteBindDN
 *                               | dnaRemoteBindCred
 *                               | commonName }
 *   LDAP-NAME                 {"dnaPluginConfig"}
 *   LDAP-DESC                 "DNA plugin configuration"
 *   ID                        id-oc-dnaPluginConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dnaPluginConfig: OBJECT_CLASS = undefined;

/* eslint-enable */
