/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
// export { id_oc_iplanetServicePlugin } from "../Ldapmigration50iplanetServicemgt/id-oc-iplanetServicePlugin.va.mjs";


/**
 * @summary iplanetServicePlugin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanetServicePlugin OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { iplanetPluginID
 *                               | iplanetKeyValue
 *                               | iplanetXMLKeyValue
 *                               | iplanetSMSPriority }
 *   LDAP-NAME                 {"iplanetServicePlugin"}
 *   LDAP-DESC                 "Object that stores information specific to service plugins"
 *   ID                        id-oc-iplanetServicePlugin }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanetServicePlugin: OBJECT_CLASS = undefined;

/* eslint-enable */
