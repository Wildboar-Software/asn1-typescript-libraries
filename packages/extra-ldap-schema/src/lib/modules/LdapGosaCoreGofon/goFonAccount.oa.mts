/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_goFonAccount } from "../LdapGosaCoreGofon/id-oc-goFonAccount.va.mjs";


/**
 * @summary goFonAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { goFonDeliveryMode
 *                               | telephoneNumber
 *                               | uid }
 *   MAY CONTAIN               { goFonFormat
 *                               | goFonForwarding
 *                               | goFonHardware
 *                               | goFonPIN
 *                               | goFonVoicemailPIN
 *                               | goFonMacro
 *                               | goFonHomeServer }
 *   LDAP-NAME                 {"goFonAccount"}
 *   LDAP-DESC                 "GOFon Account objectclass (v2.7)"
 *   ID                        id-oc-goFonAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
