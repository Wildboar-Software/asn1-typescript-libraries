/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { gosaProxyAcctFlags } from "../LdapGosaCoreGosaSamba3/gosaProxyAcctFlags.oa.mjs";
// export { id_oc_gosaProxyAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaProxyAccount.va.mjs";


/**
 * @summary gosaProxyAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaProxyAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { gosaProxyAcctFlags }
 *   MAY CONTAIN               { gosaProxyID
 *                               | gosaProxyWorkingStart
 *                               | gosaProxyWorkingStop
 *                               | gosaProxyQuota
 *                               | gosaProxyQuotaPeriod }
 *   LDAP-NAME                 {"gosaProxyAccount"}
 *   LDAP-DESC                 "Class for GOsa Proxy settings (v2.7)"
 *   ID                        id-oc-gosaProxyAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaProxyAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
