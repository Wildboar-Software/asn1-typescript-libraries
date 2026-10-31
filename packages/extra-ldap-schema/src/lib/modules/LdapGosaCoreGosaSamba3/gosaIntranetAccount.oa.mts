/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { gosaDefaultLanguage } from "../LdapGosaCoreGosaSamba3/gosaDefaultLanguage.oa.mjs";
// export { id_oc_gosaIntranetAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaIntranetAccount.va.mjs";


/**
 * @summary gosaIntranetAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaIntranetAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | uid }
 *   MAY CONTAIN               { gosaDefaultLanguage }
 *   LDAP-NAME                 {"gosaIntranetAccount"}
 *   LDAP-DESC                 "GOsa Inatrent enabling account (v2.7)"
 *   ID                        id-oc-gosaIntranetAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaIntranetAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
