/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { rpcEntry } from "../LdapSchema2ldifMicrosoft/rpcEntry.oa.mjs";
// export { id_oc_rpcServer } from "../LdapSchema2ldifMicrosoft/id-oc-rpcServer.va.mjs";


/**
 * @summary rpcServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rpcServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { rpcEntry }
 *   MAY CONTAIN               { rpcNsObjectID
 *                               | rpcNsCodeset
 *                               | rpcNsEntryFlags }
 *   LDAP-NAME                 {"rpcServer"}
 *   ID                        id-oc-rpcServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rpcServer: OBJECT_CLASS = undefined;

/* eslint-enable */
