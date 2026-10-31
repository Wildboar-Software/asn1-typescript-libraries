/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { ipaEntitlementId } from "../Ldap60basev2/ipaEntitlementId.oa.mjs";
// export { id_oc_ipaEntitlement } from "../Ldap60basev2/id-oc-ipaEntitlement.va.mjs";


/**
 * @summary ipaEntitlement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaEntitlement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { ipaEntitlementId }
 *   MAY CONTAIN               { userPKCS12
 *                               | userCertificate }
 *   LDAP-NAME                 {"ipaEntitlement"}
 *   LDAP-DESC                 "IPA Entitlement object"
 *   ID                        id-oc-ipaEntitlement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaEntitlement: OBJECT_CLASS = undefined;

/* eslint-enable */
