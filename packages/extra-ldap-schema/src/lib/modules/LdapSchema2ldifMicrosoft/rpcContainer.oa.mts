/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { container } from "../LdapSchema2ldifMicrosoft/container.oa.mjs";
// export { nameServiceFlags } from "../LdapSchema2ldifMicrosoft/nameServiceFlags.oa.mjs";
// export { id_oc_rpcContainer } from "../LdapSchema2ldifMicrosoft/id-oc-rpcContainer.va.mjs";


/**
 * @summary rpcContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rpcContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { container }
 *   MAY CONTAIN               { nameServiceFlags }
 *   LDAP-NAME                 {"rpcContainer"}
 *   ID                        id-oc-rpcContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rpcContainer: OBJECT_CLASS = undefined;

/* eslint-enable */
