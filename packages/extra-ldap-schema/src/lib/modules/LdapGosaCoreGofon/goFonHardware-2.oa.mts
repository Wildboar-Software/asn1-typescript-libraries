/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_goFonHardware_2 } from "../LdapGosaCoreGofon/id-oc-goFonHardware-2.va.mjs";


/**
 * @summary goFonHardware_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonHardware-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | macAddress
 *                               | ipHostNumber }
 *   MAY CONTAIN               { description
 *                               | goFonType
 *                               | goFonDmtfMode
 *                               | goFonHost
 *                               | goFonDefaultIP
 *                               | goFonQualify
 *                               | goFonAuth
 *                               | goFonSecret
 *                               | goFonInkeys
 *                               | goFonOutkey
 *                               | goFonTrunk
 *                               | goFonAccountCode
 *                               | goFonMSN
 *                               | goFonPermit
 *                               | goFonDeny }
 *   LDAP-NAME                 {"goFonHardware"}
 *   LDAP-DESC                 "defines a telephone (v2.7)"
 *   ID                        id-oc-goFonHardware-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonHardware_2: OBJECT_CLASS = undefined;

/* eslint-enable */
