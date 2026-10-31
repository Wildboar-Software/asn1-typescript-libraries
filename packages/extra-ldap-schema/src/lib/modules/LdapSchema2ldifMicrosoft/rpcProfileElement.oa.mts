/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { rpcEntry } from "../LdapSchema2ldifMicrosoft/rpcEntry.oa.mjs";
// export { id_oc_rpcProfileElement } from "../LdapSchema2ldifMicrosoft/id-oc-rpcProfileElement.va.mjs";


/**
 * @summary rpcProfileElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rpcProfileElement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { rpcEntry }
 *   MUST CONTAIN              { rpcNsInterfaceID
 *                               | rpcNsPriority }
 *   MAY CONTAIN               { rpcNsProfileEntry
 *                               | rpcNsAnnotation }
 *   LDAP-NAME                 {"rpcProfileElement"}
 *   ID                        id-oc-rpcProfileElement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rpcProfileElement: OBJECT_CLASS = undefined;

/* eslint-enable */
