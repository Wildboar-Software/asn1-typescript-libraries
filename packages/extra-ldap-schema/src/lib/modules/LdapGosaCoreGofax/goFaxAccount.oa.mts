/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_goFaxAccount } from "../LdapGosaCoreGofax/id-oc-goFaxAccount.va.mjs";


/**
 * @summary goFaxAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFaxAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { goFaxDeliveryMode
 *                               | facsimileTelephoneNumber
 *                               | uid
 *                               | goFaxIsEnabled }
 *   MAY CONTAIN               { goFaxPrinter
 *                               | goFaxDivertNumber
 *                               | goFaxLanguage
 *                               | goFaxFormat
 *                               | goFaxRBlocklist
 *                               | goFaxRBlockgroups
 *                               | goFaxSBlocklist
 *                               | goFaxSBlockgroups
 *                               | mail
 *                               | facsimileAlternateTelephoneNumber }
 *   LDAP-NAME                 {"goFaxAccount"}
 *   LDAP-DESC                 "goFax Account objectclass (v1.0.4)"
 *   ID                        id-oc-goFaxAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFaxAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
