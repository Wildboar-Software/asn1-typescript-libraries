/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { gosaWebDAVQuota } from "../LdapGosaCoreGosaSamba3/gosaWebDAVQuota.oa.mjs";
// export { id_oc_gosaWebDAVAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaWebDAVAccount.va.mjs";


/**
 * @summary gosaWebDAVAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaWebDAVAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | uid }
 *   MAY CONTAIN               { gosaWebDAVQuota }
 *   LDAP-NAME                 {"gosaWebDAVAccount"}
 *   LDAP-DESC                 "GOsa webdav enabling account (v2.7)"
 *   ID                        id-oc-gosaWebDAVAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaWebDAVAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
