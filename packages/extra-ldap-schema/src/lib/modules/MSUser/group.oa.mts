/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { mstop } from "../MSUser/mstop.oa.mjs";
// export { groupType } from "../MSUser/groupType.oa.mjs";
// export { id_oc_group } from "../MSUser/id-oc-group.va.mjs";


/**
 * @summary group
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * group OBJECT-CLASS ::= {
 *   SUBCLASS OF               { mstop }
 *   MUST CONTAIN              { groupType }
 *   MAY CONTAIN               { member
 *                               | nTGroupMembers
 *                               | operatorCount
 *                               | adminCount
 *                               | groupAttributes
 *                               | groupMembershipSAM
 *                               | controlAccessRights
 *                               | desktopProfile
 *                               | nonSecurityMember
 *                               | managedBy
 *                               | primaryGroupToken
 *                               | msDS-AzLDAPQuery
 *                               | msDS-NonMembers
 *                               | msDS-AzBizRule
 *                               | msDS-AzBizRuleLanguage
 *                               | msDS-AzLastImportedBizRulePath
 *                               | msDS-AzApplicationData
 *                               | msDS-AzObjectGuid
 *                               | msDS-AzGenericData
 *                               | msDS-PrimaryComputer
 *                               | mail
 *                               | msSFU30Name
 *                               | msSFU30NisDomain
 *                               | msSFU30PosixMember }
 *   LDAP-NAME                 {"group"}
 *   ID                        id-oc-group }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const group: OBJECT_CLASS = undefined;

/* eslint-enable */
