/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_zimbraZimletEntry } from "../LdapZimbra/id-oc-zimbraZimletEntry.va.mjs";


/**
 * @summary zimbraZimletEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraZimletEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraZimletEnabled
 *                               | zimbraZimletVersion }
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraAdminExtDisableUIUndeploy
 *                               | zimbraCreateTimestamp
 *                               | zimbraZimletDescription
 *                               | zimbraZimletHandlerClass
 *                               | zimbraZimletHandlerConfig
 *                               | zimbraZimletIndexingEnabled
 *                               | zimbraZimletIsExtension
 *                               | zimbraZimletKeyword
 *                               | zimbraZimletPriority
 *                               | zimbraZimletScript
 *                               | zimbraZimletServerIndexRegex
 *                               | zimbraZimletTarget }
 *   LDAP-NAME                 {"zimbraZimletEntry"}
 *   LDAP-DESC                 "Zimlet info"
 *   ID                        id-oc-zimbraZimletEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraZimletEntry: OBJECT_CLASS = undefined;

/* eslint-enable */
