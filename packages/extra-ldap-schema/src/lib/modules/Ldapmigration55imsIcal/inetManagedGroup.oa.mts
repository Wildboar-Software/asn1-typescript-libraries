/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_inetManagedGroup } from "../Ldapmigration55imsIcal/id-oc-inetManagedGroup.va.mjs";


/**
 * @summary inetManagedGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetManagedGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { mnggrpDeletionPolicy
 *                               | mnggrpAdditionPolicy
 *                               | mnggrpBillableUser
 *                               | description
 *                               | mnggrpStatus
 *                               | mnggrpMaxUsers
 *                               | mnggrpCurrentUsers
 *                               | mnggrpMailQuota
 *                               | owner
 *                               | nsdaModifiableBy
 *                               | mnggrpUserClassOfServices
 *                               | mailSieveRuleSource }
 *   LDAP-NAME                 {"inetManagedGroup"}
 *   LDAP-DESC                 "auxiliary class for a managed group used by family accounts"
 *   ID                        id-oc-inetManagedGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetManagedGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
