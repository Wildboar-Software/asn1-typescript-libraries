/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
// export { id_oc_gosaAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaAccount.va.mjs";


/**
 * @summary gosaAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid }
 *   MAY CONTAIN               { sambaLMPassword
 *                               | sambaNTPassword
 *                               | sambaPwdLastSet
 *                               | gosaDefaultPrinter
 *                               | gosaDefaultLanguage
 *                               | academicTitle
 *                               | personalTitle
 *                               | gosaHostACL
 *                               | dateOfBirth
 *                               | sambaBadPasswordCount
 *                               | sambaBadPasswordTime
 *                               | gender
 *                               | gotoLastSystemLogin
 *                               | gotoLastSystem
 *                               | gosaLoginRestriction }
 *   LDAP-NAME                 {"gosaAccount"}
 *   LDAP-DESC                 "Class for GOsa Accounts (v2.7)"
 *   ID                        id-oc-gosaAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
