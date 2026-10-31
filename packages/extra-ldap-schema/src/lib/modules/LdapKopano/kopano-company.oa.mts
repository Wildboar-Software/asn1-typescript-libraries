/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
// export { id_oc_kopano_company } from "../LdapKopano/id-oc-kopano-company.va.mjs";


/**
 * @summary kopano_company
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kopano-company OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { kopanoAccount
 *                               | kopanoHidden
 *                               | kopanoViewPrivilege
 *                               | kopanoAdminPrivilege
 *                               | kopanoSystemAdmin
 *                               | kopanoQuotaOverride
 *                               | kopanoQuotaWarn
 *                               | kopanoUserDefaultQuotaOverride
 *                               | kopanoUserDefaultQuotaWarn
 *                               | kopanoUserDefaultQuotaSoft
 *                               | kopanoUserDefaultQuotaHard
 *                               | kopanoQuotaUserWarningRecipients
 *                               | kopanoQuotaCompanyWarningRecipients
 *                               | kopanoCompanyServer }
 *   LDAP-NAME                 {"kopano-company"}
 *   LDAP-DESC                 "KOPANO: a company of Kopano"
 *   ID                        id-oc-kopano-company }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kopano_company: OBJECT_CLASS = undefined;

/* eslint-enable */
