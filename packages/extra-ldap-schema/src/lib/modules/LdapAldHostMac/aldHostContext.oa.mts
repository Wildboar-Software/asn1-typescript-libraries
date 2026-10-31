/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_aldHostContext } from "../LdapAldHostMac/id-oc-aldHostContext.va.mjs";


/**
 * @summary aldHostContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aldHostContext OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { x-ald-host-mac
 *                               | x-ald-host-mic-level }
 *   LDAP-NAME                 {"aldHostContext"}
 *   LDAP-DESC                 "Auxiliary class for host MAC/MIC context"
 *   ID                        id-oc-aldHostContext }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const aldHostContext: OBJECT_CLASS = undefined;

/* eslint-enable */
